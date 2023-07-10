<template>
  <div id="app">
    <HeaderSection></HeaderSection>
    <hr class="line">
    <MainSection></MainSection>
    <FooterSection></FooterSection>

  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import MainSection from './components/MainSection.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    HeaderSection,
    MainSection,
    FooterSection,
  }
}
</script>

<style>
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}
html {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: inherit;
}
body {
    margin: 0;
    font-family: Inter;
    font-style: normal;
}
.line {
  margin-bottom: 150px;
  width: auto;
  border: none;
  background-color: rgb(233, 233, 233);
  height: 1px;
}
</style>
