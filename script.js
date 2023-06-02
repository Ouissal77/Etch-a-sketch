
    let divEle = document.createElement('div');
    divEle.className = 'grid';
    let container = document.querySelector('.container');
    let Cwidth = container.offsetWidth;
    let Cheight = container.offsetHeight;
    
    let clearBtn=document.querySelector('#clear');
    
    let btn = document.querySelector('button');
    let input;
    let slider = document.getElementById('mySlider');
    let label=document.querySelector('label');

    let isMouseDown = false;
    let isMouseup=true;
    let computedstyle=getComputedStyle(container);
    let bgColor=computedstyle.backgroundColor;
/*container.addEventListener('mousedown', function() {
  isMouseDown = true;
  isMouseup=false;
  console.log('down');
});
container.addEventListener('mouseup', function() {
    isMouseDown = false;
    isMouseup=true;
    console.log('up');
  });*/
   
  function draw(){
    let grids = document.querySelectorAll('.grid');
            
            
    grids.forEach(function(grid) {
      grid.addEventListener('mousedown', function() {
        isMouseDown = true;
        grid.style.backgroundColor = 'black';
    })
        
        grid.addEventListener('mouseup', function() {
            isMouseDown = false;
          });
        
        grid.addEventListener('mouseenter', function() {
           
          if (isMouseDown) {
            grid.style.backgroundColor = 'black';
          }
        });
      });
  }



    function paint(){
        input = parseInt(slider.value);
         
        label.textContent= input + ' x ' + input;


        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        
        
         
         let x=input*input;
         Cwidth = container.offsetWidth;
         Cheight = container.offsetHeight;
         
         divEle.style.width= Cwidth/input +'px';
            divEle.style.height= Cheight/input+'px';
           
         for(let i=0; i<x;i++){
          
           
            let clonedChild = divEle.cloneNode(true);
            
            container.appendChild(clonedChild);
        
            
          
            }
            
            
              
            draw();
           
                           
    }

    function clear(){

        let grids = document.querySelectorAll('.grid');
            
            
    grids.forEach(function(grid) {
      
        grid.style.backgroundColor = bgColor;
      });
    }
    clearBtn.addEventListener('click',clear);

    paint();
   
    slider.addEventListener('input',paint);

   