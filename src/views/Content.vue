<template>
  <h1>Content For Find Your Dream Role</h1>

  <form @submit.prevent="handleSubmit">
    <div>
      <label>Full Name</label>
      <input type="text" required v-model="name" />
      <div v-if="nameError" class="error">{{ nameError }}</div>
    </div>

    <div>
      <label>Email</label>
      <input type="email" required v-model="email" />
    </div>

    <div>
      <label>Role</label>
      <select v-model="role">
        <option value="frontEnd">Front-End Developer</option>
        <option value="backEnd">Back-End Developer</option>
        <option value="fullStack">Full-Stack Developer</option>
        <option value="designer">Web Designer</option>
      </select>
    </div>

    <div>
      <label>Skills</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill" />
      <div v-for="skill in skills" :key="skill" class="skill">
        <span @click="removeSkill(skill)">
          {{ "x " + skill }}
        </span>
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Send</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: " ",
      role: "frontEnd",
      terms: false,
      tempSkill: " ",
      skills: [],
      nameError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      this.nameError =
        this.name.length > 2 ? "" : "Name must be at least 2 chars long";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  background: rgb(244, 244, 244);
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 15px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  width: 100%;
  padding: 10px 6px;
  box-sizing: border-box;
  border: none;
  background: rgb(244, 244, 244);
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.skill {
  display: inline-block;
  padding: 5px 10px;
  margin: 20px 10px 0 0;
  font-weight: bold;
  background: rgb(125, 125, 125);
  color: #fff;
  border-radius: 15px;
  font-size: 13px;
  letter-spacing: 1px;
  cursor: pointer;
}
button {
  background: rgb(92, 92, 255);
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.submit {
  text-align: center;
}
.error {
  color: crimson;
  margin: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>