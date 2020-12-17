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

function searchCountry() {
    cross.addEventListener('click', () => {
        document.location.reload();
    });

    // fix bag with index
    searchButton.addEventListener('click', () => {
        for (let i = 0; i < data.Countries.length; i += 1) {
            if (searchArea.value.toLowerCase() === data.Countries[i].Country.toLowerCase()) {
                searchProperty = true;
                universalList.forEach((item) => item.style.display = 'none');
                countryDeathList.forEach((item) => item.style.display = 'none');
                countryRecoveredList.forEach((item) => item.style.display = 'none');
                universalList[i].style.display = 'flex';
                countryDeathList[i].style.display = 'flex';
                countryRecoveredList[i].style.display = 'flex';
            }
        }
    });
}

export { searchCountry, searchProperty };
