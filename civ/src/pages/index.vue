  <script lang="ts">
  import ProjectInfoContainer from '@/components/ProjectInfoContainer.vue';
  import Thread from '@/components/Thread.vue';
  export default {
    data() {
      return {
        tab: null,
      }
    }
  }
</script>
<template>
  <div data-testid="project-view-container">
    <ProjectInfoContainer />
    <v-tabs v-model="tab">
      <v-tab value="CS">
        <v-icon>mdi-chat</v-icon>
      </v-tab>
      <v-tooltip
        text="User can chat with an LLM powered by aggregated data to learn more about the project's history and future.
        The agents prompt and source data can be modified to the project in view or expanded to include other projects.">
        <template v-slot:activator="{ props }">
          <v-tab v-bind="props" value="Chat">
            <v-icon>mdi-robot-excited</v-icon></v-tab>
        </template>
      </v-tooltip>
    </v-tabs>
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
  </div>
</template>