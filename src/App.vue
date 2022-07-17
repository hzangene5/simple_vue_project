<template>

<Header />

<router-view></router-view>

</template>

<script>
import HeaderPart from './components/section/Header.vue';


export default {
  name: 'App',
  components : {
    Header : HeaderPart,
    
  }

}
</script>

<style>


</style>
