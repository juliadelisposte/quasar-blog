<template>
  <div class="main shadow-3 q-pl-md q-mx-md q-my-sm flex inline shadow-box flex-center column items-center">
    <slot/>
  </div>
</template>

<style scoped>
.main {
  background-color: #fff8f2;
  padding-right: 20px;
  border: 1px solid #ddd;
  border-radius: 80px 80px 0px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
