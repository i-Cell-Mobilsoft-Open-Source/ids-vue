import IdsIconButton from '@components/icon-button/IdsIconButton.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { Size } from '@models/size.type';
import { IdsIconButtonTypeAttribute } from './models/IdsButtonTypeAttribute.type';
import { IdsIconButtonAppearance } from './models/IdsIconButtonAppearance.type';
import { AllVariants } from '@models/variants';
import mdiLightbulbOnOutline from '@mdi/svg/svg/lightbulb-on-outline.svg?component';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Icon Button',
  component: IdsIconButton,
  argTypes: {
    type: selectControlOptions(IdsIconButtonTypeAttribute),
    appearance: selectControlOptions(IdsIconButtonAppearance),
    icon: { control: false },
    disabled: { control: 'boolean'},
    variant: selectControlOptions(AllVariants),
    size: selectControlOptions(Size),
  },
} satisfies Meta<typeof IdsIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsIconButton },
    setup() {
      return { args };
    },
    template: '<IdsIconButton v-bind="args" />',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    icon: mdiLightbulbOnOutline,
    disabled: false,
    variant: 'primary',
    size: 'comfortable',
  },
};

export const OutlinedVariant: Story = {
  render: (args) => ({
    components: { IdsIconButton },
    setup() {
      return { args };
    },
    template: '<IdsIconButton v-bind="args" />',
  }),
  args: {
    type: 'button',
    appearance: 'outlined',
    icon: mdiLightbulbOnOutline,
    disabled: false,
    variant: 'primary',
    size: 'comfortable',
  },
};

export const StandardVariant: Story = {
  render: (args) => ({
    components: { IdsIconButton },
    setup() {
      return { args };
    },
    template: '<IdsIconButton v-bind="args" />',
  }),
  args: {
    type: 'button',
    appearance: 'standard',
    icon: mdiLightbulbOnOutline,
    disabled: false,
    variant: 'primary',
    size: 'comfortable',
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { IdsIconButton },
    setup() {
      return { args };
    },
    template: '<IdsIconButton v-bind="args" />',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    icon: mdiLightbulbOnOutline,
    disabled: true,
    variant: 'primary',
    size: 'comfortable',
  },
};

