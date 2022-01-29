 //BLOQUER LE NOMBRE DE CARACTERE DANS L'INPUT A 3 CHIFFRE
const elt_taille = document.querySelector("#taille");
    elt_taille.maxLength = 3;
        
const elt_poids = document.querySelector("#poids");
    elt_poids.maxLength = 3;

//LES SELECTEURS
const btnCalculer = document.querySelector(".button_valid");


// LES ECOUTEURS
btnCalculer.addEventListener("click", valider,);
 
//LA CONDITION POUR VALIDER L'ENVOIS

function valider (e){
    //CALCUL L'IMC   
    const divisionParCent = document.getElementById("taille").value / 100;
    const multipliacationTaille = divisionParCent * divisionParCent;
    const calculImc = document.getElementById("poids").value / multipliacationTaille;

    if(elt_taille.value == "" || elt_poids.value == ""){
        alert('Tous les champs doivent être remplis !');
        e.preventDefault();

    } else if(isNaN(elt_taille.value) == true || isNaN(elt_poids.value) == true){

    alert('Veuillez entrer uniquement des chiffres !');
     e.preventDefault();

    } else{
       alert('Votre score IMC est de: ' + calculImc);
    }
};