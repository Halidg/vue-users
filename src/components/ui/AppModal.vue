<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
   <div class="modal">
    <slot/>
  </div> 
</template>

<script>
export default {
emits:['close']
}
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
  z-index: 100;
}

.modal {
 position: fixed;
 top: 60px;
 width: 600px;
 padding: 1rem;
 background: #fff;
 z-index: 1000;
 left: 50%;
 border-radius: 10px; 
 transform: translateX(-50%);
 box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>