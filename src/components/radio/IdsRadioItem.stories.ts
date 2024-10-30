import IdsRadioItem from '@components/radio/IdsRadioItem.vue';
import IdsRadioGroup from '@components/radio/IdsRadioGroup.vue';
import { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/Radio',
  component: IdsRadioItem,
  argTypes: {
    id: { control: 'text' },
    value: { control: 'text' },
    ariaLabel: { control: 'text' },
    ariaLabelledBy: { control: 'text' },
    ariaDescribedBy: { control: 'text' },
    tabindex: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IdsRadioItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
    <IdsRadioGroup size="comfortable" variant="surface" orientation="vertical" label-position="right" is-valid>
      <IdsRadioItem v-bind="args">
        Default Radio Item
      </IdsRadioItem>
      <IdsRadioItem>
        Default Radio Item
      </IdsRadioItem>
    </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-item-1',
    ariaLabel: 'Default Radio',
    tabindex: 0,
    value: undefined,
    disabled: false,
  },
};

export const RadioItemDisabled: Story = {
  render: (args) => ({
    components: { IdsRadioGroup, IdsRadioItem },
    setup() {
      return { args };
    },
    template: `
    <IdsRadioGroup size="comfortable" variant="surface" orientation="vertical" label-position="right" is-valid>
      <IdsRadioItem v-bind="args">
        Default Radio Item
      </IdsRadioItem>
      <IdsRadioItem>
        Default Radio Item
      </IdsRadioItem>
    </IdsRadioGroup>
    `,
  }),
  args: {
    id: 'radio-item-2',
    ariaLabel: 'Disabled Radio',
    tabindex: 0,
    disabled: true,
  },
};
