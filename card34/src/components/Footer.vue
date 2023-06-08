<template>

<!-- 
<div class="line">
    <div style="text-align: center;margin: auto; width: 1200px;">
        <hr id="hr1"  >
        <img style="margin-top: -60px;" src="../assets/upword1.png">
    </div>
  </div>   -->
  
  <div class="line">
        <img src="../assets/upword1.png" alt="">
    </div>


<br><br><br>
<footer >
<!--      
 <div class="line">
    <hr id="hr1" >
    <img src="../assets/upword1.png">
  </div>  -->

  <!-- <div id="hotc"></div> -->
 <div class="footerbottom">
    
    <!-- <div>  -->
        <!-- <img id="hotc" src="../assets/hotcold.png" alt="">  -->
    <!-- </div> -->
    <div class="footercontent">
      <div class="footerlogo">
        <div class="footerlogo1">
            <img src="../assets/Logo.png" alt="">
        </div>
        <div class="footericon">

            <img src="../assets/twitter1.png" alt="">
            <img src="../assets/linkdin1.png" alt="">
            <img src="../assets/insta1.png" alt="">
            <img src="../assets/fb1.png" alt="">

        </div>
        <div class="footerright">
            <p id="llc1">Copyright 2023 ® Avank. All Rights Reserved. </p>
           
            <p id="llc2">Avank LLC is a registered money service business (Reg# 16013890). </p>
            
        </div>
                        
      </div>
      <div class="footermenu">
        <div class="footermenu1">
             <h5>MENU</h5>
             <p>Exchange</p>
             <p>BNPL</p>
             <p>Gift Cards</p>
        </div>
        <div class="footercompany">
            <h5>COMPANY</h5>
             <p>About Us</p>
             <p>Contacts</p>
             <p>Privacy Policy</p>
             <p>Terms of Service</p>

        </div>
        <div class="footerlegal">
            <h5>LEGAL</h5>
             <p>AML/KYC Policy</p>
             <p>Cookie Policy</p>
             <p>Security Policy</p>
             <p>Refund Policy</p>

        </div>

      </div>
      <div class="footerapp">
        <h5>DOWNLOAD THE APP</h5>
        <div class="footerappstore">
            <img src="../assets/appStore.png">
        </div>
        <div class="footergoogleplay">
            <img src="../assets/googPlay.png">
        </div>

      </div>

    </div>

  </div>
</footer>

</template>

<script>
export default{
    name: `Footer`,


}


</script>

<style scoped>

.line{
            border: .5px solid rgba(54, 65, 64, 0.16);
            max-width: 1180px;
            text-align: center;
            margin: auto;
            margin-top: 50px;
            height: .5px;
            

        }
        .line img{
            margin-top: -32px;
        }
footer {
    display: flex;
    justify-content: end;
    max-width: 1300px;
    /* margin: auto; */
    /* padding: 0px 15px; */
    /* border: 1px solid; */
    background-image: url('../assets/hotcold.png');
    /* background-repeat: no-repeat; */
    background-repeat: no-repeat;
    /* border: 1px solid; */
    margin-top: 50px;
    text-align: center;
    /* width: ; */
    max-width: 1400px;
    margin: auto;
}
/* 
#hr1{
    margin-top: -243px;
    height:1px; 
    width: 1100px; color:gray;
    padding-left: 100px;
    margin: auto;
    
} */
/* footer .line{
    display: flex;
    flex-direction: column;
    margin: auto;
} */
/* footer .line img{
    border-radius: 50%;
    height: 30px;
    width: 40px;
    margin: auto;
    margin-top: -33px;
} */
.footerbottom{
    display: flex;
    height: 400px;
    width: 1200px;
    /* width: 1000px; */
    /* background-color: aqua; */
    margin-left: -1000px;
    /* border: 2px solid; */
   
}
.footercontent{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin-left: -50px;
    /* border: 2px solid; */
    margin-top: 120px;

}
.footerlogo{
    /* display: flex; */
    flex-direction: row;

    /* gap: 40px; */
    text-align: left;
    
}
.footericon img {
    margin-top: 30px;
    padding: 5px;
}
.footerright{
    margin-top: 60px;
}
.footerright :first-child{
    font-size: 17px;
    color: #364140;  
}
.footerright :second-child{
    font-size: 14px;
    color: rgba(54, 65, 64, 0.64);  
}

.footermenu{
    display: flex;
    justify-content: space-between;
    width: 500px;
    /* border: 1px solid ; */
}
 h5 {
    /* color: red; */
   color: #5E6766;
   font-size: 14px;
    
}
p{
    color: #364140;
    font-size: 16px;
}

#llc1 {
    font-size: 14px;
    color: #364140;

}
#llc2 {
    font-size: 12px;
    color: rgba(54, 65, 64, 0.64);

}

.footermenu1{
    
    flex-direction: row;
}
.footercompany{
    /* display: flex; */
    flex-direction: row;
}
.footerlegal{
    /* display: flex; */
    flex-direction: row;
}
.footerapp{
    /* display: flex; */
    flex-direction: row;
}
.footerappstore {
    margin-top: 20px;
    background-color: rgba(54, 65, 64, 0.8);
    border: 1px solid;
    padding: 10px;
    border-radius: 8px;
    width: 150px;

}
.footergoogleplay {
    margin-top: 20px;
    background-color: rgba(54, 65, 64, 0.8);
    border: 1px solid;
    padding: 10px;
    border-radius: 8px;
    width: 150px;
}
/* 
#hotc {
    background-image: url('../assets/hotcold.png');
    border: 1px solid green;
   background-size: cover;
   background-repeat: no-repeat;
   height: 100px;
   width: 200px;
} */

</style>