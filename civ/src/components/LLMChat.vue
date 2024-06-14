<script lang="ts">
export default {
    data() {
        return {
            messageHistory: [

                {
                    author: "User",
                    text: "Add a tree to the northwest quadrant"
                },
                {
                    author: "🤖 Hermes",
                    text: "Sure. Is there any particular tree you'd like to see there?"
                },
                {
                    author: "User",
                    text: "Spruce."
                },
                {
                    author: "🤖 Hermes",
                    text: "Got it. I'll alter the image to show you what it would look like with a spruce tree."
                }
            ],
            msgCounter: 0,
            userInput: ""
        }
    },
    computed: {
        reverseMessageHistory() {
            return this.messageHistory.reverse()
        }
    },
    methods: {
        async sendMessage() {
            if (this.userInput) {
                this.messageHistory.push({
                    author: 'User',
                    text: this.userInput
                })
                this.messageHistory.push({
                    author: '🤖 Hermes',
                    text: `${this.msgCounter} lorem ipsum`
                })
                this.userInput = ""
                this.msgCounter++
            }
        }
    }
}
</script>
<template>
    <div>
        <div :style="{
            height: '40vh',
            overflowY: 'scroll',
            // backgroundColor: 'rgba(240, 240, 240, .70)',
            marginBottom: '1vh'
        }">
            <p v-if="messageHistory.length == 0">
                Hermes is an LLM with various agents to aggregate data systems
                and search the web for more information pertaining to the project.
            </p>
            <v-list v-else>
                <v-list-item v-for="(msg, i) of reverseMessageHistory" :key="i">
                    <v-list-item-title><strong>
                            {{ msg.author }}
                        </strong>
                    </v-list-item-title>
                    <div>{{ msg.text }}</div>
                </v-list-item>
            </v-list>
        </div>

        <v-text-field v-model="userInput" v-on:keyup.enter="sendMessage" placeholder="Ask Lemmy"></v-text-field>
    </div>
</template>