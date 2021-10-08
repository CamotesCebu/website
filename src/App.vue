<template>
  <router-view />
  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Toast from "@/components/Toast.vue";
export default defineComponent({
  components: {
    Toast,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
