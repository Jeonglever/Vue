<template>
  <div>{{ htmlString }}</div>
  <div v-html="htmlString"></div>
  <!-- vue는 v- 디렉티브. innerHtml로 적용된다.-->
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
