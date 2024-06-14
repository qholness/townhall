<template>
    <div ref="mapContainer" class="map-container">
    </div>
</template>

<script lang="ts">
//@ts-ignore
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;
export default {
    mounted() {
        const map = new mapboxgl.Map({
            container: this.$refs.mapContainer,
            style: "mapbox://styles/mapbox/streets-v12", // Replace with your preferred map style
            center: [-84.3877, 33.7488],
            zoom: 10,
        });

        //@ts-ignore
        this.map = map;
    },
    unmounted() {
        //@ts-ignore
        this.map.remove();
        //@ts-ignore
        this.map = null;
    }
}
</script>

<style>
.map-container {
    flex: 1;
    height: 50vh;
}
</style>