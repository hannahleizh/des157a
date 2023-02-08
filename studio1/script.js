(function(){
    'use strict';
    console.log('reading js');

    const form = document.querySelector('#myform');

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const name1 = document.querySelector("#name1").value;
        const noun1 = document.querySelector("#noun1").value;
        const noun2 = document.querySelector("#noun2").value;
        const noun3 = document.querySelector("#noun3").value;
        const verb1 = document.querySelector("#verb1").value;
        const verb2 = document.querySelector("#verb2").value;
        const verb3 = document.querySelector("#verb3").value;
        const adj1 = document.querySelector("#adj1").value;
        const adj2 = document.querySelector("#adj2").value;
        const adj3 = document.querySelector("#adj3").value;
        const adj4 = document.querySelector("#adj4").value;
        const adj5 = document.querySelector("#adj5").value;
        const adj6 = document.querySelector("#adj6").value;
        const adj7 = document.querySelector("#adj7").value;
        const adj8 = document.querySelector("#adj8").value;
        const adj9 = document.querySelector("#adj9").value;

        if(name1 && noun1 && noun2 && noun3 && verb1 && verb2 && verb3 && adj1 && adj2 && adj3 && adj4 && adj5 && adj6 && adj7 && adj8 && adj9){
            mytext = `The ${noun1} and the ${noun2} managed to ${verb} ans it was ${adj}.`;
        }

        else{
            mytext = "Please fill in all the blanks!";
        }
        // madlib.innerHTML = mytext;
        console.log (mytext);


    });


})();