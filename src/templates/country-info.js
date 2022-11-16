
export function createCountryinfo (item){
    return item
    .map(
        ({name,flags,capital,population,languages})=>`<li class="country-item">
        <img src="${flags.svg}" alt="${name}" width="30" >
        <p>${name}</p>
    </li>
    
    <p>Capital:${capital}</p>
    <p>Population:${population}</p>
    <p>Languages:${languages.map(el=>{
        return el.name
        
    })}</p>`).join('');
        

}