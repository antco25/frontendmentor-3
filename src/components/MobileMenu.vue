<template>
  <div
    class="mobile-menu"
    v-bind:class="{ 'mobile-menu-visible': isVisible }"
  >
    <div class="mobile-menu-wrapper">
      <ul>
        <li><a v-on:click="$emit('closeMenu')" href="#">About</a></li>
        <li><a v-on:click="$emit('closeMenu')" href="#">Careers</a></li>
        <li><a v-on:click="$emit('closeMenu')" href="#">Events</a></li>
        <li><a v-on:click="$emit('closeMenu')" href="#">Products</a></li>
        <li><a v-on:click="$emit('closeMenu')" href="#">Support</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./utility/utility";

//Properties
$outside-padding: $app-padding;
$font-color: $primary-0;
$background-color: $primary-1;
$nav-font-size: $s-28;
$nav-padding: $s-10;

//Mobile properties
$m-outside-padding: $m-app-padding;
$m-nav-font-size: $s-24;

//CSS
.mobile-menu {
  position: fixed;
  left: 100%;
  top: 0;
  z-index: 1;
  background-color: $background-color;
  width: 100%;
  height: 100%;
  min-height: 600px;
  transition: 0.5s;

  &.mobile-menu-visible {
    left: 0;
  }

  .mobile-menu-wrapper {
    max-width: $app-width-0;
    margin: 0 auto;
    padding: 0 $outside-padding;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @include for-size(mobile) {
      padding: 0 $m-outside-padding;
    }
  }

  ul {
    display: inline-block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: -$nav-padding;
  }

  li {
    text-align: left;
    padding-bottom: $s-10;

    a {
      display: inline-block;
      padding: $nav-padding;
      font-size: $nav-font-size;
      color: $font-color;
      text-decoration: none;
      outline: none;
      font-family: Josefin Sans;
      text-transform: uppercase;
      border-bottom: $s-2 solid rgba(0, 0, 0, 0);

      &:hover {
        border-bottom-color: $font-color;
      }

      @include for-size(mobile) {
        font-size: $m-nav-font-size;
      }
    }
  }
}
</style>
