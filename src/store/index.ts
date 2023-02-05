import { createStore } from 'vuex'

import activities, {Activities} from '@/data/activitiesData'
import calendar, {Calendar} from '@/data/calendarData'

export default createStore({
  state: {
    activities: [] as Activities[],
    activitiesLoading: true,
    calendarData: [] as Calendar[],
},
getters: {
    getAllActivities: state => state.activities,
    getActivitiesLoader: state => state.activitiesLoading,
    getCalendarData: state => state.calendarData,
},
mutations: {
    SET_ACTIVITIES_LIST(state, data) {
        state.activities = data
    },

    SET_ACTIVITIES_LOADING(state, data) {
        state.activitiesLoading = data
    },

    SET_CALENDAR_DATA(state, data) {
        state.calendarData = data
    },

},
actions: {
    async getActivitiesList({commit}) {
        try {
            commit('SET_ACTIVITIES_LOADING', true)
            // here should be the logic of getting data from backend, I just return fake data
            commit('SET_ACTIVITIES_LIST', activities)
            return activities            
        } catch (err: any) {
            return err
        } finally {
            commit('SET_ACTIVITIES_LOADING', false)
        }
    },
    async getCalendarData({commit, state}) {
        try {
            commit('SET_CALENDAR_DATA', calendar);
            const calendarData: Calendar[] = JSON.parse(JSON.stringify(calendar));

            state.activities.map(activity => {
              const mount = activity?.date.getMonth();
              calendarData[mount].activity.status = activity.status
              ++ calendarData[mount].activity.count;              
            })

            return calendarData
        } catch (err: any) {
            return err
        }
    },

   async deleteActivity({commit, state},id){
      try {        
        
         //here should be the logic of deleting activity from back
        const index = state.activities.findIndex(object => {     
          return object.id === id;
        })
        state.activities.splice(index, 1);

        return state.activities
      } catch (err: any) {
          return err
      }
   },

   async editActivity({commit, state}, payload){
    try{
      state.activities.forEach(activity => {
        if(activity.id === payload.id){
          activity.name = payload.name
        }
      });
  
      return  state.activities
    } catch (err: any) {
        return err
     }
   }
  
},
modules: {}
})
