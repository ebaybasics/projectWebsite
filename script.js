'use strict'

const title = document.querySelector('.title');
const recipe1 = document.querySelector('.pic1');
const recipe2 = document.querySelector('.pic2');
const recipe3 = document.querySelector('.pic3');
const recName1 = document.querySelector('.picName1');
const recName2 = document.querySelector('.picName2');
const recName3 = document.querySelector('.picName3');
const recipeDisplay = document.querySelector('.infoBox');

const rec1Text = 'Bold flavors and colors combine on one sheet pan for a simple yet impressive dinner. Bonus is the minimal cleanup!';
const rec2Text = 'I have made this potato soup for many whom have given it this title. It takes a bit of effort but is well worth it. Please note: for those who do not wish to use bacon, substitute 1/4 cup melted butter for the bacon grease and continue with the recipe. (I generally serve this soup as a special treat as it is not recommended for people counting calories.)';
const rec3Text = 'These are made on a small baking sheet, and are absolutely delicious! My kids have taken this recipe to school so the class could make it, and it has been a hit.';

recipe1.addEventListener('click', (e) => {
    e.preventDefault();
    recipeDisplay.textContent = rec1Text;

});

recipe2.addEventListener('click', (e) => {
    e.preventDefault();
    recipeDisplay.textContent = rec2Text;

})

recipe3.addEventListener('click', (e) => {
    e.preventDefault();
    recipeDisplay.textContent = rec3Text;

})

recName1.addEventListener('click', (e) => {
    e.preventDefault();
    recipeDisplay.textContent = rec1Text;

});

recName2.addEventListener('click', (e) => {
    e.preventDefault();
    recipeDisplay.textContent = rec2Text;

})

recName3.addEventListener('click', (e) => {
    e.preventDefault();
    recipeDisplay.textContent = rec3Text;

})
