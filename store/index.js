export const state = () => ({
    isSearch: false,
    isSearchInside: false,
    isHum: false,
})


export const mutations = {
    isSearch(state) {
        state.isSearch = true
    },
    isSearchOff(state) {
        state.isSearch = false
    },
    isSearchInsideOn(state) {
        state.isSearchInside = true
    },
    isSearchInsideOff(state) {
        state.isSearchInside = false
    },
    isHumOn(state) {
        state.isHum = true
    },
    isHumOff(state) {
        state.isHum = false
    }
}


  