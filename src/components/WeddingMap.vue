<template>
    <iframe
        class="map"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        :src="'https://www.google.com/maps/embed/v1/place?key=' + apiKey +
            '&q=Priests+house,skipton&zoom=10'">
    </iframe>
</template>

<script>
export default {
    data() {
        return {
            apiKey: ''
        }
    },
    mounted: function() {
        fetch("https://wedding20230509200137.azurewebsites.net/api/MapKey?code=5fcTouefd-jYCUzag6LvpmRLkmMAGoA0hkMBJDbwKIT_AzFux4-Muw==")
            .then((response) => response.text())
            .then((text) => { this.apiKey = text });
    },
}
</script>

<style scoped>

.map {
    width: 450px;
    height: 550px;
    border: 0;
}

@media screen and (max-width: 775px) {
    .map {
        width: 100%;
        height: 400px;
        border: 0;
        padding-bottom: 20px;
    }
}
</style>