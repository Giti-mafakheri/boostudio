<template>
  <div class="main">
    <div class="banner-area">
      <h2>this is a banner</h2>
    </div>

   <div class="content-area">
     <div class="wrapper1">
       <h2>content area</h2>
       <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad zminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
     <div class="designinstall">
       <div class="child">
         <button class="btn">Design</button>
         <p class="Design">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
       </div>
       <div class="child">
         <button class="btn">Install</button>
          <p class="Design">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
       </div>
     </div>
 <h3>Follow our social posts</h3>




 <section>
  <div class="Wrapper">
   <div class="WideBox">
      <div class="TourBox">
         <a class="VeiwBox" href="#"><i class="icon-pls"></i><span>View</span></a>
         <img src="../assets/mob.jpeg" width="330"  height="330" alt="Tour photo" />
         <a class="VeiwMor" href="#"><i class="icon-lft"></i></a>
         <p>New Date</p>
         <h5>More Info</h5>
      </div>
      <div class="TourBox">
         <a class="VeiwBox" href="#"><i class="icon-pls"></i><span>View</span></a>
         <img src="../assets/cooking.jpeg" width="330"  height="330" alt="Tour photo" />
         <a class="VeiwMor" href="#"><i class="icon-lft"></i></a>
         <p>New Date</p>
         <h5>More Info</h5>
      </div>
      <div class="TourBox">
         <a class="VeiwBox" href="#"><i class="icon-pls"></i><span>View</span></a>
         <img src="../assets/studio.jpg" width="330"  height="330" alt="Tour photo" />
         <a class="VeiwMor" href="#"><i class="icon-lft"></i></a>
         <p>New Date</p>
         <h5>More Info</h5>
      </div>
   </div><!--.WideBox-->

  </div><!--.Wrapper-->
 </section>


   </div>

   <div class="footer">
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </div>

  </div>

</template>

<script>
  export default {
    name: 'Home'
  }

</script>
<style>
h1{
  color: red;
}
.banner-area{
  width: 100%;
  height: 500px;
  position: fixed;
  top:100px;
  background-image: url('../assets/image.jpeg');
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;

}
.banner-area h2{
  padding-top: 8%;
  font-size: 70px;
  font-family: poppins;
  text-transform: uppercase;
  color: #9e9e9e;
}
.content-area{
  width: 100%;
  position: relative;
  top: 450px;
  background: #ddd;
  height: 1300px;
}
.content-area h2{
  font-family: bignoodletitling;
  letter-spacing: 4px;
  padding-top: 30px;
  font-size: 45px;
  margin: 0;
}
.content-area p{
  padding: 2% 0;
  font-family: merienda;
}

.child{
  width: 50%;
  height: 140px;
  float: left;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #cf551c;
  font-family: poppins;
  font-size: 16px;
}
.btn{
  height: 50px;
  width: 100px;
  background-color: #cf551c;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
}
.footer{
  position: fixed;
  bottom: 0;
  height: 200px;
  width:100%;
  background-color: #cf551c;

}


.WideBox{
	float:right;
	width:1500px;
	margin:20px 0px 30px 0px;
	}
  .TourBox{
	position:relative;
	z-index:0;
	float:right;
	margin:15px 0px 10px 12px;
	padding:0px 0px 10px 0px;
	width:325px;
	height:400px;
	overflow:hidden;
	direction:rtl;
	}
  .TourBox a.VeiwBox{
	position:absolute;
	top:0px;
	left:0;
	z-index:0;
	opacity:0;
	width:325px;
	height:325px;
	background:#fff;
	text-align:center;
	color:#fff;
	text-decoration:none;
	font:normal 13px/60px 'Yekan',Tahoma, Geneva, sans-serif;
	}
.TourBox a.VeiwBox i{
	position:absolute;
	top:-160px;
	left:0;
	width:100%;
	height:160px;
	}
.TourBox a.VeiwBox span{
	position:absolute;
	top:325px;
	left:0;
	width:100%;
	height:160px;
	}
  .TourBox img{
	float:right;
	margin:0px 0px 0px 0px;
	width:325px;
	height:325px;
	border:none;
	}
.TourBox p{
	float:right;
	width:200px;
	margin:5px 2px 0px 2px;
	padding:0px;
	color:#FF9000;
	text-align:right;
	font:normal 14px/20px 'Yekan',Tahoma, Geneva, sans-serif;
	}
.TourBox h5{
	float:right;
	margin:0px 2px;
	padding:0px;
	width:275px;
	height:30px;
	overflow:hidden;
	color:#000;
	text-align:right;
	font:normal 16px/30px 'Yekan',Tahoma, Geneva, sans-serif;
	}
.TourBox a.VeiwMor{
	float:left;
	margin:10px 0px;
	width:35px;
	height:35px;
	color:#fff;
	border-radius:100%;
	text-align:center;
	font:normal 17px/35px 'Yekan',Tahoma, Geneva, sans-serif;
	background:#FF9000;
	}


.Design{
  text-align: left;
}
.Wrapper{
	position:relative;
	width:1000px;
	margin:0px auto;
	}

</style>
