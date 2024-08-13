import type { Preview } from "@storybook/vue3";
import "../src/styles/index.scss"
import { vue3SourceDecorator } from "./decorators/vue3SourceDecorator";
import { setup } from '@storybook/vue3'
import IdsVue from "../src/core/config/IdsVue";

setup((app) => {
  app.use(IdsVue);
})

const preview: Preview = {
  decorators: [vue3SourceDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
  },
};

export default preview;
