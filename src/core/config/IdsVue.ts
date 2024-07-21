import { inject, App, reactive } from "vue";

interface IdsVue {
  config: Record<string, unknown>;
}

const IdsVueSymbol = Symbol();

export const defaultOptions = {
  locale: {
    nextPageLabel: 'Go to next page',
    previousPageLabel: 'Go to previous page',
    firstPageLabel: 'Go to first page',
    lastPageLabel: 'Go to last page',
    pageLabel: 'Go to page',
  }
};


export function useIdsVue(): IdsVue {
  const IdsVue = inject<IdsVue>(IdsVueSymbol);

  if (!IdsVue) {
    throw new Error('IdsVue is not installed!');
  }

  return IdsVue;
}

export function setup(app: App, options: Partial<typeof defaultOptions>) {
  const IdsVue = {
      config: reactive(options)
  };

  app.config.globalProperties.$idsVue = IdsVue;
  app.provide(IdsVueSymbol, IdsVue);

  return IdsVue;
}

export default {
  install: (app: App, options?: Partial<typeof defaultOptions>): void => {
    const configOptions = { 
      locale: {
        ...defaultOptions.locale,
        ...options?.locale
      }
    };
    
    setup(app, configOptions);
  }
};
