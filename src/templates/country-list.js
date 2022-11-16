
export function createCountryList (item){
    return item
    .map(
        ({name,flags})=>`<li class="country-item">
    <img src="${flags.svg}" alt="${name}" width="40" height="30" >
    <p>${name}</p>
</li>`).join('');
        

     

}

