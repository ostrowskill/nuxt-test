<template>
  <div :style="{'background-color': content.bg}">
    <h2>hero</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>