<template>
  <div id="contact-form" class="contact-form section flex flex-wrap justify-center">
    <div class="section-content">
      <h1 class="heading">
        We can help streamline your Ember.js project
      </h1>

      <p>
        Whether you need staff augmentation to increase the velocity on your ambitious project,
        mentoring for your team, or anything else Ember.js related, we've got you covered.
      </p>

      <div class="flex flex-wrap justify-center items-center">
        <ContactForm/>
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
      const description = 'Let\'s create some amazing things together. We do Ember app development, Ember training, sponsored ' +
        'open source work, and anything and everything Ember. To get started on your Ember training or Ember consulting project, ' +
        'shoot us an email or fill out the contact form.';
      const url = 'https://shipshape.io/contact';

      return generateMeta(title, description, url);
    }
  };
</script>
