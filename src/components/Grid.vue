<template>
  <div class="grid">
    <div class="grid-wrapper">
      <div class="grid-title"><h1>Our Creations</h1></div>
      <div class="see-all"><a href="#">See all</a></div>
      <section class="grid-content">
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-deep-earth.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-deep-earth.jpg"
          />
          <p>Deep<br />Earth</p>
        </a>
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-night-arcade.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-night-arcade.jpg"
          />
          <p>Night<br />Arcade</p>
        </a>
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-soccer-team.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-soccer-team.jpg"
          />
          <p>Soccer<br />Team VR</p>
        </a>
        <a href="#">
          <img class="content-desktop" src="../assets/desktop/image-grid.jpg" />
          <img class="content-mobile" src="../assets/mobile/image-grid.jpg" />
          <p>The<br />Grid</p>
        </a>
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-from-above.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-from-above.jpg"
          />
          <p>From Up<br />Above VR</p>
        </a>
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-pocket-borealis.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-pocket-borealis.jpg"
          />
          <p>Pocket<br />Borealis</p>
        </a>
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-curiosity.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-curiosity.jpg"
          />
          <p>The<br />Curiosity</p>
        </a>
        <a href="#">
          <img
            class="content-desktop"
            src="../assets/desktop/image-fisheye.jpg"
          />
          <img
            class="content-mobile"
            src="../assets/mobile/image-fisheye.jpg"
          />
          <p>Make it<br />Fisheye</p>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./utility/utility";

//Properties
$outside-padding: $app-padding;
$header-font-size: $s-46;

$see-font-size: $s-15;
$see-font-color: $primary-1;
$see-font-color-active: $primary-0;
$see-v-padding: $s-6;
$see-h-padding: $s-32;

$grid-top-padding: $s-50;
$grid-bottom-padding: 5rem; //80px
$grid-inner-padding: $s-20;
$grid-inner-neg-padding: -$s-20;

$grid-font-size: $s-32;
$b1-grid-font-size: $s-28;
$grid-font-color: $primary-0;
$grid-font-color-active: $primary-1;

//Mobile Properties
$m-outside-padding: $m-app-padding;
$m-header-font-size: $s-32;

$m-grid-top-padding: $s-24;
$m-grid-bottom-padding: $s-24;
$m-grid-inner-padding: $s-10;
$m-grid-inner-neg-padding: -$s-10;

$m-grid-font-size: $s-22;
$m-see-bottom-padding: $s-40;

//CSS
.grid {
  text-transform: uppercase;

  .grid-wrapper {
    max-width: $app-width-0;
    margin: 0 auto;
    padding: $outside-padding;

    @include for-size(mobile) {
      margin: 0 auto;
      padding: $m-outside-padding;
    }
  }
}

.grid .grid-title {
  display: inline-block;
  h1 {
    margin: 0;
    padding: 0;
    font-family: Josefin Sans;
    font-size: $header-font-size;
  }

  @include for-size(3) {
    h1 {
      font-size: $m-header-font-size;
    }
  }
}

.grid .see-all {
  display: inline-block;

  a {
    display: inline-block;
    padding: $see-v-padding $see-h-padding;
    border: $s-1 solid $see-font-color;
    text-decoration: none;
    color: $see-font-color;
    font-size: $see-font-size;
    letter-spacing: $s-2;
    outline: none;

    &:hover {
      color: $see-font-color-active;
      background-color: $see-font-color;
    }
  }
}

.grid .grid-content {
  padding-top: $grid-top-padding;
  padding-bottom: $grid-bottom-padding;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 $grid-inner-neg-padding;

  .content-mobile {
    display: none;
  }

  @include for-size(2) {
    margin: 0 $m-grid-inner-neg-padding;
  }

  @include for-size(4) {
    padding-bottom: $m-grid-bottom-padding;
    padding-top: $m-grid-top-padding;
  }

  @include for-size(mobile) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .content-desktop {
      display: none;
    }
    .content-mobile {
      display: block;
    }
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    flex-basis: 25%;
    box-sizing: border-box;
    padding: $grid-inner-padding;

    @include for-size(2) {
      padding: $m-grid-inner-padding;
    }

    @include for-size(3) {
      flex-basis: 33.33%;
    }

    @include for-size(4) {
      flex-basis: 50%;
    }

    @include for-size(mobile) {
      flex-basis: 100%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    p {
      font-family: Josefin Sans;
      position: absolute;
      bottom: 10%;
      left: 20%;
      margin: 0;
      color: $grid-font-color;
      text-align: left;
      font-size: $grid-font-size;

      @include for-size(1) {
        font-size: $b1-grid-font-size;
      }

      @include for-size(2) {
        font-size: $m-grid-font-size;
      }

      @include for-size(mobile) {
        bottom: 25%;
        left: 12%;
      }
    }

    &:hover {
      img {
        opacity: 0.3;
      }

      p {
        color: $grid-font-color-active;
      }
    }
  }
}

.grid .grid-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;

  .grid-title {
    flex-basis: 70%;
    text-align: left;
  }

  @include for-size(4) {
    justify-content: center;

    .grid-title {
      flex-basis: auto;
    }
    .see-all {
      order: 2;
      padding-bottom: $m-see-bottom-padding;
    }

    .grid-content {
      order: 1;
    }
  }
}
</style>