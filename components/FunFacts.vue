<template>
  <section class="section flex flex-wrap justify-center bg-white">
    <div class="section-content" data-aos="fade-right" data-aos-delay="400">
      <h2 class="pb-20">Fun facts about us</h2>
      <ul class="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <li class="bg-blue-light p-5 rounded-md lg:p-12">
          <nuxt-img
            class="h-auto m-auto my-4 rounded-lg w-32 lg:w-44"
            format="webp"
            height="336"
            src="/img/hero-images/www.png"
            width="336"
            alt="Ship Shape's octopus mascot wearing headphones and holding a tumbler and microphone"
          />
          <p>
            We started a
            <a href="https://www.whiskeywebandwhatnot.fm/"
              >podcast for developers</a
            >
            to share our love for whiskey, web development, and whatnot.
          </p>
        </li>
        <li
          class="
            bg-blue-light
            p-5
            rounded-md
            lg:p-12
            flex flex-col
            place-content-center
          "
        >
          <a
            href="https://ecologi.com/ship-shape?r=60427b02d9eb6b001d969215"
            target="_blank"
            rel="noopener noreferrer"
            title="View our Ecologi profile"
            class="mx-auto my-4 block w-48 lg:w-64"
          >
            <img
              alt="We offset our carbon footprint via Ecologi"
              src="https://api.ecologi.com/badges/cpw/60427b02d9eb6b001d969215?black=true&landscape=true"
              class="w-48 lg:w-64"
            />
          </a>
          <p class="text-center">
            We run a
            <a href="https://ecologi.com/ship-shape">climate positive</a>
            shop.
          </p>
        </li>
        <li class="bg-blue-light p-5 rounded-md lg:p-12">
          <nuxt-img
            class="h-auto m-auto max-w-2xl my-4 rounded-lg w-36 lg:w-48"
            format="webp"
            height="322"
            src="/img/about/octocat.png"
            width="386"
            alt="GitHub's mascot, Octocat, who has cat ears and tentacle legs"
          />

          We consistently contribute to the
          <nuxt-link to="/open-source">open-source community</nuxt-link>.
        </li>
      </ul>
    </div>
  </section>
</template>
