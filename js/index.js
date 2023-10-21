

var randy = "";


function random_num() {
    const num_length = 1;
    return Math.floor(Math.pow(10, num_length-1) + Math.random() * (Math.pow(10, num_length) - Math.pow(10, num_length-1) - 1));
}

function random_nums(){
    const  num_length = document.getElementById("numbers").value;
    for (let i = 0; i < num_length; i++){
        randy = randy + random_num().toString();
    }
    return randy;
}



function num_mem_init(){
    // const  num_length = document.getElementById("numbers").value;
    const  time_length = document.getElementById("time").value;
    var num = document.getElementById("display");
    // randy = random_nums();
    num.innerHTML = random_nums();
    localStorage.setItem('mr_randy', num.innerHTML);
    setTimeout(
        my_url()
        , time_length*1000); 
    
    
}

function my_url(){
    document.location.href='two.html';
}

function check(){
    const input_num = document.getElementById("input_test").value;
    // const  num_length = document.getElementById("numbers").value;

    if (input_num == localStorage.getItem('mr_randy')) {
        document.getElementById("check_disp").innerHTML = "well done";
    } else {
        document.getElementById("check_disp").innerHTML = "nope. good luck next time";
    }


    // for (let i=0; i < num_length; i++ ){
    //     if (input_num == randy) {
    //         document.getElementById("check_disp") = 
    //     }
    // }

}









