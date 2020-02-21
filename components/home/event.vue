<template>
  <div>
    <p v-for="e in expert">{{e.last_name}}</p>
  </div>
</template>

<script>
import { filterExperts } from "@/helpers/filters";
import experts from "@/config/experts";
export default {
  props: {
    expertsIds: {
      type: Array,
      required: true,
      default: []
    },
    scene: {}
  },
  computed: {
    expert() {
      return filterExperts(this.expertsIds);
    }
  }
};
</script>