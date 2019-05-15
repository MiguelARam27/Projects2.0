<template>
<div class="nav">
    <router-link to="/">Real world Events</router-link>
    <div>

    <router-link :to="{ name: 'event-list' }">List</router-link> |
    <router-link :to="{ name: 'event-create' }">Create</router-link>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>
<style scoped>

</style>
