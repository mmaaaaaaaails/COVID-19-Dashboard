import {
    data,
    countryDeathList,
    countryRecoveredList,
} from './table';

const deathsTotal = document.querySelector('#total_death');
const deathsNew = document.querySelector('#new_death');
const deathsRelative = document.querySelector('#relative_death');
const newDeathsRelative = document.querySelector('#relative_new_death');

const recoveredTotal = document.querySelector('#total_recovered');
const recoveredNew = document.querySelector('#new_recovered');
const recoveredRelative = document.querySelector('#relative_recovered');
const newRecoveredRelative = document.querySelector('#relative_new_recovered');

function addEvents() {
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