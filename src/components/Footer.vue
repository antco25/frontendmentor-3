<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="footer-logo">
        <img src="../assets/logo.svg" />
      </div>
      <div class="footer-icons">
        <ul>
          <li>
            <a href="#"><img src="../assets/icon-facebook.svg" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/icon-twitter.svg" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/icon-pinterest.svg" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/icon-instagram.svg" /></a>
          </li>
        </ul>
      </div>

      <div class="footer-nav">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div class="footer-copyright">
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./utility/utility";

//Properties
$background-color: $primary-1;
$outside-padding: $app-padding;
$font-color: $primary-0;
$copyright-color: $primary-3;
$font-size: $s-15;
$nav-padding: $s-10;
$nav-neg-padding: -$s-10;
$b4-nav-outer-padding: $s-4;
$logo-width: 10rem;

//Mobile Properties
$m-outside-padding: $m-app-padding;
$m-font-size: $s-15;
$m-logo-width: 9rem;

$m-nav-outer-padding: $s-10;
$m-vertical-padding: $s-20;

//CSS
.footer {
  background-color: $background-color;

  .footer-wrapper {
    max-width: $app-width-0;
    margin: 0 auto;
    padding: $outside-padding;

    @include for-size(mobile) {
      padding: $m-outside-padding;
    }
  }

  .footer-logo img {
    width: $logo-width;

    @include for-size(3) {
      width: $m-logo-width;
    }
  }

  .footer-copyright p {
    font-size: $font-size;
    margin: 0;
    color: $copyright-color;
  }

  .footer-logo,
  .footer-copyright,
  .footer-nav,
  .footer-icons {
    display: inline-block;
  }
}

.footer ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    border-bottom: $s-2 solid rgba(0, 0, 0, 0);

    &:hover {
      border-bottom-color: $font-color;
    }

    a {
      display: inline-block;
      padding: $nav-padding;
      font-size: $font-size;
      color: $font-color;
      text-decoration: none;
      outline: none;
    }
  }
}

.footer .footer-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  .footer-logo,
  .footer-copyright,
  .footer-nav,
  .footer-icons {
    flex-basis: 50%;
  }

  .footer-logo,
  .footer-nav {
    text-align: left;
  }

  .footer-icons,
  .footer-copyright {
    text-align: right;
  }

  .footer-nav ul {
    margin-left: $nav-neg-padding;
  }

  .footer-icons ul {
    margin-right: $nav-neg-padding;
  }

  @include for-size(3) {
    .footer-nav,
    .footer-copyright {
      flex-basis: 100%;
      text-align: center;
    }
  }

  @include for-size(4) {
    .footer-nav,
    .footer-icons {
      ul {
        margin: 0;
      }
    }

    .footer-logo,
    .footer-icons {
      flex-basis: 100%;
      text-align: center;
    }

    .footer-nav {
      padding: 0;
      ul li a {
        padding-left: $b4-nav-outer-padding;
        padding-right: $b4-nav-outer-padding;
      }
    }
  }

  @include for-size(mobile) {
    flex-direction: column;

    .footer-logo {
      padding-top: $m-vertical-padding;
    }
    .footer-nav {
      order: 1;
      padding: $m-nav-outer-padding;

      ul li {
        display: block;
        text-align: center;

        a {
          padding: $nav-padding;
        }
      }
    }
    .footer-icons {
      order: 2;
    }
    .footer-copyright {
      order: 3;
      padding-bottom: $m-vertical-padding;
    }
  }
}
</style>
