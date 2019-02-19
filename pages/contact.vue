<template>
  <div class="contact-form section flex flex-wrap justify-center" id="contact-form">
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

  export default {
    components: {
      ContactForm
    }
  };
</script>
