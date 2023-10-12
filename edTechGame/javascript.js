function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
 
let ri = "<img src=\'img/r.jpg\' width=\'140px\' height=\'100px\'>";
let wr = "<img src=\'img/w.jpg\' width=\'140px\' height=\'100px\'>";

let item_now1 = document.getElementById('item_now1');
let item_now2 = document.getElementById('item_now2');
let item_now3 = document.getElementById('item_now3');
let item_now4 = document.getElementById('item_now4');
let item_now5 = document.getElementById('item_now5');
let item_now6 = document.getElementById('item_now6');
let item_now7 = document.getElementById('item_now7');
let item_now8 = document.getElementById('item_now8');

function submmit(){
    alert("Do you want final summit");
     

    let drop1 = document.getElementById('drop1');
    children1 = drop1.children[0].alt;

    if(children1=="img1"){
        item_now1.innerHTML = ri;
    }else{
        item_now1.innerHTML = wr;
    }


    let drop2 = document.getElementById('drop2');
    children2 = drop2.children[0].alt;

    if(children2=="img3"){
        item_now2.innerHTML = ri;
    }else{
        item_now2.innerHTML = wr;
    }

    let drop3 = document.getElementById('drop3');
    children3 = drop3.children[0].alt;

    if(children3=="img8"){
        item_now3.innerHTML = ri;
    }else{
        item_now3.innerHTML = wr;
    }

    let drop4 = document.getElementById('drop4');
    children4 = drop4.children[0].alt;

    if(children4=="img5"){
        item_now4.innerHTML = ri;
    }else{
        item_now4.innerHTML = wr;
    }

    let drop5 = document.getElementById('drop5');
    children5 = drop5.children[0].alt;

    if(children5=="img4"){
        item_now5.innerHTML = ri;
    }else{
        item_now5.innerHTML = wr;
    }

    let drop6 = document.getElementById('drop6');
    children6 = drop6.children[0].alt;

    if(children6=="img7"){
        item_now6.innerHTML = ri;
    }else{
        item_now6.innerHTML = wr;
    }

    let drop7 = document.getElementById('drop7');
    children7 = drop7.children[0].alt;

    if(children7=="img2"){
        item_now7.innerHTML = ri;
    }else{
        item_now7.innerHTML = wr;
    }

    let drop8 = document.getElementById('drop8');
    children8 = drop8.children[0].alt;

    if(children8=="img6"){
        item_now8.innerHTML = ri;
    }else{
        item_now8.innerHTML = wr;
    }



}