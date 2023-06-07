<template>

  <div class="contacts">
    <div class="contact">Contacts</div>
  </div>
  <div class="content" style="justify-content: center;">
    <div class="contactInfo">
        <div class="contentbig">
            <h5>Contact Information</h5>
            <div class="contentsmall">
                <div class="contentsmall_first">
                    <p>Company Name</p>
                    <p>Avank</p>
                </div>
                <div class="contentsmall_first">
                    <p>Phone</p>
                    <p>+44 000000000</p>
                </div>
                <div class="contentsmall_first">
                    <p>Registered address</p>
                    <p>Laki 14a, Tallinn, Harju,
                    <br>10621, Estonia</p>
                </div>
                <div class="contentsmall_first">
                    <p>E-mail</p>
                    <a href="">support@avank.ge</a>
                </div>
                <div class="contentsmall_first">
                    <p>Registration code</p>
                    <p>16013890</p>
                </div>
                <div class="contentsmall_first">
                    <p>Licenses</p>
                    <a href="">FVT000510</a>
                </div>
            
            </div>
        </div>

    </div>
    <div class="contactform">
        <div class="bigform">
            <h5>Contact Form</h5>
            <div class="smallform">
                <div class="formname">
                    <input type="text" class="name" placeholder="Name">
                </div>
                <div class="formemail">
                    <input type="email"  placeholder="Email">
                </div>
                <div class="formMessage">
                    <input id="message" type="text" placeholder="Message">
                </div>

            </div>
            <button type="button" class="btn btn-primary btn-sm">Send</button>
        </div>

    </div>
  </div>

</template>


<script>
export default{
    name:`Contacts`
}



</script>

<style scoped>
 
.contacts{
    height: 128px;
    border-radius: 32px;
    background-color: #DEE6E6;
    /* margin-left: 112px; */
    /* width: 1220px; */
    width: 1250px;
    margin: auto;

}
.contacts .contact{
    font-size: 32px;
    font-weight: 800px;
    padding-top: 43px;
    padding-bottom: 46px;
    padding-left: 64px;
    color: rgba(54, 65, 64, 0.8);
    font-family: Montserrat;
    font-style: ExtraBold;
    line-height: 39px;
    line-height: 100%;



}
.content{
    display: flex;
    gap:32px;
    /* margin-top: 264px; */
    margin-top: 40px;
    /* border:  1px solid ; */
    /* margin: auto; */
}
.contactInfo{
    background-color: rgba(54, 65, 64, 0.04);
    width: 416px;
    height: 645px;
    margin-left: -30px;
    border-radius: 40px;

    

}
.contactform{
    width: 680px;
    height: 725px;
    border-radius: 40px;
    /* background-color:  rgb(243, 237, 237); */

}
.contentbig h5{
    font-size: 24px;
    /* height: 29px; */
    font-weight: 500px;
    color: #364140;
    padding-left: 48px;
    padding-top: 48px;
    font-style: Medium;
    line-height: 29px;
    line-height: 100%;



   
}
.contentsmall{
    padding-left: 48px;
    
}

.contentsmall_first :first-child{
    color: rgba(54, 65, 64, 0.64);
    /* width: 700px;
    font-style: bold; */
}
.contentsmall_first :last-child{
    /* color: #00E0B0; */
    font-style: Bold;
    font-size: 20px;
    line-height: 100%;
    font-weight: 700;

}

.contentsmall_first a{
    color: #00AC99;
}

.contactform{
    display: flex;
}
.bigform {
    
    flex-direction: row;
    gap: 10px;
    
}
.bigform h5 {
    padding-left: 48px;
    padding-top: 48px;
}
.smallform {
    padding-left: 48px;
    
}

.bigform button{
    margin-left: 48px;
    height: 80px;
    width: 304px;
    margin-top: 32px;
    border-radius: 16px;
    background-image: linear-gradient(#00AC99 , #00E0B0);
}
.formname input {
    height: 96px;
    width: 600px;
    border-radius: 16px;
    margin-top: 32px;
    /* padding-left: 32px; */
    border: .5px solid #364140;
    background-color: rgba(54, 65, 64, 0.16);
  

}
 

.formemail input{
    height: 96px;
    width: 600px;
    border-radius: 16px;
    margin-top: 32px;
    border: .5px solid #364140;
    background-color: rgba(54, 65, 64, 0.16);
  

}
.formMessage input{
    height: 192px;
    width: 600px;
    border-radius: 16px;
    border: .5px solid #364140;
    background-color: rgba(54, 65, 64, 0.16);
    margin-top: 32px;
}
::placeholder{
    /* border: 1px solid red; */
    font-size: 20px;
    padding-left: 32px;
    color: #364140;;
}
#message::placeholder{
   
    

}








</style>