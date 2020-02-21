<template>
    <nav>
        <h2>navigation</h2>
        <ul>
            <li v-for="link in content.links" :key="link.id" @click="testClick">{{link.label}}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
            default: {}
        }
    },
    methods: {
        testClick() {
            alert('hm')
        }
    }
}
</script>