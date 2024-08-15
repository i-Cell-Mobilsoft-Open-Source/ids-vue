import { Meta, StoryObj } from '@storybook/vue3';
import IdsSuccessMessage from '@components/message/IdsSuccessMessage.vue';
import { Size } from '@models/size.type';
import { MessageVariant } from '@components/message/models/IdsMessageVariant.type';
import mdiLightbulbOnOutline from '@mdi/svg/svg/lightbulb-on-outline.svg?component';
import IdsIcon from '@components/icon/IdsIcon.vue';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Messages/Success Message',
  component: IdsSuccessMessage,
  argTypes: {
    size: selectControlOptions(Size),
    variant: selectControlOptions(MessageVariant),
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Success message component description',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#000' },
      ],
    },
  },
} satisfies Meta<typeof IdsSuccessMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsSuccessMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsSuccessMessage v-bind="args">This is a Success message</IdsSuccessMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const SuccessMessageDisabled: Story = {
  render: (args) => ({
    components: { IdsSuccessMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsSuccessMessage v-bind="args">This is a Success message</IdsSuccessMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: true,
  },
};

export const SuccessMessageWithPrefix: Story = {
  render: (args) => ({
    components: { IdsSuccessMessage, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsSuccessMessage v-bind="args">
        <template #idsMessagePrefix>
          <IdsIcon :icon="icon" />
        </template>
          Test Message
      </IdsSuccessMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const SuccessMessageWithSuffix: Story = {
  render: (args) => ({
    components: { IdsSuccessMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsSuccessMessage v-bind="args">
          Test Message
        <template #idsMessageSuffix>
          Suffix
        </template>
      </IdsSuccessMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const SuccessMessageWithPrefixAndSuffix: Story = {
  render: (args) => ({
    components: { IdsSuccessMessage, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsSuccessMessage v-bind="args">
        <template #idsMessagePrefix>
          <IdsIcon :icon="icon" />
        </template>
          Test Message
        <template #idsMessageSuffix>
          Suffix
        </template>
      </IdsSuccessMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};
