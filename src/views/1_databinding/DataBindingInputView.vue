<!-- 양방향 데이터 바인딩을 시도해본다. -->
<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFunction">클릭</button>
    <button @click="changeData">변경</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'jeonglever'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    // 메소드는 무조건 여기에서 작성
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'Jeremy'
    }
  }
}
</script>
<!-- v-model = value 같은 느낌. v-model은 모두 양방향 바인딩이다. 사용자가 페이지에서 값을 입력하면, 이쪽에서도 변경된 값이 저장되어 있다. 즉, key값만 읽어내면 데이터를 이용할수 있다는 매우강장점!!! vue는 양방향 바인딩과 버추얼 돔을 이용해 빠르다. -->
