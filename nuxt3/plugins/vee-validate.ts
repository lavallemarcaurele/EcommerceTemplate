import { defineNuxtPlugin } from '#app';
import { defineRule } from 'vee-validate';

export default defineNuxtPlugin(() => {
  defineRule('required', (value: string | any[]) => {
    if (!value || value.length === 0) {
      return 'This field is required';
    }
    return true;
  });

  defineRule('email', (value: string) => {
    if (!value || value.length === 0) {
      return true;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'This field must be a valid email';
    }
    return true;
  });

  defineRule('passwordMatch', (value: string, [relatedFieldName]: [string], { form }) => {
    return value === form[relatedFieldName] || 'The passwords do not match.';
  });
});
