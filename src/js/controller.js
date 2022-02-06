import * as model from './model';
import recipeViews  from './views/recipeViews';


// import icons from '../img/icons.svg'; // Parcel 1


import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};





//////////////////////////



const controlRecipe = async function() {
        try {
            const id = window.location.hash.slice(1);

            if (!id) retun;

            recipeView.rendeSpineer();
            // 1) Loading Recipe
            await model.loadRecipe(id);
            


            // 2) RENDERING RECIPE

            recipeViews.render(model.state.recipe);
            
            
            


        } catch (err){
        alert(err);
    }
};

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);