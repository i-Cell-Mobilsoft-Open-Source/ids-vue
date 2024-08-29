import IdsTag from '@components/tag/IdsTag.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { Size } from '@models/size.type';
import { IdsTagAppearance } from './models/IdsTagAppearance.type';
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
  title: 'Components/Tag',
  component: IdsTag,
  argTypes: {
    appearance: selectControlOptions(IdsTagAppearance),
    size: selectControlOptions(Size),
    variant: selectControlOptions(AllVariants),
    leadingIcon: { control: 'text' },
    trailingIcon: { control: 'text' },
    interactive: { control: 'boolean'},
    link: { control: 'text'},
  },
} satisfies Meta<typeof IdsTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsTag },
    setup() {
      return { args };
    },
    template: '<IdsTag v-bind="args">Default Tag</IdsTag>',
  }),
  args: {
    appearance: 'filled',
    size: 'comfortable',
    variant: 'primary',
    leadingIcon: undefined,
    trailingIcon: undefined,
    interactive: false,
    link: undefined,
  },
};

export const OutlinedTag: Story = {
  render: (args) => ({
    components: { IdsTag },
    setup() {
      return { args };
    },
    template: '<IdsTag v-bind="args">Outlined Tag</IdsTag>',
  }),
  args: {
    appearance: 'outlined',
    size: 'comfortable',
    variant: 'primary',
    leadingIcon: undefined,
    trailingIcon: undefined,
    interactive: false,
    link: undefined,
  },
};

export const InteractiveTag: Story = {
  render: (args) => ({
    components: { IdsTag },
    setup() {
      return { args };
    },
    template: '<IdsTag v-bind="args">Interactive Tag</IdsTag>',
  }),
  args: {
    appearance: 'filled',
    size: 'comfortable',
    variant: 'primary',
    leadingIcon: undefined,
    trailingIcon: undefined,
    interactive: true,
    link: '#',
  },
};

export const TagWithLeadingIcon: Story = {
  render: (args) => ({
    components: { IdsTag },
    setup() {
      return { args };
    },
    template: '<IdsTag v-bind="args">Tag with Leading Icon</IdsTag>',
  }),
  args: {
    appearance: 'filled',
    size: 'comfortable',
    variant: 'primary',
    leadingIcon: mdiLightbulbOnOutline,
    trailingIcon: undefined,
    interactive: false,
    link: undefined,
  },
};

export const TagWithTrailingIcon: Story = {
  render: (args) => ({
    components: { IdsTag },
    setup() {
      return { args };
    },
    template: '<IdsTag v-bind="args">Tag with Trailing Icon</IdsTag>',
  }),
  args: {
    appearance: 'filled',
    size: 'comfortable',
    variant: 'primary',
    leadingIcon: undefined,
    trailingIcon: mdiLightbulbOnOutline,
    interactive: false,
    link: undefined,
  },
};

export const TagWithLeadingAndTrailingIcon: Story = {
  render: (args) => ({
    components: { IdsTag },
    setup() {
      return { args };
    },
    template: '<IdsTag v-bind="args">Tag with Trailing Icon</IdsTag>',
  }),
  args: {
    appearance: 'filled',
    size: 'comfortable',
    variant: 'primary',
    leadingIcon: mdiLightbulbOnOutline,
    trailingIcon: mdiLightbulbOnOutline,
    interactive: false,
    link: undefined,
  },
};
