<script>
export default {
  name: "Home",
}
</script>

<template>
  <div>
    <section>
      <div class="flex-row md:flex">
        <div class="relative w-3/4 lg:w-2/3">
          <div class="absolute hidden w-12 h-12 bg-red-500 md:block"></div>

          <p
            class="hidden mb-6 text-2xl tracking-widest text-red-500 uppercase transform -rotate-90 hero-name md:block"
          >
            Drew Clements
          </p>

          <div
            class="absolute transform -rotate-90 border-t-2 border-red-500 hero-redaccent-left"
          ></div>

          <div class="hero-lockup">
            <h1
              class="mb-12 -mt-3 text-6xl font-black leading-none font-display"
            >
              Develop<br />
              <span class="text-gray-300">er</span>
              <span class="text-red-500"> &amp;</span><br />Design<br /><span
                class="text-gray-300"
              >
                er
              </span>
            </h1>

            <p class="leading-relaxed text-blue-900 md:w-4/5">
              Hi! I'm just a dad trying to do right by his family! I work as a
              front-end engineer at

              <a
                href="https://nacelle.com"
                target="_blank"
                rel="noopener no referrer"
                >Nacelle</a
              >
              ! Founder of
              <a
                href="https://protege.dev"
                target="_blank"
                rel="noopener noreferrer"
                >Protege.dev</a
              >.
            </p>
          </div>
        </div>
        <div class="w-3/4 mt-12 lg:w-1/3 lg:-ml-24">
          <div class="slide rounded-full overflow-hidden hidden md:block">
            <img
              src="../assets/images/drew.jpg"
              alt="Drew sitting at his desk"
              class="object-center object-cover h-full"
              lazy
            />
          </div>
        </div>
      </div>

      <p class="mt-12 mb-3 text-sm text-red-500">
        Am I the droid you're looking for?
      </p>
      <router-link to="/contact" class="btn no-underline"
        >Message Me</router-link
      >
    </section>

    <section class="mt-20">
      <h2 class="text-2xl mb-6 font-display font-bold">
        Virtual Appearances
      </h2>

      <ul class="list-disc ml-5 appearance-list">
        <li>
          <a
            class="underline"
            href="https://virtualcoffee.io/podcast/0106-drew/"
          >
            VirtualCoffee Podcast
          </a>
        </li>

        <li>
          <a
            class="underline"
            href="https://www.youtube.com/watch?v=PDytThYBSvA"
            >VirtualCoffee Live Panel</a
          >
        </li>

        <li>
          <a
            class="underline"
            href="https://thatsmyjamstack.com/posts/drew-clements/"
            >That's My Jamstack Podcast</a
          >
        </li>

        <li>
          <a
            class="underline"
            href="https://www.youtube.com/watch?v=5lXDcP4WHN4"
            >James Q Quick Live Stream</a
          >
        </li>

        <li>
          <a class="underline" href="https://dnc.show/episodes/d52b07f8"
            >Does Not Compute Podcast</a
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.hero-lockup a {
  @apply text-red-500 underline;
}

.slide {
  height: 200px;
  width: 200px;
  aspect-ratio: 1/1;
}

.appearance-list li {
  @apply mb-4;
}

.appearance-list li a {
  @apply opacity-75;
}

.appearance-list li a:hover {
  @apply opacity-100 underline text-red-500;
}

@media (min-width: 768px) {
  .hero-lockup {
    margin-left: 44px;
    margin-top: 50px;
  }

  .hero-redaccent-left {
    width: 100px;
    margin-top: 368px;
    margin-left: -48px;
  }

  .hero-name {
    margin-left: -111px;
    position: absolute;
    margin-top: 162px;
  }
}

@media (min-width: 960px) {
  .slide {
    height: 250px;
    width: 250px;
  }
}
</style>
