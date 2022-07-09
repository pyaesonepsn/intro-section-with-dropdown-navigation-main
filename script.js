const navbarBtn = document.querySelector('.navbar-btn');
const navbarNav = document.querySelector('.navbar-btn');
const dropdownContentFeatures = document.querySelector('.dropdown-content-features');
const dropdownContentCompany = document.querySelector('.dropdown-content-company');
const btnFeaturesIcon = document.getElementById('btn-features-icon');
const btnCompanyIcon = document.getElementById('btn-company-icon');
const btnFeatures = document.getElementById('btn-features');
const btnCompany = document.getElementById('btn-company');

navbarBtn.addEventListener('click', () => {
    navbarBtn.classList.toggle('toggle');
    navbarBtn.classList.toggle('show-nav');
});

btnFeatures.addEventListener('click', () => {
    dropdownContentFeatures.classList.toggle('show-features')
    btnFeaturesIcon.classList.toggle('transform');
    btnFeatures.classList.toggle('toggle-color')
})

btnCompany.addEventListener('click', () => {
    dropdownContentCompany.classList.toggle('show-company')
    btnCompanyIcon.classList.toggle('transform');
    btnCompany.classList.toggle('toggle-color');
})