
const  num_length = document.getElementById("numbers").value;
const  time_length = document.getElementById("time").value;

var num = document.getElementById("display");

function num_mem_init(num_length, time_length){
    function random_num(num_length) {
        return Math.floor(Math.pow(10, num_length-1) + Math.random() * (Math.pow(10, num_length) - Math.pow(10, num_length-1) - 1));
       
    }
    num.innerHTML = random_num(num_length);
    setTimeout(
        function()
        {
        num.innerHTML = '';
        }
        , time_length*1000);
    
}