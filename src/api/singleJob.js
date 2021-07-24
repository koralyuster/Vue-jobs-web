import {ref} from 'vue'

const singleJob = (id) => {
  const job = ref(null);
  const error = ref(null);

  const load = async () => {
    try{
      let data = await fetch('http://localhost:3000/jobs/' + id);
      //console.log(data);
      if(!data.ok){
        throw Error("no data available")
      }
      job.value = await data.json();
    }
    catch(err){
      error.value = err.message;
      console.log(error.value);
    }
  }

  return {job, error, load}
}

export default singleJob;