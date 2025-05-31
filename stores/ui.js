import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isMenuOpen: false,
    currentSection: 'home'
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    setCurrentSection(section) {
      this.currentSection = section
    }
  }
})