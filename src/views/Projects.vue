<script>
import BaseHeadingH1 from '../components/base/BaseHeadingH1';
import Github from '../assets/svgs/github-brands.svg';

export default {
  name: 'Projects',
  components: {
    BaseHeadingH1,
    Github,
  },
  data: function() {
    return {
      projects: [
        {
          id: 0,
          title: 'Protege.dev',
          description:
            'Protege.dev is a job board tailored for junior developers looking for remote opportunities. This project has end-to-end testing with Cypress.io, form validation with Formik and Yup, and wired up to a Firebase database for the back-end.',
          url: 'https://protege.dev',
          tech: ['React', 'Firebase', 'Tailwind', 'Cypress.io'],
          github: 'https://github.com/drewclem/protege',
        },
        {
          id: 1,
          title: 'ColtXP',
          description:
            "Colt is a place where beginners looking to gain real-world experience can pair with seasoned developers to work through github issues on live projects. Everyone starts at the bottom, but not everyone has someone to help them along the way. ColtXP's aim is to change that by giving juniors a place to find senior dev's willing to pay it forward.",
          url: 'https://coltxp.com',
          tech: ['Vue', 'Firebase', 'Tailwind'],
          github: 'https://github.com/drewclem/colt',
        },
        {
          id: 2,
          title: 'FnF App',
          description:
            'The FNF app is a full-stack project with a Node API hosted on heroku and a Gatsby front-end hosted on Netlify. The goal of this project was to build a read-only API and display the data on a separately hosted front-end.',
          url: 'https://fnfapp.com',
          tech: ['Gatsby', 'Node', 'Tailwind'],
          github: 'https://github.com/drewclem/colt',
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <BaseHeadingH1 class="capitalize">{{ $route.name }}</BaseHeadingH1>

    <article>
      <ul>
        <li v-for="project in projects" :key="project.id" class="mb-20">
          <h2
            class="mb-4 text-xl font-bold text-red-500 lg:text-2xl font-display"
          >
            {{ project.title }}
          </h2>

          <p class="mb-4 text-sm opacity-75 lg:text-base">
            {{ project.description }}
          </p>

          <ul class="mb-6 ml-5 text-sm list-disc opacity-75 lg:text-base">
            <li v-for="item in project.tech" :key="item.index">{{ item }}</li>
          </ul>

          <div class="flex items-center">
            <button class="mr-6 btn">
              <a :href="project.url" target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </button>
            <a :href="project.github" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>

<style lang="postcss" scoped>
a svg {
  width: 24px;
  height: 24px;
  @apply opacity-75 transition ease-in-out duration-150;
}

a:hover svg {
  @apply opacity-100;
}
</style>
