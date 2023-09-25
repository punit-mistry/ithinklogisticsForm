<script setup >
import Navbar from './Navbar.vue';
import { ref } from 'vue';
import {useFormData} from "../Store/index"
const error = ref(false)

const Store = useFormData()


</script>

<template>
  <div class="flex flex-col items-center justify-center m-10">
    <div class="flex flex-col w-96 border p-10 border-black hover:shadow-2xl rounded-lg">
      <form @submit.prevent="Store.StoreData" class=" flex flex-col items-center">

        <div class="mb-2">
          <label   class="block" >First Name</label>
          <input type="text" id="firstName" class="border border-black h-10 p-2 rounded-lg mb-4" v-model="Store.FirstName" />
        </div>

        <div class="mb-2">
          <label for="phoneNumber" class="block">Phone Number</label>
          <input type="number" id="phoneNumber" class="border border-black h-10 p-2 rounded-lg mb-4" v-model="Store.PhoneNumber" />
        </div>

        <div class="mb-2">
          <label for="email" class="block">Email Address</label>
          <input type="email" id="email" class="border border-black h-10 p-2 rounded-lg mb-4" v-model="Store.Email" />
        </div>
        <button class="bg-blue-500 h-10 w-52 text-white font-bold rounded-lg hover:scale-110 transition-all mb-4">Submit</button>
      </form>
      <div v-if="Store.error" class="flex items-center  bg-red-200 text-red-700 font-bold h-10 p-4 border border-red-600 rounded">
        Please Fill All the fields !!
      </div>
      <div v-if="Store.success" class="flex items-center  bg-green-200 text-green-700 font-bold h-10 p-4 border border-green-600 rounded">
         Thank You !! 
      </div>
    </div>
  </div>
</template>