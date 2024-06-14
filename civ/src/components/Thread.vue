<!-- Contains the conversation of a particular works project -->
<script lang="ts">
import { messageStore } from "../main"
export default {
    computed: {
        sortedMessages() {
            //@ts-ignore
            const sorted = messageStore.messages.sort(function (a, b) {
                if (a.timestamp == b.timestamp) {
                    return 0
                }
                if (a.timestamp < b.timestamp) {
                    return -1
                }
                if (a.timestamp > b.timestamp) {
                    return 1
                }
            })
            return sorted.reverse()
        }
    }
}
</script>

<template>
    <v-list data-testid="thread">
        <v-list-item v-for="(m, i) of sortedMessages" :key="i" :style="{
            paddingBottom: '2px'
        }">
            <v-list-item-title>

                <strong>
                    {{ m.author }}
                </strong>
                said:
            </v-list-item-title>
            <div class="text-wrap" v-text="m.content">
            </div>
            <v-list-item-subtitle v-text="m.timestamp.toISOString()" />
        </v-list-item>
    </v-list>
</template>