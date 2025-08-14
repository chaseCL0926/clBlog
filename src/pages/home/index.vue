<template>
  <div>
    <img src="@/assets/fox.jpeg" alt="Logo" class="logo" />
  </div>
  <div class="nav">
    <router-link to="/about">About</router-link>
    <router-link to="/codeEditor">codeEdit</router-link>
  </div>

</template>
<style scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
</style>