<template>
    <div class="md:flex-nowrap flex flex-wrap justify-between gap-5 w-full border-2 border-solid border-gray-100 rounded-2xl px-5 py-2 mb-5">
       <div
           v-for="month in calendar" :key="month.id"
            class="w-1/12"
          > 
          <p class="text-center text-blue-400 text-[14px] mb-3">
            {{month.name}}
          </p>
          <span 
            v-for="(active, i) in month.activity.count" :key="i"
            class="activities"
            :class="month.activity.status"
          >
          </span>
       </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomCalendar',
  props: {
    calendar: Object
  },
});
</script>

<style scoped lang="scss">
.activities{
  width: 90%;
  height: 4px;
  border-radius: 8px;
  display: block;
  margin: 5px auto;
  &.complated{
    background: #609f5a;
  }
  &.booked{
    background: #115498;
  }
  &.book{
    background: #a0c4ea;
  }
}
</style>
