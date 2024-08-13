import { Meta, StoryObj } from '@storybook/vue3';
import IdsCheckbox from "@components/checkbox/IdsCheckbox.vue";
import { Size } from '@models/size.type';
import { CheckboxVariant } from './models/IdsCheckboxVariant.type';
import IdsHintMessage from '@components/message/IdsHintMessage.vue';
import IdsErrorMessage from '@components/message/IdsErrorMessage.vue';

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
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
    id: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    tabindex: { control: 'text' },
    modelValue: { control: 'text' },
    modelModifiers: {
      table: {
        disable: true,
      }
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      },
    },
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          { name: 'light', value: '#FFFFFF' },
          { name: 'dark', value: '#000' },
        ],
      },
    },
  },
} satisfies Meta<typeof IdsCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
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
    variant: CheckboxVariant.SURFACE,
    disabled: false,
    indeterminate: false,
    isValid: true,
    readonly: false,
    required: false,
  },
};

export const CheckboxWithHintMessage: Story = {
  render: (args) => ({
    components: { IdsCheckbox, IdsHintMessage, IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">
        This is a test message
        <template #IdsHintMsg>
        <IdsHintMessage>
          This is a hint message!
        </IdsHintMessage>
      </template>
      <template #IdsErrorMsg>
        <IdsErrorMessage>
          This is an error message!
        </IdsErrorMessage>
      </template>
      </IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMPACT,
    variant: CheckboxVariant.SURFACE,
    disabled: false,
    indeterminate: false,
    isValid: true,
    readonly: false,
    required: false,
  },
};

export const CheckboxWithErrorMessage: Story = {
  render: (args) => ({
    components: { IdsCheckbox, IdsHintMessage, IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">
        This is a test message
        <template #IdsHintMsg>
        <IdsHintMessage>
          This is a hint message!
        </IdsHintMessage>
      </template>
      <template #IdsErrorMsg>
        <IdsErrorMessage>
          This is an error message!
        </IdsErrorMessage>
      </template>
      </IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMPACT,
    variant: CheckboxVariant.SURFACE,
    disabled: false,
    indeterminate: false,
    isValid: false,
    readonly: false,
    required: false,
  },
};

export const CheckboxLightVariant: Story = {
  render: (args) => ({
    components: { IdsCheckbox, IdsHintMessage, IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">
        This is a test message
      </IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMPACT,
    variant: CheckboxVariant.LIGHT,
    disabled: false,
    indeterminate: false,
    isValid: true,
    readonly: false,
    required: false,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};

export const CheckboxLightVariantWithHintMessage: Story = {
  render: (args) => ({
    components: { IdsCheckbox, IdsHintMessage, IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">
        This is a test message
        <template #IdsHintMsg>
          <IdsHintMessage>
            This is a hint message!
          </IdsHintMessage>
        </template>
        <template #IdsErrorMsg>
          <IdsErrorMessage>
            This is an error message!
          </IdsErrorMessage>
        </template>
      </IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMPACT,
    variant: CheckboxVariant.LIGHT,
    disabled: false,
    indeterminate: false,
    isValid: true,
    readonly: false,
    required: false,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};

export const CheckboxLightVariantWithErrorMessage: Story = {
  render: (args) => ({
    components: { IdsCheckbox, IdsHintMessage, IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsCheckbox v-bind="args">
        This is a test message
        <template #IdsHintMsg>
          <IdsHintMessage>
            This is a hint message!
          </IdsHintMessage>
        </template>
        <template #IdsErrorMsg>
          <IdsErrorMessage>
            This is an error message!
          </IdsErrorMessage>
        </template>
      </IdsCheckbox>
    `,
  }),
  args: {
    size: Size.COMPACT,
    variant: CheckboxVariant.LIGHT,
    disabled: false,
    indeterminate: false,
    isValid: false,
    readonly: false,
    required: false,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};
