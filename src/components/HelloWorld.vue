<template>
  <div class="HelloWorld">
    <div class="body">
      <div class="card">
        <h3>帝王就是我迪亚波罗哒</h3>
        <form action="">
          <label for="email"></label><input type="email" id="email" placeholder="email">
          <label for="password"></label><input type="password" id="password" placeholder="password">
          <label>
          <router-link to="/ShowPage" exact="">
            <input @click="myAlert" type="button" value="sign in">
          </router-link>
          </label>
        </form>
        <ul>
          <li><p @click="myAlert">Sign Up</p></li>
          <li><p @click="myAlert">Forgot Password</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data(){
      return{

      }
    },
    methods:{
      myAlert:function () {
        // alert('不要按啦，这个只是试一下scss，没有连接数据库的！！');
        return false;
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; }

  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background: url(".././img/lake.jpg") no-repeat center;
  }
  /*.body.body::after {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  background-color: #dc143c;*/
  /*  opacity: 0.8;*/
  /*  z-index: 1; }*/

  .card {
    border-radius: 15px;
    width: 400px;
    padding: 2rem 3rem;
    background: #fff;
    z-index: 3; }
  .card h3 {
    font-size: 24px;
    color: #dc143c;
    margin-bottom: 1em; }
  .card form input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #a30037; }
  .card form input:last-child {
    color: #FFF;
    background: #a30037;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s; }
  .card form input:last-child:hover {
    background-color: #dc143c; }
  .card form input:focus {
    outline: 1px solid #dc143c; }
  .card ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem; }
  .card ul li a {
    text-decoration: none;
    color: #333;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    border-bottom: 1px solid transparent; }
  .card ul li a:hover {
    color: #dc143c;
    border-bottom: 1px solid #dc143c; }
  p{
    cursor: pointer;
  }

  /*# sourceMappingURL=style.css.map */


</style>
