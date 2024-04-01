<template>
  <div
    class="flex flex-col w-full m-auto max-w-xl py-10 sm:py-20 px-4 sm:px-10 text-white"
  >
    <div class="flex gap-6 items-center">
      <img src="dp.jpeg" alt="dp" class="rounded-full w-20 h-20" />
      <div class="text-left">
        <div class="text-2xl sm:text-2xl font-semibold mt-4">
          Rushil Saraogi
        </div>
        <div class="mt-1 text-white/70">Software Engineer / UI designer</div>
        <div class="mt-3 flex gap-2">
          <InfoTag>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-white text-sm"
                >location_on</span
              >
              <span>New York</span>
            </div>
          </InfoTag>
        </div>
      </div>
    </div>
    <div class="mt-8 sm:mt-12 text-left">
        <div class="text-lg border-b py-2 border-white/10">About me</div>
        <p class="mt-3 text-white/80">
            I started my career in tech as a product designer before eventually transitioning into software engineering.
            Building UI has always been my primary draw because of which I've always leaned front-end. I'm particulary interested in Tailwind 
            because I've been following the team's work for a few years (I've read refactoring UI cover to cover a few times now :)).
        </p>

        <div class="mt-6 text-lg border-b py-2 border-white/10">Why Tailwind?</div>
        <p class="mt-3 text-white/80">
            While the bulk of my experience has been on the engineering end I've been looking for a role that would
            allow me to leverage my design skills as well for a while now. I can't imagine there'd be a better place to do that than with the team 
            that builds my go-to CSS framework.
        </p>

        <div class="mt-6 text-lg border-b py-2 border-white/10">A Recent Project</div>
        <p class="mt-3 text-white/80">
            While I have a massive graveyard of half finished projects (a lot of them using Tailwind) a recent one I'm particularly proud of is AskWinston.
            AskWinston is a platform that allows hotels to quickly use a no code interface to put together a mobile optimized site for guests. The platform gives guests instant access to hotel services
            and also provides a number of back-office tools that integrate with the guest facing front-end.
            You can find it hosted here - <a class="text-indigo-300" href="https://www.askwinston.app/">AskWinston</a>.
        </p>
        <p class="mt-3 text-white/80">Logins are currently restricted to a test group but I'd be happy to provide a demo anytime.</p>
    </div>
  </div>
</template>

<script>
import InfoTag from "@/components/InfoTag.vue";

export default {
  name: "TailwindLetter",
  components: {
    InfoTag,
  },
};
</script>
