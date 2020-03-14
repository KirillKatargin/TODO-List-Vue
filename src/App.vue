<template>
  <div class="hero">
    <img :src="require('./assets/images/logo.png')" alt="App" />
    <h1>Hello world</h1>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}
</style>
