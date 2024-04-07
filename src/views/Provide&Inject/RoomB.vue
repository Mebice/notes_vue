<script setup>
import { inject } from 'vue';

const num =  inject('num')
</script>

<template>
<h3>中間層B區域</h3>
<div class="tt">從RoomA來的響應式數據 : {{ num }}</div>
</template>