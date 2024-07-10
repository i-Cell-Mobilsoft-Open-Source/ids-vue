import { Meta, StoryObj } from '@storybook/vue3';
import IdsCheckbox from "./IdsCheckbox.vue";
import { Size } from '@models/size.type';
import { CheckboxVariant } from './models/IdsCheckboxVariant.type';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Checkbox',
  component: IdsCheckbox,
  argTypes: {
    size: selectControlOptions(Size),
    variant: selectControlOptions(CheckboxVariant),
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    isValid: { control: 'boolean' },
    checked: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      },
    },
  },
} satisfies Meta<typeof IdsCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Template: Story = {
  render: (args) => ({
    components: { IdsCheckbox },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">This is a test message</IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMPACT,
    variant: CheckboxVariant.DARK,
    disabled: false,
    indeterminate: false,
    isValid: true,
    checked: false,
    readonly: false,
    required: false,
  },
};

export const Almafa: Story = {
  render: (args) => ({
    components: { IdsCheckbox },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">This is a test message</IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: CheckboxVariant.SURFACE,
    disabled: false,
    indeterminate: false,
    isValid: true,
    checked: false,
    readonly: false,
    required: false,
  },
};
