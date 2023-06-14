var at1=document.getElementById("atbir");
var at2=document.getElementById("atiki");
var at3=document.getElementById("atuc");
var at4=document.getElementById("atdort");
var at5=document.getElementById("atbes");
var bitis=document.getElementById("bitis").offsetLeft-85;
var rdn1=0, rdn2=0, rdn3=0, rdn4=0, rdn5=0;
var kontrol=false;



function Baslat()
{

    yarisma=setInterval(Yarisma,750);

}



var Yarisma=function()
{
    var ganyan=parseInt(document.getElementById("ganyanKutu").value);
    var a = document.getElementById("bahisKoduKutu").value;
    //ganyan a gibi değerleri let ile tanımlarsan farklı metodlarla da kullanabilirsin.
    if(a<1)
    {
        alert("Önce Bahis Yapınız!");
        return
    }
    else
    {
        atbir();
        atiki();
        atuc();
        atdort();
        atbes();
        atSirasi();
    }
}


var rastgeleSayiUret= function()
{
    var rdn;
    do
    {
        rdn=Math.floor(Math.random()*100);
    }
    while(rdn<50);
    return rdn;
}

/*
function atbir()
{
    if(rdn1<bitis)
    {
        rdn1+=rastgeleSayiUret();
        if(rdn1>=bitis)
        {
            rdn1=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){alert("Kazanan at: 1");},2000);
            }
            at1.style.marginLeft=bitis+"px";
        }
        else
        {
            at1.style.marginLeft=rdn1+"px";
        }    
    }
}

function atiki()
{
    if(rdn2<bitis)
    {
        rdn2+=rastgeleSayiUret();
        if(rdn2>=bitis)
        {
            rdn2=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){alert("Kazanan at: 2");},2000);
            }
            at2.style.marginLeft=bitis+"px";
        }
        else
        {
            at2.style.marginLeft=rdn2+"px";
        }  
    } 
}

function atuc()
{
    if(rdn3<bitis)
    {
        rdn3+=rastgeleSayiUret();
        if(rdn3>=bitis){   
            rdn3=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){alert("Kazanan at: 3");},2000);
            }
            at3.style.marginLeft=bitis+"px";
        }
        else
        {
            at3.style.marginLeft=rdn3+"px";
        } 
    }
}

function atdort()
{
    if(rdn4<bitis)
    {
        rdn4+=rastgeleSayiUret();
        if(rdn4>=bitis)
        {
            rdn4=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){alert("Kazanan at: 4");},2000);
            }
            at4.style.marginLeft=bitis+"px";
        }
        else
        {
            at4.style.marginLeft=rdn4+"px";
        }
    }
}

function atbes()
{
    if(rdn5<bitis)
    {
        rdn5+=rastgeleSayiUret();
        if(rdn5>=bitis)
        {
            rdn5=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){alert("Kazanan at: 5");},2000);
            }
            at5.style.marginLeft=bitis+"px";
        }
        else
        {
            at5.style.marginLeft=rdn5+"px";
        }
    }
   
}
*/
function guncelle()
{

    var eklenen=parseInt(prompt("YATIRILACAK TUTARI GİRİNİZ:"));
    mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);
    var guncelB=eklenen+mevcutBakiye;
    document.getElementById("mevcutBakiye").innerHTML=guncelB;
}

