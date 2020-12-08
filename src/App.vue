<template>
  <div id="app">

      <div class="box-area">
        <header>
          <div class="wrapper">
            <div class="logo">
              <router-link to="/" exact class="item">
               booStudio
             </router-link>
            </div>
            <nav>
              <router-link to="/careers" exact class="item">
              Careers
            </router-link>

            <router-link to="/signup" exact class="item">
              BooHUB
                </router-link>
            </nav>
          </div>
        </header>


        <div class="footer">
          <div class="inner-footer">

          </div>
        </div>


      </div>



    <div class="ui one column grid">
      <div class="column">
        <router-view/>
      </div>
    </div>


  </div>
</template>

<script>
export default{
  name: 'app'
};
</script>

<style>
#app > div.navbar{
  margin-bottom: 1.5em;
}
*{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
}
body{
  text-align: center;
}
.wrapper{

}
header{
  background: #cd551c;
  height: 100px;
  width: 100%;
  z-index: 12;
  position: fixed;

}
.logo{
  width: 30%;
  float: left;
  line-height: 100px;
  color: #8c8c8c;
  font-size: 30px;
  font-family: bignoodletitling;
  letter-spacing: 5px;
}
nav{
  float: right;
  line-height: 100px;
  text-decoration: none;
  font-family: bignoodletitling;
  letter-spacing: 4px;
  font-size: 20px;
  margin: 0 10px;
  color: #8c8c8c;
}

</style>
