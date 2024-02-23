<script setup lang="ts">
import FaqSection from "@/components/FaqSection.vue";
import Footer from "@/components/Footer.vue";
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
    <section class="explore-section my-16 md:my-20">
      <div class="text-center lg:w-3/4 mx-auto px-4 md:px-10 mb-10">
        <h6 class="uppercase text-sm text-[#864622]">explore karpah</h6>
        <h2 class="pt-2 pb-5 md:pb-10">
          Elevate Your Sales: Explore the World of Fashion on Karpah
        </h2>
      </div>
      <div class="md:flex hidden w-full">
        <div class="style bg-primary flex justify-center z-50 flex w-full">
          <div class="style-img bg-img1"></div>
          <p class="text-white uppercase z-40 self-end text-xl">
            African styles
          </p>
        </div>
        <div class="style bg-[#9E6B4E] flex justify-center z-40 w-full">
          <div class="style-img bg-img2"></div>
          <p class="text-white uppercase z-40 self-end text-xl">
            African styles
          </p>
        </div>
        <div class="style bg-[#AE836B] flex justify-center z-20 w-full">
          <div class="style-img bg-img3"></div>
          <p class="text-white uppercase z-40 self-end text-xl">
            African styles
          </p>
        </div>
        <div class="style bg-[#C7AA99] z-10 flex justify-center w-full">
          <div class="style-img bg-img4"></div>
          <p class="text-white uppercase z-40 self-end text-xl">
            African styles
          </p>
        </div>
        <div class="style bg-[#D9C6BA] z-0 flex justify-center w-full">
          <div class="style-img bg-img5"></div>
          <p class="text-white uppercase z-40 self-end text-xl">
            African styles
          </p>
        </div>
      </div>
      <div class="styles md:hidden w-full">
        <div class="styles-slide">
          <img src="../assets/landing-page/style1.jpg" alt="style" />
          <img src="../assets/landing-page/style3.jpg" alt="style" />
          <img src="../assets/landing-page/style2.jpg" alt="style" />
          <img src="../assets/landing-page/style4.jpg" alt="style" />
          <img src="../assets/landing-page/style5.jpg" alt="style" />
        </div>
        <div class="styles-slide">
          <img src="../assets/landing-page/style1.jpg" alt="style" />
          <img src="../assets/landing-page/style3.jpg" alt="style" />
          <img src="../assets/landing-page/style2.jpg" alt="style" />
          <img src="../assets/landing-page/style4.jpg" alt="style" />
          <img src="../assets/landing-page/style5.jpg" alt="style" />
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
    <Footer />
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
    color: #1b1c1e;
    text-transform: capitalize;
    @include sm {
      font-size: 28px;
    }
    @include md {
      font-size: 32px;
    }
  }
}
.ready-section {
  h2 {
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    @include sm {
      font-size: 32px;
      line-height: 130%;
    }
  }
}
input::placeholder {
  color: #fff;
}
.style {
  position: relative;
  height: 550px;
  overflow: hidden;
}
.bg-img1 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/landing-page/style1.jpg");
}
.bg-img2 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/landing-page/style2.jpg");
}
.bg-img3 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/landing-page/style3.jpg");
}
.bg-img4 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/landing-page/style4.jpg");
}
.bg-img5 {
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/landing-page/style5.jpg");
}
.style-img {
  width: 100%;
  height: 100%;
  display: inline-flex;
  transform: rotate(44.855deg);
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-position-x: center;
  background-repeat: no-repeat;
  position: absolute;
  left: -70%;
  top: 2.5%;
  scale: 1;
}

.style:hover .style-img {
  border-radius: 0;
  overflow: hidden;
  animation-name: slideout;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes slideout {
  0% {
    transform: rotate(44.85deg);
    left: -70%;
    top: 2.5%;
    scale: 1;
  }
  100% {
    transform: rotate(0deg);
    left: 0%;
    top: 0%;
    scale: 1.1;
  }
}
.style:not(:hover) .style-img {
  animation: slideback 0.2s ease-in-out;
}

@keyframes slideback {
  from {
    transform: rotate(0deg);
    left: 0%;
    top: 0%;
    scale: 1.1;
  }
  to {
    transform: rotate(44.85deg);
    left: -70%;
    top: 2.5%;
    scale: 1;
  }
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.styles {
  overflow: hidden;
  white-space: nowrap;
  padding: 0px 0px;
}
.styles:hover {
  .styles-slide {
    animation-play-state: paused;
  }
}
.styles-slide {
  display: inline-block;
  animation: 15s slide infinite linear;
  position: relative;
  img {
    height: 500px;
    width: 300px;
    display: inline;
    max-width: 300px;
  }
}
</style>
