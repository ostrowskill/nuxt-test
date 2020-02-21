<template>
  <div>
    <h2>agenda</h2>
    <h3>{{content.title}}</h3>
    <h4>{{content.subtitle}}</h4>
    <div v-for="(date, idx) in content.dates" @click="filter_by_date = date">{{date}}</div>
    <div v-for="(scene, idx) in content.scenes">{{scene}}</div>

    <hr style="padding: 1rem" />
    <div v-for="(e, idx) in events" :key="idx">
      <p>{{e.date}}</p>
      <p>{{e.start}} - {{e.ends}}</p>
      <div style="display: flex">
        <div
          v-for="elem in e.event"
          :style="elem.scene === 'digital' ? 'background:red' : 'background: goldenrod'"
          style="flex: 1;"
        >
          <div>{{elem.title}}</div>
          <div>{{elem.read_more}}</div>
          <div v-if="elem.expert_id.length">
            <event :expertsIds="elem.expert_id" :scene="elem.scene" />
          </div>
        </div>
      </div>
      <hr style="margin: 1rem 0" />
    </div>
  </div>
</template>

<script>
import experts from "@/config/experts.json";
import event from "./event";
export default {
  props: {
    content: {
      type: Object,
      required: true,
      default: {}
    }
  },
  data() {
    return {
      filter_by_date: ""
    };
  },
  computed: {
    events() {
      return this.content.events.filter(ev => {
        return ev.date === this.filter_by_date;
      });
    }
  },
  methods: {
    match_expert(ids) {
      return experts.filter(expert => {
        if (ids.indexOf(expert.id) >= 0) {
          return expert;
        }
      });
    }
  },
  created() {
    this.filter_by_date = this.content.dates[0];
  },
  components: {
    event
  }
};
</script>