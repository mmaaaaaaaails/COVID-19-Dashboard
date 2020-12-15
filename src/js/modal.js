import {
    data,
    universalList,
    countryRecoveredList,
    countryDeathList,
    casesTable,
    recoveredTable,
    deathsTable,
} from './table';

const casesBlockFull = document.querySelector('.cases__block--full');
const casesFull = document.querySelector('.cases__full');
const deathFull = document.querySelector('.death__full');
const recoveredFull = document.querySelector('.recovered__full');

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const modalClose = document.querySelector('.modal__close');

function showGlobalCases() {
    casesBlockFull.addEventListener('click', () => {
        modal.classList.remove('hide');
        modalContent.innerHTML = `
            <h3 class="cases__title--full">Global Cases</h3>
            <p class="cases__number--full">${data.Global.TotalConfirmed}</p>
            `;
    });
}

function showCases() {
    casesFull.addEventListener('click', () => {
        modalContent.innerHTML = '<h3 class=\'cases__title\'>Cases by country</h3>';
        modalContent.classList.add('cases__countries');
        modal.classList.remove('hide');
        for (let i = 0; i < universalList.length; i += 1) {
            modalContent.append(universalList[i]);
        }
    });
}

function showDeath() {
    deathFull.addEventListener('click', () => {
        modalContent.innerHTML = `
            <h3 class="death__title">Global Death</h3>
            <p class="death__amount--full">${data.Global.TotalDeaths}</p>
            `;
        modalContent.classList.add('cases__countries');
        modal.classList.remove('hide');
        for (let i = 0; i < countryDeathList.length; i += 1) {
            modalContent.append(countryDeathList[i]);
        }
    });
}

function showRecovered() {
    recoveredFull.addEventListener('click', () => {
        modalContent.innerHTML = `
            <h3 class="recovered__title">Country</h3>
            <p class="recovered__subtitle--full">Cases, recovered</p>
        `;
        modal.classList.remove('hide');
        modalContent.classList.add('cases__countries');
        for (let i = 0; i < countryRecoveredList.length; i += 1) {
            modalContent.append(countryRecoveredList[i]);
        }
    });
}

function closeModalCross() {
    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
        for (let i = 0; i < universalList.length; i += 1) {
            casesTable.append(universalList[i]);
            deathsTable.append(countryDeathList[i]);
            recoveredTable.append(countryRecoveredList[i]);
        }
    });
}

closeModalCross();

export {
    showGlobalCases,
    showCases,
    showDeath,
    showRecovered,
};
