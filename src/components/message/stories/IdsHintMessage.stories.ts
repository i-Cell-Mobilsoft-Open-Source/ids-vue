import { Meta, StoryObj } from '@storybook/vue3';
import IdsHintMessage from '@components/message/IdsHintMessage.vue';
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
  title: 'Components/Messages/Hint Message',
  component: IdsHintMessage,
  argTypes: {
    size: selectControlOptions(Size),
    variant: selectControlOptions(MessageVariant),
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Hint message component description',
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
} satisfies Meta<typeof IdsHintMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsHintMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsHintMessage v-bind="args">This is a hint message</IdsHintMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const HintMessageDisabled: Story = {
  render: (args) => ({
    components: { IdsHintMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsHintMessage v-bind="args">This is a hint message</IdsHintMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: true,
  },
};

export const HintMessageWithPrefix: Story = {
  render: (args) => ({
    components: { IdsHintMessage, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsHintMessage v-bind="args">
        <template #idsMessagePrefix>
          <IdsIcon :icon="icon" />
        </template>
          Test Message
      </IdsHintMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const HintMessageWithSuffix: Story = {
  render: (args) => ({
    components: { IdsHintMessage },
    setup() {
      return { args };
    },
    template: `
      <IdsHintMessage v-bind="args">
          Test Message
        <template #idsMessageSuffix>
          Suffix
        </template>
      </IdsHintMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};

export const HintMessageWithPrefixAndSuffix: Story = {
  render: (args) => ({
    components: { IdsHintMessage, IdsIcon },
    setup() {
      const icon = mdiLightbulbOnOutline;
      return { args, icon };
    },
    template: `
      <IdsHintMessage v-bind="args">
        <template #idsMessagePrefix>
          <IdsIcon :icon="icon" />
        </template>
          Test Message
        <template #idsMessageSuffix>
          Suffix
        </template>
      </IdsHintMessage>
    `,
  }),
  args: {
    size: Size.COMFORTABLE,
    variant: MessageVariant.SURFACE,
    disabled: false,
  },
};
