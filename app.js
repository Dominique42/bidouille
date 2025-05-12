//francais, histoire geo, musique, maths

let notesLudivine = [12, 13.5, 14, 16.5];
let somme=0;

//afficher en console la moyenne generale de Ludivine


notesLudivine.forEach (note=>{
somme+=note;
})

notesLudivine.forEach (note=>{
    somme +=note;

});


console.log ('la moyenne est : ${somme/notesLudivine.length}')