fetch('recipe.json')
    .then(response => response.json())
    .then(data => search_main(data));

const search = document.querySelector('#search');
const recipe_div = document.querySelector('#recipe');
const empty_thingy = document.querySelector('#empty');

let search_main = data => {
    let on_input = e => {
        // ef search bar ekki tómur
        if (search.value !== null) {
            let hidden_ammount = 0;

            // fyrir object í JSON
            for (let i = 0; i < data.length; i++) {
                // selecta recipe í html
                let cur = document.querySelector('#recipe_' + data[i].id);
                
                
                // sýnir bara það sem passar í search bar
                if (data.filter(check_search).includes(data[i])) {
                    cur.style.display = 'block';
                    
                } else {
                    cur.style.display = 'none';
                    hidden_ammount += 1;
                }
            }
            
            
            if (hidden_ammount === data.length) {
                empty_thingy.style.display = 'block'
            } else {
                empty_thingy.style.display = 'none'
            }
        }
    }

    // event listener þegar notandi slær einhvað í search bar
    search.addEventListener('input', on_input);
}

// function runnað í filter, checkar hvort nafnið passar við search bar
let check_search = recipe => {
    return recipe.dish.toLowerCase().includes(search.value.toLowerCase());
}


