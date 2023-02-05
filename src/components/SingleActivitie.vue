<template>
    <div class="sm:flex justify-between w-full border-2 border-solid border-gray-100 rounded-2xl p-4 mb-3">
      <input 
          class="w-3/5 disabled:bg-transparent bg-gray-100 px-3 py-2 rounded focus:border-gray-300 focus:border-2 focus:outline-none"
          type="text"
          :disabled="!isEditableMood"
          :value="activity?.name"
          @keyup.enter="editActivity"
        >
      <div class="flex items-center gap-10">
       <div v-if="activity?.status == 'complated'" class="flex gap-2">
          <img src="../assets/icones/completed.svg" alt="">
          <p class="text-green-400">Complated</p>
       </div> 
       <div v-if="activity?.status == 'booked'" class="flex gap-2">
          <img src="../assets/icones/calendar.svg" alt="">
          <p class="text-blue-800">Booked</p>
       </div> 
        <div v-if="activity?.status == 'book'" class="flex gap-2">
          <img src="../assets/icones/calendar-light.svg" alt="">
          <p class="text-blue-300">Book Now</p>
       </div> 
       <div 
            class="relative inline-block"
            @mouseover="isVisible = true" 
            @mouseleave="isVisible = false" 
            @keydown.enter="isVisible = !isVisible"
          >
            <button type="button" class="">
              <span class="flex-shrink-0"><img src="../assets/icones/dots.svg" alt=""></span>
            </button>
          <transition 
            enter-active-class="transition duration-300 ease-out transform" 
            enter-class="-translate-y-3 scale-95 opacity-0" 
            enter-to-class="translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-300 ease-in transform" 
            leave-class="translate-y-0 opacity-100" 
            leave-to-class="-translate-y-3 opacity-0">
            <div v-show="isVisible" class="absolute pt-2 z-20"> 
              <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                <div class="relative">
                  <p @click="deleteActivity" class="cursor-pointer w-full px-6 py-2 font-medium text-red-500 hover:bg-gray-100">
                    Delete
                  </p>
                  <p @click="showEdit" class="cursor-pointer w-full px-6 py-2 font-medium text-gray-700 hover:bg-gray-100">
                    Edit
                  </p>
                </div>  
              </div>
            </div>
          </transition>
        </div>
      </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SingleActivitie',
  props:{
      activity: Object
  },
  emits: ['deleteActivity', 'editActivity'],

  data() {
    return {
      isVisible: false,
      isEditableMood: false
    }
  },

  methods:{
    deleteActivity(){
      this.$emit('deleteActivity', this.activity?.id)
    },

    showEdit(){
      this.isEditableMood = true
    },

    editActivity(event: any){
      const data = {
        id: this.activity?.id,
        name: event.target.value
      }
      this.$emit('editActivity', data);
      this.isEditableMood = false
    }
  }
});
</script>

<style scoped lang="scss">

</style>
