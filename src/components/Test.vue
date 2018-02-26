<template>
  <div class="test">
     查看热门城市
     <button type="submit" value="获取推荐城市" v-on:click="getsth()">点击</button>
     <button type="submit" value="清除" v-on:click="clearCity()">清除</button>
     <button type="submit" value="didi" v-on:click="DingDingAlert()">钉钉弹框--跳转到首页</button>
     <ul>
         <li v-for="item in recommendCities">
                 到达城市 : {{item.departCityName}} 
                 价格:      {{item.startPrice}}
         </li>
     </ul>
      <a @click="GoIndex()">跳转到首页</a>
  </div>
</template>

<script>

import axios from 'axios';

const DingDing = function(fn){
    return dd.ready(fn)
};

export default {
  name: 'Test',
  data () {
    return {
        recommendCities: []
     
    }
  },
  created(){
    this.DingDingSetTitle();  //设置标题
    this.DingDingWelcome();   //根据不同网络类型 设定不同提示
  },
  mounted() {
    
  },
  methods: {
    getsth(callback, failCallback){
        var _this =this;
        axios.get('http://open.tuniu.com/resource/departCity',
        {
            params: {
            id: 210055608
            }
        })
        .then((response) => {
            _this.DingDingTost();
            var data =response.data.data;
            console.log(data)
            var recommendCities = data.departCities.recommendCities.secondCityList
            for(var i=0;i<recommendCities.length;i++){
                _this.recommendCities.push(recommendCities[i])
            }
            callback && callback();
        })
        .catch((error) => {
            console.log('failed');
            console.log(error);
            failCallback && failCallback();
        })
    },
    clearCity(){
      this.recommendCities = [];
    },
    DingDingAlert() {
        var _this = this;
        DingDing(function(){
            dd.device.notification.confirm({
                message: "想回到首页吗",
                title: "提示",
                buttonLabels: ['确定', '我再想想'],
                onSuccess : function(result) {
                    //onSuccess将在点击button之后回调
                    /*
                    {
                        buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
                    }
                            */
                    if( result.buttonIndex == 0) {
                        _this.$router.push({
                            path: '/'
                        })
                    }
            },
                onFail : function(err) {
                  alert('调用失败')
                }
            });
        })
    },
    DingDingSetTitle() {
        DingDing(function(){
            dd.biz.navigation.setTitle({
                title : '欢迎来到钉钉企业测试',//控制标题文本，空字符串表示显示默认文本
                onSuccess : function(result) {
                    /*结构
                    {
                    }*/
                },
                onFail : function(err) {

                }
            });
        })
    },
    DingDingWelcome(){
        console.log('111')
    },
    DingDingTost(){
        DingDing(function(){
            dd.device.notification.toast({
                icon: 'success', //icon样式，有success和error，默认为空 0.0.2
                text: '已您更新最新信息', //提示信息
                duration: 1, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
                delay: 0.5, //延迟显示，单位秒，默认0
                onSuccess : function(result) {
                    /*{}*/
                },
                onFail : function(err) {

                }
            })
        })
    },
    GoIndex() {
        this.$router.push({
        path: '/'
      })
    }
},

    computed:{
       
    }
}
</script>
<style scoped>
ul{
  list-style-type:none;
}
</style>

