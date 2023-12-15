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

  axios
    .get('/API/Sewer/Get?stationNo=&loginId=sewer01&dataKey=BD3E513A')
    .then( function (res) {
      sewerData.value = res.data.data.filter(( item ) => item.stationName.includes('大直'))
      // console.log(sewerData)
    })

  window.addEventListener(
    "resize",
    () => {
      myChart.resize()
    },
    false
  )

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
      data: ['202312151550', '202312151600', '202312151600', '202312151600', '202312151600']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '水位值',
        type: 'line',
        stack: 'Total',
        data: [1.14, 1.16, 6.94, 3.449, 4.01]
      }
    ]
  };
  option && myChart.setOption(option);
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
