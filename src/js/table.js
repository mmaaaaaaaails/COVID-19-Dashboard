import {
    showGlobalCases, showCases, showDeath, showRecovered,
} from './modal';
import { populationData } from './populationData';
import { addEvents } from './buttons';

const globalCases = document.querySelector('.cases__number');
const globalDeaths = document.querySelector('.death__amount');
const deathsTable = document.querySelector('.death__list');
const recoveredTable = document.querySelector('.recovered__list');
const casesTable = document.querySelector('.cases__list');
const countriesList = [];
const countryDeathList = [];
const countryRecoveredList = [];
let data;

function fillTable() {
    populationData.sort((a, b) => a.name.localeCompare(b.name));
    data.Countries.sort((a, b) => a.Country.localeCompare(b.Country));
    for (let i = 0; i < data.Countries.length; i += 1) {
        data.Countries[i].flag = populationData[i].flag;
        data.Countries[i].population = populationData[i].population;

        const countryDeath = document.createElement('div');
        countryDeath.classList.add('death__item');
        countryDeath.innerHTML = `<span class='death__number'>
                                    ${data.Countries[i].TotalDeaths}
                                    <span class='death__end'>deaths</span>
                                    </span>
                                <span class='death__country'>${data.Countries[i].Country}</span>`;

        const countryRecovered = document.createElement('div');
        countryRecovered.classList.add('recovered__item');
        countryRecovered.innerHTML = `<span class='recovered__number'>${data.Countries[i].TotalConfirmed}
                                        <span class='recovered__end'>cases</span>
                                        <span class='recovered__amount'>
                                            ${data.Countries[i].TotalRecovered} recovered
                                        </span>
                                    </span>
                                    <span class='recovered__country'>${data.Countries[i].Country}</span>`;

        const countryCase = document.createElement('div');
        countryCase.classList.add('cases__item');
        countryCase.innerHTML = `<span class='cases__number'>${data.Countries[i].TotalConfirmed}</span>
                                <span class='cases__country'>${data.Countries[i].Country}</span>
                                <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;

        deathsTable.appendChild(countryDeath);
        recoveredTable.appendChild(countryRecovered);
        casesTable.appendChild(countryCase);
        countriesList.push(countryCase);
        countryRecoveredList.push(countryRecovered);
        countryDeathList.push(countryDeath);
    }
}

async function setCases() {
    const url = 'https://api.covid19api.com/summary';
    const res = await fetch(url);
    if (res.ok) {
        data = await res.json();
        globalCases.textContent = data.Global.TotalConfirmed;
        globalDeaths.textContent = data.Global.TotalDeaths;
        fillTable();
        showCases();
        showDeath();
        showRecovered();
        showGlobalCases();
        addEvents();
    } else console.log('Error with API');
}

setCases();

export {
    data,
    countriesList,
    countryRecoveredList,
    countryDeathList,
    casesTable,
    recoveredTable,
    deathsTable,
};
