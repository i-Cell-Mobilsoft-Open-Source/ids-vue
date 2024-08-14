import { inject, App, reactive } from "vue";
import { defaultConfigOptions } from "@core/config/models/defaultConfigOptions.interface";

export interface IdsVue {
  config: defaultConfigOptions;
}

const IdsVueSymbol = Symbol();

export const defaultOptions: defaultConfigOptions = {
  locale: {
    paginator: {
      nextPageLabel: 'Next',
      previousPageLabel: 'Previous',
      nextPageAriaLabel: 'Go to next page',
      previousPageAriaLabel: 'Go to previous page',
      firstPageAriaLabel: 'Go to first page',
      lastPageAriaLabel: 'Go to last page',
      pageLabel: 'Go to page {page}',
      rangeLabel: 'Page {value1} of {value2}',
    }
  }
};


export function useIdsVue(): IdsVue {
  const IdsVue = inject<IdsVue>(IdsVueSymbol);

  if (!IdsVue) {
    throw new Error('IdsVue is not installed!');
  }

  return IdsVue;
}

export function setup(app: App, options: Partial<defaultConfigOptions>) {
  const IdsVue = {
      config: reactive(options)
  };

  app.config.globalProperties.$idsVue = IdsVue;
  app.provide(IdsVueSymbol, IdsVue);

  return IdsVue;
}

export default {
  install: (app: App, options?: Partial<defaultConfigOptions>): void => {
    const configOptions = { 
      locale: {
        ...defaultOptions.locale,
        ...options?.locale,
        paginator: {
          ...defaultOptions.locale.paginator,
          ...options?.locale?.paginator,
        }
      }
    };
    
    setup(app, configOptions);
  }
};
