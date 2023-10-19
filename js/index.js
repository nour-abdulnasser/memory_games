function random_num() {
    const num_length = 1;
    return Math.floor(Math.pow(10, num_length-1) + Math.random() * (Math.pow(10, num_length) - Math.pow(10, num_length-1) - 1));
}

function random_nums(){
    let num_string = "";
    var  num_length = document.getElementById("numbers").value;
    for (let i = 0; i < num_length; i++){
        num_string = num_string + random_num().toString();
    }
    return num_string;
}

function num_mem_init(){
    const  num_length = document.getElementById("numbers").value;
    const  time_length = document.getElementById("time").value;
    var num = document.getElementById("display");

    num.innerHTML = random_nums(num_length);
    setTimeout(
        function()
        {
        num.innerHTML = '';
        }
        , time_length*1000);
}