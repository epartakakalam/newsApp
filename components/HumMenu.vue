<template>
  <div class="bg bg-no-repeat fixed bg-cover bg-top z-50 w-full h-screen">
    <div class=" h-screen w-full fixed grand "> 
      <transition name="fade2">
        
        <!-- <div > --></transition>
      <button v-if="this.$store.state.isSearchInside" @click="isHumOff" class="float-right text-3xl text-white px-3 block"><fa :icon="['fas', 'times']"/></button>

<form class="w-full max-w-xs mx-auto block pt-16">
  <div class="text-white text-center text-xs ">Search</div>
  <div class=" items-center border-b border-white py-2">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text"  aria-label="Full name">
  
  
  </div>
</form>
<!-- </div> -->
<!-- </transition> -->
    </div>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
      methods: {
  ...mapMutations({
    isHumOff: 'isHumOff'
})
}
}
</script>

<style>
.grand{
  background: linear-gradient(to top, rgba(0,128,128,0.9), rgba(0,128,128,1));;
}
.bg{
background-image: url('https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/10/mobile-bg-649x1024.jpg');
}

</style>