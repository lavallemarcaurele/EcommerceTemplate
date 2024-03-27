<template>
  <Form @submit="onSubmit" class="flex flex-col">
    <Field name="username" type="text" rules="required" />
    <ErrorMessage name="username" />

    <Field name="email" type="email" rules="required|email" />
    <ErrorMessage name="email" />

    <Field name="password" type="password" rules="required" autocomplete="new-password" />
    <ErrorMessage name="password" />

    <Field name="passwordConfirmation" type="password" :rules="{ required: true, passwordMatch: 'password' }" autocomplete="new-password" />
    <ErrorMessage name="passwordConfirmation" />

    <button type="submit" class="button">{{ $t("register") }}</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';

const { register } = useStrapiAuth();
const router = useRouter();

const onSubmit = async (values: any) => {
  try {
    await register({
      username: values.username,
      email: values.email,
      password: values.password,
    });

    router.push('/shop');
  } catch (e) {
  }
};
</script>
