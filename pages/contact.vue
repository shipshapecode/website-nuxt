<template>
  <div
    id="contact-form"
    class="contact-form section flex flex-wrap justify-center"
  >
    <div class="section-content">
      <h1 class="heading">
        We can help streamline your Ember.js project
      </h1>

      <p>
        Whether you need staff augmentation to increase the velocity on your
        ambitious project, mentoring for your team, or anything else Ember.js
        related, we've got you covered.
      </p>

      <div class="flex flex-wrap justify-center items-center">
        <no-ssr>
          <ContactForm />
        </no-ssr>
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
