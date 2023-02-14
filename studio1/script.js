(function(){
    'use strict';
    console.log('reading js');

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#overlay').className = 'hidden';
        }
    });

    const madlib = document.querySelector("#madlib");
    const form = document.querySelector('#myform');

    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("formsubmitted");
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

        let mytext;

        if(name1 && noun1 && noun2 && noun3 && verb1 && verb2 && verb3 && adj1 && adj2 && adj3 && adj4 && adj5 && adj6 && adj7 && adj8 && adj9){
            mytext = `Attention all ${adj1} shoppers! Tired of ${verb1}ing through ${adj2} products that just don't cut it? Well, have no fear, because ${name1} is here!
            Introducing the ${adj3} solution to all your ${noun1} problems. With ${name1}, you'll be ${verb2}ing in no time. It's ${adj4}, it's ${adj5}, and best of all, it's ${adj6}. So, why settle for ${adj7} ${noun3} when you can have the best? Treat yourself to ${name1} today!
            Trust us, your ${noun2} will thank you. Get your ${name1} now and join the ranks of the ${adj8} and ${adj9}!`;
        }
        else{
            mytext = "Please fill in all the blanks!";
        }
        madlib.innerHTML = mytext;
        document.querySelector('#overlay').className = 'showing';


    });

})();