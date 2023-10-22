<template>
  <a
    :href="url || '#'"
    target="_blank"
    class="no-underline rounded-3xl p-3 flex justify-center items-center transition min-h-48 bg-zinc-800 p-4"
    :class="{
      [bgClass]: bgClass,
      'hover:cursor-pointer hover:scale-110': url,
      'hover:bg-zinc-700': url && !bgClass,
      'border border-white/10': !bgClass,
      'hover:cursor-default': !url
    }"
  >
    <!-- Slot content -->
    <div v-if="$slots.default">
      <slot></slot>
    </div>

    <!-- Single icon -->
    <div v-else-if="icon">
      <component v-if="icons[icon]" :is="icons[icon]" />
      <span v-else class="material-symbols-outlined text-white text-4xl">{{ icon }}</span>
    </div>

    <!-- Text content -->
    <div v-else class="text-gray-100 font-semibold" :class="textClass">
      {{ text }}
    </div>
  </a>
</template>

<script>
import LinkedinIcon from "@/icons/LinkedinIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";

export default {
  props: {
    url: String,
    text: String,
    icon: String,
    textClass: String,
    bgClass: String,
  },

  data() {
    return {
      icons: {
        linkedIn: LinkedinIcon,
        github: GithubIcon,
      },
      hover: false,
    };
  },
};
</script>
