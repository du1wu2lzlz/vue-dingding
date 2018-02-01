<template>
  <div class="hello">
    <h1></h1>
    <button @click="test">测试钉钉</button>
    <h2></h2>
    <ul>
      <a @click="GoTest()">跳转到test</a>
    </ul>
  </div>
</template>

<script>
  const testFun = function (fn) {
    return dd.ready(fn);
  }
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods:{
    test(){
      /*dd.ready(function(){
        dd.device.notification.confirm({
          message: "你爱我吗",
          title: "提示",
          buttonLabels: ['爱', '不爱'],
          onSuccess : function(result) {
            //onSuccess将在点击button之后回调
            /!*
            {
                buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
            }
            *!/
          },
          onFail : function(err) {}
        });
      });*/
      testFun(function () {
        dd.device.notification.confirm({
          message: "你爱我吗",
          title: "提示",
          buttonLabels: ['爱', '不爱'],
          onSuccess : function(result) {
            //onSuccess将在点击button之后回调
          },
          onFail : function(err) {}
        });
      })
    },
    GoTest() {
      this.$router.push({
        path: '/test'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
