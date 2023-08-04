document.querySelector(".criar").addEventListener("click", function(){
    const yazi = document.querySelector(".yazi1");
    var yazii = yazi.value;
    if(sayi < 5){
    const islem = new Islemler();
    islem.urunEkle(yazii);
    sayi = sayi + 1;
    const sayiii = document.querySelector(".sayii");
    sayiii.value = sayi;
    yazi.value = "";
    }
})

sayi = 0;
var lis = "";
function Islemler(){}
function sayi(){}

Islemler.prototype.urunEkle = function(yazii){
if(sayi < 5){
    const list = document.querySelector(".list");
    const ul = document.createElement("ul");
    ul.innerHTML = `<li><input type="checkbox" for="denemyazi" class="radi"><label class="denemyazi">${yazii}</label><img class="sil" src="cop.png" alt="çöp kutusu"></li>`;
    list.appendChild(ul);
}
}
document.querySelector(".list").addEventListener("click", function(e){
    const islem = new Islemler();
    islem.tekSilme(e.target);
    })
    
    
Islemler.prototype.tekSilme = function(hedef){
const sayiii = document.querySelector(".sayii");
if(hedef.className == "sil"){
sayi = sayi - 1;
hedef.parentElement.remove();
sayiii.value = sayi;
}
}