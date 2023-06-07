<template>

<footer>
 <div class="line">
    <hr style="height:1px; width: 1150px;  border-width:0;color:gray;background-color:gray">
    <img src="../assets/upwords.png">
  </div>
</footer>

</template>

<script>
export default{
    name: `Footer`,


}


</script>

<style scoped>
footer {
    display: flex;
}
footer .line{
    display: flex;
    flex-direction: column;
    margin: auto;
}
footer .line img{
    border-radius: 50%;
    height: 30px;
    width: 40px;
    margin: auto;
    margin-top: -33px;
    

}



</style>