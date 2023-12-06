import {defineStore} from 'pinia'

export const useFilter = defineStore('filter', {
  state: () => ({
    show: false
  }),
  actions: {
    ActiveFilterPanel() {
      this.show = !this.show
    }
  },
})