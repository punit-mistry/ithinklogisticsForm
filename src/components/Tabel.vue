<script setup>
import { useFormData } from '../Store';
import { ref } from 'vue';
const Store = useFormData();
const Data = ref(Store.AllFormData)
</script>

<template>


<div v-if="Data.length > 0" class="flex items-center justify-center h-96">
    
  <table>
    <thead>
      <tr>
        <th class="border border-black">Sr no.</th>
        <th class="border border-black">First Name</th>
        <th  class="border border-black">Phone Number</th>
        <th  class="border border-black">Email</th>
        <th  class="border border-black">Address</th>
        <th  class="border border-black">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(res, index) in Data" :key="res.id" class="text-center">
        <td  class="border border-black">{{ index }}</td>
        <td  class="border border-black">{{ res.FirstName }}</td>
        <td  class="border border-black">{{ res.PhoneNumber }}</td> 
        <td  class="border border-black">{{ res.Email }}</td>
        <td  class="border border-black">{{ res.Address }}</td>
        <td  class="border border-black">{{ new Date(res.Date).toLocaleDateString() +'\n'+new Date(res.Date).toLocaleTimeString() }}</td>
      </tr>
    </tbody>
  </table>
</div>

<div v-else class="bg-blue-200 m-10 flex items-center justify-center h-20 border-red-600 border text-3xl rounded-lg uppercase ">
   <span class="animate-pulse"> Please Fill the Form !!</span>
</div>

</template>