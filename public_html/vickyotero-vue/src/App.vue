<template>
  <div id="app">
    <NavBar></NavBar>
    <BannerContainer></BannerContainer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import BannerContainer from './components/BannerContainer.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    BannerContainer
  }
}
</script>
 
