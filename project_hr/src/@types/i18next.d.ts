import type { defaultNS } from 'i18n';

import type { Resources } from './resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: Resources;
    defaultNS: typeof defaultNS;
  }
}
