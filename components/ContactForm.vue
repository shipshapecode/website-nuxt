<template>
  <form
    @submit.prevent="sendContactRequest"
    class="cd-form floating-labels"
    name="contact-us"
    netlify-honeypot="bot-field"
    netlify
  >
    <fieldset>
      <div
        class="error-message"
      >
        <p
          v-for="error in errors.all()"
          :key="error"
        >
          {{ error }}
        </p>
      </div>
      <legend>Personal Info</legend>

      <div class="bot-field">
        <label>Don’t fill this out if you're human: <input name="bot-field"></label>
      </div>

      <div class="icon">
        <label
          :class="{'float': name}"
          class="cd-label"
          for="name"
        >
          Name
        </label>

        <input
          id="name"
          v-model="name"
          v-validate
          class="user"
          type="text"
          name="name"
          required
        >
      </div>

      <div class="icon">
        <label
          :class="{'float': company}"
          class="cd-label"
          for="company"
        >
          Company
        </label>

        <input
          id="company"
          v-model="company"
          class="company"
          type="text"
          name="company"
        >
      </div>

      <div class="icon">
        <label
          :class="{'float': email}"
          class="cd-label"
          for="email"
        >
          Email
        </label>

        <input
          id="email"
          v-model="email"
          v-validate
          class="email"
          type="email"
          name="email"
          required
        >
      </div>
    </fieldset>

    <fieldset>
      <legend>Project Info</legend>

      <!--div>
        <h5>Budget</h5>

        <p class="cd-select icon">
          <select class="budget">
            <option value="0">
              Select Budget
            </option>
            <option value="1">
              &lt; $5000
            </option>
            <option value="2">
              $5000 - $10000
            </option>
            <option value="3">
              &gt; $10000
            </option>
          </select>
        </p>
      </div-->

      <div>
        <h5>Project type</h5>

        <ul class="cd-form-list">
          <li>
            <input
              id="radio-1"
              v-model="projectType"
              type="radio"
              name="radio-button"
              value="Open Source"
            >
            <label for="radio-1">
              Open Source
            </label>
          </li>

          <li>
            <input
              id="radio-2"
              v-model="projectType"
              type="radio"
              name="radio-button"
              value="Training"
            >
            <label for="radio-2">
              Training
            </label>
          </li>

          <li>
            <input
              id="radio-3"
              v-model="projectType"
              type="radio"
              name="radio-button"
              value="Development"
            >
            <label for="radio-3">
              Development
            </label>
          </li>
        </ul>
      </div>

      <div class="icon">
        <label
          class="cd-label"
          :class="{'float': description}"
          for="description"
        >
          Project description
        </label>
        <textarea
          id="description"
          v-model="description"
          v-validate
          class="message"
          name="description"
          required
        />
      </div>

      <div>
        <input
          :disabled="!formValid"
          type="submit"
          value="Send Message"
        >
      </div>
    </fieldset>
  </form>
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
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  export default {
    data() {
      return {
        company: '',
        description: '',
        email: '',
        name: '',
        projectType: 'Open Source'
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
          const data = this.$data;
          data['form-name'] = 'contact-us';
          const body = _encode(data);
          debugger;

          return this.$axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: body,
            url: '/'
          });
        }
      }
    }
  };
</script>

