function semafor(){
    var boje =  document.getElementsByClassName('boje');
    var kreni= document.getElementsByClassName('kreni');
    var stani= document.getElementsByClassName('stani');
    stani[0].style.background ='grey';
    kreni[0].style.background ='green';
    boje[0].style.background ='red';
    boje[1].style.background ='grey';
    boje[2].style.background ='gray'; 
    boje[3].style.background ='red'; 
    boje[4].style.background ='gray'; 
    boje[5].style.background ='gray'; 
    
    function changeToYelow(){
        boje[1].style.background ='yellow';
        boje[4].style.background ='yellow';   
    } 
    function changeToGreen(){
        boje[0].style.background ='gray';
        boje[1].style.background ='gray';
        boje[2].style.background ='green'; 
        boje[3].style.background ='gray'; 
        boje[4].style.background ='gray'; 
        boje[5].style.background ='green';   
    } 
   /* function pesackiKreni(){
        kreni.style.background='green';
        stani.style.background='grey';
    }*/
    function pesackiStani(){
        stani[0].style.background ='red';
        kreni[0].style.background ='grey';
    }
    var x = setTimeout(changeToYelow,10000);
    var y = setTimeout(changeToGreen,15000);
    var z = setTimeout(pesackiStani,10000);

   // var start =setInterval(semafor,8000);

}
function raskrsnica(){
    var start =setInterval(semafor,25000);
}
raskrsnica();