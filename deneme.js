var at1 = document.getElementById("atbir");
var at2 = document.getElementById("atiki");
var at3 = document.getElementById("atuc");
var at4 = document.getElementById("atdort");
var at5 = document.getElementById("atbes");
var bitis = document.getElementById("bitis").offsetLeft - 85;
var rdn1 = 0, rdn2 = 0, rdn3 = 0, rdn4 = 0, rdn5 = 0;
var kontrol = false;
var yarisma;

function Baslat() {
    let ganyan = parseInt(document.getElementById("ganyanKutu").value);
    let bahisKodu = parseInt(document.getElementById("bahisKoduKutu").value);

    if (isNaN(ganyan) || isNaN(bahisKodu) || bahisKodu < 1) {
        alert("Önce Bahis Yapınız!");
        return;
    }
    
    yarisma = setInterval(Yarisma, 750);
}

function Yarisma() {
    let bahisKodu = parseInt(document.getElementById("bahisKoduKutu").value);
    
    atYarisi(at1, 'Erbatur', 1.20, bahisKodu, 1);
    atYarisi(at2, 'Drogba', 1.80, bahisKodu, 2);
    atYarisi(at3, 'Bob Akif', 1.40, bahisKodu, 3);
    atYarisi(at4, 'Aboubakar', 2.40, bahisKodu, 4);
    atYarisi(at5, 'Sergen', 2.70, bahisKodu, 5);
    atSirasi();
}

function rastgeleSayiUret() {
    var rdn;
    do {
        rdn = Math.floor(Math.random() * 100);
    } while (rdn < 50);
    return rdn;
}

function guncelle() {
    var eklenen = parseInt(prompt("YATIRILACAK TUTARI GİRİNİZ:"));
    var mevcutBakiye = parseInt(document.getElementById("mevcutBakiye").innerHTML);
    var guncelBakiye = mevcutBakiye + eklenen;
    document.getElementById("mevcutBakiye").innerHTML = guncelBakiye;
}

function bahisYap() {
    let ganyan = parseInt(document.getElementById("ganyanKutu").value);
    let bahisKodu = parseInt(document.getElementById("bahisKoduKutu").value);
    var mevcutBakiye = parseInt(document.getElementById("mevcutBakiye").innerHTML) || 0; // Ensure mevcutBakiye is a number
    var guncelBakiye = mevcutBakiye - ganyan;
    
    if (guncelBakiye < 0) {
        alert("Oynanacak bahis için bakiyeniz yetersiz. Lütfen bakiye güncelleyiniz.");
        mevcutBakiye = parseInt(document.getElementById("mevcutBakiye").innerHTML) || 0; // Reset mevcutBakiye to avoid NaN
        return;
    }
    
    document.getElementById("mevcutBakiye").innerHTML = guncelBakiye;

    var atIsimleri = ["Erbatur", "Drogba", "Bob Akif", "Aboubakar", "Sergen"];
    var oranlar = [1.20, 1.80, 1.40, 2.40, 2.70];

    if (bahisKodu >= 1 && bahisKodu <= 5) {
        document.getElementById("bahisTutari").innerHTML = "Olası kazanç: " + (oranlar[bahisKodu - 1] * ganyan) + "TL Bahis Alınan At: " + atIsimleri[bahisKodu - 1];
    }
}

function atYarisi(at, atIsmi, oran, bahisKodu, atNo) {
    var rdn = eval("rdn" + atNo);
    
    if (rdn < bitis) {
        rdn += rastgeleSayiUret();
        if (rdn >= bitis) {
            rdn = bitis;
            clearInterval(yarisma);
            if (!kontrol) {
                kontrol = true;
                setTimeout(function() {
                    var ganyan = parseInt(document.getElementById("ganyanKutu").value);
                    var bahisKodu = parseInt(document.getElementById("bahisKoduKutu").value);
                    var mevcutBakiye = parseInt(document.getElementById("mevcutBakiye").innerHTML);

                    if (bahisKodu === atNo) {
                        alert("Kazanan at: " + atNo + " " + atIsmi + " " + (oran * ganyan) + "TL KAZANDINIZ!");
                        var guncelBakiye = mevcutBakiye + (oran * ganyan);
                        document.getElementById("mevcutBakiye").innerHTML = guncelBakiye;
                    } else {
                        alert("Kazanan at: " + atNo + " " + atIsmi + ". Bahsi Kaybettiniz.");
                    }

                    atlariSifirla();
                }, 2000);
            }
            at.style.marginLeft = bitis + "px";
        } else {
            at.style.marginLeft = rdn + "px";
        }
    }
    eval("rdn" + atNo + " = rdn");
}

function atlariSifirla() {
    rdn1 = rdn2 = rdn3 = rdn4 = rdn5 = 0;
    at1.style.marginLeft = at2.style.marginLeft = at3.style.marginLeft = at4.style.marginLeft = at5.style.marginLeft = "0px";
    kontrol = false;

    // Reset ganyanKutu and bahisKoduKutu values
    document.getElementById("ganyanKutu").value = "";
    document.getElementById("bahisKoduKutu").value = "";
    alert("Yeni bahis yapınız!");
}

function atSirasi() {
    var siralama = [
        { at: at1, isim: "Erbatur" },
        { at: at2, isim: "Drogba" },
        { at: at3, isim: "Bob Akif" },
        { at: at4, isim: "Aboubakar" },
        { at: at5, isim: "Sergen" }
    ];

    siralama.sort(function(a, b) {
        return b.at.offsetLeft - a.at.offsetLeft;
    });

    document.getElementById("siralamaSonucu").innerHTML = siralama[0].isim + " Önde";
}
