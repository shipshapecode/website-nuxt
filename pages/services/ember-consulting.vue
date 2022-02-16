<template>
  <div itemscope itemtype="http://schema.org/Service">
    <HeroBlock hero-classes="ember-consulting waves ember-waves !pb-48 !pt-20">
      <template #content>
        <h1 itemprop="name" class="text-5xl leading-tight">
          Build fast, reliable apps with expert Ember.js development,
          consulting, and training
        </h1>
        <div>
          <nuxt-link class="btn btn-red w-full lg:w-auto" to="/contact/">
            Let's get started
          </nuxt-link>
        </div>
      </template>
      <template #icon>
        <nuxt-img
          class="h-auto m-auto max-w-2xl w-full"
          format="webp"
          height="1058"
          src="/img/hero-images/ember-consulting.png"
          width="1344"
          alt=""
        />
      </template>
    </HeroBlock>

    <AllAboutSpecialty
      :text="specialtyDetails.text"
      :benefits="specialtyDetails.benefits"
      :flip-paragraphs="true"
    >
      <template #unboxed-text>
        <p class="text-white lg:content-center lg:place-self-center">
          For these reasons, we often recommend it for
          <nuxt-link to="/work/expel">enterprise app development</nuxt-link>,
          in-depth apps and dashboards, responsive web applications, and other
          projects for large firms.
          <br />
          <br />
          If your team is working on an Ember.js app or considering a greenfield
          project where this framework could be a good fit, turn to our top-tier
          Ember experts for a full range of support, from consulting to
          development to team training.
        </p>
      </template>
    </AllAboutSpecialty>

    <div class="section flex flex-wrap justify-center" data-aos="fade-down">
      <div class="section-content">
        <h2 class="pb-8 text-4xl">Ember.js in action</h2>
        <div>
          <div
            class="
              space-y-24
              lg:grid lg:grid-flow-col lg:space-y-0 lg:space-x-6
            "
          >
            <div class="bg-blue-light rounded-b-lg" data-aos="flip-down">
              <div
                class="
                  bg-red
                  flex
                  justify-center
                  pt-8
                  px-8
                  relative
                  rounded-t-lg
                  lg:pt-12 lg:px-12
                "
              >
                <div class="bg-white h-48 rounded-t-lg w-full">
                  <nuxt-img
                    class="
                      object-cover object-top
                      h-full
                      max-w-full
                      rounded-t-lg
                      w-full
                    "
                    src="/img/work/expel/nist-overview.png"
                    alt="An overview of NIST scores, broken down by category and visualized in a radar graph."
                  />
                </div>
              </div>

              <div class="p-8 relative lg:p-12">
                <inline-svg
                  class="logo-navy h-8 max-w-full mb-8 self-start w-auto"
                  src="/svgs/clients/expel.svg"
                />
                <p class="mb-16">
                  Expel offers 24x7 security monitoring and response for cloud,
                  hybrid and on-premises environments...
                </p>
                <nuxt-link class="learn-more" to="/work/expel/">
                  Dive deeper
                  <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
                </nuxt-link>
              </div>
            </div>

            <div
              class="bg-blue-light relative rounded-b-lg"
              data-aos="flip-down"
              data-aos-delay="200"
            >
              <div
                class="
                  bg-red
                  flex
                  justify-center
                  pt-8
                  px-8
                  relative
                  rounded-t-lg
                  lg:pt-12 lg:px-12
                "
              >
                <div class="bg-white h-48 rounded-t-lg w-full">
                  <nuxt-img
                    class="object-top h-full max-w-full rounded-t-lg w-full"
                    src="/svgs/data-graphic.svg"
                  />
                </div>
              </div>

              <div class="relative p-8 lg:p-12">
                <inline-svg
                  class="logo-navy h-8 max-w-full mb-8 self-start w-auto"
                  src="/svgs/clients/netflix.svg"
                />
                <p class="mb-16">
                  Netflix is the world's leading internet entertainment service
                  with more than 130 million memberships in over 190
                  countries...
                </p>
                <nuxt-link class="learn-more" to="/work/netflix/">
                  Dive deeper
                  <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
                </nuxt-link>
              </div>
            </div>

            <div
              class="bg-blue-light relative rounded-b-lg"
              data-aos="flip-down"
              data-aos-delay="400"
            >
              <div
                class="
                  bg-red
                  flex
                  justify-center
                  pt-8
                  px-8
                  relative
                  rounded-t-lg
                  lg:pt-12 lg:px-12
                "
              >
                <div class="bg-jebbit-green h-48 rounded-t-lg w-full">
                  <nuxt-img
                    class="
                      object-cover object-top
                      h-full
                      max-w-full
                      rounded-t-lg
                      w-full
                    "
                    src="/img/work/jebbit/jebbit-case-study-screenshot.png"
                    alt="Jebbit Experience Builder Legacy"
                  />
                </div>
              </div>
              <div class="p-8 relative lg:p-12">
                <inline-svg
                  class="logo-navy h-8 max-w-full mb-8 self-start w-auto"
                  src="/svgs/clients/jebbit.svg"
                />
                <p class="mb-16">
                  Jebbit is an enterprise software platform that enables a
                  future of total data transparency between brands and...
                </p>
                <nuxt-link class="learn-more" to="/work/jebbit/">
                  Dive deeper
                  <inline-svg class="h-4 inline w-6" src="/svgs/arrow.svg" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section flex flex-wrap justify-center" data-aos="fade-down">
      <div
        class="
          section-content
          gap-20
          grid grid-cols-1
          items-center
          lg:gap-32 lg:grid-cols-2
        "
      >
        <div>
          <nuxt-img
            class="h-auto m-auto max-w-2xl w-full"
            format="webp"
            height="792"
            src="/img/hero-images/mentoring.png"
            width="1312"
            alt=""
          />
        </div>
        <div>
          <h3>We’ll never leave you high and dry</h3>
          <p>
            Ship Shape is committed to leaving every engineering team we work
            with better than we found it. Not only do we build robust, reliable
            software, but we also train your staff along the way to understand,
            maintain, and improve your product after our engagement ends.
          </p>
        </div>
      </div>
    </div>

    <SingleQuote :testimonial="testimonial" />

    <CommunityInvolvement />

    <WaveMoreLinks class="md:px-20" />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';
import {
  head,
  specialtyDetails,
  testimonial
} from '~/content/specialties/ember.js';

export default {
  speedkitComponents: {
    AllAboutSpecialty: () => import('@/components/AllAboutSpecialty'),
    CommunityInvolvement: () => import('@/components/CommunityInvolvement'),
    HeroBlock: () => import('@/components/HeroBlock'),
    SingleQuote: () => import('@/components/SingleQuote'),
    WaveMoreLinks: () => import('@/components/WaveMoreLinks')
  },

  data() {
    return { head, testimonial, specialtyDetails };
  },

  head() {
    const { title, description, url } = head;

    return generateMeta(title, description, url);
  }
};
</script>

<style lang="scss">
.ember-image {
  height: 250px;
  width: auto;
}

.logo-navy path {
  fill: var(--navy);
}
</style>
