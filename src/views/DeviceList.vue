<script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  const startDate = ref()
  const endDate = ref()

  function clearDate() {
    startDate.value = ''
    endDate.value = ''
  }

  const tableData = ref(
    {
      expanded: [],
      dataHeaders: [
        { title: '', key: 'data-table-expand' },
        {
          title: '公司名稱',
          align: 'start',
          sortable: true,
          key: 'companyname',
        },
        { title: '縣市區', key: 'city' },
        { title: '行業別', key: 'sicname1' },
        { title: 'CO2', key: 'co2' },
        { title: 'CH4', key: 'ch4' },
        { title: 'N2O', key: 'n2o' },
        { title: '總排放', key: 'tot' },
      ],
      datas: [],
    }
  )

  const taipeiData = ref([])
  const addData = ref({})

  onMounted(() => {
    axios
    .get('/api/v2/ghg_p_01?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=ImportDate')
    .then( function (res) {
      taipeiData.value = res.data.records.filter(( item ) => item.city.includes('新北市'))
      renderData(taipeiData.value)
    })

  })

  function renderData(datas) {
    datas.forEach( item => {
      addData.value = {}
      addData.value.companyname = item.companyname
      addData.value.companyname = item.companyname
      addData.value.city = `${item.city} ${item.town}`
      addData.value.sicname1 = item.sicname1 
      addData.value.co2 = item.co2 
      addData.value.ch4 = item.ch4 
      addData.value.n2o = item.n2o 
      addData.value.tot = item.tot 
      console.log(addData.value)
      tableData.value.datas.push(addData.value)
    })
  }

</script>

<template lang="pug">
v-row.ma-5.d-flex
  p.text-h5 設備清單_案場1
  v-spacer
  .w-25
    v-text-field(
      variant="outlined"
      density="compact"
      label="搜尋設備"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details)

v-form.ma-5
  v-row.align-end
    v-col(cols="6" md="3")
      span 開始日期
      VueDatePicker.mt-1(v-model="startDate")
    v-col(cols="6" md="3")
      span 結束日期
      VueDatePicker.mt-1(v-model="endDate")
    v-col(cols="6" md="3")
      v-btn(variant="outlined" @click="clearDate") 清空

  v-data-table.mt-5(
    v-model:expanded='tableData.expanded' 
    :headers='tableData.dataHeaders' 
    :items='tableData.datas' 
    item-value='tot' 
    show-expand='')
    template(v-slot:top='')
    template(v-slot:expanded-row='{ columns, item }')
      tr.pa-3.bg-grey-lighten-3
        td(:colspan='tableData.dataHeaders.length') More info about {{ item.companyname }}

</template>

<style scoped>

</style>