function bahisYap()
{
    var ganyan=parseInt(document.getElementById("ganyanKutu").value);
    var a = document.getElementById("bahisKoduKutu").value;

    mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);
    var guncelB=mevcutBakiye-ganyan
    document.getElementById("mevcutBakiye").innerHTML=guncelB;




    if(a==1)
    {
        document.getElementById("bahisTutari").innerHTML= "Olası kazanç: "+1.20*ganyan +"TL Bahis Alınan At: Erbatur";
    }
    if(a==2)
    {
        document.getElementById("bahisTutari").innerHTML= "Olası kazanç: "+1.80*ganyan +"TL Bahis Alınan At: Drogba";
    }
    if(a==3)
    {
        document.getElementById("bahisTutari").innerHTML= "Olası kazanç: "+1.40*ganyan +"TL Bahis Alınan At: Bob Akif";
    }
    if(a==4)
    {
        document.getElementById("bahisTutari").innerHTML= "Olası kazanç: "+2.40*ganyan +"TL Bahis Alınan At: Aboubakar";
    }
    if(a==5)
    {
        document.getElementById("bahisTutari").innerHTML= "Olası kazanç: "+2.70*ganyan +"TL Bahis Alınan At: Sergen";
    }

    if(guncelB<ganyan)
    {
        setTimeout(function(){alert("Oynanacak bahis için bakiyeniz yetersiz. Lütfen bakiye güncelleyiniz.");});
        var bakiyeYetersiz = guncelB+ganyan
        document.getElementById("mevcutBakiye").innerHTML=bakiyeYetersiz;
        document.getElementById("bahisTutari").innerHTML="Bakiye yetersiz olduğu için bahis alınamadı.";

    }

}

function atbir()
{
    if(rdn1<bitis)
    {
        rdn1+=rastgeleSayiUret();
        if(rdn1>=bitis)
        {
            rdn1=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function()
               {
                var ganyan=parseInt(document.getElementById("ganyanKutu").value);
                var a = document.getElementById("bahisKoduKutu").value;
                mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);

                if(a==1)
                {
                    alert("Kazanan at: 1 Erbatur"+1.20*ganyan+"TL KAZANDINIZ!");
                    var guncelB=mevcutBakiye+1.20*ganyan;
                    document.getElementById("mevcutBakiye").innerHTML=guncelB;
                }
                else
                {
                    alert("Kazanan at: 1 Erbatur. Bahsi Kaybettiniz.");
                }

               },2000);
            }
            at1.style.marginLeft=bitis+"px";
        }
        else
        {
            at1.style.marginLeft=rdn1+"px";
        }    
    }
}

function atiki()
{
    if(rdn2<bitis)
    {
        rdn2+=rastgeleSayiUret();
        if(rdn2>=bitis)
        {
            rdn2=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function()
               {
                var ganyan=parseInt(document.getElementById("ganyanKutu").value);
                var a = document.getElementById("bahisKoduKutu").value;
                mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);

                if(a==2)
                {
                    alert("Kazanan at: 2 Drogba"+1.80*ganyan+"TL KAZANDINIZ!");
                    var guncelB=mevcutBakiye+1.80*ganyan;
                    document.getElementById("mevcutBakiye").innerHTML=guncelB;
                }
                else
                {
                    alert("Kazanan at: 2 Drogba. Bahsi Kaybettiniz.");
                }
               },2000);
            }
            at2.style.marginLeft=bitis+"px";
        }
        else
        {
            at2.style.marginLeft=rdn2+"px";
        }  
    } 
}

function atuc()
{
    if(rdn3<bitis)
    {
        rdn3+=rastgeleSayiUret();
        if(rdn3>=bitis){   
            rdn3=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){
                var ganyan=parseInt(document.getElementById("ganyanKutu").value);
                var a = document.getElementById("bahisKoduKutu").value;
                mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);

                if(a==3)
                {
                    alert("Kazanan at: Bob Akif"+1.40*ganyan+"TL KAZANDINIZ!");
                    var guncelB=mevcutBakiye+1.40*ganyan;
                    document.getElementById("mevcutBakiye").innerHTML=guncelB;
                }
                else
                {
                    alert("Kazanan at: 2 Bob Akif. Bahsi Kaybettiniz.");
                }
               },2000);
            }
            at3.style.marginLeft=bitis+"px";
        }
        else
        {
            at3.style.marginLeft=rdn3+"px";
        } 
    }
}

