<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ul large secondary inverted pointing menu compact">
          <router-link to="/" exact class="item">
            <i class="comment outline icon"></i>booStudio
          </router-link>

          <router-link to="/careers" exact class="item">
            <i class="plus circle icon"></i>Careers
          </router-link>

          <router-link to="/signup" exact class="item">
            <i class="graduation cap icon"></i>BooHUB
          </router-link>
        </div>

      </div>
    </div>

 <div class="ui text container">
    <div class="ui one column grid">
      <div class="column">
        <router-view/>
      </div>
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
div.label{
  width: 120px;
}
</style>
