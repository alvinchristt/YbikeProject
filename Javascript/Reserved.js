const input = document.getElementById('input');
input.addEventListener('click',validation)

function validation(){
    var name = document.getElementById('name').value;
    var quantity = document.getElementById('quantity').value;
    var phone = document.getElementById('phone').value;
    var Address = document.getElementById('address').value;
    
    var cek = document.forms["myForm"]["White"];
    
    if(cek[0].checked==false&&cek[1].checked == false){
        alert("Please Input The Color!");
        return; 
    }

        if(!name||!quantity||!phone||!Address){
        alert("Please Fill All the boxes!");
        return;
        }else if(name.length <3){
            alert("Name at least 3 char!");
            return;
        }else if(phone.length !==12 && phone.length !==11){
            alert("Invalid Phone Number");
            return;
        }else if(Address.length <16){
            alert("Address at least more than 16 character!");
            return;
        }else{
            document.getElementById('form').style.transform= 'scale(0)';
            window.location.href = "Home.html";
        alert("Thank you for using our services");
        return;
           
        }
        
}
var a =-1;
function showimg(){

    if(a===1){
        document.getElementById('form').style.transform= 'scale(100%)';
        return a=0;
        
    }else{
        document.getElementById('form').style.transform= 'scale(0)';
        return a=1;
    }

}

//ambil menu toggle
const menuToggle = document.querySelector('.menu-toggle input');
const ul = document.querySelector('ul');

menuToggle.addEventListener('click', function(){
    ul.classList.toggle('menu');
})