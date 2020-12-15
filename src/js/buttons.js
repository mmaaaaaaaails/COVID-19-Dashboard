import {
    data,
    countryDeathList,
    countryRecoveredList,
    universalList,
} from './table';

const deathsTotal = document.querySelector('#total_death');
const deathsNew = document.querySelector('#new_death');
const deathsRelative = document.querySelector('#relative_death');
const newDeathsRelative = document.querySelector('#relative_new_death');

const recoveredTotal = document.querySelector('#total_recovered');
const recoveredNew = document.querySelector('#new_recovered');
const recoveredRelative = document.querySelector('#relative_recovered');
const newRecoveredRelative = document.querySelector('#relative_new_recovered');

const universalCases = document.querySelector('#universal_cases');
const universalDeaths = document.querySelector('#universal_deaths');
const universalRecovered = document.querySelector('#universal_recovered');
let universalProperty = 'cases';

const universalTotal = document.querySelector('#total_cases');
const universalNew = document.querySelector('#new_cases');
const universalRelative = document.querySelector('#relative_cases');
const newUniversalRelative = document.querySelector('#relative_new_cases');

const universalButtons = [universalTotal, universalNew, universalRelative, newUniversalRelative];

function addEvents() {
    universalCases.addEventListener('click', () => {
        universalProperty = 'cases';
        data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        universalButtons.forEach((button) => {
            button.classList = 'cases__button';
        });
        for (let i = 0; i < universalList.length; i += 1) {
            universalList[i].innerHTML = `<span class='cases__number'>${data.Countries[i].TotalConfirmed}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    universalDeaths.addEventListener('click', () => {
        universalProperty = 'deaths';
        data.Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
        universalButtons.forEach((button) => {
            button.classList = 'death__button';
        });
        for (let i = 0; i < universalList.length; i += 1) {
            universalList[i].innerHTML = `<span class='cases__number'>${data.Countries[i].TotalDeaths}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    universalRecovered.addEventListener('click', () => {
        universalProperty = 'recovered';
        data.Countries.sort((a, b) => b.TotalRecovered - a.TotalRecovered);
        universalButtons.forEach((button) => {
            button.classList = 'recovered__button';
        });
        for (let i = 0; i < universalList.length; i += 1) {
            universalList[i].innerHTML = `<span class='cases__number'>${data.Countries[i].TotalRecovered}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    universalTotal.addEventListener('click', () => {
        let universal = 'TotalConfirmed';
        if (universalProperty === 'recovered') {
            universal = 'TotalRecovered';
        }
        if (universalProperty === 'deaths') {
            universal = 'TotalDeaths';
        }
        data.Countries.sort((a, b) => b[universal] - a[universal]);
        for (let i = 0; i < universalList.length; i += 1) {
            universalList[i].innerHTML = `<span class='cases__number'>${data.Countries[i][universal]}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    universalNew.addEventListener('click', () => {
        let universal = 'NewConfirmed';
        if (universalProperty === 'recovered') {
            universal = 'NewRecovered';
        }
        if (universalProperty === 'deaths') {
            universal = 'NewDeaths';
        }
        data.Countries.sort((a, b) => b[universal] - a[universal]);
        for (let i = 0; i < universalList.length; i += 1) {
            universalList[i].innerHTML = `<span class='cases__number'>${data.Countries[i][universal]}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    universalRelative.addEventListener('click', () => {
        let universal = 'TotalConfirmed';
        if (universalProperty === 'recovered') {
            universal = 'TotalRecovered';
        }
        if (universalProperty === 'deaths') {
            universal = 'TotalDeaths';
        }
        data.Countries.sort((a, b) => b[universal] * (100000 / b.population)
            - a[universal] * (100000 / a.population));
        for (let i = 0; i < universalList.length; i += 1) {
            const relativeFormula = data.Countries[i][universal]
            * (100000 / data.Countries[i].population);
            universalList[i].innerHTML = `<span class='cases__number'>${relativeFormula.toFixed(1)}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    newUniversalRelative.addEventListener('click', () => {
        let universal = 'NewConfirmed';
        if (universalProperty === 'recovered') {
            universal = 'NewRecovered';
        }
        if (universalProperty === 'deaths') {
            universal = 'NewDeaths';
        }
        data.Countries.sort((a, b) => b[universal] * (100000 / b.population)
            - a[universal] * (100000 / a.population));
        for (let i = 0; i < universalList.length; i += 1) {
            const relativeFormula = data.Countries[i][universal]
            * (100000 / data.Countries[i].population);
            universalList[i].innerHTML = `<span class='cases__number'>${relativeFormula.toFixed(1)}</span>
                                        <span class='cases__country'>${data.Countries[i].Country}</span>
                                        <img class='cases__flag' src='${data.Countries[i].flag}' alt='flag'>`;
        }
    });

    deathsTotal.addEventListener('click', () => {
        for (let i = 0; i < countryDeathList.length; i += 1) {
            countryDeathList[i].innerHTML = `<span class='death__number'>
                                                ${data.Countries[i].TotalDeaths}
                                                <span class='death__end'>deaths</span>
                                                </span>
                                            <span class='death__country'>${data.Countries[i].Country}</span>`;
        }
    });

    deathsNew.addEventListener('click', () => {
        for (let i = 0; i < countryDeathList.length; i += 1) {
            countryDeathList[i].innerHTML = `<span class='death__number'>
                                                ${data.Countries[i].NewDeaths}
                                                <span class='death__end'>deaths</span>
                                                </span>
                                            <span class='death__country'>${data.Countries[i].Country}</span>`;
        }
    });

    deathsRelative.addEventListener('click', () => {
        for (let i = 0; i < countryDeathList.length; i += 1) {
            const relativeFormula = data.Countries[i].TotalDeaths
            * (100000 / data.Countries[i].population);
            countryDeathList[i].innerHTML = `<span class='death__number'>
                                                ${relativeFormula.toFixed(1)}
                                                <span class='death__end'>deaths</span>
                                                </span>
                                            <span class='death__country'>${data.Countries[i].Country}</span>`;
        }
    });

    newDeathsRelative.addEventListener('click', () => {
        for (let i = 0; i < countryDeathList.length; i += 1) {
            const relativeFormula = data.Countries[i].NewDeaths
            * (100000 / data.Countries[i].population);
            countryDeathList[i].innerHTML = `<span class='death__number'>
                                                ${relativeFormula.toFixed(1)}
                                                <span class='death__end'>deaths</span>
                                                </span>
                                            <span class='death__country'>${data.Countries[i].Country}</span>`;
        }
    });

    recoveredTotal.addEventListener('click', () => {
        for (let i = 0; i < countryRecoveredList.length; i += 1) {
            countryRecoveredList[i].innerHTML = `<span class='recovered__number'>
                                                    ${data.Countries[i].TotalConfirmed}
                                                    <span class='recovered__end'>cases</span>
                                                    <span class='recovered__amount'>
                                                        ${data.Countries[i].TotalRecovered} recovered
                                                    </span>
                                                </span>
                                                <span class='recovered__country'>
                                                    ${data.Countries[i].Country}
                                                </span>`;
        }
    });

    recoveredNew.addEventListener('click', () => {
        for (let i = 0; i < countryRecoveredList.length; i += 1) {
            countryRecoveredList[i].innerHTML = `<span class='recovered__number'>
                                                    ${data.Countries[i].NewConfirmed}
                                                    <span class='recovered__end'>cases</span>
                                                    <span class='recovered__amount'>
                                                        ${data.Countries[i].NewRecovered} recovered
                                                    </span>
                                                </span>
                                                <span class='recovered__country'>
                                                    ${data.Countries[i].Country}
                                                </span>`;
        }
    });

    recoveredRelative.addEventListener('click', () => {
        for (let i = 0; i < countryRecoveredList.length; i += 1) {
            const relativeFormula = 100000 / data.Countries[i].population;
            countryRecoveredList[i].innerHTML = `<span class='recovered__number'>
                                                    ${(data.Countries[i].TotalConfirmed * relativeFormula).toFixed(1)}
                                                    <span class='recovered__end'>cases</span>
                                                    <span class='recovered__amount'>
                                                        ${(data.Countries[i].TotalRecovered * relativeFormula).toFixed(1)} recovered
                                                    </span>
                                                </span>
                                                <span class='recovered__country'>
                                                    ${data.Countries[i].Country}
                                                </span>`;
        }
    });

    newRecoveredRelative.addEventListener('click', () => {
        for (let i = 0; i < countryRecoveredList.length; i += 1) {
            const relativeFormula = 100000 / data.Countries[i].population;
            countryRecoveredList[i].innerHTML = `<span class='recovered__number'>
                                                    ${(data.Countries[i].NewConfirmed * relativeFormula).toFixed(1)}
                                                    <span class='recovered__end'>cases</span>
                                                    <span class='recovered__amount'>
                                                        ${(data.Countries[i].NewRecovered * relativeFormula).toFixed(1)} recovered
                                                    </span>
                                                </span>
                                                <span class='recovered__country'>
                                                    ${data.Countries[i].Country}
                                                </span>`;
        }
    });
}

export { addEvents };
