<template>
  <div class="wrapper">
    <pagination
      :records="records"
      v-model="page"
      :per-page="9"
      @paginate="cb"
      :options="paginationOptions"
    >
    </pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      paginationOptions: {
        chunk: 5
      }
    }
  },
  props: {
    records: Number
  },
  methods: {
    cb: function (page) {
      console.log(`Page ${page} was selected. Do something about it`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
