<template>
  <div
    id="home"
    class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
  >
    <Header />

    <main class="px-3">
      <h1>Cover your page.</h1>
      <p class="lead">
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </p>
      <p class="lead">
        <a
          href="#"
          class="btn btn-lg btn-secondary fw-bold border-white bg-white"
          >Learn more</a
        >
      </p>
      <button type="button" class="btn btn-primary" @click="show('asd')">
        Primary
      </button>
    </main>

    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import useToast from "@/hooks/useToast";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    const toast = useToast();

    const show = (text: string) => {
      toast.showHideToast(text);
    };

    return {
      show,
    };
  },
});
</script>

<style lang="scss"></style>