<style>
  .bot-field {
    display: none;
  }

  .cd-form {
    width: 90%;
    max-width: 600px;
    margin: 4em auto;
  }

  .cd-form::after {
    clear: both;
    content: "";
    display: table;
  }

  .cd-form fieldset {
    margin: 24px 0;
  }

  .cd-form legend {
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ecf0f1;
  }

  .cd-form div {
    /* form element wrapper */
    position: relative;
    margin: 20px 0;
  }

  .cd-form h4, .cd-form .cd-label {
    color: #94aab0;
    margin-bottom: 10px;
  }

  .cd-form .cd-label {
    display: block;
  }

  .cd-form input, .cd-form textarea, .cd-form select, .cd-form label {
    color: #2b3e51;
  }

  .cd-form input[type="text"],
  .cd-form input[type="email"],
  .cd-form textarea,
  .cd-form select,
  .cd-form legend {
    display: block;
    width: 100%;
    appearance: none;
  }

  .cd-form input[type="text"],
  .cd-form input[type="email"],
  .cd-form textarea,
  .cd-form select {
    /* general style for input elements */
    padding: 12px;
    border: 1px solid #cfd9db;
    background-color: #ffffff;
    border-radius: .25em;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .cd-form input[type="text"]:focus,
  .cd-form input[type="email"]:focus,
  .cd-form textarea:focus,
  .cd-form select:focus {
    outline: none;
    border-color: #2c97de;
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
  }

  .cd-form .cd-select {
    /* select element wapper */
    position: relative;
  }

  .cd-form .cd-select::after {
    /* arrow icon for select element */
    content: '';
    position: absolute;
    z-index: 1;
    right: 16px;
    top: 50%;
    margin-top: -8px;
    display: block;
    width: 16px;
    height: 16px;
    background: url("/img/contact/cd-icon-arrow.svg") no-repeat center center;
    pointer-events: none;
  }

  .cd-form select {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  .cd-form select::-ms-expand {
    display: none;
  }

  .cd-form .cd-form-list {
    margin-top: 16px;
  }

  .cd-form .cd-form-list::after {
    clear: both;
    content: "";
    display: table;
  }

  .cd-form .cd-form-list li {
    /* wrapper for radio and checkbox input types */
    display: inline-block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0 26px 16px 0;
    float: left;
  }

  .cd-form input[type=radio],
  .cd-form input[type=checkbox] {
    /* hide original check and radio buttons */
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 2;
  }

  .cd-form input[type="radio"] + label,
  .cd-form input[type="checkbox"] + label {
    padding-left: 24px;
  }

  .cd-form input[type="radio"] + label::before,
  .cd-form input[type="radio"] + label::after,
  .cd-form input[type="checkbox"] + label::before,
  .cd-form input[type="checkbox"] + label::after {
    /* custom radio and check boxes */
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -8px;
    width: 16px;
    height: 16px;
  }

  .cd-form input[type="radio"] + label::before,
  .cd-form input[type="checkbox"] + label::before {
    border: 1px solid #cfd9db;
    background: #ffffff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  }

  .cd-form input[type="radio"] + label::before,
  .cd-form input[type="radio"] + label::after {
    border-radius: 50%;
  }

  .cd-form input[type="checkbox"] + label::before,
  .cd-form input[type="checkbox"] + label::after {
    border-radius: .25em;
  }

  .cd-form input[type="radio"] + label::after,
  .cd-form input[type="checkbox"] + label::after {
    background-color: #2c97de;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
    display: none;
  }

  .cd-form input[type="radio"] + label::after {
    /* custom image for radio button */
    background-image: url("/img/contact/cd-icon-radio.svg");
  }

  .cd-form input[type="checkbox"] + label::after {
    /* custom image for checkbox */
    background-image: url("/img/contact/cd-icon-check.svg");
  }

  .cd-form input[type="radio"]:focus + label::before,
  .cd-form input[type="checkbox"]:focus + label::before {
    /* add focus effect for radio and check buttons */
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.6);
  }

  .cd-form input[type="radio"]:checked + label::after,
  .cd-form input[type="checkbox"]:checked + label::after {
    display: block;
  }

  .cd-form input[type="radio"]:checked + label::before,
  .cd-form input[type="radio"]:checked + label::after,
  .cd-form input[type="checkbox"]:checked + label::before,
  .cd-form input[type="checkbox"]:checked + label::after {
    -webkit-animation: cd-bounce 0.3s;
    -moz-animation: cd-bounce 0.3s;
    animation: cd-bounce 0.3s;
  }

  .cd-form textarea {
    min-height: 200px;
    resize: vertical;
    overflow: auto;
  }

  .cd-form input[type="submit"] {
    /* button style */
    border: none;
    background: #2c97de;
    border-radius: .25em;
    padding: 16px 20px;
    color: #ffffff;
    font-weight: bold;
    float: right;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }

  .no-touch .cd-form input[type="submit"]:hover {
    background: #42a2e1;
  }

  .cd-form input[type="submit"]:focus {
    outline: none;
    background: #2b3e51;
  }

  .cd-form input[type="submit"]:active {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -o-transform: scale(0.9);
    transform: scale(0.9);
  }

  .cd-form [required] {
    background: url("/img/contact/cd-required.svg") no-repeat top right;
  }

  .cd-form .error-message p {
    background: #e94b35;
    color: #ffffff;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: .25em;
    padding: 16px;
  }

  .cd-form .error {
    border-color: #e94b35 !important;
  }

  @media only screen and (min-width: 600px) {
    .cd-form div {
      /* form element wrapper */
      margin: 32px 0;
    }

    .cd-form legend + div {
      /* reduce margin-top for first form element after the legend */
      margin-top: 20px;
    }

    .cd-form h4, .cd-form .cd-label {
      margin-bottom: 10px;
    }

    .cd-form input[type="text"],
    .cd-form input[type="email"],
    .cd-form textarea,
    .cd-form select {
      padding: 16px;
    }
  }

  @-webkit-keyframes cd-bounce {
    0%, 100% {
      -webkit-transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.8);
    }
  }

  @-moz-keyframes cd-bounce {
    0%, 100% {
      -moz-transform: scale(1);
    }
    50% {
      -moz-transform: scale(0.8);
    }
  }

  @keyframes cd-bounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
  }

  /* --------------------------------
  Custom icons
  -------------------------------- */
  .cd-form .icon input, .cd-form .icon select, .cd-form .icon textarea {
    padding-left: 54px !important;
  }

  .cd-form .user {
    background: url("/img/contact/cd-icon-user.svg") no-repeat 16px center;
  }

  .cd-form [required].user {
    background: url("/img/contact/cd-icon-user.svg") no-repeat 16px center, url("/img/contact/cd-required.svg") no-repeat top right;
  }

  .cd-form .company {
    background: url("/img/contact/cd-icon-company.svg") no-repeat 16px center;
  }

  .cd-form [required].company {
    background: url("/img/contact/cd-icon-company.svg") no-repeat 16px center, url("/img/contact/cd-required.svg") no-repeat top right;
  }

  .cd-form .email {
    background: url("/img/contact/cd-icon-email.svg") no-repeat 16px center;
  }

  .cd-form [required].email {
    background: url("/img/contact/cd-icon-email.svg") no-repeat 16px center, url("/img/contact/cd-required.svg") no-repeat top right;
  }

  .cd-form .budget {
    background: url("/img/contact/cd-icon-budget.svg") no-repeat 16px center;
  }

  .cd-form .message {
    background: url("/img/contact/cd-icon-message.svg") no-repeat 16px 16px;
  }

  .cd-form [required].message {
    background: url("/img/contact/cd-icon-message.svg") no-repeat 16px 16px, url("/img/contact/cd-required.svg") no-repeat top right;
  }

  /* --------------------------------
  Floating labels
  -------------------------------- */
  .floating-labels div {
    margin: 28px 0;
  }

  .floating-labels .cd-label {
    position: absolute;
    top: 6px;
    left: 16px;
    cursor: text;
    transition: top 0.2s, left 0.2s, font-size 0.2s;
  }

  .floating-labels .icon .cd-label {
    left: 56px;
  }

  .floating-labels .cd-label.float {
    /* move label out the input field */
    font-size: 0.8rem;
    top: -24px;
    left: 0 !important;
  }

  @media only screen and (min-width: 600px) {
    .floating-labels legend + div {
      /* reduce margin-top for first form element after the legend */
      margin-top: 16px;
    }

    .floating-labels .cd-label {
      top: 10px;
    }
  }
</style>
