<template>
  <div
    id="contact-form"
    class="
      blob
      contact-form
      section
      waves
      white-waves
      flex
      w-full
      flex-wrap
      justify-center
    "
  >
    <div class="section-content flex flex-wrap justify-center">
      <div class="flex w-full flex-wrap items-center justify-center">
        <client-only>
          <ContactForm />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  head() {
    const title = 'Contact Our Software Consultants';
    const description =
      "Want to improve your products and people? Contact Ship Shape's software consultants to chat about custom app development, optimization, and training.";
    const url = 'https://shipshape.io/contact/';

    return generateMeta(title, description, url);
  }
};
</script>
