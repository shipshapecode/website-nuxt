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
    const title = 'Contact Our Software Consultants';
    const description =
      "Want to improve your products and people? Contact Ship Shape's software consultants to chat about custom app development, optimization, and training.";
    const url = 'https://shipshape.io/contact/';

    return generateMeta(title, description, url);
  }
};
</script>
