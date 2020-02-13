<template>
  <div
    id="contact-form"
    class="contact-form section flex flex-wrap justify-center w-full"
  >
    <div class="section-content flex flex-wrap justify-center">
      <h1 class="heading text-3xl sm:text-6xl">
        All Hands on Deck
      </h1>

      <div class="flex flex-wrap justify-center">
        <p class="max-w-3xl w-full">
          We run a tight ship. From training to full-stack development, Ship
          Shape is invested in your project the moment you reach out to us.
          Small and large, we want to be a part of your future.
        </p>

        <div class="flex flex-wrap justify-center items-center w-full">
          <no-ssr>
            <ContactForm />
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue';
import { generateMeta } from '~/utils/meta';

export default {
  components: {
    ContactForm
  },

  head() {
    const title = 'Contact Us';
    const description =
      'Set a course for success with our Ember.js consulting services, ' +
      'team training, web app development, and more by contacting Ship Shape today.';
    const url = 'https://shipshape.io/contact/';

    return generateMeta(title, description, url);
  }
};
</script>
