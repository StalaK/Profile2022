<script setup>
import Layout from './components/Layout.vue'
</script>

<template>
    <div id="base" v-if="defaultView">
        <Layout>
            <router-view v-on:defaultView="setDefaultView"></router-view>
        </Layout>
    </div>
    <div v-else>
        <router-view v-on:defaultView="setDefaultView"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultView: true
        }
    },
    methods: {
        setDefaultView: function(defaultView) {
            this.defaultView = defaultView;
        },
    }
}
</script>

<style scoped>
</style>
