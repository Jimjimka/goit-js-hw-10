import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from '../src/js/fetchCountries'
import {createCountryinfo} from '../src/templates/country-info'
import {createCountryList} from './templates/country-list'
const debounce = require('lodash.debounce');

const serchEl=document.querySelector('#search-box')
const countryListEl =document.querySelector('.country-list');
const countryInfoEl =document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

const onInput =(event)=>{
    const serchCountry = event.target.value
    fetchCountries(serchCountry)

.then(data=>{
    if(data.length>10){
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
        return
    }

    else if(data.length>=2&&data.length<10){
        countryListEl.innerHTML=createCountryList(data)
        countryInfoEl.innerHTML=''
    }

    else {
        countryInfoEl.innerHTML=createCountryinfo(data)
        countryListEl.innerHTML=''
    }
})
.catch(err=>{
    Notiflix.Notify.warning("Oops, there is no country with that name")
})
}

serchEl.addEventListener('input',debounce(onInput, DEBOUNCE_DELAY))
