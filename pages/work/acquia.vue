<template>
  <div class="section flex flex-wrap justify-center">
    <div class="max-w-2xl w-full">
      <div class="p-4 lg:p-12">
        <div class="text-xs">
          Case Study
        </div>

        <h1 class="text-4xl lg:text-6xl">
          Acquia
        </h1>

        <p>
          Acquia is the open source digital experience company that empowers the world’s most ambitious brands to embrace innovation and create customer moments that matter.
        </p>
      </div>

      <div class="bg-grey-transparent flex flex-wrap h-64 md:h-140 justify-center items-center">
        <div class="w-1/2 lg:w-1/3">
          <Acquia class="'fill-white h-auto w-full'" />
        </div>
      </div>

      <div class="p-4 lg:p-12">
        <h4>Challenge</h4>

        <p>
          Users of Acquia's Lift product were finding it difficult to manage the
          content rules for dynamically determining what their site visitors
          would see. This has been in an admin dashboard placed over the
          customer's site in context as a set of seperate iframes that must
          messaage to one another.
        </p>

        <p>
          Additionaly, the Lift development team had issues managing messaging
          across many individual Ember apps that were created in each iframed
          sandbox, which were intended to syncronize data changes as the user
          added or updated configurations.
        </p>

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
  import BottomLinks from '~/components/BottomLinks.vue';
  import Acquia from '~/assets/svgs/clients/acquia-droplet.svg?inline';
  import { generateMeta } from '~/utils/meta';

  export default {
    components: {
      BottomLinks,
      Acquia
},

    head() {
      const title = 'Case Study - Company';
      const description = 'Aliquip dolore laboris culpa sunt eiusmod eiusmod irure veniam incididunt.';
      const url = 'https://shipshape.io/work/company/';

      return generateMeta(title, description, url);
    }
  };
</script>
