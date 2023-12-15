<script setup>
  import { ref, onMounted } from 'vue'
  import SingleCard from '../components/cards/SingleCard.vue'
  import DeviceCard from '../components/cards/DeviceCard.vue'
  import GroupCard from '../components/cards/GroupCard.vue'
  import BarChart from '../components/cards/BarChart.vue'
  import LineChart from '../components/cards/LineChart.vue'

  const cardsData = ref([
    {
      id: '1',
      title: '累計總發電量（度）',
      content: '947,700',
      unit: 'kWh'
    },
    {
      id: '2',
      title: '累計發電小時（時）',
      content: '8,100',
      unit: 'h'
    },
    {
      id: '3',
      title: '累計總稼動率（％）',
      content: '90',
      unit: '%'
    },
    {
      id: '4',
      title: '累計總減碳量（噸）',
      content: '947,700',
      unit: '公噸'
    }
  ])

  const deviceData = ref({
    group1: [
      {
      id: 'a1',
      title: '設備認定',
      content: '130',
      unit: 'kW'
      },
      {
      id: 'a2',
      title: '即時流量',
      content: '0.34',
      unit: 'cms'
      },
      {
      id: 'a3',
      title: '即時發電量',
      content: '117',
      unit: 'kW'
      },
      {
      id: 'a4',
      title: '稼動率',
      content: '92',
      unit: '%'
      }
    ],
    group2: [
    {
      id: 'b1',
      title: '水頭落差',
      content: '43.5',
      unit: 'm'
      },
      {
      id: 'b1',
      title: '今日累計流量',
      content: '30,000',
      unit: 'CMD'
      },
      {
      id: 'b3',
      title: '今日累計發電量',
      content: '2,808',
      unit: 'kWh'
      },
      {
      id: 'b4',
      title: '--',
      content: '--',
      unit: ''
      }
    ]
  })

</script>

<template lang="pug">
v-row.mt-0.px-6
  v-col(cols="12" sm="6" md="3" v-for="card in cardsData")
    SingleCard( :key="card.id" :title="card.title" :content="card.content" :unit="card.unit")
v-row.px-6
  v-col(cols="12" md="6")
    LineChart.bg-white.pt-5.ps-3
  v-col(cols="12" md="6")
    BarChart.bg-white.pt-5.ps-3

v-row.px-6
  v-col(cols="12" md="4")
    DeviceCard
  v-col(cols="12" md="8")
    v-row
      v-col(cols="12")
        v-card(elevation=0).pa-5
          .v-row
            .v-col-6.v-col-md-3(v-for="item in deviceData.group1")
              GroupCard(:key="item.id" :title="item.title" :content="item.content" :unit="item.unit")
    v-row
      v-col(cols="12")
        v-card(elevation=0).pa-5
          .v-row
            .v-col-6.v-col-md-3(v-for="item in deviceData.group2")
              GroupCard(:key="item.id" :title="item.title" :content="item.content" :unit="item.unit")

</template>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
