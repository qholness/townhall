<script lang="ts">
import { defineComponent, ref } from "vue";
import { messageStore } from "../main"
import Camera from "simple-vue-camera"
export default defineComponent({
    components: {
        Camera
    },
    setup() {
        // Get a reference of the component
        const camera = ref<InstanceType<typeof Camera>>();

        // Use camera reference to call functions
        const snapshot = async () => {
            const blob = await camera.value?.snapshot();

            // To show the screenshot with an image tag, create a url
            // @ts-ignore
            const url = URL.createObjectURL(blob);
        }

        return {
            camera,
            snapshot
        }
    },
    data() {
        return {
            optedIn: messageStore.optedIn,
            inputMsg: "",
            showJoinModal: false,
            messages: messageStore.messages
        }
    },
    computed: {},
    methods: {
        handleMessageInsert() {
            messageStore.pushMessage({
                author: "test",
                content: this.inputMsg,
                timestamp: new Date()
            })
            this.inputMsg = ""

        },
        beginOptIn() {
            this.toggleJoinModal()
        },
        toggleJoinModal() {
            this.showJoinModal = !this.showJoinModal
        },
        takeSnapshot() {
            this.snapshot()
        },
        optIn() {
            this.showJoinModal = false;
            this.optedIn = true
        }
    }

})
</script>
<template>
    <div>
        <v-text-field data-testid="contribute-combobox" v-if="optedIn" v-model="inputMsg"
            v-on:keyup.enter="handleMessageInsert" placeholder="What are your thoughts?" append-icon="mdi-send"
            @click:append="handleMessageInsert" />

        <v-btn data-testid="begin-opt-in" elevation="0" v-if="!optedIn" @click="beginOptIn" text="Join the conversation"
            append-icon="mdi-lock" />
        <v-dialog v-model="showJoinModal" data-testid="camera-dialog">
            <camera :resolution="{ width: 375, height: 812 }" autoplay></camera>
            <v-btn data-testid="optIn-btn" @click="optIn">Scan the QR Code</v-btn>
        </v-dialog>
    </div>
</template>