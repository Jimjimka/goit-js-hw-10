const BASE_URL= 'https://restcountries.com/v2/name/'

export const fetchCountries = (name)=>{
        // fetch(`https://restcountries.com/v3.1/name/${event.target.value}`)
   return fetch(`${BASE_URL}/${name}?fields=name,capital,population,flags,languages`)
.then(response=>{
    if(!response.ok){
        throw new Error(response.status)
    }
    // console.log(response);
    // console.log(event.target.value);
    return response.json()
})

}
