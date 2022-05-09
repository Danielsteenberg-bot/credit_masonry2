// vanilla JS
// init with element
var grid = document.querySelector('.grid');
var grid1 = document.querySelector('.grid1');
 var msnry = new Masonry( grid1, {
  // options...
  itemSelector: '.grid-item1',


  

}); 


// init with selector
var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item',


});

msnry.layout();

 


let picturesList = document.querySelectorAll(".grid-item")

    window.addEventListener("scroll", function() {
        
            for (var i = 0; i < picturesList.length; i++) {
                var distanceInFrame = picturesList[i].getBoundingClientRect().top - window.innerHeight;

                if (distanceInFrame < 100) {
                    picturesList[i].style.marginTop = "0px"
                } 
                else if (distanceInFrame > 100 - window.innerHeight) {
                    let random = Math.floor(Math.random() * 150) + 70;
                    
                    picturesList[i].style.marginTop = random+"px"
                }   
            }
            
        })
