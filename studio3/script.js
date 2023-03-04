(function(){
    'use strict';
    console.log('reading js');

    // add script here
    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#overlay').className = 'hidden';
        }
    });

})();