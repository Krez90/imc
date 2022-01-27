// ON RECUPERE LE FORMULAIRE
let myForm = document.getElementById('myForm');
let myRegex = /^[0-9]$/;


//ON AJOUTE UN ECOUTEUR
myForm.addEventListener('submit', function(e) {
    let poids = document.getElementById('poids');
    let taille = document.getElementById('taille')

    if(poids.value === "" || taille.value === ""){
        alert('Tous les champs doivent être remplis !')
        e.preventDefault();
        
    }else if(poids.value !== myRegex  || taille.value !== myRegex);{
        alert('Veuillez entrer uniquement des chiffres !');
        e.preventDefault();
    }
})