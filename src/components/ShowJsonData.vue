<template>
  <div class="ShowJsonData">
    <div>
      show:{{form}}
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "ShowJsonData",
      data(){
          return {
            form: {
              nmsl:'nmsl',
            },
          }
      },
      created(){
        axios.get('http://jsonplaceholder.typicode.com/users')
          .then((response) =>{
            console.log(this.$route,this.$router);
            this.form = response;
          })
      },
    }
</script>

<style scoped>

</style>
