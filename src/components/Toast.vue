<template>
  <div
    v-if="state.show"
    class="position-fixed top-0 end-0 p-3"
    style="z-index: 11"
  >
    <div
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ state.text }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { state, toasts } from "@/hooks/useToast";

export default defineComponent({
  setup() {
    return {
      // show: state.show,
      // text: state.text,
      state,
      toasts,
    };
  },
});
</script>
