document.getElementById('recipe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const recipeName = document.getElementById('recipe-name').value.trim();
    const recipeIngredients = document.getElementById('recipe-ingredients').value.trim();
    const recipeInstructions = document.getElementById('recipe-instructions').value.trim();
    
    if (recipeName && recipeIngredients && recipeInstructions) {
        fetch('/addRecipe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: recipeName, ingredients: recipeIngredients, instructions: recipeInstructions })
        }).then(response => response.json()).then(data => {
            if (data.success) {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');
                recipeCard.innerHTML = `<h3>${recipeName}</h3>
                                        <p><strong>Ingredients:</strong> ${recipeIngredients}</p>
                                        <p><strong>Instructions:</strong> ${recipeInstructions}</p>`;
                document.getElementById('recipes-container').appendChild(recipeCard);
                
                document.getElementById('recipe-form').reset();
            }
        });
    }
});
