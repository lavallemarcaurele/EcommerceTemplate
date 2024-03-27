<template>
  <Form @submit="onSubmit" class="flex flex-col">
    <Field name="identifier" type="text" rules="required" />
    <ErrorMessage name="identifier" />
    
    <Field name="password" type="password" rules="required" />
    <ErrorMessage name="password" />
    
    <button type="submit" class="button">{{ $t('login') }}</button>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'; 

const { login } = useStrapiAuth()
const router = useRouter()

const onSubmit = async (values: any) => {
  try {
    await login({ identifier: values.identifier, password: values.password })
    router.push('/shop')
  } catch (e) {
  }
}
</script>
