<template>
  <div class="jobs">
    <h2 class="jobTitle">Open Roles</h2>
    <div class="container">
      <div v-for="job in jobs" :key="job.id" class="jobsList">
        <!-- <h3>{{ job.title }}</h3> -->
        <SingleJob :job="job" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SingleJob from "./SingleJob.vue";
export default {
  props: ["jobs"],
  components: { SingleJob },
  setup(props) {
    console.log(props.jobs);

    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-column-gap: 20px;
  justify-content: center;
}
.jobTitle {
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 20px 5px 0 0;
}
.jobsList h3 {
  background: #f4f4f4;
  padding: 50px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 300px;
  cursor: pointer;
  color: #444;
}
.jobsList h3:hover {
  background: #fff;
  border: 1px solid #f4f4f4;
  color: orange;
}
</style>