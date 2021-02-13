<template>
  <div class="header">
    <div class="header-wrapper">
      <section class="header-nav">
        <MobileMenu
          :isVisible="isMobileMenuOpen"
          v-on:closeMenu="toggleMobileMenu()"
        />
        <img class="logo" src="../assets/logo.svg" />
        <ul>
          <li>
            <a href="#" v-on:click="toggleMobileMenu()"
              ><img class="mobileMenuIcon" :src="getImgUrl(mobileMenuImg)"
            /></a>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </section>

      <div class="header-title-wrapper">
        <section class="header-title">
          <h1>Immersive<br />Experiences<br />That Deliver</h1>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "Header",
  data: function () {
    return {
      isMobileMenuOpen: false,
      mobileMenuImg: "icon-hamburger.svg",
    };
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    toggleMobileMenu: function () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;

      if (this.isMobileMenuOpen) {
        this.mobileMenuImg = "icon-close.svg";
        document.body.style.overflowY = "hidden";
      } else {
        this.mobileMenuImg = "icon-hamburger.svg";
        document.body.style.overflowY = "auto";
      }
    },
    getImgUrl: function (pic) {
      return require("../assets/" + pic);
    },
    onWindowResize(e) {
      if (e.target.outerWidth > 576 && this.isMobileMenuOpen) {
        this.toggleMobileMenu();
      }
    },
  },
  components: {
    MobileMenu,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./utility/utility";

//Background Image Dimensions: 1440 x 650
//Background Mobile Image Dimensions: 750 x 1300

//Properties
$font-color: $primary-0;
$outside-padding: $app-padding;
$outside-top-padding: $s-48;

$nav-font-size: $s-15;
$nav-padding: $s-10;
$nav-neg-padding: -$s-10;
$b3-nav-outer-padding: $s-6;
$b3-nav-neg-outer-padding: -$s-6;

$title-inner-padding: $s-28 $s-40;
$title-right-padding: 7rem;
$title-font-size: 4rem; //50px
$b3-title-font-size: $s-48;
$b4-title-font-size: $s-42;

//Mobile properties
$m-logo-width: 10rem;
$m-outside-padding: $m-app-padding;
$m-outside-top-padding: $s-32;

$m-title-inner-padding: $s-20;
$m-title-font-size: $s-38;

//CSS
.header {
  background-image: url("../assets/desktop/image-hero.jpg");
  @include for-size(mobile) {
    background-image: url("../assets/mobile/image-hero.jpg");
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  color: $font-color;
  height: 650px;

  .header-wrapper {
    max-width: $app-width-0;
    margin: 0 auto;
    height: 100%;
    padding: 0 $outside-padding;

    @include for-size(mobile) {
      padding: 0 $m-outside-padding;
    }

    display: flex;
    flex-direction: column;
  }
}

.header .header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: $outside-top-padding;
  min-height: 75px;
  @include for-size(mobile) {
    padding-top: $m-outside-top-padding;
  }

  ul {
    display: inline-block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-right: $nav-neg-padding;

    @include for-size(3) {
      margin-right: $b3-nav-neg-outer-padding;
    }
  }

  li {
    display: inline-block;
    border-bottom: $s-2 solid rgba(0, 0, 0, 0);

    &:first-child {
      display: none;
      z-index: 2;
      position: relative;
    }

    &:hover {
      border-bottom-color: $font-color;
    }

    a {
      display: inline-block;
      padding: $nav-padding;
      font-size: $nav-font-size;
      color: $font-color;
      text-decoration: none;
      outline: none;
    }

    @include for-size(3) {
      a {
        padding-left: $b3-nav-outer-padding;
        padding-right: $b3-nav-outer-padding;
      }
    }
    @include for-size(4) {
      &:first-child {
        display: inline-block;
      }

      &:not(:first-child) {
        display: none;
      }
    }
  }

  .logo {
    z-index: 2;
  }

  @include for-size(3) {
    .logo {
      width: $m-logo-width;
    }
  }
}

.header .header-title-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: left;

  @media (max-width: 440px) {
    justify-content: center;
  }
}

.header .header-title {
  h1 {
    display: inline-block;
    border: $s-2 solid $font-color;
    font-family: Josefin Sans;
    font-weight: 300;
    text-transform: uppercase;
    font-size: $title-font-size;
    letter-spacing: $s-2;
    text-align: start;
    margin: 0;
    padding: $title-inner-padding;
    padding-right: $title-right-padding;

    @include for-size(3) {
      font-size: $b3-title-font-size;
      padding: $title-inner-padding;
    }

    @include for-size(4) {
      font-size: $b4-title-font-size;
      padding: $m-title-inner-padding;
    }

    @include for-size(mobile) {
      font-size: $m-title-font-size;
    }
  }
}
</style>
