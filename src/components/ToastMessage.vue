<template>
  <transition
    enter-active-class="ease-out duration-700"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-5"
    appear
  >
    <div
      class="flex shadow text-gray-600 bg-gray-100 p-3 rounded-md fixed bottom-10 right-10 w-56"
      :class="classes"
    >
      <!-- <div class="mr-2 mt-0.5" v-if="showIcon">
                <InformationCircleIcon v-if="variant === 'default'" class="h-5 w-5" />
                <InformationCircleIcon v-if="variant === 'info'" class="h-5 w-5" />
            </div> -->
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "default",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      return {
        "bg-slate-100 border-slate-400 text-slate-700<":
          this.variant === "default",
        "bg-sky-100 border-sky-400 text-sky-700": this.variant === "info",
        "bg-red-100 border-red-400 text-red-700": this.variant === "danger",
        "bg-green-100 border-green-400 text-green-900":
          this.variant === "success",
        "bg-yellow-100 border-yellow-400 text-yellow-700":
          this.variant === "warning",
      };
    },
  },
};
</script>
