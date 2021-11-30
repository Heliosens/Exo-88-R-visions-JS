let field = document.createElement('input');
field.placeholder = "entrer une valeur";
field.focus();

let button = document.createElement('input');
button.type = 'button';
button.value = 'valider';

document.body.style.fontSize = '2rem';
document.body.appendChild(field);
document.body.appendChild(button);

let newDiv = document.createElement('div');
newDiv.innerHTML = "entrez au moins 10 valeurs";
document.body.appendChild(newDiv);

let table = ["g", "e", "e", "t" ,"p", "l", "z"];
console.log(table);

button.addEventListener('click', function (){
    let nbr = table.push(field.value);
    field.value = "";
    field.focus();
    if(nbr === 10){
        let item = Math.floor(Math.random() * table.length);
        newDiv.innerHTML = table[item];
    }
    console.log(table);

    if(nbr === 5){
        let newDiv2 = document.createElement('div');
        newDiv2.innerHTML = table[4];
        document.body.appendChild(newDiv2);
    }

    if(nbr === 10){
        let userBtn = document.createElement('input');
        let newDiv2 = document.createElement('div');
        userBtn.type = 'submit';
        userBtn.value = "valeur aléatoire"
        document.body.appendChild(userBtn);
        document.body.appendChild(newDiv2);
        userBtn.addEventListener('click', function (){
            newDiv2.innerHTML = table[Math.floor(Math.random() * table.length)];
        })
    }

    let userBtn2 = document.createElement('input');
    let newDiv2 = document.createElement('div');
    userBtn2.type = 'submit';
    userBtn2.value = "affichage";
    document.body.appendChild(userBtn2);
    document.body.appendChild(newDiv2);
    if(nbr > 0){
        userBtn2.addEventListener('click', function (){
            for(let i = 0 ; i < table.length ; i++){
                newDiv2.innerHTML += i + " - " + table[i] + "<br>";
            }
        })
    }

    let userBtn3 = document.createElement('input');
    userBtn3.type = 'submit';
    userBtn3.value = "suppr";
    document.body.appendChild(userBtn3);
    if(nbr > 0){
        userBtn3.addEventListener('click', function (){
            table.pop();
            console.log(table);
        })
    }

})

// table.splice(0, table.length);
// console.log(table);