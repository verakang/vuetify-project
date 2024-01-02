<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import * as echarts from 'echarts'

const chart = ref()
const sewerData = ref()

onMounted(() => {
  let chartDom = document.getElementById('linechart');
  let myChart = echarts.init(chartDom);
  let option;

  option = {
        color: ['#E67A74'],
        title: {
          text: '大直站水位監測'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['水位值']
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '10%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '水位值',
            type: 'line',
            stack: 'Total',
            data: []
          }
        ]
      };
  axios
    .get('/API/Sewer/Get?stationNo=&loginId=sewer01&dataKey=BD3E513A')
    .then( function (res) {
      sewerData.value = res.data.data.filter(( item ) => item.stationName.includes('大直'))
      const opt = JSON.parse(JSON.stringify(option))
      opt.xAxis.data = sewerData.value.map(i => i.recTime)
      opt.series[0].data = sewerData.value.map(i => i.levelOut)
      option = opt
      // console.log('sewerData', opt)
      option && myChart.setOption(option);
    })

  window.addEventListener(
    "resize",
    () => {
      myChart.resize()
    },
    false
  )
})

</script>

<template lang="pug">
#linechart.chart(ref="chart")

</template>

<style scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>
