<template>
  <div id="userinfo">
    <nav-bar class="navbar">
      <div slot="center">我的</div>
    </nav-bar>
    <div class="user">
      <div class="icon">
        <img src="~assets/img/profile/user.svg" alt="" srcset="">
      </div>
      <div class="login"> 登录/注册</div>
    </div>

    <div class="detail">
   <div class="mui-card">
				<div class="mui-card-header">0.00元</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						我的余额
					</div>
				</div>			
			</div>

      <div class="mui-card">
				<div class="mui-card-header">0个</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						我的优惠
					</div>
				</div>			
			</div>

      <div class="mui-card">
				<div class="mui-card-header">0分</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						我的积分
					</div>
				</div>			
			</div>
</div>

    <div class="info">
      <ul class="mui-table-view">
    <li class="mui-table-view-cell"><img src="~assets/img/profile/notice.svg">我的消息</li>
    <li class="mui-table-view-cell"><img src="~assets/img/profile/integral.svg">积分商城</li>
    <li class="mui-table-view-cell"><img src="~assets/img/profile/member.svg">会员卡</li>
</ul>

    </div>

  <div class="end">
      <ul class="mui-table-view">
    <li class="mui-table-view-cell"><img src="~assets/img/profile/car.svg">我的购物车</li>
    <li class="mui-table-view-cell"><img src="~assets/img/profile/down.svg">下载购物APP</li>
   
</ul>

    </div>


  </div>


</template>

<script>
import NavBar from 'components/commom/navbar/NavBar'
export default {
  name: 'UserInfo',
  components:{
    NavBar
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  height: 44px;
  background-color: rgb(253, 98, 124);
  color: white;
}
.user{
  position: relative;
  height: 90px;
   background-color:rgb(253, 98, 124);
}
.user .icon{
    height: 50px;
    border-radius: 50%;
    width: 65px;
    background-color: white;
    position: absolute;
    top: 20px;
    left:15px
}
.user .icon img{
  width: 100%;
    height: 90%;
}
 .user .login{
   width: 100px;
    height: 50px;
    line-height: 90px;
    position: absolute;
    left: 105px;
    color: white;
 }
.detail{
  display: flex;
}
.mui-card{
 flex:1;
  margin: 0;
  border-right: 2px solid beige;
  border-bottom: 2px solid beige;
}

.mui-card-footer:before, .mui-card-header:after {
  position: absolute;
    top: 0;
    
    left: 0;
    height: 1px;
    content: '';
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.mui-card-header {
    font-size: 23px;
    color: rgb(253, 87, 87);
    border-radius: 2px 2px 0 0;
    text-align: center; 
    height: 40px;
}
.mui-card-content-inner {
    position: relative;
    text-align: center;
    color: gray;
    font-size: 14px;
    padding-top: 0;
}
.mui-table-view-cell {
    color: rgb(2, 0, 0);
    height: 50px;
    line-height: 50px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    font-size: 16px;
}
    

.mui-table-view-cell img{
  width: 30px;
  height: 20px;
    
    
}

.end{
  margin-top: 15px;
}
</style>
