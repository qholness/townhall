<template>
    <h2>Project Map</h2>
    <div>
        Going to "yadda yadda" this.
        Essentially, this would be a tool for users to view
        various project happening in particular areas.
        This would be an additional tool for users to find what they care about.
    </div>
    <div id="layout">
        <Map />
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
#layout {
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