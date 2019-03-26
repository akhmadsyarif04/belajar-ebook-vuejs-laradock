<template lang="html">
  <div class="hello">
    {{ text }}
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: "hello dari vue-loader (perubahan) ets"
    }
  }
}
</script>

<style>
.hello{
  color: blue;
}
</style>