function atdort()
{
    if(rdn4<bitis)
    {
        rdn4+=rastgeleSayiUret();
        if(rdn4>=bitis)
        {
            rdn4=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){
                var ganyan=parseInt(document.getElementById("ganyanKutu").value);
                var a = document.getElementById("bahisKoduKutu").value;
                mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);

                if(a==4)
                {
                    alert("Kazanan at: 4 Aboubakar"+2.40*ganyan+"TL KAZANDINIZ!");
                    var guncelB=mevcutBakiye+2.40*ganyan;
                    document.getElementById("mevcutBakiye").innerHTML=guncelB;
                }
                else
                {
                    alert("Kazanan at: 4 Aboubakar. Bahsi Kaybettiniz.");
                }
               },2000);
            }
            at4.style.marginLeft=bitis+"px";
        }
        else
        {
            at4.style.marginLeft=rdn4+"px";
        }
    }
}

function atbes()
{
    if(rdn5<bitis)
    {
        rdn5+=rastgeleSayiUret();
        if(rdn5>=bitis)
        {
            rdn5=bitis;
            clearInterval(yarisma);
            if(!kontrol)
            {
                kontrol=true;
               setTimeout(function(){
                var ganyan=parseInt(document.getElementById("ganyanKutu").value);
                var a = document.getElementById("bahisKoduKutu").value;
                mevcutBakiye=parseInt(document.getElementById("mevcutBakiye").innerHTML);

                if(a==5)
                {
                    alert("Kazanan at: 5 Sergen"+2.70*ganyan+"TL KAZANDINIZ!");
                    var guncelB=mevcutBakiye+2.70*ganyan;
                    document.getElementById("mevcutBakiye").innerHTML=guncelB;
                }
                else
                {
                    alert("Kazanan at: 5 Sergen. Bahsi Kaybettiniz.");
                }
               },2000);
            }
            at5.style.marginLeft=bitis+"px";
        }
        else
        {
            at5.style.marginLeft=rdn5+"px";
        }
    }
   
}


// function atSirasi()
// {

//     atsirasii=setInterval(attSirasi,150);

// }


// var attSirasi=function()
 function atSirasi()
{

    if((at1.offsetLeft>at2.offsetLeft)&&(at1.offsetLeft>at3.offsetLeft)&&(at1.offsetLeft>at4.offsetLeft)&&(at1.offsetLeft>at5.offsetLeft))
    {
        document.getElementById("siralamaSonucu").innerHTML="Erbatur Önde";
    }
    else if((at2.offsetLeft>at1.offsetLeft)&&(at2.offsetLeft>at3.offsetLeft)&&(at2.offsetLeft>at4.offsetLeft)&&(at2.offsetLeft>at5.offsetLeft))
    {
        document.getElementById("siralamaSonucu").innerHTML="Drogba Önde";
    }
    else if((at3.offsetLeft>at1.offsetLeft)&&(at3.offsetLeft>at2.offsetLeft)&&(at3.offsetLeft>at4.offsetLeft)&&(at3.offsetLeft>at5.offsetLeft))
    {
        document.getElementById("siralamaSonucu").innerHTML="Bob Akif Önde";
    }
    else if((at4.offsetLeft>at1.offsetLeft)&&(at4.offsetLeft>at2.offsetLeft)&&(at4.offsetLeft>at3.offsetLeft)&&(at4.offsetLeft>at5.offsetLeft))
    {
        document.getElementById("siralamaSonucu").innerHTML="Aboubakar Önde";
    }
    else if((at5.offsetLeft>at1.offsetLeft)&&(at5.offsetLeft>at2.offsetLeft)&&(at5.offsetLeft>at3.offsetLeft)&&(at5.offsetLeft>at4.offsetLeft))
    {
        document.getElementById("siralamaSonucu").innerHTML="Sergen Önde";
    }
    // clearInterval(atsirasii);
}


