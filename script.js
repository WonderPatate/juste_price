// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let coups = 0;
let choice;

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 1001);
console.log(randomNumber);


function verif(nombre){

let instruction = document.createElement('div');

        if (choice < randomNumber) {
       instruction.textContent = "#" + coups + " (" + nombre + " ) + C'est plus";
       instruction.className = "instruction plus";

        } else if (nombre > randomNumber){
        instruction.textContent = "#" + coups + " (" + nombre + " ) + C'est moins";
        instruction.className = "instruction moins";
        }    
       
        else {
            instruction.textContent = "#" + coups + " (" + nombre + " ) + Vous avez trouvé";
            instruction.className = "instruction fini";
            input.disabled = true;
        }

        document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
if(isNaN(input.value)){
    console.log('text');
    error.style.display = 'inline';
} else {
    console.log('number');
    error.style.display = 'none';
}
})

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == ""){
        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "grey";
        choice = input.value;
        input.value = "";
        verif(choice);
    }
})


// Etape 6 - Créer la fonction vérifier