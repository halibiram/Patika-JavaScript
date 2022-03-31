let myName=document.querySelector("#myName")//myName adında bir değişken oluşturup "querySelector" özelliği ile html içerisindeki "myName" id'li element ile eşleştiririz
let userName=prompt("Adın Nedir?") //Kullanıcıdan ismini alarak bir "userName" değişkenine atarız.
let days=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"] //Günleri bir diziye yazarız.Daha sonra get.Day() ile  aldıgımız aldıgımız degerden 1 çıkarıp gün index olarak kullanırız
myName.innerHTML=userName//innerHTML ile kullanıcıdan promt ile aldığımız değeri yazdırırız.
let myClock=document.querySelector("#myClock") // querySelector ile #myClock elementini seçeriz.

function showClock()//saati hareketli hale getirmek için fonksiyon içine yazarız.
{
let date= new Date(); // zaman için date adında nesne tanımlıdık
let second=date.getSeconds();//saniye methodu
let minute=date.getMinutes();//dakika methodu
let hour=date.getHours()//saat methodu
let day=date.getDay()//gun için index degeri (0-6) arasında



myClock.innerHTML=`${hour}:${minute}:${second}  ${days[day-1]}` // myclock saat ve günü yazdırdık
}
let time //time diye degişken tanımladık
time = setInterval('showClock()', 1000); // 1 saniyede bir saat fonkisoyunun çagırması için kullandık