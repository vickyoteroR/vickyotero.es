<template>
  <div className="banner-container">
    <div className="main-info">
      <h1>{{name}}</h1>
      <h2>{{profession}}</h2>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        name: 'Vicky Otero',
        profession:'Maquetadora Frontend',
        
      }
    }
  }

</script>

<style>
@import '../assets/css/home.css';
</style>