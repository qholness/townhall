<template>
    <h2>Around Atlanta</h2>
    <div id="mapLayout">
        <Map />
    </div>
    <div>
        This will be a volumetric map showing locations of various projects
        and providing users the ability to drill down into projects of interest.
    </div>
</template>

<script lang="ts">
import Map from "../components/Map.vue"
import 'mapbox-gl/dist/mapbox-gl.css';
export default {
    components: {
        Map
    }
}
</script>

<style>
#mapLayout {
    flex: 1;
    display: flex;
    position: relative;
}

.mapboxgl-canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>