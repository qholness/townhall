  <script lang="ts">
  import ProjectInfoContainer from '@/components/ProjectInfoContainer.vue';
  import Thread from '@/components/Thread.vue';
  export default {
    data() {
      return {
        tab: null,
        chatTabs: [
          { label: "CS", icon: "mdi-chat" },
          { label: "Chat", icon: "mdi-robot-excited" }
        ]
      }
    }
  }
</script>
<template>
  <div data-testid="project-view-container">
    <ProjectInfoContainer :style="{
      marginBottom: '1vh'
    }" />
    <v-card>
      <v-tabs v-model="tab">
        <v-tabs v-model="tab">
          <v-tab v-for="t of chatTabs" :value="t.label">
            <v-icon>{{ t.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </v-tabs>
      <v-container>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="CS">
            <div :style="{
              height: '40vh',
              overflowY: 'auto'
            }">
              <Thread />
            </div>
            <ContributeComboBox />
          </v-tabs-window-item>
        </v-tabs-window>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="Chat">
            <LLMChat />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-card>
  </div>
</template>