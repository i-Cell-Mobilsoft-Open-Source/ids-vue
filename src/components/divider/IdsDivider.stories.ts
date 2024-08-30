import IdsDivider from '@components/divider/IdsDivider.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { Orientation } from '@models/orientation.type';
import { Size } from '@models/size.type';
import { AllVariants } from '@models/variants';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Divider',
  component: IdsDivider,
  argTypes: {
    type: selectControlOptions(Orientation),
    size: selectControlOptions(Size),
    variant: selectControlOptions(AllVariants),
  },
} satisfies Meta<typeof IdsDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsDivider },
    setup() {
      return { args }
    },
    template: '<IdsDivider v-bind="args" :style="setVerticalHeight" />',
    computed: {
      setVerticalHeight() {
        return this.args.type === Orientation.VERTICAL ? { height: '200px' } : {};
      }
    }
  }),
  args: {
    type: Orientation.HORIZONTAL,
    size: Size.COMFORTABLE,
    variant: AllVariants.PRIMARY,
  },
};

export const VerticalDivider: Story = {
  render: (args) => ({
    components: { IdsDivider },
    setup() {
      return { args };
    },
    template: '<IdsDivider v-bind="args" :style="setVerticalHeight" />',
    computed: {
      setVerticalHeight() {
        return this.args.type === Orientation.VERTICAL ? { height: '200px' } : {};
      }
    }
  }),
  args: {
    type: Orientation.VERTICAL,
    size: Size.COMFORTABLE,
    variant: AllVariants.PRIMARY,
  },
};
