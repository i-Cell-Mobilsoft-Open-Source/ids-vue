import { ref, computed, Ref } from 'vue';

export interface SelectionChange<T> {
  added: T[];
  removed: T[];
}

export function useSelectionModel<T>(
  initiallySelectedValues: T[] = [],
  multiSelect = false,
  emitChanges = true,
  compareWith?: (o1: T, o2: T) => boolean
) {
  const _selection = ref(new Set<T>()) as Ref<Set<T>>;
  const _deselectedToEmit = ref<T[]>([]) as Ref<T[]>;
  const _selectedToEmit = ref<T[]>([])  as Ref<T[]>;
  const _selected = ref<T[] | null>(null) as Ref<T[] | null>;
  const changed = ref<SelectionChange<T> | null>(null) as Ref<SelectionChange<T> | null>;

  const selected = computed(() => {
    if (!_selected.value) {
      _selected.value = Array.from(_selection.value.values());
    }
    return _selected.value;
  });

  function _getConcreteValue(inputValue: T): T {
    if (!compareWith) return inputValue;
    for (const selectedValue of _selection.value) {
      if (compareWith(inputValue, selectedValue)) {
        return selectedValue;
      }
    }
    return inputValue;
  }

  function _markSelected(value: T) {
    const concreteValue = _getConcreteValue(value);
    if (!isSelected(concreteValue)) {
      if (!multiSelect) _unmarkAll();
      _selection.value.add(concreteValue);
      if (emitChanges) _selectedToEmit.value.push(concreteValue);
    }
  }

  function _unmarkSelected(value: T) {
    const concreteValue = _getConcreteValue(value);
    if (isSelected(concreteValue)) {
      _selection.value.delete(concreteValue);
      if (emitChanges) _deselectedToEmit.value.push(concreteValue);
    }
  }

  function _unmarkAll() {
    _selection.value.forEach(value => _unmarkSelected(value));
  }

  function _emitChangeEvent() {
    _selected.value = null;
    if (_selectedToEmit.value.length || _deselectedToEmit.value.length) {
      changed.value = {
        added: _selectedToEmit.value,
        removed: _deselectedToEmit.value,
      };
      _selectedToEmit.value = [];
      _deselectedToEmit.value = [];
    }
  }

  function select(...values: T[]): boolean {
    values.forEach(value => _markSelected(value));
    const hasChanges = _selectedToEmit.value.length > 0;
    _emitChangeEvent();
    return hasChanges;
  }

  function deselect(...values: T[]): boolean {
    values.forEach(value => _unmarkSelected(value));
    const hasChanges = _deselectedToEmit.value.length > 0;
    _emitChangeEvent();
    return hasChanges;
  }

  function setSelection(...values: T[]): boolean {
    const newSelectedSet = new Set(values.map(_getConcreteValue));
    _selection.value.forEach(value => {
      if (!newSelectedSet.has(_getConcreteValue(value))) {
        _unmarkSelected(value);
      }
    });
    newSelectedSet.forEach(value => _markSelected(value));
    const hasChanges = _selectedToEmit.value.length > 0 || _deselectedToEmit.value.length > 0;
    _emitChangeEvent();
    return hasChanges;
  }

  function toggle(value: T): boolean {
    return isSelected(value) ? deselect(value) : select(value);
  }

  function clear(flushEvent = true): boolean {
    _unmarkAll();
    const hasChanges = _deselectedToEmit.value.length > 0;
    if (flushEvent) _emitChangeEvent();
    return hasChanges;
  }

  function isSelected(value: T): boolean {
    return _selection.value.has(_getConcreteValue(value));
  }

  function isEmpty(): boolean {
    return _selection.value.size === 0;
  }

  function hasValue(): boolean {
    return !isEmpty();
  }

  function sort(predicate?: (a: T, b: T) => number): void {
    if (multiSelect && selected.value) {
      _selected.value!.sort(predicate);
    }
  }

  function isMultipleSelection(): boolean {
    return multiSelect;
  }

  // Initialize with initially selected values if provided
  if (initiallySelectedValues.length > 0) {
    if (multiSelect) {
      initiallySelectedValues.forEach(value => _markSelected(value));
    } else {
      _markSelected(initiallySelectedValues[0]);
    }
    _selectedToEmit.value = [];
  }

  return {
    selected,
    changed,
    select,
    deselect,
    setSelection,
    toggle,
    clear,
    isSelected,
    isEmpty,
    hasValue,
    sort,
    isMultipleSelection,
  };
}
