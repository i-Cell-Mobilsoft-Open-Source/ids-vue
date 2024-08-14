import { Meta, StoryObj } from '@storybook/vue3';
import IdsSegmentedControl from '@components/segmented-control/IdsSegmentedControl.vue';
import IdsSegmentedControlItem from '@components/segmented-control/IdsSegmentedControlItem.vue';
import { Size } from '@models/size.type';
import { SegmentedControlVariant } from '@components/segmented-control/models/IdsSegmentedControlVariant.type';
import { SegmentedControlAppearance } from '@components/segmented-control/models/IdsSegmentedControlAppearance.type';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Segmented Control',
  component: IdsSegmentedControl,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    size: selectControlOptions(Size),
    variant: selectControlOptions(SegmentedControlVariant),
    appearance: selectControlOptions(SegmentedControlAppearance),
    multiSelect: { control: {
      type: 'boolean',
      disable: true
    } },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IdsSegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-1',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.FILLED,
    multiSelect: false,
    disabled: false,
  },
};

export const SegmentedControlMultiSelect: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-2',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.FILLED,
    multiSelect: true,
    disabled: false,
  },
};

export const SegmentedControlDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-3',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.FILLED,
    multiSelect: false,
    disabled: true,
  },
};

export const SegmentedControlOutlinedAppearance: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-4',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.OUTLINED,
    multiSelect: false,
    disabled: false,
  },
};

export const SegmentedControlOutlinedAppearanceMultiSelect: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-5',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.OUTLINED,
    multiSelect: true,
    disabled: false,
  },
};

export const SegmentedControlOutlinedAppearanceDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-6',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.OUTLINED,
    multiSelect: false,
    disabled: true,
  },
};

export const SegmentedControlLightVariant: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-7',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.FILLED,
    multiSelect: false,
    disabled: false,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};

export const SegmentedControlLightVariantOutlinedAppearance: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-8',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.OUTLINED,
    multiSelect: false,
    disabled: false,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};

export const SegmentedControlLightVariantDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-9',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.FILLED,
    multiSelect: false,
    disabled: true,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};

export const SegmentedControlLightVariantOutlinedAppearanceDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControl, IdsSegmentedControlItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControl v-bind="args">
        <IdsSegmentedControlItem value="1" label="Label 1"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="2" label="Label 2"></IdsSegmentedControlItem>
        <IdsSegmentedControlItem value="3" label="Label 3"></IdsSegmentedControlItem>
      </IdsSegmentedControl>
    `,
  }),
  args: {
    id: 'segmented-control-8',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.OUTLINED,
    multiSelect: false,
    disabled: true,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};