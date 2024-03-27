<template>
  <header>
    <a class="button button--main" @click="onClick">{{ $t("logout")}}</a>
  </header>
</template>

<script setup lang="ts">
const { logout } = useStrapiAuth()
const router = useRouter()

const onClick = () => {
  logout()
  router.push('/account/login')
}
</script>