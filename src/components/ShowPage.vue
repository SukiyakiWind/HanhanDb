<template>
  <div class="showPage">
    <p>展示壮壮的数据</p>
    <label>
      <router-link to="/showjsondata">
        <button>showData</button>
      </router-link>
    </label>
  </div>
</template>

<script>
    export default {
        name: "ShowPage"
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .showPage{
    width:500px;
    height: 500px;
    border: 1px solid #a30037;
    background: url(".././img/壮壮sb.jpg") center ;
    -webkit-background-size: cover;
    background-size: cover;
  }

</style>
