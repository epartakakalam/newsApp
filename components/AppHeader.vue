<template>

  <header class="flex bg-gray-900 w-full h-16 px-5">
    <button @click="isHumOn" class="flex flex-1 text-white text-2xl items-center"><fa :icon="['fas', 'bars']"/></button>
    <div class="flex flex-1 justify-center flex-row items-center "><img class="maxW" src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/09/np10blue-white-retina.png"></div>
    <button @click="isSearchInsideOn();isSearch()" class="flex lg:hidden flex-1 text-white text-2xl items-center justify-end"><fa :icon="['fas', 'search']"/></button>

  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      
      }
        },
         methods: {
  ...mapMutations({
    isSearch: 'isSearch',
    isSearchInsideOn: 'isSearchInsideOn',
    isHumOn: 'isHumOn'
})
},
     
  name: "AppHeader"
};
</script>

<style>
.maxW {
  max-width: 180px;
  }
  .h-14{
    height:3.3rem;
    }
</style>


