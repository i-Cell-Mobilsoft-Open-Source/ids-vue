import { Meta, StoryObj } from '@storybook/vue3';
import IdsSegmentedControl from '@components/segmented-control/IdsSegmentedControl.vue';
import IdsSegmentedControlItem from '@components/segmented-control/IdsSegmentedControlItem.vue';
import IdsIcon from '@components/icon/IdsIcon.vue';
import mdiLightbulbOnOutline from '@mdi/svg/svg/lightbulb-on-outline.svg?component';

const meta = {
  title: 'Components/Segmented Control Item',
  component: IdsSegmentedControlItem,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    ariaLabelledBy: { control: 'text' },
    tabindex: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IdsSegmentedControlItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlItem v-bind="args" />
        <IdsSegmentedControlItem label="Label 2" />
        <IdsSegmentedControlItem label="Label 3" />
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-item-1',
    name: 'item1',        
    value: undefined,
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};

export const SegmentedControlItemDisabled: Story = {
  render: (args) => ({
    components: {IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlItem v-bind="args" />
        <IdsSegmentedControlItem label="Label 2" />
        <IdsSegmentedControlItem label="Label 3" />
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-item-2',
    name: 'item1',        
    value: undefined,
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: true,
  },
};

export const SegmentedControlItemWithIcon: Story = {
  render: (args) => ({
    components: {IdsSegmentedControl, IdsSegmentedControlItem, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsSegmentedControl appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlItem v-bind="args">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
        </IdsSegmentedControlItem>
        <IdsSegmentedControlItem label="Label 2">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
        </IdsSegmentedControlItem>
        <IdsSegmentedControlItem label="Label 3">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
        </IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-item-3',
    name: 'item1',        
    value: undefined,
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};

export const SegmentedControlItemWithSuffix: Story = {
  render: (args) => ({
    components: {IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlItem v-bind="args">
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlItem>
        <IdsSegmentedControlItem label="Label 2">
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlItem>
        <IdsSegmentedControlItem label="Label 3">
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-item-4',
    name: 'item1',
    value: undefined,
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};

export const SegmentedControlItemWithIconAndSuffix: Story = {
  render: (args) => ({
    components: {IdsSegmentedControl, IdsSegmentedControlItem, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsSegmentedControl appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlItem v-bind="args">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlItem>
        <IdsSegmentedControlItem label="Label 2">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlItem>
        <IdsSegmentedControlItem label="Label 3">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-item-5',
    name: 'item1',    
    value: undefined,
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};
