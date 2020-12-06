fetch('recipe.json')
    .then(response => response.json())
    .then(data => insert_main(data));

const recipe_list = document.querySelector('#recipe');

let insert_main = data => {
    // fyrir hverja uppskrift í JSON
    for (let i = 0; i < data.length; i++) {
        const r = data[i];
        let div = document.createElement('div');
        div.id = 'recipe_' + r.id;
        div.style.display = 'block';
        
        // nafn á disknum
        let dish = document.createElement('h2');
        dish.innerHTML = r.dish;
        div.appendChild(dish);

        // heiti manneskjunar sem skrifaði uppskriftina
        let author = document.createElement('h3');
        author.innerHTML = 'uppskrift frá ' + r.author;
        div.appendChild(author);

        // mynd af disknum
        let img = document.createElement('img');
        img.src = r.img;
        img.alt = 'mynd af ' + r.dish;
        div.appendChild(img);

        // hráfena listi
        let ingredients_list = document.createElement('ul');
        for (let g = 0; g < r.ingredients.length; g++) {
            let ingredient = document.createElement('li');
            ingredient.innerHTML = r.ingredients[g];
            ingredients_list.appendChild(ingredient);
        }
        div.appendChild(ingredients_list);

        // uppskrift
        let desc = document.createElement('p');
        desc.innerHTML = r.desc;
        div.appendChild(desc);

        // dagsetning
        let date = document.createElement('h4');
        date.innerHTML = r.date;
        div.appendChild(date);
        
        recipe_list.append(div);
    }
}