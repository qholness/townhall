<script lang="ts">
export default {
    data() {
        return {
            showDescription: false,
            slides: [
                "/src/assets/yellow-buildings.png",
                "/src/assets/park.gif"
            ],
            docs: [{
                label: "Atlanta Zoning Committee",
                link: "https://atlantacityga.iqm2.com/Citizens/Detail_Meeting.aspx?ID=3988",
                date: new Date("06/10/2024 11:00:00")
            },
            {
                label: "Atlanta Regional Committe Zoning Meeting",
                link: "https://atlantacityga.iqm2.com/Citizens/Detail_Meeting.aspx?ID=3988",
                date: new Date("06/10/2024 11:00:00")
            },
            {
                label: "Atlanta Beltine Committee Meeting",
                link: "https://atlantacityga.iqm2.com/Citizens/Detail_Meeting.aspx?ID=3988",
                date: new Date("06/10/2024 11:00:00")
            }
            ],
            tab: "multimedia"
        }
    },
    methods: {
        toggleDescription() {
            this.showDescription = !this.showDescription
        }
    }
}

</script>
<template>
    <v-card title="New Park in O4W">
        <v-tabs v-model="tab">
            <v-tooltip
                text="A Government agency provided description of the project. Can be a more complex wiki entry if needed">
                <template v-slot:activator="{ props }">
                    <v-tab v-bind="props" value="desc">
                        <v-icon>mdi-card-text-outline</v-icon>
                    </v-tab>
                </template>
            </v-tooltip>
            <v-tooltip text="A space for rich media uploaded or scraped from official sources.">
                <template v-slot:activator="{ props }">
                    <v-tab v-bind="props" value="multimedia">
                        <v-icon>mdi-image-area</v-icon>
                    </v-tab>
                </template>
            </v-tooltip>
            <v-tab value="calendar">
                <v-icon>mdi-calendar-month</v-icon>
            </v-tab>
            <v-tab value="documents">
                <v-icon>mdi-file-multiple</v-icon>
            </v-tab>
        </v-tabs>
        <v-container>

            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="desc">
                    <v-card>
                        <div :style="{
                            height: '15vh',
                            overflowY: 'scroll'
                        }">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
                            habitant.
                            Cursus in
                            hac habitasse platea dictumst quisque sagittis. Magna eget est lorem ipsum dolor sit amet
                            consectetur.
                            Sagittis eu volutpat odio facilisis mauris sit. Ullamcorper sit amet risus nullam eget felis
                            eget
                            nunc
                            lobortis. Amet massa vitae tortor condimentum. Egestas pretium aenean pharetra magna.
                            Egestas
                            tellus
                            rutrum
                            tellus pellentesque eu. Vitae ultricies leo integer malesuada nunc vel risus commodo. Eu
                            scelerisque
                            felis
                            imperdiet proin fermentum leo vel. Posuere morbi leo urna molestie at elementum eu. At
                            ultrices
                            mi
                            tempus
                            imperdiet nulla.
                        </div>
                    </v-card>
                </v-tabs-window-item>
            </v-tabs-window>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="multimedia">
                    <img :src="slides[1]" :style="{
                        height: '25vh',
                        width: '100%'
                    }">
                </v-tabs-window-item>
            </v-tabs-window>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="calendar">
                    <v-calendar></v-calendar>
                </v-tabs-window-item>
            </v-tabs-window>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="documents">
                    <v-list>
                        <v-list-item v-for="(item, i) of docs" :key="i">
                            <v-list-item-title>
                                <a :href="item.link">{{ item.label }}</a>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.date }}
                            </v-list-item-subtitle>

                        </v-list-item>
                    </v-list>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-container>
    </v-card>
</template>