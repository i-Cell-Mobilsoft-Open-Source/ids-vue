import IdsRadioGroup from '@components/radio/IdsRadioGroup.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { Size } from '@models/size.type';
import { RadioVariant } from '@components/radio/models/IdsRadioVariant.type';
import { Orientation } from '@models/orientation.type';
import { Position } from '@models/position.type';
import IdsRadioItem from '@components/radio/IdsRadioItem.vue';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Radio Group',
  component: IdsRadioGroup,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    required: { control: 'boolean' },
    size: selectControlOptions(Size),
    variant: selectControlOptions(RadioVariant),
    orientation: selectControlOptions(Orientation),
    labelPosition: selectControlOptions(Position),
    isValid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IdsRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
      <IdsRadioGroup v-model="first" v-bind="args">
        <IdsRadioItem value="first">
          First
        </IdsRadioItem>
        <IdsRadioItem value="second">
          Second
        </IdsRadioItem>
        <IdsRadioItem value="third">
          Third
        </IdsRadioItem>
      </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-group-1',
    name: 'example-radio-group',
    required: false,
    size: 'comfortable',
    variant: 'surface',
    orientation: 'vertical',
    labelPosition: 'right',
    isValid: true,
    disabled: false,
  },
};

export const RadioGroupHorizontal: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
      <IdsRadioGroup v-model="first" v-bind="args">
        <IdsRadioItem value="first">
          First
        </IdsRadioItem>
        <IdsRadioItem value="second">
          Second
        </IdsRadioItem>
        <IdsRadioItem value="third">
          Third
        </IdsRadioItem>
      </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-group-2',
    name: 'example-radio-group',
    required: false,
    size: 'comfortable',
    variant: 'surface',
    orientation: 'horizontal',
    labelPosition: 'right',
    isValid: true,
    disabled: false,
  },
};

export const RadioGroupDisabled: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
      <IdsRadioGroup v-model="first" v-bind="args">
        <IdsRadioItem value="first">
          First
        </IdsRadioItem>
        <IdsRadioItem value="second">
          Second
        </IdsRadioItem>
        <IdsRadioItem value="third">
          Third
        </IdsRadioItem>
      </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-group-3',
    name: 'example-radio-group',
    required: false,
    size: 'comfortable',
    variant: 'surface',
    orientation: 'vertical',
    labelPosition: 'right',
    isValid: true,
    disabled: true,
  },
};

export const RadioGroupInvalid: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
      <IdsRadioGroup v-model="first" v-bind="args">
        <IdsRadioItem value="first">
          First
        </IdsRadioItem>
        <IdsRadioItem value="second">
          Second
        </IdsRadioItem>
        <IdsRadioItem value="third">
          Third
        </IdsRadioItem>
      </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-group-4',
    name: 'example-radio-group',
    required: false,
    size: 'comfortable',
    variant: 'surface',
    orientation: 'vertical',
    labelPosition: 'right',
    isValid: false,
    disabled: false,
  },
};

export const RadioGroupLightVariant: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
      <IdsRadioGroup v-model="first" v-bind="args">
        <IdsRadioItem value="first">
          First
        </IdsRadioItem>
        <IdsRadioItem value="second">
          Second
        </IdsRadioItem>
        <IdsRadioItem value="third">
          Third
        </IdsRadioItem>
      </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-group-5',
    name: 'example-radio-group',
    required: false,
    size: 'comfortable',
    variant: 'light',
    orientation: 'vertical',
    labelPosition: 'right',
    isValid: true,
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

export const RadioGroupInvalidLightVariant: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
      <IdsRadioGroup v-model="first" v-bind="args">
        <IdsRadioItem value="first">
          First
        </IdsRadioItem>
        <IdsRadioItem value="second">
          Second
        </IdsRadioItem>
        <IdsRadioItem value="third">
          Third
        </IdsRadioItem>
      </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-group-6',
    name: 'example-radio-group',
    required: false,
    size: 'comfortable',
    variant: 'light',
    orientation: 'vertical',
    labelPosition: 'right',
    isValid: false,
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

