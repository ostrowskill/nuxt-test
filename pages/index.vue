<template>
  <div class="container">
    <component
      v-for="(section, idx) in sections"
      :is="section"
      :key="idx"
      :content="contentDistributor(section)"
    />
  </div>
</template>

<script>
import config from "../config/config.json";
import hero from "../components/home/hero";
import navigation from "../components/home/navigation";
import agenda from "../components/home/agenda";
export default {
  data() {
    return {
      sections: config.in_use_sections,
      content: { name: "dupa" }
    };
  },
  components: {
    hero: hero,
    navigation: navigation,
    agenda: agenda
  },
  methods: {
    contentDistributor(section) {
      const sect = config.sections.filter(s => {
        return s.name === section;
      })[0];
      return sect.content;
    }
  }
};
</script>

