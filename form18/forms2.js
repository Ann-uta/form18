class Cat {
    constructor(name, owner, phone, email, breed, food, sex, comment) {
        this.name = name;
        this.owner = owner;
        this.phone = phone;
        this.email = email;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}
const form = document.querySelector('form');
let n = document.querySelector('#name');
let fio = document.querySelector('#fio');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let breed = document.querySelector('#cat');
let sex = document.querySelectorAll('.radio');
let comment = document.querySelector('#comment');

let cbChecked = []; 
function getCheckedCheckBoxes() {
    let checkboxes = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
          cbChecked.push(checkboxes[i].value);
       }
    }
   return cbChecked;  
  }
  
function createKotik(){
    form.addEventListener('submit', function(event){
        event.preventDefault();
      });
      getCheckedCheckBoxes();
      let sex_value;
for(let i = 0; i < sex.length; i++){
    if(sex[i].checked){
        sex_value = sex[i].value;
    }
}
let kotik = new Cat (n.value, fio.value, phone.value, email.value, breed.value, cbChecked, sex_value, comment.value);
console.log(kotik);
form.reset();
}