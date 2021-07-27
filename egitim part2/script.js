const form = document.querySelector('form');
const detay = document.querySelector('.detay');
const kard = document.querySelector('.card');
const zamanresim = document.querySelector('img.zaman');
const icon = document.querySelector('.icon img');


const guncelleIU =(veri)=>{
  const{sehirdetay,havadurumu}=veri;
  detay.innerHTML=`<div class="text-muted text-uppercase text-center detay">
  <h5 class="my-3 text-center sehir">${sehirdetay.LocalizedName}</h5>
  <div class="my-3 text-center">${havadurumu.WeatherText}</div>
  <div class="display-4 my-4 text-center">
  <span>${havadurumu.Temperature.Metric.Value}</span>
  <span>&deg;C</span>
  </div>
  </div>`
if(kard.classList.contains('d-none')){
    kard.classList.remove('d-none');
};
const iconSrc =`/svg/${havadurumu.WeatherIcon}.png`;
icon.setAttribute('src',iconSrc);;
let zamansrc= havadurumu.IsDayTime?'/day.jpg':'/night.jpg';
zamanresim.setAttribute('src',zamansrc);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const sehir = form.sehir.value.trim();
   sehirguncelle(sehir).then(veri=> {guncelleIU(veri);});
    form.reset();
    localStorage.setItem('sehir',sehir);
});

const sehirguncelle =async (sehir)=>{   
        const sehirdetay = await sehirgetir(sehir);
        const havadurumu = await havaDurumuGetir(sehirdetay.Key);
return {

    sehirdetay,havadurumu
}
}
if(localStorage.getItem('sehir')){
    sehirguncelle(localStorage.getItem('sehir')).then(veri=> {guncelleIU(veri);});
}