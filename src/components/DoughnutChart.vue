<template>
      <div>
        <div class="w-1/2 lg:w-full mx-auto relative">
          <p class="percentage">{{ getPercentage() + '%' }}</p>
          <vue3-chart-js
            :width="200"
            :height="200"
            ref="chartRef"
            :id="doughnutChart.id"
            :type="doughnutChart.type"
            :data="chartData" 
        ></vue3-chart-js>
        </div>
        
        <p class="text-gray-500 text-center text-[14px] my-5">Completed <br/>appointment</p>
    </div>
  </template>
  
 <script>
  import { defineComponent } from 'vue';
  import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
  
  export default defineComponent({
    name: 'DoughnutChart',
    components: {
      Vue3ChartJs
    },

    props: {
      activities: Object,
    },

    data() {
      return {
        dataPercentage: [],
        doughnutChart: {
          id: 'doughnut',
          type: 'doughnut',
        },
      }
    },

    computed:{
      chartData(){
        return {
          datasets: [{
            backgroundColor:(ctx) => {
              const canvas = ctx.chart.ctx;
              const gradient = canvas.createLinearGradient(0,50,100,0);
              gradient.addColorStop(0.5, '#acd0e2');
              gradient.addColorStop(0.1, '#5aa255');

              return [gradient, '#eee'];
            },
            data: [this.complated(), this.booked() ],
            borderWidth: 0,
            cutout: '85%',
          }],
        }
      }
    },

    methods:{
      complated(){
          return this.activities.filter(e => e.status === 'complated').length
      },
      booked(){
          return this.activities.filter(e => e.status === 'booked').length
      },
      getPercentage(){
        const sum = this.complated() + this.booked();
        return ((this.complated() / sum) * 100).toFixed(0)
      }
    },

    watch: {
      'chartData': {
        handler() { 
          this.$refs.chartRef.data.datasets[0].data = [this.complated(), this.booked()];
          console.log(this.$refs.chartRef.data.datasets[0], 'fsdfd');
          this.$refs.chartRef.update();
        },
        deep: true
      }
    }
  });
  </script>
  
  <style scoped lang="scss">
  .percentage{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 500;
  }
  </style>
  