<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import * as echarts from 'echarts'

const chart = ref()
const co2Data = ref([])

onMounted(() => {
  let chartDom = document.getElementById('barchart');
  let myChart = echarts.init(chartDom);
  let option;

    // 「精材科技股份有限公司」工廠的 CO2 年排放量
  axios
    .get('/api/v2/ghg_p_01?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate')
    .then( function (res) {
      co2Data.value = res.data.records.filter(( item ) => item.companyname.includes('精材科技股份有限公司') && item.app_year.includes('105'))
      // console.log(co2Data)
      // console.log(co2Data.value[2].co2)

      // option.series[0].data[0] = co2Data.value[0].co2
      // option.series[0].data[1] = co2Data.value[1].co2
      // option.series[0].data[2] = co2Data.value[2].co2
      // console.log(co2Data.value[0].co2, co2Data.value[1].co2, co2Data.value[2].co2)
    })

  window.addEventListener(
    "resize",
    () => {
      myChart.resize()
    },
    false
  )

  option = {
    color: ['#9CD1F8'],
    title: {
      text: '精材科技 105 年 CO2 年排放量'
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
    type: 'category',
    data: [ '精材科技中壢三廠' , '精材科技中壢二廠', '精材科技中壢廠' ]
  },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [385.24, 60.21, 58.23],
        type: 'bar'
      }
    ]
  };
  option && myChart.setOption(option);
})

</script>

<template lang="pug">
#barchart.chart(ref="chart")

</template>

<style scoped>
.echarts{
  width: 100%;
  height: 100%;
}
</style>
