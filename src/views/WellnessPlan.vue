<template>
    <div class="border-2 border-solid border-gray-100 rounded-2xl m-4 p-5">
        <div class="md:flex justify-between mb-5">
            <h1 class="text-[25px] font-bold text-gray-700">
                Your Progress 
                <span class="text-gray-400 text-[14px] font-semibold">
                    {{getCountOfCmplated()}} step of complate
                </span>
            </h1>
            <button 
                @click="isVisible = !isVisible"
                class="relative text-gray-400 bg-transparent underline">
                {{isVisible ? 'Hide' : 'Show'}}
            </button>
        </div>
        <transition 
            enter-from-class="translate-y-[-150%] opacity-0"
            leave-to-class="translate-y-[-150%] opacity-0"
            enter-active-class="transition duration-500"
            leave-active-class="transition duration-500">
            <div 
                v-show="isVisible"  
                class="lg:flex gap-10 p-5 justify-around">
                    <DoughnutChart
                        v-if="activities.length"
                        :activities="activities"
                    />   
                    <div class="lg:w-2/3">
                        <CustomCalendar 
                            :calendar="calendar"
                        />
                        <div>
                            <img
                                v-if="activitiesLoader" 
                                src="../assets/icones/loading.gif"
                                width="100" 
                                class="mx-auto" 
                                alt="loader"
                            >
                            <SingleActivitie 
                                v-else
                                v-for="activity in activities"
                                :key="activity.id"
                                :activity="activity"
                                @deleteActivity="deleteActivity"
                                @editActivity="editActivity"
                            />
                        </div>
                    </div>
            </div>
        </transition>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import store from "@/store";
  import { mapGetters } from 'vuex';
  import { Activities } from '@/data/activitiesData';
  import { Calendar } from '@/data/calendarData';

  //components
  import DoughnutChart from '@/components/DoughnutChart.vue';
  import CustomCalendar from '@/components/CustomCalendar.vue';
  import SingleActivitie from '@/components/SingleActivitie.vue';

  
  export default defineComponent({
    name: 'WellnessPlan',
    components: {
        DoughnutChart, 
        CustomCalendar,
        SingleActivitie
    },

    data(){
        return{
            activities: [] as Activities[],
            calendar: [] as Calendar[],
            isVisible: true,
        }
    },

    computed:{
        ...mapGetters({
            activitiesLoader: 'getActivitiesLoader'
        })
    },

    mounted(){
       this.getActivities();
       this.getCalendar()
    },

    methods:{
        async getActivities() {
            this.activities = await store.dispatch('getActivitiesList'); 
        },
        
        async getCalendar() {
           this.calendar = await store.dispatch('getCalendarData'); 
        },

        async deleteActivity(id: number){
            this.activities = await store.dispatch('deleteActivity', id);
            this.getCalendar()
        },

        async editActivity(data: object){            
            this.activities = await store.dispatch('editActivity', data);
        },

        getCountOfCmplated(){
            return this.activities.filter(e => e.status === 'complated').length
        }
    }
  });
  </script>
  