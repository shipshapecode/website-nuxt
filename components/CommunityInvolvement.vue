<template>
  <div class="section flex flex-wrap justify-center bg-grey-transparent">
    <div class="section-content flex flex-wrap justify-center">
      <div class="max-w-4xl pb-24 w-full">
        <h2 class="text-center">Community Involvement</h2>

        <p>
          We believe that every new connection or project is a learning
          opportunity for us all. Ship Shape remains a staple in the community
          by sharing our expertise and investing in the Ember.js framework.
        </p>
      </div>

      <div class="flex flex-wrap lg:flex-no-wrap">
        <div class="w-full lg:mr-12 lg:w-1/3">
          <div class="text-center w-full">
            <img
              class="ember-image inline p-8"
              src="/img/emberconf-2020.png"
              alt="EmberConf 2020 Ship Shape Sticker"
            />
          </div>

          <h3>EmberConf 2020</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            We recorded a talk for virtual EmberConf 2020, Talking to Your Dog
            with Ember, where we explored using the Web Audio API to translate
            dog barks into something more meaningful.
          </p>

          <p>
            <a class="learn-more" href="https://youtu.be/Kw0V9HvMpI4">
              Learn more
              <inline-svg
                class="h-4 inline mb-1 w-4"
                src="/svgs/angle-right.svg"
              />
            </a>
          </p>
        </div>

        <div class="w-full lg:mr-12 lg:w-1/3">
          <div class="text-center w-full">
            <inline-svg
              class="ember-image inline p-12"
              src="/svgs/emberconf/2019.svg"
            />
          </div>

          <h3>EmberConf 2019</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            We gave a BonusConf talk at EmberConf 2019, Ember Data - It's Not
            Just for JSON API Anymore, in which we detailed several approaches
            to use Ember Data with non-standard APIs.
          </p>

          <p>
            <a class="learn-more" href="https://youtu.be/u5onNDpt8ks">
              Learn more
              <inline-svg
                class="h-4 inline mb-1 w-4"
                src="/svgs/angle-right.svg"
              />
            </a>
          </p>
        </div>

        <div class="w-full lg:w-1/3">
          <div class="text-center w-full">
            <img
              class="ember-image inline p-8"
              src="/img/ember-nyc.png"
              alt="Ember.JS NYC Tomster"
            />
          </div>

          <h3>Ember.js NYC</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            We have given talks at the Ember.JS NYC meetup a couple times, once
            was
            <a
              href="https://www.youtube.com/watch?v=ax6QI-WryH0&feature=youtu.be&t=4805"
            >
              an abridged version of our EmberConf 2018 workshop on performance,
            </a>
            and another was a dry run of our EmberConf 2019 talk
            <a
              href="https://www.youtube.com/watch?v=vnMvhykrW1A&feature=youtu.be&t=1365"
            >
              Ember Data - It's Not Just for JSON API Anymore.
            </a>
          </p>

          <p>
            <a class="learn-more" href="https://www.meetup.com/EmberJS-NYC/">
              Learn more
              <inline-svg
                class="h-4 inline mb-1 w-4"
                src="/svgs/angle-right.svg"
              />
            </a>
          </p>
        </div>
      </div>

      <div class="flex flex-wrap lg:flex-no-wrap">
        <div class="w-full lg:mr-12 lg:w-1/3">
          <div class="text-center w-full">
            <inline-svg
              class="ember-image inline p-4"
              src="/svgs/ember-cares.svg"
            />
          </div>

          <h3>Ember Cares</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            We spearheaded the efforts behind Ember Cares in 2017, where we
            created a No Shave November Tomster and Breast Cancer Awareness Zoey
            and sold merch to raise money for the Cancer Research Institute.
          </p>

          <p>
            <a class="learn-more" href="https://embercares.com/">
              Learn more
              <inline-svg
                class="h-4 inline mb-1 w-4"
                src="/svgs/angle-right.svg"
              />
            </a>
          </p>
        </div>

        <div class="w-full lg:mr-12 lg:w-1/3">
          <div class="text-center w-full">
            <inline-svg
              class="ember-image inline p-12"
              src="/svgs/emberconf.svg"
            />
          </div>

          <h3>EmberConf 2018</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            We ran the Improving Ember App Performance workshop at EmberConf
            2018, where we explored techniques to reduce your bundle size,
            improving your rendering performance, and cache your assets to make
            reloads blazing fast.
          </p>

          <p>
            <a
              class="learn-more"
              href="https://2018.emberconf.com/schedule.html#e-improving-ember-app-performance"
            >
              Learn more
              <inline-svg
                class="h-4 inline mb-1 w-4"
                src="/svgs/angle-right.svg"
              />
            </a>
          </p>
        </div>

        <div class="w-full lg:w-1/3">
          <div class="text-center w-full">
            <img
              class="ember-image inline p-8"
              src="/img/ember-dc.png"
              alt="Ember.JS DC Tomster in front of the White House"
            />
          </div>

          <h3>Ember.JS DC</h3>

          <p class="h-auto lg:h-64 xl:h-48">
            We organize the Ember.JS DC meetup, and we try to spread the love
            throughout Virginia and Maryland as well, alternating meeting spots.
            If you are an Ember enthusiast, of any level, we would love to have
            you come learn with us!
          </p>

          <div>
            <p>
              <a class="learn-more" href="https://www.meetup.com/Ember-JS-DC/">
                Learn more
                <inline-svg
                  class="h-4 inline mb-1 w-4"
                  src="/svgs/angle-right.svg"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ember-image {
  height: 200px;
  width: auto;

  @media only screen and (max-width: 600px) {
    height: 175px;
  }
}
</style>
