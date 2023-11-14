<template>
  <div class="flex justify-between p-6">
    <nav>
      <ul class="flex gap-6">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            active-class="text-blue-600 font-bold underline
"
          >
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div>
      <NuxtLink to="/sign-up"> <UButton label="Sign Up" /> </NuxtLink>

      <ColorMode />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      links: [
        { to: "/", text: "Home" },
        { to: "/posts/1", text: "Post 1" },
        { to: "/posts/2", text: "Post 2" },
        { to: "/protected", text: "Protected" },
      ],
    };
  },
};
</script>
