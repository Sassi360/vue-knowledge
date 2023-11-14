<template>
  <h2
    class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-brand"
  >
    Sign up to gain access
  </h2>

  <form @submit.prevent="register" class="max-w-xl mx-auto space-y-6">
    <UFormGroup label="Email" required>
      <UInput
        placeholder="you@example.com"
        icon="i-heroicons-envelope"
        v-model="form.email"
        type="email"
      />
    </UFormGroup>

    <UFormGroup label="Password" required>
      <UInput
        placeholder="***********"
        icon="i-heroicons-envelope"
        v-model="form.password"
        type="password"
      />
    </UFormGroup>
    <UButton type="submit" label="Register" block />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "~/store/user";

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const form = ref({
      email: "",
      password: "",
    });

    function register() {
      userStore.register(form.value);
      console.log(form.value);
      router.push({ name: "protected" });
    }

    return { form, register };
  },
});
</script>
