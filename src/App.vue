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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
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
    font-family: 'Inter', sans-serif;;
    font-weight: 400;
}
</style>
