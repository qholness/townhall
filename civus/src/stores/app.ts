// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    messages: [
      {author: "Susan B.",
        content: "I would like there to be more trees",
        timestamp: new Date()
      },
      {
        author: "Andre",
        content: "The construction affects my walking route to work and I have to take a 30-minute detour.",
        timestamp: new Date()
      }
    ],
    authenticating: false,
    optedIn: false,
  }),
  actions: {
    pushMessage(msg: any) {
      this.messages.push(msg)
    },
    toggleAuth() {
      this.authenticating = !this.authenticating
    },
    toggleOptedIn() {
      this.optedIn = !this.optedIn
    }
  }
})
