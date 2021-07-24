<template>
  <div class="job">
    <router-link :to="{ name: 'DetailJob', params: { id: job.id } }">
      <h3>{{ job.title }}</h3>
    </router-link>

    <!-- <p>{{ snippet }}</p> -->
    <!-- <span v-for="skill in job.skills" :key="skill"> #{{ skill }}</span> -->
  </div>
</template>

<script>
export default {
  props: ["job"],
};
</script>

<style>
a {
  text-decoration: none;
}
</style>