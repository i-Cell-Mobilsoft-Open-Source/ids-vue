import { Meta, StoryObj } from '@storybook/vue3';
import IdsSegmentedControlToggle from '@components/segmented-control/IdsSegmentedControlToggle.vue';
import IdsSegmentedControlToggleItem from '@components/segmented-control/IdsSegmentedControlToggleItem.vue';
import IdsIcon from '@components/icon/IdsIcon.vue';
import mdiLightbulbOnOutline from '@mdi/svg/svg/lightbulb-on-outline.svg?component';

const meta = {
  title: 'Components/Segmented Control Toggle Item',
  component: IdsSegmentedControlToggleItem,
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
} satisfies Meta<typeof IdsSegmentedControlToggleItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlToggleItem v-bind="args" />
        <IdsSegmentedControlToggleItem label="Label 2" />
        <IdsSegmentedControlToggleItem label="Label 3" />
      </IdsSegmentedControlToggle>
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
    components: {IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlToggleItem v-bind="args" />
        <IdsSegmentedControlToggleItem label="Label 2" />
        <IdsSegmentedControlToggleItem label="Label 3" />
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-item-2',
    name: 'item1',
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: true,
  },
};

export const SegmentedControlItemWithIcon: Story = {
  render: (args) => ({
    components: {IdsSegmentedControlToggle, IdsSegmentedControlToggleItem, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsSegmentedControlToggle appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlToggleItem v-bind="args">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
        </IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem label="Label 2">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
        </IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem label="Label 3">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
        </IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-item-3',
    name: 'item1',
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};

export const SegmentedControlItemWithSuffix: Story = {
  render: (args) => ({
    components: {IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlToggleItem v-bind="args">
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem label="Label 2">
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem label="Label 3">
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-item-4',
    name: 'item1',
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};

export const SegmentedControlItemWithIconAndSuffix: Story = {
  render: (args) => ({
    components: {IdsSegmentedControlToggle, IdsSegmentedControlToggleItem, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsSegmentedControlToggle appearance="filled" variant="primary" size="comfortable">
        <IdsSegmentedControlToggleItem v-bind="args">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem label="Label 2">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem label="Label 3">
          <template #icon>
            <IdsIcon :icon="icon" />
          </template>
          <template #suffixContent>
            <span>$</span>
          </template>
        </IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-item-5',
    name: 'item1',
    ariaLabel: 'Label 1',
    label: 'Label 1',
    tabindex: 0,
    disabled: false,
  },
};
