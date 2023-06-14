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
