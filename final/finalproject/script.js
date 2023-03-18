(function (){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');
    // will be used to determine which hotspot div you mouse over, if any.
    let thisSpot;
    // will be used to determine when the mouse has stopped moving.
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
        const thisCorner = event.target.id;
        // console.log(`zooming into ${thisSpot}`);
        switch (thisCorner){
            case 'raspberry': theImg.className = 'raspberry';
            setTimeout(function(){
                raspButton.className = "showing";
                // console.log("Raspberry");
            }, 500)
            break;

            case 'salmon': theImg.className = 'salmon';
            setTimeout(function(){
                salButton.className = "showing";
                // console.log("Salmon");
            }, 500);
            break;

            case 'pineapple': theImg.className = 'pineapple'; 
            setTimeout(function(){
                pineButton.className = "showing";
                // console.log("Pineapple");
            }, 500);
            break;

            case 'dimsum': theImg.className = 'dimsum'; 
            setTimeout(function(){
                dimButton.className = "showing";
                // console.log("Dimsum");
            }, 500);
            break;
            
            case 'ramen': theImg.className = 'ramen';
            setTimeout(function(){
                ramButton.className = "showing";
                // console.log("Ramen");
            }, 500);
            break;
        }
    }


    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseover', function(){
            document.querySelector('body').className = 'pagecolor2';
        });

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
    // Add event listeners to each of the hotspots
    // hotSpots.forEach(function (eachSpot) {
    //     eachSpot.addEventListener('mouseover', zoomPhoto);
    //     eachSpot.addEventListener('mouseover', function(){
    //         document.querySelector('body').className = 'pagecolor2';
    //     });

    //     eachSpot.addEventListener('mouseout', function () {
    //         thisSpot = 'out';
    //         console.log(thisSpot);

    //         document.querySelector('body').className = 'pagecolor1';            
    //         hideButton();

    //         document.addEventListener('keydown', function(e){
    //             if(e.key === 'Escape'){
    //                 theImg.className = 'start';
    //             }
    //         });


    //     });
    // });

    /* This event listener fires while the mouse is moving.
    If the value of thisSpot is 'out' you are not over a hotspot. 
    If you stop moving the mouse for a second or longer while not
    over a hotspot, the image zooms out.
    
    This seems to keep the dizzying effects of constantly zooming in and
    out as you mouse in and out of the hotspots to a minimum, and stops the 
    unintended effect of having the image sometimes slide out of the container
    entirely.
    */
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
        // fruitButton.className = "hidden"
        for(let i = 0; i < fruitButton.length; i++){
            //console.log(fruitButton[i])
            fruitButton[i].className = "hidden";
        }
    }

    document.querySelector('#music').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#music').innerHTML += '<audio controls autoplay><source src="beats.wav" type="audio/wav" class="hidden"></audio>';
        // document.querySelector('#music').innerHTML += 'Stop Music';
    });


})();
