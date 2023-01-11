(()=>{
    'user stric';
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form=>{
        from.addEventListener('submit', event=> {
            if(!form.checkValidity()){
                event.preventDefault();
                event.stopPropagation();
            }
            form.classlist.add('was-validated');
        },false);
    });
})();
function imagevalidation(){
    var file =document.getElementById("photo");
    var filepath = file.value;
    var exation = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    var img = document.getElementById("photo");
    if (exation.exec(filepath)){
        file.classList.remove("is-invalid");
        file.classList.add("is-valid");
    }else{
        file.classList.remove("is-valid");
        file.classList.add("is-invalid");
        alert("invalid File Fomat");
        file.value = '';
    }
    
}
var myInput = document.getElementById("passwd1");
var passwd2= document.getElementById("passwd2");
var passclass = document.getElementById("passwd1");
var passclass1 = document.getElementById("passwd2");
myInput.onkeyup = function (){
    var locaese = /[a-z]/g;
    var upercase = /[A-Z]/g;
    var number = /[0-9]/g;
    if(myInput.value.match(locaese) && myInput.value.match(upercase) && myInput.value.match(number)&& myInput.value.length >= 8){
        passclass.classList.remove("is-invalid");
         passclass.classList.add("is-valid");
    } else {
         passclass.classList.remove("is-valid");
         passclass.classList.add("is-invalid");
    }
};
function clear(){
    document.getElementById("regform").reset;
}
passwd2.onkeyup=function(){
   if ( myInput.value == passwd2.value){
       passclass1.classList.remove("is-invalid");
       passclass1.classList.add("is-valid");
   }else{
       passclass1.classList.remove("is-valid");
       passclass1.classList.add("is-invalid");
   }
};
var mail1= document.getElementById("mail");
mail1.onkeyup = function (){
    var input = document.getElementById("mail").value;
    var adposition = input.indexOf("@");
    var dotposition = input.lastIndexOf(".");
    if (adposition <1 || dotposition<adposition+2 || dotposition+2>=input.length){
        mail1.classList.remove("is-valid");
        mail1.classList.add("is-invalid");   
    }else{
        mail1.classList.remove("is-invalid");
        mail1.classList.add("is-valid");
    }
};
var nic = document.getElementById("nic");
nic.onkeyup = function (){
    var nicv= document.getElementById("nic").value;
    var vpos= nicv.lastIndexOf("V");
     var number = /[0-9]/g;
    if ( nicv.length == 12 && nic.value.match(number)){
       nic.classList.remove("is-invalid");
       nic.classList.add("is-valid");
    }else if (nicv.length =10 && vpos>1 ) {
        nic.classList.remove("is-invalid");
        nic.classList.add("is-valid");
    }else{
       nic.classList.remove("is-valid");
       nic.classList.add("is-invalid");
    }   
};
var phone = document.getElementById("mobile");
phone.onkeyup = function (){
    var reg =  /^(?:0|94|\+94)?(?:(7)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{7}$/;;
    if (phone.value.match(reg)){
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
    }else{
       phone.classList.remove("is-valid");
       phone.classList.add("is-invalid");
    }
};
function namevalidation() {
    var name = document.getElementById("name");
    var vali= name.value;
     var locaese = /[A-z ]+$/;
//    var upercase = /[A-Z]/g;
//    var number = /[0-9]/g;
    if (isNaN(vali)){
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
    }else {
       name.classList.remove("is-valid");
       name.classList.add("is-invalid");  
    }
}

