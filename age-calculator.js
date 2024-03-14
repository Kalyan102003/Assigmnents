window.onload=function(){
    let naming=document.getElementById("name");
    let aging=document.getElementById("age");
    let checked=document.getElementById("okay");
   
    checked.addEventListener("click",function(){
        let output=document.getElementById("show_age");
        let dob=new Date();
        let user_age=new Date(aging.value);
        if(isNaN(user_age.getTime())){
            output.textContent="Invalid Date Of Birth";
        }
        else{
            let age_milli=dob-user_age;
            let age_years=age_milli/(1000*60*60*24*365.25);
            age_years=Math.floor(age_years);
            output.textContent="Hi ,"+naming.value+" your age is "+age_years;
        }

    })
}