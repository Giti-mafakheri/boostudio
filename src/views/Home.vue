<template>
  <div class="main">
    <div class="banner-area">
      <h2>this is a banner</h2>
    </div>

   <div class="content-area">
     <div class="wrapper">
       <h2>content area</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
   </div>

  </div>

</template>

<script>
  export default {
    name: 'Home'
  }

</script>
<style>
h1{
  color: red;
}
.banner-area{
  width: 100%;
  height: 500px;
  position: fixed;
  top:100px;
  background-image: url('../assets/image.jpg');
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;

}
.banner-area h2{
  padding-top: 8%;
  font-size: 70px;
  font-family: poppins;
  text-transform: uppercase;
  color: #9e9e9e;
}
.content-area{
  width: 100%;
  position: relative;
  top: 450px;
  background: #ddd;
  height: 1500px;
}
.content-area h2{
  font-family: bignoodletitling;
  letter-spacing: 4px;
  padding-top: 30px;
  font-size: 45px;
  margin: 0;
}
.content-area p{
  padding: 2% 0;
  font-family: merienda;
}
</style>
