import { Meta, StoryObj } from '@storybook/vue3';
import IdsSegmentedControlToggle from '@components/segmented-control/IdsSegmentedControlToggle.vue';
import IdsSegmentedControlToggleItem from '@components/segmented-control/IdsSegmentedControlToggleItem.vue';
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
  title: 'Components/Segmented Control Toggle',
  component: IdsSegmentedControlToggle,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    size: selectControlOptions(Size),
    variant: selectControlOptions(SegmentedControlVariant),
    appearance: selectControlOptions(SegmentedControlAppearance),
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IdsSegmentedControlToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-1',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.FILLED,
    disabled: false,
  },
};

export const SegmentedControlToggleDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-2',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.FILLED,
    disabled: true,
  },
};

export const SegmentedControlToggleOutlinedAppearance: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-3',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.OUTLINED,
    disabled: false,
  },
};

export const SegmentedControlToggleOutlinedAppearanceDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-4',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.SURFACE,
    appearance: SegmentedControlAppearance.OUTLINED,
    multiSelect: false,
    disabled: true,
  },
};

export const SegmentedControlToggleLightVariant: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-5',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.FILLED,
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

export const SegmentedControlToggleLightVariantOutlinedAppearance: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-6',
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

export const SegmentedControlToggleLightVariantDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-7',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.FILLED,
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

export const SegmentedControlToggleLightVariantOutlinedAppearanceDisabled: Story = {
  render: (args) => ({
    components: { IdsSegmentedControlToggle, IdsSegmentedControlToggleItem },
    setup() {
      return { args };
    },
    template: `
      <IdsSegmentedControlToggle v-bind="args">
        <IdsSegmentedControlToggleItem value="1" label="Label 1"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="2" label="Label 2"></IdsSegmentedControlToggleItem>
        <IdsSegmentedControlToggleItem value="3" label="Label 3"></IdsSegmentedControlToggleItem>
      </IdsSegmentedControlToggle>
    `,
  }),
  args: {
    id: 'segmented-control-8',
    name: 'segmented-control',
    size: Size.COMFORTABLE,
    variant: SegmentedControlVariant.LIGHT,
    appearance: SegmentedControlAppearance.OUTLINED,
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