import IdsPaginator from '@components/paginator/IdsPaginator.vue';
import { Meta, StoryObj } from '@storybook/vue3';
import { PaginatorPageButtonAppearance } from '@components/paginator//models/IdsPaginatorAppearance.type';
import { Size } from '@models/size.type';
import { PaginatorVariant } from '@components/paginator//models/IdsPaginatorVariant.type';

function selectControlOptions(constObj: { [key: string]: string }, description?: string): object {
  return {
    options: Object.values(constObj),
    control: { type: 'select' },
    ...(!!description && { description }),
  };
}

const meta = {
  title: 'Components/Paginator',
  component: IdsPaginator,
  argTypes: {
    id: { control: 'text' },
    pageSize: { control: 'number' },
    pageSizeOptions: { control: 'object' },
    showFirstLastButton: { control: 'boolean' },
    showPageInfo: { control: 'boolean' },
    showPageButtons: { control: 'boolean' },
    showAllPages: { control: 'boolean' },
    maxDisplayedItemCount: { control: 'number' },
    length: { control: 'number' },
    pageButtonAppearance: selectControlOptions(PaginatorPageButtonAppearance),
    size: selectControlOptions(Size),
    variant: selectControlOptions(PaginatorVariant),
    disabled: { control: 'boolean' },
    isCompact: { control: 'boolean' },
    showPrevNextLabel: { control: 'boolean' },
  },
} satisfies Meta<typeof IdsPaginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { IdsPaginator },
    setup() {
      return { args };
    },
    template: '<IdsPaginator v-bind="args" />',
  }),
  args: {
    id: 'paginator-1',
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    showFirstLastButton: true,
    showPageInfo: true,
    showPageButtons: true,
    showAllPages: false,
    maxDisplayedItemCount: 7,
    length: 120,
    pageButtonAppearance: 'plain',
    size: 'comfortable',
    variant: 'surface',
    disabled: false,
    isCompact: false,
    showPrevNextLabel: false,
  },
};

export const PaginatorCompactMode: Story = {
  render: (args) => ({
    components: { IdsPaginator },
    setup() {
      return { args };
    },
    template: '<IdsPaginator v-bind="args" />',
  }),
  args: {
    id: 'paginator-2',
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    showFirstLastButton: true,
    showPageInfo: true,
    showPageButtons: true,
    showAllPages: false,
    maxDisplayedItemCount: 7,
    length: 120,
    pageButtonAppearance: 'plain',
    size: 'comfortable',
    variant: 'primary',
    disabled: false,
    isCompact: true,
    showPrevNextLabel: true,
  },
};

export const PaginatorLightVariant: Story = {
  render: (args) => ({
    components: { IdsPaginator },
    setup() {
      return { args };
    },
    template: '<IdsPaginator v-bind="args" />',
  }),
  args: {
    id: 'paginator-3',
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    showFirstLastButton: true,
    showPageInfo: true,
    showPageButtons: true,
    showAllPages: false,
    maxDisplayedItemCount: 7,
    length: 120,
    pageButtonAppearance: 'plain',
    size: 'comfortable',
    variant: 'light',
    disabled: false,
    isCompact: false,
    showPrevNextLabel: false,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};

export const PaginatorCompactModeLightVariant: Story = {
  render: (args) => ({
    components: { IdsPaginator },
    setup() {
      return { args };
    },
    template: '<IdsPaginator v-bind="args" />',
  }),
  args: {
    id: 'paginator-2',
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    showFirstLastButton: true,
    showPageInfo: true,
    showPageButtons: true,
    showAllPages: false,
    maxDisplayedItemCount: 7,
    length: 120,
    pageButtonAppearance: 'plain',
    size: 'comfortable',
    variant: 'light',
    disabled: false,
    isCompact: true,
    showPrevNextLabel: true,
  },
  parameters: {
    backgrounds: 
      {
        default: 'dark',
      }
    ,
  },
};