import { defineStore } from 'pinia';

export const useFormData = defineStore('formData', {
  state: () => ({
    FirstName: '',
    PhoneNumber: '',
    Email: '',
    Address: '',
    error: false,
    PhoneNumberError: false,
    success: false,
    AllFormData: [],
  }),
  actions: {
    StoreData() {
      if (this.FirstName === '' || this.PhoneNumber === '' || this.Email === '' || this.Address === '') {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      } else if (this.PhoneNumber.length >= 10) {
        this.PhoneNumberError = true;
      } else {
        this.error = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 4000);
        this.AllFormData.push({
          FirstName: this.FirstName,
          PhoneNumber: this.PhoneNumber,
          Email: this.Email,
          Address: this.Address,
          Date: new Date().getTime()
        });
        this.FirstName = '';
        this.PhoneNumber = '';
        this.Email = '';
        this.Address = '';
      }
      console.log(this.PhoneNumber,"this is the phone number");
    },
  },
});
