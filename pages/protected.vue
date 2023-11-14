<template>
  <h1 class="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl">
    This is a protected Route
  </h1>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const router = useRouter();

watchEffect(() => {
  if (!userStore.isRegistered) {
    router.push({ name: "register" });
  }
});
</script>
