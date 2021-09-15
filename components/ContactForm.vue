<template>
  <div class="relative w-full">
    <div class="pt-12 lg:grid lg:grid-cols-2 lg:gap-x-64 lg:pb-64">
      <div class="w-full">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Get your product in <span class="italic">ship shape</span> with
          support from our trusted software consultants
        </h2>
        <p class="mt-4 text-lg sm:mt-3">
          As a full-stack development team, our goal is to be the last software
          consultant you ever need to hire. From custom app development, to
          mentoring and training, we’re here to tackle your next tech challenge.
          Reach out to share your goals and learn how we can help you reach
          them.
        </p>
      </div>

      <div class="w-full">
        <form
          class="
            contact-form
            mt-9
            grid grid-cols-1
            gap-y-6
            lg:grid-cols-2 lg:gap-x-6
          "
          data-netlify-recaptcha="true"
          name="contact-us"
          netlify-honeypot="bot-field"
          netlify
          @submit.prevent="sendContactRequest"
        >
          <div class="lg:col-span-2">
            <input type="hidden" name="form-name" value="contact-us" />
            <fieldset>
              <div class="error-message">
                <p v-for="error in errors.all()" :key="error">
                  {{ error }}
                </p>
              </div>

              <div class="bot-field">
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <label for="name" class="block text-sm font-bold text-navy">
              Name
            </label>
            <div class="mt-1">
              <input
                id="name"
                v-model="name"
                v-validate
                type="text"
                name="name"
                required
                class="
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  focus:outline-none
                  focus:ring-navy-card-light
                  focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-bold text-navy">
              Email
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                v-validate
                type="email"
                name="email"
                required
                autocomplete="email"
                class="
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  focus:outline-none
                  focus:ring-navy-card-light
                  focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              />
            </div>
          </div>

          <div>
            <label for="company" class="block text-sm font-bold text-navy">
              Company
            </label>
            <div class="mt-1">
              <input
                id="company"
                v-model="company"
                type="text"
                name="company"
                autocomplete="organization"
                class="
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  focus:outline-none
                  focus:ring-navy-card-light
                  focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              />
            </div>
          </div>

          <div>
            <label for="budget" class="block text-sm font-bold text-navy">
              Expected Budget
            </label>
            <select
              id="budget"
              v-model="budget"
              name="budget"
              class="
                mt-1
                block
                w-full
                pl-3
                pr-10
                py-2
                text-base
                border-grey-light
                focus:outline-none focus:ring-navy-card-light
                sm:text-sm
                rounded-md
              "
            >
              <option value="25k-50k">$25,000 – $50,000</option>
              <option value="50k-100k">$50,000 – $100,000</option>
              <option value="100k-250k">$100,000 – $250,000</option>
              <option value="over_250k">$250,000+</option>
            </select>
          </div>
          <div class="lg:col-span-2">
            <div class="flex justify-between">
              <label
                class="block text-sm font-bold text-navy"
                for="description"
              >
                How can we help you?
              </label>
            </div>
            <div class="mt-1">
              <textarea
                id="description"
                v-model="description"
                v-validate
                name="description"
                required
                rows="4"
                class="
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  focus:ring-navy-card-light focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              ></textarea>
            </div>
          </div>

          <input
            :disabled="!formValid"
            type="submit"
            value="Send Message"
            class="
              btn btn-red
              cursor-pointer
              inline-flex
              justify-center
              border border-transparent
              transition-colors
              font-medium
              rounded-md
              focus:outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          />

          <div class="text-xs">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            and
            <a href="https://policies.google.com/terms">Terms of Service</a>
            apply.
          </div>
        </form>
        <flash-message class="flex flex-grow mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Util function to encode data for netify forms
 * @param data
 * @returns {string}
 * @private
 */
function _encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function _successMessage() {
  this.flashSuccess("Thanks for contacting us! We'll be in touch shortly.");
  this.$ga.event({
    eventLabel: 'contact-form-submitted'
  });
}

function _errorMessage() {
  this.flashError('Something went wrong :(. Please refresh and try again.');
}

export default {
  data() {
    return {
      company: '',
      description: '',
      email: '',
      name: '',
      budget: '25k-50k'
    };
  },
  computed: {
    formValid() {
      return Object.keys(this.fields).every((field) => {
        return this.fields[field] && this.fields[field].valid;
      });
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy();
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },
  methods: {
    async sendContactRequest() {
      if (this.formValid) {
        const token = await this.$recaptcha.execute('submit');

        const data = { 'g-recaptcha-response': token, ...this.$data };
        return fetch('https://shipshape.io/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: _encode({ 'form-name': 'contact-us', ...data })
        })
          .then(_successMessage.bind(this))
          .catch(_errorMessage.bind(this));
      }
    }
  }
};
</script>

<style lang="scss">
.bot-field {
  display: none;
}

.contact-form {
  .error {
    @apply border-red;
  }

  .error-message p {
    @apply bg-red p-4 rounded-md text-center text-white;
  }
}

.flash__wrapper,
.flash__message {
  flex: 1 0 auto;
  margin: 0 !important;
  text-align: center;
}
</style>
