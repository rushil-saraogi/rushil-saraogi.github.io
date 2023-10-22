<template>
  <div class="grid grid-cols-2 gap-2">
    <LinkCard
      text="LinkedIn"
      url="https://www.linkedin.com/in/rushil-saraogi-37184969/"
      icon="linkedIn"
      text-class="text-white"
    />
    <LinkCard
      text="Github"
      url="https://github.com/rushil-saraogi"
      icon="github"
      text-class="text-white"
    />
    <LinkCard
      url="https://www.linkedin.com/in/rushil-saraogi-37184969/"
      text-class="text-white"
      bg-class="bg-gradient-to-r from-cyan-600 to-blue-600"
    >
      <div class="flex flex-col items-center gap-3">
        <SquareLogo />
        <div class="text-white font-semibold">
          Current, Senior Engineer at Square
        </div>
      </div>
    </LinkCard>
    <LinkCard
      text="Github"
      url="rushil-resume.pdf"
      icon="contact_page"
      text-class="text-white"
    >
      <div>
        <span class="material-symbols-outlined text-white text-4xl"
          >contact_page</span
        >
        <div class="text-gray-100 text-xs mt-1 font-semibold font-mono">
          rushil-resume.pdf
        </div>
      </div>
    </LinkCard>
    <LinkCard
      text-class="text-white"
    >
      <div class="text-white">
        Past, engineering at
        <a
          href="https://www.linkedin.com/company/walmartglobaltech/"
          target="_blank"
          >Walmart</a
        >
        and
        <a href="https://www.lightspeedhq.com/shopkeep/" target="_blank"
          >Shopkeep</a
        >. Design at
        <a href="https://www.cleartrip.com/" target="_blank">Cleartrip</a>.
      </div>
    </LinkCard>
    <LinkCard
      icon="music_note"
      url="https://open.spotify.com/playlist/3nIX2vo6HvcPJ85fREcU7e?si=d39de06062f549d2"
    />
    <LinkCard
      text="Founder at AskWinston"
      url="https://www.askwinston.app/"
      text-class="text-white"
      bg-class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div>
        <AskWinstonLogo class="h-6" />
        <div class="text-white font-semibold mt-3">Founder at AskWinston</div>
      </div>
    </LinkCard>
  </div>
</template>

<script>
import LinkCard from "@/components/LinkCard.vue";
import SquareLogo from "@/icons/SquareLogo.vue";
import AskWinstonLogo from "@/icons/AskWinstonLogo.vue";

export default {
  components: {
    LinkCard,
    SquareLogo,
    AskWinstonLogo,
  },
};
</script>
