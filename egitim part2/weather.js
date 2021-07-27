const key = 'XQTJGfJpiqGUCVArd5qTExFFathVLrdH';
const sehir = document.querySelector('.sehir');

const havaDurumuGetir= async(id)=> {
const temelurl='http://dataservice.accuweather.com/currentconditions/v1/'
    const sorgu =`${id}?apikey=${key}`;
    const res=await fetch(temelurl+sorgu);
    const veri =await res.json();
    return veri[0];
}




const sehirgetir=async(konum)=>{

const temelurl='http://dataservice.accuweather.com/locations/v1/cities/search';

const sorgu =`?apikey=${key}&q=${konum}`;
const res=await fetch(temelurl+sorgu);
const veri =await res.json();
return veri[0];
}

//  sehirgetir('ağrı').then(veri=>{
//   return havaDurumuGetir(veri.Key);
//  })
//  .then(veri=> {console.log(veri);})

//  .catch(err=>{console.log(err);});
