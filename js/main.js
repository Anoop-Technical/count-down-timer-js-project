const endDate = "5 Oct 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff < 0) return;
    inputs[0].value = (Math.floor(diff/3600/24)); //calculate days
    inputs[1].value = (Math.floor(diff/3600)%24); //calculate hours
    inputs[2].value = (Math.floor(diff/60)%60); //calculate minutes
    inputs[3].value = (Math.floor(diff)%60); //calculate seconds
}
clock();
setInterval(() => {
    clock();
}, 1000);
/*
    1 day = 24 hr
    1 hr = 60 min
    1 min = 60 sec
    1 sec = 1000 ms
*/