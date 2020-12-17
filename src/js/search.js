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

function setProperty() {
    searchProperty = true;
    universalList.forEach((item) => item.style.display = 'none');
    countryDeathList.forEach((item) => item.style.display = 'none');
    countryRecoveredList.forEach((item) => item.style.display = 'none');
}

function searchCountry() {
    for (let i = 0; i < data.Countries.length; i += 1) {
        if (searchArea.value.toLowerCase() === data.Countries[i].Country.toLowerCase()) {
            setProperty();
            universalList[i].style.display = 'block';
            countryDeathList[i].style.display = 'block';
            countryRecoveredList[i].style.display = 'block';
        }
    }
}

function chooseCountry() {
    cross.addEventListener('click', () => {
        document.location.reload();
    });

    searchButton.addEventListener('click', () => {
        searchCountry();
    });

    function checkEnter(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            searchCountry();
        }
    }

    searchArea.addEventListener('keydown', checkEnter, false);

    for (let i = 0; i < data.Countries.length; i += 1) {
        universalList[i].addEventListener('click', () => {
            setProperty();
            universalList[i].style.display = 'block';
            countryDeathList[i].style.display = 'block';
            countryRecoveredList[i].style.display = 'block';
        });
    }
}

export { chooseCountry, searchProperty };
