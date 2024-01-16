<template>
    <div class="flex flex-wrap items-center justify-center">
        <Navigator></Navigator>
        <Tabs></Tabs>
        <Temperature></Temperature>
        <BasicFun></BasicFun>
        <AdditionFun></AdditionFun>
        <DataIndex></DataIndex>
    </div>
</template>

<script setup lang="ts">
import Navigator from './components/Navigator.Vue'
import Tabs from './components/tabs.vue';
import Temperature from './components/temperature.vue';
import BasicFun from './components/BasicFun.vue'
import AdditionFun from './components/AdditionFun.vue'
import DataIndex from './components/DataIndex.Vue'

</script>

<style scoped></style>