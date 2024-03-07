const btn = document.getElementById('btn');
const Bday = document.getElementById('birthday');
const resulT = document.getElementById('result');


function calculateAge(){
    const BdayValue = Bday.value;
    if(BdayValue === ""){
        alert('please enter your Birthday');
    } else{
        const age = getAge(BdayValue);
        resulT.innerText = `${age} ${age > 1 ? 'years' : 'year'}`
    }
}

function getAge(BdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(BdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(
        month < 0 ||
        (
            month === 0 && currentDate.getDate()< birthdayDate.getDate()
        )
    ){
        age --;
    
    }
    return age;
}

btn.addEventListener('click', calculateAge);