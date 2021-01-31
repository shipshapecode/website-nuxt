<template>
  <div
    id="contact-form"
    class="contact-form section flex flex-wrap justify-center w-full"
  >
    <div class="section-content flex flex-wrap justify-center">
      <div class="flex flex-wrap justify-center items-center w-full">
        <client-only>
          <ContactForm />
        </client-only>
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
