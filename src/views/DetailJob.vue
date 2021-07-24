<template>
  <div class="singleJob">
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="job" class="job">
      <h1>{{ job.title }}</h1>
      <h3>Location: {{ job.location }}</h3>
      <p>Necessary skills:</p>
      <span v-for="skill in job.skills" :key="skill">
        {{ "  " + skill + " | " }}
      </span>
      <br />
      <router-link :to="{ name: 'Content' }">
        <button @click="handleClick">Send Your CV</button>
      </router-link>
    </div>
  </div>
  <router-link :to="{ name: 'Home' }">
    <button class="btnBack">BACK</button>
  </router-link>
</template>

<script>
import singleJob from "../api/singleJob";

export default {
  props: ["id"],
  setup(props) {
    const handleClick = () => {
      console.log("click");
    };

    const { job, error, load } = singleJob(props.id);
    load();

    return { job, error, load, handleClick };
  },
};
</script>

<style>
.singleJob {
  border: 1px solid #444;
  padding: 50px;
  margin: 10px auto;
  width: 600px;
  letter-spacing: 1px;
}
.btnBack {
  background: #000;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>