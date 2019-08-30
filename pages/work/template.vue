<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-2xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">
          Case Study
        </div>

        <h1 class="text-4xl lg:text-6xl">
          Company Name
        </h1>

        <p>
          Company Description
        </p>
      </div>

      <div class="bg-netflix-red flex flex-wrap h-64 md:h-140 justify-center items-center">
        <div class="w-1/2 lg:w-1/3">
          Logo
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        // add the issue we were presented by the customer

        <h4>Solution</h4>

        // how did we determine we'd address the previously presented issue?
      </div>

      <div class="p-4 lg:p-12">
        <h4>Outcome</h4>

        // based on our solution, what results did the company see?
      </div>

      <BottomLinks
        next-link="/work/brokermate/"
        next-link-text="Brokermate"
        previous-link="/work/socialcode/"
        previous-link-text="SocialCode"
      />
    </div>
  </div>
</template>

<script>
  // import BottomLinks from '~/components/BottomLinks.vue';
  // import Logo from '~/assets/svgs/clients/logo.svg?inline';
  // import { generateMeta } from '~/utils/meta';

  // export default {
  //   components: {
  //     BottomLinks,
  //     Logo
  //   },

  //   head() {
  //     const title = 'Case Study - Company';
  //     const description = 'Aliquip dolore laboris culpa sunt eiusmod eiusmod irure veniam incididunt.';
  //     const url = 'https://shipshape.io/work/company/';

  //     return generateMeta(title, description, url);
  //   }
  // };
</script>
