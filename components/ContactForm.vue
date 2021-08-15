<template>
  <div class="relative bg-white w-full">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <nuxt-img
          class="h-56 w-full object-cover lg:absolute lg:h-full"
          format="webp"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
    </div>
    <div class="relative pt-12 pb-16 sm:pt-16 lg:pr-16 lg:grid lg:grid-cols-2">
      <div class="lg:pr-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            All Hands on Deck
          </h2>
          <p class="mt-4 text-lg sm:mt-3">
            We run a tight ship. From training to full-stack development, Ship
            Shape is invested in your project the moment you reach out to us.
            Small and large, we want to be a part of your future.
          </p>
        </div>
        <form
          class="
            contact-form
            mt-9
            grid grid-cols-1
            gap-y-6
            sm:grid-cols-2 sm:gap-x-8
          "
          name="contact-us"
          netlify-honeypot="bot-field"
          netlify
          @submit.prevent="sendContactRequest"
        >
          <input type="hidden" name="form-name" value="contact-us" />
          <fieldset class="sm:col-span-2">
            <div class="error-message">
              <p v-for="error in errors.all()" :key="error">
                {{ error }}
              </p>
            </div>

            <div class="bot-field">
              <label
                >Don’t fill this out if you're human: <input name="bot-field"
              /></label>
            </div>
          </fieldset>

          <div class="sm:col-span-2">
            <label for="name" class="block text-sm font-medium text-navy">
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
                  focus:ring-navy-card-light focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-navy"
              >Email</label
            >
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
                  focus:ring-navy-card-light focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-navy"
              >Company</label
            >
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
                  focus:ring-navy-card-light focus:border-navy-card-light
                  border-grey-light
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label
                class="block text-sm font-medium text-navy"
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
          <fieldset class="sm:col-span-2">
            <legend class="block text-sm font-medium text-navy">
              Expected budget
            </legend>
            <div class="mt-4 grid grid-cols-1 gap-y-4">
              <div class="flex items-center">
                <input
                  id="budget_under_25k"
                  v-model="budget"
                  name="budget"
                  value="under_25k"
                  type="radio"
                  class="
                    focus:ring-navy-card-light
                    h-4
                    w-4
                    text-navy
                    border-grey-light
                  "
                />
                <label for="budget_under_25k" class="ml-3">
                  <span class="block text-sm text-navy">Less than $25,000</span>
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="budget_25k-50k"
                  v-model="budget"
                  name="budget"
                  value="25k-50k"
                  type="radio"
                  class="
                    focus:ring-navy-card-light
                    h-4
                    w-4
                    text-navy
                    border-grey-light
                  "
                />
                <label for="budget_25k-50k" class="ml-3">
                  <span class="block text-sm text-navy">$25,000 – $50,000</span>
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="budget_50k-100k"
                  v-model="budget"
                  name="budget"
                  value="50k-100k"
                  type="radio"
                  class="
                    focus:ring-navy-card-light
                    h-4
                    w-4
                    text-navy
                    border-grey-light
                  "
                />
                <label for="budget_50k-100k" class="ml-3">
                  <span class="block text-sm text-navy">
                    $50,000 – $100,000
                  </span>
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="budget_100k-250k"
                  v-model="budget"
                  name="budget"
                  value="100k-250k"
                  type="radio"
                  class="
                    focus:ring-navy-card-light
                    h-4
                    w-4
                    text-navy
                    border-grey-light
                  "
                />
                <label for="budget_100k-250k" class="ml-3">
                  <span class="block text-sm text-navy">
                    $100,000 – $250,000
                  </span>
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="budget_over_250k"
                  v-model="budget"
                  name="budget"
                  value="over_250k"
                  type="radio"
                  class="
                    focus:ring-navy-card-light
                    h-4
                    w-4
                    text-navy
                    border-grey-light
                  "
                />
                <label for="budget_over_250k" class="ml-3">
                  <span class="block text-sm text-navy">$250,000+</span>
                </label>
              </div>
            </div>
          </fieldset>
          <div class="text-right sm:col-span-2">
            <input
              :disabled="!formValid"
              type="submit"
              value="Send Message"
              class="
                btn btn-red
                cursor-pointer
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                transition-colors
                font-medium
                rounded-md
                focus:outline-none
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            />

            <flash-message class="flex flex-grow mt-8" />
          </div>
        </form>
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
      budget: 'under_25k'
    };
  },
  computed: {
    formValid() {
      return Object.keys(this.fields).every((field) => {
        return this.fields[field] && this.fields[field].valid;
      });
    }
  },
  methods: {
    sendContactRequest() {
      if (this.formValid) {
        return fetch('https://shipshape.io/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: _encode({ 'form-name': 'contact-us', ...this.$data })
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
