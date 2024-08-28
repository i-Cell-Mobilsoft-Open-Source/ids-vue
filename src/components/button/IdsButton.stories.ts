import IdsButton from '@components/button/IdsButton.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { Size } from '@models/size.type';
import { IdsButtonTypeAttribute } from './models/IdsButtonTypeAttribute.type';
import { IdsButtonAppearance } from './models/IdsButtonAppearance.type';
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
  title: 'Components/Button',
  component: IdsButton,
  argTypes: {
    type: selectControlOptions(IdsButtonTypeAttribute),
    appearance: selectControlOptions(IdsButtonAppearance),
    variant: selectControlOptions(AllVariants),
    disabled: { control: 'boolean' },
    size: selectControlOptions(Size),
    leadingIcon: { control: 'text'},
    trailingIcon: { control: 'text' },
  },
} satisfies Meta<typeof IdsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Default Button</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    variant: 'primary',
    disabled: false,
    size: 'comfortable',
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
};

export const OutlinedButton: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Outlined Button</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'outlined',
    variant: 'primary',
    disabled: false,
    size: 'comfortable',
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
};

export const TextButton: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Text Button</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'text',
    variant: 'primary',
    disabled: false,
    size: 'comfortable',
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
};

export const DisabledButton: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Disabled Button</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    variant: 'primary',
    disabled: true,
    size: 'comfortable',
    leadingIcon: undefined,
    trailingIcon: undefined,
  },
};

export const ButtonWithLeadingIcon: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Leading Icon</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    variant: 'primary',
    disabled: false,
    size: 'comfortable',
    leadingIcon: mdiLightbulbOnOutline,
    trailingIcon: undefined,
  },
};

export const ButtonWithTrailingIcon: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Trailing Icon</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    variant: 'primary',
    disabled: false,
    size: 'comfortable',
    leadingIcon: undefined,
    trailingIcon: mdiLightbulbOnOutline,
  },
};

export const ButtonWithLeadingAndTrailingIcon: Story = {
  render: (args) => ({
    components: { IdsButton },
    setup() {
      return { args };
    },
    template: '<IdsButton v-bind="args">Trailing Icon</IdsButton>',
  }),
  args: {
    type: 'button',
    appearance: 'filled',
    variant: 'primary',
    disabled: false,
    size: 'comfortable',
    leadingIcon: mdiLightbulbOnOutline,
    trailingIcon: mdiLightbulbOnOutline,
  },
};
