
    let currentMode='color';
    let currenColor;

    let colorPicker = document.getElementById('colorPicker');
    currenColor=colorPicker.value;
    colorPicker.addEventListener('change',function(){
        currenColor=colorPicker.value;  
    })
    let divEle = document.createElement('div');
    let pen = true;
    divEle.className = 'grid';
    let container = document.querySelector('.container');
    let Cwidth = container.offsetWidth;
    let Cheight = container.offsetHeight;
    
    let clearBtn=document.querySelector('#clear');
    let eraserBtn=document.querySelector('#eraser');
    let painBtn = document.querySelector('#paintBtn');
    let rainbowBtn=document.querySelector('#rainbow');
    let darkerBtn= document.querySelector('#darker');
    let lighterBtn= document.querySelector('#lighter');

    let btn = document.querySelector('button');
    let input;
    let slider = document.getElementById('mySlider');
    let label=document.querySelector('label');
console.log(slider.value);
    let isMouseDown = false;
    let isMouseup=true;
    let computedstyle=getComputedStyle(container);
    let bgColor=computedstyle.backgroundColor;

   
  function draw(){
    
    let grids = document.querySelectorAll('.grid');
    currenColor=colorPicker.value;
            
    grids.forEach(function(grid) {
      grid.addEventListener('mousedown', function() {
        isMouseDown = true;
        grid.style.backgroundColor = currenColor;
    })
        
        grid.addEventListener('mouseup', function() {
            isMouseDown = false;
          });
        
        grid.addEventListener('mouseenter', function() {
           
          if (isMouseDown) {
            grid.style.backgroundColor = currenColor;
          }
        });
      });
      currentMode='color'
  }



    function paint(){
        pen=true;
        input = parseInt(slider.value);
        label.textContent= input + ' x ' + input;

        while (container.firstChild) {
            container.removeChild(container.firstChild);}
                 
         let x=input*input;
         Cwidth = container.offsetWidth;
         Cheight = container.offsetHeight;
         
         divEle.style.width= Cwidth/input +'px';
         divEle.style.height= Cheight/input+'px';
           
         for(let i=0; i<x;i++){
            let clonedChild = divEle.cloneNode(true);
            container.appendChild(clonedChild);
            }
               if(currentMode==='color')           
            draw();
            else if (currentMode==='rainbow'){
                rainbow();}
                else if(currentMode==='eraser'){
                    erase();
                }
           
                           
    }

    function clear(){

        let grids = document.querySelectorAll('.grid');
            
            
    grids.forEach(function(grid) {
      
        grid.style.backgroundColor = bgColor;
      });
    }

function erase(){
    pen=false;
    let grids = document.querySelectorAll('.grid');
            
            
    grids.forEach(function(grid) {
      grid.addEventListener('mousedown', function() {
        isMouseDown = true;
        grid.style.backgroundColor = bgColor;
    })
        
        grid.addEventListener('mouseup', function() {
            isMouseDown = false;
          });
        
        grid.addEventListener('mouseenter', function() {
           
          if (isMouseDown) {
            grid.style.backgroundColor = bgColor;
          }
        });
    
      });
      currentMode='eraser';
}
function setCurrenMode(newMode){

    currentMode=newMode
    if (currentMode==='color'){
        painBtn.classList.add('active');
       if(eraserBtn.classList.contains('active')) eraserBtn.classList.remove('active');
       if(rainbowBtn.classList.contains('active')) rainbowBtn.classList.remove('active');
       if(darkerBtn.classList.contains('active')) darkerBtn.classList.remove('active');
       if(lighterBtn.classList.contains('active')) lighterBtn.classList.remove('active');
    }
    if (currentMode==='erase'){
        eraserBtn.classList.add('active');
       if(painBtn.classList.contains('active')) painBtn.classList.remove('active');
       if(rainbowBtn.classList.contains('active')) rainbowBtn.classList.remove('active');
       if(darkerBtn.classList.contains('active')) darkerBtn.classList.remove('active');
       if(lighterBtn.classList.contains('active')) lighterBtn.classList.remove('active');
    }
    if (currentMode==='rainbow'){
        rainbowBtn.classList.add('active');
       if(painBtn.classList.contains('active')) painBtn.classList.remove('active');
       if(eraserBtn.classList.contains('active')) eraserBtn.classList.remove('active');
       if(darkerBtn.classList.contains('active')) darkerBtn.classList.remove('active');
       if(lighterBtn.classList.contains('active')) lighterBtn.classList.remove('active');
    }
    if (currentMode==='darker'){
        darkerBtn.classList.add('active');
       if(painBtn.classList.contains('active')) painBtn.classList.remove('active');
       if(eraserBtn.classList.contains('active')) eraserBtn.classList.remove('active');
       if(rainbowBtn.classList.contains('active')) rainbowBtn.classList.remove('active');
       if(lighterBtn.classList.contains('active')) lighterBtn.classList.remove('active');
    }
    if (currentMode==='lighter'){
        lighterBtn.classList.add('active');
       if(painBtn.classList.contains('active')) painBtn.classList.remove('active');
       if(eraserBtn.classList.contains('active')) eraserBtn.classList.remove('active');
       if(rainbowBtn.classList.contains('active')) rainbowBtn.classList.remove('active');
       if(darkerBtn.classList.contains('active')) darkerBtn.classList.remove('active');
    }

}
function getRandomRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }
function rainbow(){
    let grids = document.querySelectorAll('.grid');
    
            
    grids.forEach(function(grid) {
      grid.addEventListener('mousedown', function() {
        isMouseDown = true;
        grid.style.backgroundColor = getRandomRgbColor();
    })
        
        grid.addEventListener('mouseup', function() {
            isMouseDown = false;
          });
        
        grid.addEventListener('mouseenter', function() {
           
          if (isMouseDown) {
            grid.style.backgroundColor = getRandomRgbColor();
          }
        });
      });
      currentMode='rainbow';

}
function darker(){
    
}

    
    painBtn.onclick = ()=> setCurrenMode('color');
    eraserBtn.onclick = ()=> setCurrenMode('erase');
    rainbowBtn.onclick = ()=> setCurrenMode('rainbow');
    darkerBtn.onclick = ()=> setCurrenMode('darker');
    lighterBtn.onclick = ()=> setCurrenMode('lighter');
    
    eraserBtn.addEventListener('click',erase);
    clearBtn.addEventListener('click',clear);
    painBtn.addEventListener('click',paint)
    rainbowBtn.addEventListener('click',rainbow)



    paint();
   
    slider.addEventListener('input',paint);

   