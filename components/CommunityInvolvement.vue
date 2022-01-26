<template>
  <div class="section flex flex-wrap justify-center">
    <div class="section-content flex flex-wrap justify-center">
      <div class="max-w-4xl pb-24 w-full">
        <h2>We ❤️ the Ember.js Community</h2>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap">
        <div class="w-full lg:mr-12 lg:w-1/3">
          <div class="text-center w-full">
            <nuxt-img
              class="ember-image inline p-8"
              format="webp"
              height="272"
              src="/img/emberconf-2020.png"
              width="290"
              alt="EmberConf 2020 Ship Shape Sticker"
            />
          </div>

          <h3 class="text-2xl">EmberConf 2020</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            At the virtual EmberConf 2020, we presented
            <a href="https://www.youtube.com/watch?v=Kw0V9HvMpI4"
              >Talking to Your Dog with Ember</a
            >
            with Ember using the Web Audio API to translate dog barks into
            something more meaningful.
          </p>
        </div>

        <div class="w-full lg:mr-12 lg:w-1/3">
          <div class="text-center w-full">
            <nuxt-img
              class="ember-image inline p-12"
              src="/svgs/emberconf/2019.svg"
            />
          </div>

          <h3 class="text-2xl">EmberConf 2019</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            Check out
            <a href="https://www.youtube.com/watch?v=u5onNDpt8ks"
              >Ember Data - It's Not Just for JSON API Anymore</a
            >, our BonusConf talk at EmberConf 2019, and learn about several
            approaches to using Ember Data with non-standard APIs.
          </p>
        </div>

        <div class="w-full lg:w-1/3">
          <div class="text-center w-full">
            <nuxt-img
              class="ember-image inline p-8"
              format="webp"
              height="272"
              src="/img/ember-nyc.png"
              width="156"
              alt="Ember.JS NYC Tomster"
            />
          </div>

          <h3>Ember.js NYC</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            The Ember.js NYC Meetup has hosted Ship Shape many times. Check out
            <a
              href="https://www.youtube.com/watch?v=ax6QI-WryH0&feature=youtu.be&t=4805"
              >this presentation</a
            >, an abridged version of our EmberConf 2018 performance workshop.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ember-image {
  height: 250px;
  width: auto;

  @media only screen and (max-width: 600px) {
    height: 225px;
  }
}
</style>
