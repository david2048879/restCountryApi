

const countries=document.querySelector('.countries');
const dropDown=document.querySelector('.dropDown');
const drop=document.querySelector('.drop');
const region = document.querySelectorAll('.region');
const search = document.querySelector('.search');



// async function getCountry(){

//     const url=await fetch('https://restcountries.com/v2/all');
//     const res=await url.json();
//     //console.log(res.name.common);

//      showCountry(res);
//     res.forEach(element => {
//         showCountry(element);
//     });

//}

const API_ENDPOINT = "https://restcountries.com/v3.1/all";

//USING FETCH API

 var mainUser;

fetch(API_ENDPOINT).then((Response)=>{
    return Response.json();
}).then((users)=>{
    mainUser=users;

    for(var i=0; i<users.length; i++){
    const{name,flags,population, region, capital,languages,currencies}=mainUser[i];
   
    const country=document.createElement('div');
    country.className='country';
    const countryImage=document.createElement('div');
    countryImage.className='country-image'
    country.appendChild(countryImage);
    const image=document.createElement('img');
    image.src=flags.png;
    countryImage.appendChild(image)
    const countryInfo=document.createElement('div');
      countryInfo.className='country-info';

      const countryName = document.createElement('h5');
      countryName.className='countryName';
      countryName.innerHTML=' '+ name.common;
      countryInfo.appendChild(countryName);

      const countrypopulation=document.createElement('p');
      countrypopulation.innerHTML='<strong>population: </strong>' + population;
      countryInfo.appendChild(countrypopulation);
      const countryRegion=document.createElement('p');
      countryRegion.className='regionName';
      countryRegion.innerHTML='<strong>rergion:</strong>' + region;
      countryInfo.appendChild(countryRegion);

      const Capital=document.createElement('p');
      Capital.innerHTML='<strong>Capital:</strong>' + capital;
      countryInfo.appendChild(Capital);


      const language=document.createElement('p');
      language.innerHTML='<strong>language:</strong>' + languages;
      countryInfo.appendChild(language);

    
      
    countries.appendChild(country);
    country.appendChild(countryInfo);
 



    }     
}).finally(()=>{
    console.log("done");
});




/*-----------------filter----------------------------- */


dropDown.addEventListener('click', ()=>{
    drop.classList.toggle('showDrop');

});

 const regionName=document.getElementsByClassName('regionName');
region.forEach(element => {
    element.addEventListener('click', ()=>{
        //console.log(element);
        Array.from(regionName).forEach(elem=>{
           // console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText) || element.innerText=="All"){
                elem.parentElement.parentElement.style.display='grid'
            }else{
                elem.parentElement.parentElement.style.display='none'
            }
           // console.log(element);
         })
    } )

   
   
 });



/*-------------------------search------------------------ */
const countryName=document.getElementsByClassName('countryName');

search.addEventListener('input',()=>{

    Array.from(countryName).forEach(elem=>{
         if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())){
             elem.parentElement.parentElement.style.display='grid'
         }else{
             elem.parentElement.parentElement.style.display='none'
         }
   // console.log(search.value);
});
})