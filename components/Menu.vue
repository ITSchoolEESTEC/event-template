<template>
  <div class = "wrapper">
    <div class = "banner">
      <img class ="logoOrganization" src="~assets/logo.png">
      <img class ="logoEvent" src="~assets/logoevent.png">
    </div>
    <div class = "navbar">
     <nuxt-link to="/" class = "navlinks">Home</nuxt-link>
     <nuxt-link to="/about" class = "navlinks">About</nuxt-link>
     <nuxt-link to="/users" class = "navlinks">Users</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu'
}
</script>


<style scoped>
  .wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
    text-align: center;

  }

  .banner  {
    width: 100%;
    height: 100px;
    background-color: white;
  }


  .ph-text{
    font-size: 40px;
    margin: auto;

  }

  .navbar{
  margin: 0px;
  width: 100%;
  height: 30px;
  background-color: #e60000;
  list-style-type: none;
  padding: 0;
  box-shadow: 0px 3px 6px 0px gray;
}

.navlinks{
  position: relative;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 6px;
  margin-right: 40px;
  margin-left: 40px;
  font-size: 15px;
  color: #ffffff;
  transition: color 0.25s;
}

.navlinks:hover{
  color: #331a00;
}

.acl{
  padding: 0;
  margin: 0;
  outline: none;
  width: 100px;
}

.logoOrganization{
  width: 200px;
  height: 80px;
  float: left;
  display: inline-block;
  padding-top: 10px;
  padding-left: 40px;
}

.logoEvent{
  width: 400px;
  height: 80px;
  float: right;
  display: inline-block;
  padding-top: 10px;
  padding-left: 40px;
}

a{
  outline: 0;
  text-decoration: none;
  display: inline;

}


</style>
