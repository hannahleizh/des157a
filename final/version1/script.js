(function (){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');
    const raspButton = document.querySelector('#raspbutton a');
    const salButton = document.querySelector('#salbutton a');
    const pineButton = document.querySelector("#pinebutton a");
    const dimButton = document.querySelector('#dimbutton a');
    const ramButton = document.querySelector('#rambutton a');
    const fruitButton = document.querySelectorAll("p a");

    // Zoom in and out with hover
    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function () {
            theImg.className = 'start';
            resetMode();
        });
    });

    function zoomPhoto(event){
        const thisCorner = event.target.id;
        switch (thisCorner){
            case 'raspberry': theImg.className = 'raspberry';
            setTimeout(function(){
                raspButton.className = "showing";
                // console.log("Raspberry");
            }, 1000)
            break;

            case 'salmon': theImg.className = 'salmon';
            setTimeout(function(){
                salButton.className = "showing";
                // console.log("Salmon");
            }, 1000);
            break;

            case 'pineapple': theImg.className = 'pineapple'; 
            setTimeout(function(){
                pineButton.className = "showing";
                // console.log("Pineapple");
            }, 1000);
            break;

            case 'dimsum': theImg.className = 'dimsum'; 
            setTimeout(function(){
                dimButton.className = "showing";
                // console.log("Dimsum");
            }, 1000);
            break;
            
            case 'ramen': theImg.className = 'ramen';
            setTimeout(function(){
                ramButton.className = "showing";
                // console.log("Ramen");
            }, 1000);
            break;
        }
    }

    // Raspberry Overlay
    document.querySelector('#raspbutton').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#raspoverlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#raspoverlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#raspoverlay').className = 'hidden';
        }
    });

    //Salmon Overlay
    document.querySelector('#salbutton').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#saloverlay').className = 'showing';
    });

    document.querySelector('.close2').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#saloverlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#saloverlay').className = 'hidden';
        }
    });

    // Pineapple Overlay
    document.querySelector('#pinebutton').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#pineoverlay').className = 'showing';
    });

    document.querySelector('.close3').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#pineoverlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#pineoverlay').className = 'hidden';
        }
    });
    
    // Dimsum Overlay
    document.querySelector('#dimbutton').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#dimoverlay').className = 'showing';
    });

    document.querySelector('.close4').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#dimoverlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#dimoverlay').className = 'hidden';
        }
    });
    
    // Ramen Overlay
    document.querySelector('#rambutton').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#ramoverlay').className = 'showing';
    });

    document.querySelector('.close5').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#ramoverlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#ramoverlay').className = 'hidden';
        }
    });

    // Hide button when zooming out
    function resetMode(){
        for(let i = 0; i < fruitButton.length; i++){
            //console.log(fruitButton[i])
            fruitButton[i].className = "hidden";
        }
    }

})();