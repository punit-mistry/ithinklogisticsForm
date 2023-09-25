
import { defineStore } from 'pinia';

export const useFormData = defineStore('formData', {
  state: () => ({
    FirstName: '',
    PhoneNumber: '',
    Email: '',
    error: false,
    success: false,
    AllFormData:[],
  }),
  actions: {
    StoreData() {
      if (this.FirstName === '' || this.PhoneNumber === '' || this.Email === '') {
        this.error = true;
        setTimeout(() => {
            this.error = false;
        }, 2000);
      } else {
        this.error = false;
        this.success=true;
        setTimeout(() => {
            this.success = false;
        }, 4000);
        this.AllFormData.push({FirstName:this.FirstName, PhoneNumber:this.PhoneNumber, Email:this.Email,Data:new Date().getTime()})
        this.FirstName = '';
this.PhoneNumber = '';
this.Email = '';
      }
      console.log(this.FirstName, this.PhoneNumber, this.Email);
    },
  },
});
