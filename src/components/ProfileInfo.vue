<template>
  <div class="flex flex-col items-start text-left">
    <div class="mt-2.5 font-semibold text-white text-4xl">Rushil Saraogi</div>
    <div class="text-gray-200 text-xl mt-2">
      Full stack development, UI design
    </div>

    <div class="mt-6 sm:mt-8 text-gray-400">
      👋 I'm a senior full stack software engineer at
      <a href="https://squareup.com/" target="_blank">Block</a> (formerly
      Square) with a background in UI/Product design. I've worked accross the
      stack and love approaching problems from a design perspective.
    </div>

    <div
      @click="copy"
      class="mt-8 flex items-center gap-2.5 border border-white/5 bg-white/5 p-4 rounded-xl hover:cursor-copy hover:bg-white/10 transition"
    >
      <div class="h-8 w-8 rounded-full overflow-hidden">
        <img
          src="../assets/profile.jpg"
          class="brightness-125 -translate-y-2"
        />
      </div>

      <div class="text-white font-semibold font-mono text-sm">
        rushil32@gmail.com
      </div>
    </div>

    <ToastMessage v-show="showCopiedSuccess" variant="success">Copied to clipboard</ToastMessage>
  </div>
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";

export default {
  components: {
    ToastMessage,
  },

  data() {
    return {
      showCopiedSuccess: false,
    };
  },

  methods: {
    async copy() {
      try {
        await navigator.clipboard.writeText("rushil32@gmail.com");
        this.showCopiedSuccess = true;

        setTimeout(() => { this.showCopiedSuccess = false }, 3000);
      } catch (err) {
        this.showCopiedSuccess = false;
      }
    },
  },
};
</script>
