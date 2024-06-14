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
            tab: "multimedia",
            tabs: [
                { label: "desc", icon: "mdi-card-text-outline" },
                {
                    label: "multimedia",
                    icon: "mdi-image-area"
                }, {
                    label: "calendar",
                    icon: "mdi-calendar-month"
                },
                {
                    label: "documents",
                    icon: "mdi-file-multiple"
                }
            ]
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
            <v-tab v-for="t of tabs" :value="t.label">
                <v-icon>{{ t.icon }}</v-icon>
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