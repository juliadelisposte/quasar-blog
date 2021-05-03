<template>
  <div class="q-pl-md">
    <div class="card">
      <slot/>
    </div>
  </div>
</template>

<style>
  .card {
    box-shadow: 5px 5px 5px #bdbdbd;
    border-radius: 12px;
    width: 340px;
    height: auto;
  }
  .image{
    max-height: 210px;
  }
</style>
