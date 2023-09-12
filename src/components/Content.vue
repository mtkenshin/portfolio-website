<template>
    <div class="content-wrapper">
        <RouterView />
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
</script>
<style lang="scss">
    .content-wrapper {
        position: absolute;
        right:0;
        width: calc(100% - $sidepanel-width);
        height: 100vh;
        background-color: $color2;
    }
</style>