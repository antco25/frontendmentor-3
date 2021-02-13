<template>
  <div class="content">
    <div class="content-wrapper">
      <img
        class="content-image-mobile"
        src="../assets/mobile/image-interactive.jpg"
      />
      <section class="content-desc">
        <h1>The leader in interactive VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./utility/utility";

//Background Image Dimensions: 731 x 500
//Background Image Dimensions: 654 x 448

//Properties
$header-font-size: $s-46;
$font-size: $s-15;
$header-font-color: $primary-1;
$font-color: $primary-2;

$outside-padding: $app-padding;
$outside-vertical-padding: 8rem;

$content-box-padding: 5rem;
$b2-content-box-padding: 3rem;
$content-box-width: 28rem;

//Mobile properties
$m-header-font-size: $s-32;

$m-outside-padding: $m-app-padding;
$m-outside-vertical-padding: 5rem;

$m-content-box-padding: 1rem;
$m-content-image-padding: 2rem;
$m-content-box-width: 28rem;

//CSS
.content .content-wrapper {
  max-width: $app-width-0;
  margin: 0 auto;
  padding: $outside-vertical-padding $outside-padding;
  position: relative;
  background-image: url("../assets/desktop/image-interactive.jpg");
  background-repeat: no-repeat;
  background-origin: content-box;
  background-clip: content-box;
  height: 500px;

  .content-image-mobile {
    display: none;
  }

  @include for-size(3) {
    background-image: none;
    height: auto;

    .content-image-mobile {
      display: inline-block;
      width: 100%;
      padding-bottom: $m-content-image-padding;
    }
  }

  @include for-size(mobile) {
    padding: $m-outside-vertical-padding $m-outside-padding;
  }
}

.content .content-desc {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  background: $primary-0;
  padding-top: $content-box-padding;
  padding-left: $content-box-padding;
  padding-bottom: inherit;
  padding-right: inherit;
  max-width: $content-box-width;
  text-align: left;

  h1 {
    margin: 0;
    font-family: Josefin Sans;
    text-transform: uppercase;
    font-size: $header-font-size;
    color: $header-font-color;
  }

  p {
    color: $font-color;
    font-size: $font-size;
    margin: 0;
  }

  @include for-size(2) {
    padding: $b2-content-box-padding;
    padding-bottom: inherit;
    padding-right: inherit;
  }

  @include for-size(3) {
    position: static;
    padding: 0;
    text-align: center;
    margin: auto;

    h1 {
      font-size: $m-header-font-size;
    }
  }

  @include for-size(mobile) {
    padding: $m-content-box-padding;
    padding-bottom: 0;
  }
}
</style>
