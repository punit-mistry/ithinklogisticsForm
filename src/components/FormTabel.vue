<script setup>
defineProps({
    FormData:Object
})
</script>
<template>
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
      <p class="text-xl font-bold">This is the Props</p>
      <p class="text-lg">First Name: {{ FormData.FirstName }}</p>
      <p class="text-lg">Number: {{ FormData.PhoneNumber }}</p>
      <p class="text-lg">Email: {{ FormData.Email }}</p>
      <p class="text-lg">Address: {{ FormData.Address }}</p>
    </div>
  </template>