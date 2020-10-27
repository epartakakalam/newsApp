<template>
  <div class="">
    <transition name="fade">
    <Search v-if="this.$store.state.isSearch"/>
    </transition>
    <transition name="fade2">
    <HumMenu v-if="this.$store.state.isHum"/>
    </transition>
    <AppHeader/>
    <Nuxt />
  </div>
</template>
<script>
import AppHeader from '../components/AppHeader';
import Search from '../components/Search';

import { mapMutations } from 'vuex'
export default {
  components: {
    AppHeader,
    Search
},
data() {
  return {
    
    }
    },
    methods: {
  ...mapMutations({
    isSearch2: 'isSearch2'
})
}
    
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
  
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateX(100%);
  
}

.fade2-enter-active, .fade2-leave-active {
  transition: transform .5s;
  
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateX(-100%);
  
}

</style>
