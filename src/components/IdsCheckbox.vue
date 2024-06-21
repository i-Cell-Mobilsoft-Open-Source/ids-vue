<script setup lang="ts">
import { CheckboxConfig } from '@models/interfaces';
import { Size } from '@models/size.type';
import { ErrorVariant } from '@models/variants';
import { computed, reactive } from 'vue';
		const componentClass = 'ids-checkbox';

    const props = withDefaults(
  		defineProps<CheckboxConfig>(),
  	{
			variant: ErrorVariant.SURFACE,
			size: Size.COMPACT,
			disabled: false,
			indeterminate: false,
			invalid: false,
			id: '',
  	});

		const state = reactive({
			classList: [
				componentClass,
				addClassPrefix(props.size),
				addClassPrefix(props.variant),
			],
		})

		const isDisabled = computed(() => {
			return props.disabled ? addClassPrefix('disabled') : null;
		});

		const isValid = computed(() => {
			return props.invalid ? addClassPrefix('invalid') : null;
		});

		const isIndeterminate = computed(() => {
			return props.indeterminate ? addClassPrefix('indeterminate') : null;
		});

		function addClassPrefix(className: string | null): string | null {
    	return className ? `${componentClass}-${className}` : null;
  	}
</script>
<template>
  <div :class="[state.classList, isDisabled, isValid, isIndeterminate]">
    <input :id="props.id" type="checkbox" :disabled="props.disabled" :indeterminate="props.indeterminate">
    <div class="ids-checkbox-label-wrapper">
      <div class="ids-checkbox-label-container">
        <label :for="props.id" class="ids-checkbox-label">Az Általános Szerződési Feltételeket a mai nappal tudomásul vettem és elfogadom</label>
        <span class="ids-checkbox-asterisk">*</span>
      </div>
      <span class="ids-checkbox-hint">Checkbox: {{ props.variant }} - {{ props.size }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$sizes: compact, comfortable, spacious, dense;
$variants: light, dark, surface;

@mixin commonMessageTypography($size) {
	font-family: var(--ids-comp-size-checkbox-message-typography-font-family-#{$size});
	font-style: normal;
	font-weight: var(--ids-comp-size-checkbox-message-typography-font-weight-#{$size});
	letter-spacing: var(--ids-comp-size-checkbox-message-typography-letter-spacing-#{$size});
}


@mixin checkmark-color($color) {
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#{$color}" stroke-linecap="square" stroke-linejoin="square" stroke-width="1" d="M3,8 l3,3 l7-7"/></svg>');
}

@mixin indeterminate-marker-color($color) {
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#{$color}" stroke-linecap="square" stroke-linejoin="square" stroke-width="1" d="M4,8 h8"/></svg>');
}

.ids-checkbox {
	display: inline-flex;
	align-self: stretch;
	align-items: flex-start;

  	@each $size in $sizes  {
		&.ids-checkbox-#{$size} {
			padding: var(--ids-comp-size-checkbox-container-size-padding-y-#{$size}, 0px) var( --ids-comp-size-checkbox-container-size-padding-x-#{$size});
			gap: var(--ids-comp-size-checkbox-container-size-gap-#{$size}, 8px);

			input[type="checkbox"] {
				appearance: none;
				-webkit-appearance: none;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;
				width: var(--ids-comp-size-checkbox-input-size-width-#{$size});
    			height: var(--ids-comp-size-checkbox-input-size-height-#{$size});
				border-radius: var(--ids-comp-size-checkbox-input-size-border-radius-#{$size});
				border-width: var(--ids-comp-size-checkbox-input-size-border-width-#{$size});
				border-style: solid;
			}

			input[type="checkbox"]:focus {
				outline-offset: 3px;
				outline-style: solid;
				outline-width: var(--ids-comp-size-checkbox-focused-outline-outline-#{size});
			}

			.ids-checkbox-label-wrapper {
				display: flex;
				padding: var(--ids-comp-size-checkbox-label-group-size-padding-y-#{$size}) var(--ids-comp-size-checkbox-label-group-size-padding-x-#{$size});
				flex-direction: column;
				align-items: flex-start;
				gap: var(--ids-comp-size-checkbox-label-group-size-gap-#{$size});
				flex: 1 0 0;
				
				.ids-checkbox-label-container {
					@include commonMessageTypography($size);
					display: flex;
					font-size: var(--ids-comp-size-checkbox-label-typography-font-size-#{$size});
					line-height: var(--ids-comp-size-checkbox-label-typography-line-height-#{$size});
					

					.ids-checkbox-label {
						display: flex;
						align-items: flex-start;
						text-align: start;
					}

					.ids-checkbox-asterisk {
						color: var(--ids-comp-checkbox-asterisk-color-fg-enabled);
						flex-shrink: 0;
					}
				}

				.ids-checkbox-hint, .ids-checkbox-error-msg {
						@include commonMessageTypography($size);
						font-size: var(--ids-comp-size-checkbox-message-typography-font-size-#{$size});
						line-height: var(--ids-comp-size-checkbox-message-typography-line-height-#{$size});
				}
			}
    	}
	}

	@each $variant in $variants {
		&.ids-checkbox-#{$variant} {
			input[type="checkbox"] {
				border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-enabled);
				background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-enabled);

				&:hover {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-hovered);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-hovered);
				}

				&:active {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-pressed);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-pressed);
				}

				&:focus {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-focused);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-focused);
				}

				&:disabled {
					border-color: var(--ids-comp-checkbox-input-unselected-color-border-#{$variant}-disabled);
					background-color: var(--ids-comp-checkbox-input-unselected-color-bg-#{$variant}-disabled);
				}
			}

			input[type="checkbox"]:checked, input[type="checkbox"]:indeterminate {
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-enabled);
				background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-enabled);

				&:hover {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-hovered);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-hovered);
				}

				&:active {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-pressed);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-pressed);
				}

				&:focus {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-focused);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-focused);
				}

				&:disabled {
					border-color: var(--ids-comp-checkbox-input-selected-color-border-#{$variant}-disabled);
					background-color: var(--ids-comp-checkbox-input-selected-color-bg-#{$variant}-disabled);
				}
			}

			.ids-checkbox-label {
				color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-enabled);

				&:hover {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-hovered);
				}

				&:active {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-pressed);
				}

				&:focus {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-focused);
				}

				&:disabled {
					color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-disabled);
				}
			}

			.ids-checkbox-hint {
				color: var(--ids-comp-checkbox-message-color-fg-#{$variant}-enabled);
			}

			.ids-checkbox-error-msg {
				color: var(--ids-comp-checkbox-message-color-fg-text-error-enabled);
			}

			&.ids-checkbox-disabled .ids-checkbox-label {
				color: var(--ids-comp-checkbox-label-color-fg-#{$variant}-disabled);
			}

			input[type="checkbox"]:checked {
				@include checkmark-color(white);
			}

			input[type="checkbox"]:indeterminate {
				@include indeterminate-marker-color(white);
			}

		}
	}

	&.ids-checkbox-error {

	}

	&.ids-checkbox-disabled {
		opacity: var(--ids-comp-checkbox-disabled);
	}
}
</style> 