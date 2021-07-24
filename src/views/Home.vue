<template>
  <div class="home">
    <h1>Welcome To Job.Net</h1>
    <p class="p">This is the place for all the top roles</p>

    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="jobs.length">
      <JobsList :jobs="jobs" />
    </div>

    <div v-else>Loading jobs...</div>
  </div>
</template>

<script>
import getJobs from "../api/getJobs";
import JobsList from "../components/JobsList.vue";

export default {
  name: "Home",
  components: { JobsList },
  setup() {
    const { jobs, error, load } = getJobs();
    load();

    return { jobs, error, load };
  },
};
</script>

<style>
.p {
  text-decoration: underline;
  letter-spacing: 1px;
}
</style>