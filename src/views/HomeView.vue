<template>
  <div class="home flex items-stretch flex-col sm:flex-row w-full m-auto max-w-5xl py-10 sm:py-20 gap-6 sm:gap-8 px-4 sm:px-10">
    <div class="flex flex-col gap-5 flex-1 items-center justify-center">
      <ProfileInfo />
    </div>
    <div class="flex-1">
      <IconGrid />
    </div>
  </div>
</template>

<script>
import IconGrid from "@/components/IconGrid.vue";
import ProfileInfo from "@/components/ProfileInfo.vue";

export default {
  name: "HomeView",
  components: {
    IconGrid,
    ProfileInfo,
  },
};
</script>
