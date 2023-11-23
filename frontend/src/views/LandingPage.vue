<script setup lang="ts">
import FaqSection from "@/components/FaqSection.vue";
</script>

<template>
  <div class="">
    <div class="font-montreal px-4 md:px-10">
      <section class="hero-section md:w-4/5 lg:w-3/4 mx-auto">
        <div class="text-center">
          <h2 class="font-medium">
            Unleash Your
            <span class="font-dancing font-bold">Creativity</span>, <br />
            Sell Your
            <span class="font-dancing font-bold">Style</span>
          </h2>
          <h6
            class="text-neutral text-lg md:text-xl py-3 md:w-3/4 mx-auto mb-4 md:mb-8 font-light"
          >
            Join our Fashion Marketplace and turn your designs into a global
            sensation. Your creativity, our stage
          </h6>
          <router-link
            to="/auth/signup"
            class="bg-primary text-white py-3 px-10 md:px-16 text-base rounded-3xl"
          >
            Get Started
          </router-link>
        </div>
        <div class="w-full mx-auto text-center mt-20">
          <h4 class="text-neutral text-lg pt-4 mb-6">Trusted by</h4>
          <div class="grid grid-cols-2 md:flex justify-items-center gap-8">
            <div class="">
              <img src="../assets/companies/company1.svg" alt="luminous" />
            </div>
            <div class="">
              <img src="../assets/companies/company2.svg" alt="focalpoint" />
            </div>
            <div class="">
              <img src="../assets/companies/company3.svg" alt="luminous" />
            </div>
            <div class="">
              <img src="../assets/companies/company4.svg" alt="focalpoint" />
            </div>
            <div class="">
              <img src="../assets/companies/company5.svg" alt="luminous" />
            </div>
            <div class="">
              <img src="../assets/companies/company6.svg" alt="focalpoint" />
            </div>
          </div>
        </div>
      </section>
      <section class="why-section my-5">
        <div class="text-center">
          <h6 class="uppercase text-sm text-[#864622]">why karpah</h6>
          <h2 class="pt-2 pb-10">
            Join Karpah <br />
            Reach a Global Audience
          </h2>
        </div>
        <div class="flex flex-col md:flex-row gap-8 justify-center">
          <div class="rounded-3xl bg-[#F3EDE9] py-5 px-5 w-full">
            <h4 class="mb-4 mt-2">
              Showcase Your Products to a Worldwide Audience
            </h4>
            <p class="text-[#4D4D4D] text-base font-light">
              As a seller on our platform, you'll have access to showcase your
              products to a global audience of fashion-forward shoppers who are
              actively looking for unique and high-quality clothing,
              accessories, and footwear
            </p>
            <div
              class="bg-white flex justify-center items-center mt-8 rounded-3xl"
            >
              <img
                class="md:w-[300px]"
                src="../assets/landing-page/product.png"
                alt=""
              />
            </div>
          </div>
          <div class="rounded-3xl bg-[#F3EDE9] py-5 px-5 w-full">
            <h4 class="mb-4 mt-2">
              Easy-to-Use platform designed for your Success
            </h4>
            <p class="text-[#4D4D4D] text-base font-light">
              As a seller on our platform, you'll have access to showcase your
              products to a global audience of fashion-forward shoppers who are
              actively looking for unique and high-quality clothing,
              accessories, and footwear
            </p>
            <div
              class="bg-white flex justify-center items-center mt-8 rounded-3xl"
            >
              <img
                class="md:w-[300px]"
                src="../assets/landing-page/revenue.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="rounded-3xl bg-[#F3EDE9] flex flex-col md:flex-row gap-5 items-center py-5 px-5 mt-10"
        >
          <div class="md:w-5/12">
            <h4 class="mb-3 mt-2">
              Showcase Your Products to a Worldwide Audience
            </h4>
            <p class="text-[#4D4D4D] text-base font-light">
              As a seller on our platform, you'll have access to showcase your
              products to a global audience of fashion-forward shoppers who are
              actively looking for unique and high-quality clothing,
              accessories, and footwear
            </p>
          </div>
          <div
            class="bg-white flex md:w-7/12 w-full py-5 justify-center items-center rounded-3xl"
          >
            <div class="w-[250px] md:w-[300px]">
              <img class="" src="../assets/landing-page/audience.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="explore-section my-20">
      <div class="text-center lg:w-3/4 mx-auto px-4 md:px-10 mb-10">
        <h6 class="uppercase text-sm text-[#864622]">explore karpah</h6>
        <h2 class="pt-2 pb-10">
          Elevate Your Sales: Explore the World of Fashion on Karpah
        </h2>
      </div>
      <div class="md:flex w-full">
        <div class="style bg-primary w-1/6 relative w-full h-[500px]">
          <div class="absolute style-img">
            <img src="../assets/landing-page/style1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 px-4 md:px-10">
      <FaqSection />
    </section>
    <section
      class="bg-[#29292B] h-[350px] ready-section text-white flex justify-center items-center text-center"
    >
      <div class="text-center">
        <h2 class="mb-8">
          Ready to Make Your Mark in Fashion?<br />
          Join us today!
        </h2>
        <router-link
          to="/auth/signup"
          class="bg-primary text-white py-3 px-10 md:px-16 text-base rounded-3xl"
        >
          Get Started
        </router-link>
      </div>
    </section>
    <section class="bg-[#29292B] border-t py-14 border-[#D9D9D9] px-4 md:px-10">
      <div
        class="flex justify-between flex-wrap gap-2 text-xs md:text-sm text-white font-light"
      >
        <div class="">
          <h6 class="text-xl font-">Join to our newsletter</h6>
          <p class="text-base text-[#FFFFFFCC]">
            Get product updates, company news, and more
          </p>
          <div class="my-5 flex gap-2">
            <input
              type="email"
              name="email"
              id="email"
              class="border border-[#FFFFFF33] bg-transparent text-white w-[250px] md:w-[270px] py-2 outline-none rounded-3xl px-2"
              placeholder="Enter your email"
            />
            <router-link
              to="/auth/signup"
              class="bg-white text-dark py-2 px-5 text-base rounded-3xl"
            >
              Subscribe
            </router-link>
          </div>
        </div>
        <div class="flex gap-16">
          <ul class="flex flex-col gap-5">
            <li class="uppercase text-sm text-[#FFFFFF80]">company</li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                Blog
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/community" class="text-lg text-white">
                Community
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                Contact
              </router-link>
            </li>
          </ul>
          <ul class="flex flex-col gap-5">
            <li class="uppercase text-sm text-[#FFFFFF80]">folllow us</li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                X - Twitter
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/community" class="text-lg text-white">
                Instagram
              </router-link>
            </li>
            <li class="text-[#FFFFFF80]">
              <router-link to="/" class="text-lg text-white">
                Facebook
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="bg-[#29292B] border-t border-[#D9D9D9] px-4 md:px-10">
      <div
        class="flex justify-between flex-wrap gap-2 my-8 text-xs md:text-sm text-neutral font-light"
      >
        <p class="">
          © 2023 Karpah. All rights reserved.
        </p>
        <div class="flex gap-2 md:gap-4">
          <router-link to="/" class="underline">Privacy policy</router-link>
          <router-link to="/" class="underline"
            >Terms and Condition</router-link
          >
        </div>
      </div>
      <div class="mt-20">
        <img src="../assets/landing-page/footer-logo.png" alt="" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero-section {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 60px;
    line-height: 110%;
    color: #1b1c1e;
    @include sm {
      font-size: 36px;
    }
  }
}
.why-section {
  h2 {
    font-size: 52px;
    line-height: 121%;
    color: #333;
    text-transform: capitalize;
    @include sm {
      font-size: 32px;
    }
  }
  h4 {
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    @include sm {
      font-size: 18px;
    }
  }
}
.explore-section {
  h2 {
    font-size: 52px;
    line-height: 121%;
    color: #333;
    text-transform: capitalize;
    @include sm {
      font-size: 32px;
    }
  }
}
.ready-section {
  h2 {
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    @include sm {
      font-size: 28px;
      line-height: 130%;
    }
  }
}
input::placeholder {
  color: #fff;
}
.style {
  /* position: relative; */
}
.style-img {
  display: inline-flex;
  transform: rotate(44.855deg);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  left: -280px;
  top: 0%;
}
</style>
