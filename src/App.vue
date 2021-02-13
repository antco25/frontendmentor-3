<template>
  <Header />
  <Content />
  <Grid />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Grid from "./components/Grid.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Grid,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
@import "./components/utility/utility";

#app {
  font-family: Alata, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-width: $breakpoint-mobile;
  min-height: inherit;
  display: flex;
  flex-direction: column;
}
</style>
