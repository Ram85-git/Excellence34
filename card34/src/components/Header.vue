<template>
    <div class="header">
        <div class="header-main">
            <nav>
                <div class="logo">
                    <img src="../assets/Logo.png" alt="logo">

                </div>
                <div class="list">
                    <ul>
                        <li class="item">EXCHANGE</li>
                        <li class="item">BNPL</li>
                        <li class="item">CARDS</li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dwopdown" 
                    aria-expanded="false">
                        EN
                    </button>
                    <div class="myExchange">
                        My Exchange
                    </div>
                    <div class="name">
                        <img src="../assets/Vector.png">
                        Name Surname
                    </div>
    
                </div>
            </nav>

        </div>

    </div>



</template>

<script>
export default {
    name:`Header`,

}


</script>

<style scoped>
.header{
    height: 96px;
    /* background-color: aqua; */
    margin: auto;
   max-width: 1400px;
   /* justify-content: center; */
   text-align: center;
   /* border: 2px solid; */
   /* display: flex; */

}
.header-main nav {
    display: flex;
    justify-content: space-around;
    height: 96px;
    /* background-color: aqua; */
    align-items: center;
    
}

.header-main nav .list ul {
    display: flex;
    list-style-type: none;
    
    color: rgb(54, 65, 64, 0.64);
    margin-top: 34px;
    margin-bottom: 42px;
   gap:40px
}
.item {
    font-family: Montserrat;
    font-style: ExtraBold;
    font-size: 16px;
    line-height: 20px;
     line-height: 17px;
     color: #364140;
    font-weight: 600;
    color: rgba(54, 65, 64, 0.64);
    font-family: 'Montserrat';
   
}
.header-main nav .dropdown{
    display: flex;
    color:  rgb(54, 65, 64, 0.64);
    gap:40px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 34px;
    margin-bottom: 42px;
    
   

}
.btn dropdown-toggle{
    color: rgba(54, 65, 64, 0.32);
}




</style>