(function (){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');
    let thisSpot;
    let movingMouse;

    const raspButton = document.querySelector('#raspbutton a');
    const salButton = document.querySelector('#salbutton a');
    const pineButton = document.querySelector("#pinebutton a");
    const dimButton = document.querySelector('#dimbutton a');
    const ramButton = document.querySelector('#rambutton a');

    const fruitButton = document.querySelectorAll("#container p a");
    const fruitOverlay = document.querySelectorAll("#container2 section");
    const fruitArticle = document.querySelectorAll("#container2 section article");
    const overlayClose = document.querySelectorAll("#container2 section article button");


    // Zoom in and out with hover
    function zoomPhoto(event){
        const thisSpot = event.target.id;
        switch (thisSpot){
            case 'raspberry': theImg.className = 'raspberry';
            setTimeout(function(){
                raspButton.className = "showing";
            }, 500)
            break;

            case 'salmon': theImg.className = 'salmon';
            setTimeout(function(){
                salButton.className = "showing";
            }, 500);
            break;

            case 'pineapple': theImg.className = 'pineapple'; 
            setTimeout(function(){
                pineButton.className = "showing";
            }, 500);
            break;

            case 'dimsum': theImg.className = 'dimsum'; 
            setTimeout(function(){
                dimButton.className = "showing";
            }, 500);
            break;
            
            case 'ramen': theImg.className = 'ramen';
            setTimeout(function(){
                ramButton.className = "showing";
            }, 500);
            break;
        }
    }


    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);

        eachSpot.addEventListener('mouseout', function () {
            theImg.className = 'start';
            document.querySelector('body').className = 'pagecolor1';

            hideButton();

            document.addEventListener('keydown', function(e){
                if(e.key === 'Escape'){
                    theImg.className = 'start';
                }
            });
        });
    });

    document.addEventListener('mousemove', function(){
        clearTimeout(movingMouse);
        if(thisSpot == 'out'){
            movingMouse = setTimeout(function(){
                theImg.className = 'start';
                console.log('zooming out!');
            }, 100);
        }
    });


    // All Overlays
    openOverlay();
    function openOverlay(){
        for(let i = 0; i < fruitOverlay.length; i++){
            //console.log(fruitButton[i])
            fruitButton[i].addEventListener('click', function(e){
                e.preventDefault();
                fruitButton[i].innerHTML += '<audio controls autoplay><source src="harp.wav" type="audio/wav" class="hidden"></audio>';
                fruitOverlay[i].className = 'showing';
            });

            document.addEventListener('keydown', function(e){
                if(e.key === 'Escape'){
                    fruitOverlay[i].className = 'hidden';
                }
            });

            overlayClose[i].addEventListener('click', function(e){
                e.preventDefault();
                overlayClose[i].innerHTML += '<audio controls autoplay><source src="click.wav" type="audio/wav" class="hidden"></audio>';
                fruitOverlay[i].className = 'hidden';
            });
            // document.querySelector('.close')

        }
    }

    // Hide button when zooming out
    function hideButton(){
        for(let i = 0; i < fruitButton.length; i++){
            fruitButton[i].className = "hidden";
        }
    }

    // Spin lazy susan
    document.querySelector('#spin').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#lazysusan').className = 'spin';
        document.querySelector('#spin').innerHTML += '<audio controls autoplay><source src="beats.wav" type="audio/wav" class="hidden"></audio>';
    });


})();
