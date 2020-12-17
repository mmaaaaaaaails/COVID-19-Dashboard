import {
    data,
    countryDeathList,
    countryRecoveredList,
    universalList,
} from './table';

const cross = document.querySelector('.search__cross');
const searchArea = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__btn');
let searchProperty = false;

function chooseCountry() {
    searchProperty = true;
    universalList.forEach((item) => item.style.display = 'none');
    countryDeathList.forEach((item) => item.style.display = 'none');
    countryRecoveredList.forEach((item) => item.style.display = 'none');
}

function searchCountry() {
    cross.addEventListener('click', () => {
        document.location.reload();
    });

    searchButton.addEventListener('click', () => {
        for (let i = 0; i < data.Countries.length; i += 1) {
            if (searchArea.value.toLowerCase() === data.Countries[i].Country.toLowerCase()) {
                chooseCountry();
                universalList[i].style.display = 'block';
                countryDeathList[i].style.display = 'block';
                countryRecoveredList[i].style.display = 'block';
            }
        }
    });

    for (let i = 0; i < data.Countries.length; i += 1) {
        universalList[i].addEventListener('click', () => {
            chooseCountry();
            universalList[i].style.display = 'block';
            countryDeathList[i].style.display = 'block';
            countryRecoveredList[i].style.display = 'block';
        });
    }
}

export { searchCountry, searchProperty };
