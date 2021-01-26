import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;

export function postError(message) {
  error({
    text: message,
  });
}
