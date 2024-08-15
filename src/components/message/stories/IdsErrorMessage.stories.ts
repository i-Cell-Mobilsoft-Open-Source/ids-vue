import { Meta, StoryObj } from '@storybook/vue3';
import IdsErrorMessage from '@components/message/IdsErrorMessage.vue';
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
  title: 'Components/Messages/Error Message',
  component: IdsErrorMessage,
  argTypes: {
    size: selectControlOptions(Size),
    variant: selectControlOptions(MessageVariant),
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Error message component description',
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
} satisfies Meta<typeof IdsErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsErrorMessage v-bind="args">This is a Error message</IdsErrorMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const ErrorMessageDisabled: Story = {
  render: (args) => ({
    components: { IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsErrorMessage v-bind="args">This is a Error message</IdsErrorMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: true,
  },
};

export const ErrorMessageWithPrefix: Story = {
  render: (args) => ({
    components: { IdsErrorMessage, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsErrorMessage v-bind="args">
        <template #idsMessagePrefix>
          <IdsIcon :icon="icon" />
        </template>
          Test Message
      </IdsErrorMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const ErrorMessageWithSuffix: Story = {
  render: (args) => ({
    components: { IdsErrorMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsErrorMessage v-bind="args">
          Test Message
        <template #idsMessageSuffix>
          Suffix
        </template>
      </IdsErrorMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const ErrorMessageWithPrefixAndSuffix: Story = {
  render: (args) => ({
    components: { IdsErrorMessage, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsErrorMessage v-bind="args">
        <template #idsMessagePrefix>
          <IdsIcon :icon="icon" />
        </template>
          Test Message
        <template #idsMessageSuffix>
          Suffix
        </template>
      </IdsErrorMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};
