<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<!-- html 태그는 무조건 template에 작성한다. javascript는 script에 작성.
    {{}} 콧수염 표현식. 간단히 단방향 바인딩을 시도해본다. 반드시 router를 해줘야 한다. -->
<script>
export default {
  data() {
    // vue 에서는 function이란 명령어를 쓰지 않는다.
    return {
      userName: 'kim ready',
      message: 'Welcome Vue ! ! ! ! !!! 혁명적인 편리함~~',
      arr: [],
      obj: {}
    }
  }
}
</script>
<!-- scoped 가 붙어있으면 이 화면의 css로만 적용된다.
     scoped 를 붙이지 않으면 전체 적용된다. -->
<style scoped>
.text-red {
  color: red;
}
</style>
<!-- template, script, style 등으로 각 영역이 나뉘어져 있고 작업 영역을 엄격히 준수하기에
     React보다 깔끔하고 명확하게 영역을 분리하는 느낌이 있다. -->
