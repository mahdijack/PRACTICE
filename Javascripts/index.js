// console.log("JavaScript is working!");

// const button = document.getElementById("themeBtn");

// button.addEventListener("click", () => {
//     console.log("BUTTON CLICKED");

//     document.documentElement.classList.toggle("dark");
// });


function CheckForm(){
    let name = document.getElementById("fname");
    let number = document.getElementById("fnum"); 

    let namevalue = name.value.trim();
    let numbervalue = number.value.trim();

    let Nameregex = /^[A-Za-zآ-ی\s]+$/;
    let Numregex = /^\d{11}$/;

    name.classList.remove("success","error");
    number.classList.remove("success","error");

    if (namevalue === "" || !Nameregex.test(namevalue)){
        name.classList.add("error");
        alert("لطفاً اسم را درست وارد کنید.");
        return;
    }else {
        name.classList.add("success");
    }
    
    if (numbervalue === "" || !Numregex.test(numbervalue)){
        number.classList.add("error");
        alert("لطفا شماره خود را صحیح وارد کنید");
        return;
    }else {
        number.classList.add("success");

        checkresult(namevalue , numbervalue);
    }
}




// function CheckForm(){

//     let name = document.getElementById("fname");
//     let number = document.getElementById("fnum");

//     let nameValue = name.value.trim();
//     let numberValue = number.value.trim();

//     let nameRegex = /^[A-Za-zآ-ی\s]+$/;
//     let numberRegex = /^\d{11}$/;

//     // حذف رنگ قبلی
//     name.classList.remove("success","error");
//     number.classList.remove("success","error");

//     // اعتبارسنجی نام
//     if(nameValue == "" || !nameRegex.test(nameValue)){
//         name.classList.add("error");
//         alert("لطفاً اسم را درست وارد کنید.");
//         return;
//     }else{
//         name.classList.add("success");
//     }

//     // اعتبارسنجی شماره
//     if(numberValue == "" || !numberRegex.test(numberValue)){
//         number.classList.add("error");
//         alert("لطفاً شماره را درست وارد کنید.");
//         return;
//     }else{
//         number.classList.add("success");
//     }

//     // اگر همه چیز درست بود
//     checkResult(nameValue, numberValue);

// }


function checkResult(name, number){

    let pass = [
        {name:"Seid mahdi", number:"09357893113"},
        {name:"سید مهدی", number:"09228531181"},
        {name:"هانیه ابراهیمی", number:"09228531182"}
    ];

    let fail = [
        {name:"Seid Ali", number:"12345678912"},
        {name:"سید حسین", number:"09128392748"},
        {name:"علی پروین", number:"09368392748"}
    ];

    let retry = [
        {name:"mahmood", number:"11111111111"},
        {name:"jafari", number:"22222222222"},
        {name:"مهشید سلیمانی", number:"33333333333"}
    ];

    let found = false;

    pass.forEach(function(student){

        if(name == student.name && number == student.number){

            alert("🎉 تبریک، شما قبول شدید.");
            found = true;

        }

    });

    fail.forEach(function(student){

        if(name == student.name && number == student.number){

            alert("❌ متأسفانه شما رد شدید.");
            found = true;

        }

    });

    retry.forEach(function(student){

        if(name == student.name && number == student.number){

            alert("📚 شما باید دوباره امتحان بدهید.");
            found = true;

        }

    });

    if(found == false){

        alert("نام یا شماره شما در لیست وجود ندارد.");

    }

}







// switch (new Date().getDay()) {
//     case 0 :{
//         alert("Shanbe")
//         break;
//     }
//     case 1 :{
//         alert("YEK Shanbe")
//         break;
//     }
//     case 2 :{
//         alert("DO Shanbe")
//         break;
//     }
//     case 3 :{
//         alert("3E Shanbe")
//         break;
//     }
//     case 4 :{
//         alert("4 Shanbe")
//         break;
//     }
//     case 5 :{
//         alert("5 Shanbe")
//         break;
//     }
//     case 6 :{
//         alert("Jome")
//         break;
//     }
// }


// var Esm = "Mahdi";

// switch (Esm) {
//     case "Ali":
//     {
//         alert("Salam Ali");
//     break;
//     }
//     case "Mahdi" :
//         {
//             alert ("Khosh Amadi OWNER");
//         break;
//         }
// }

