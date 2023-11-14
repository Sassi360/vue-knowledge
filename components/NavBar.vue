<template>
  <div class="flex justify-between p-6">
    <nav>
      <ul class="flex gap-6">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            active-class="text-blue-600 font-bold underline"
          >
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-4">
      <NuxtLink :to="userStore.isRegistered ? '/' : '/register'">
        <UButton
          :label="userStore.isRegistered ? 'Sign Out' : 'Register'"
          @click="userStore.isRegistered ? userStore.signOut() : null"
        />
      </NuxtLink>
      <ColorMode />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";
import { RouterLink } from "vue-router";

const userStore = useUserStore();

const links = [
  { to: "/", text: "Home" },
  { to: "/posts/1", text: "Post 1" },
  { to: "/posts/2", text: "Post 2" },
  { to: "/protected", text: "Protected" },
];
</script>
