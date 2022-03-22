<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  }
})

</script>

<template>

  <iframe
	  :width="width"
	  :height="height"
	  :src="url"
    >
  </iframe>


</template>

<style scoped>

iframe:hover{
  border: cyan 2px solid;
}
</style>
