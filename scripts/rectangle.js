function claculateRectanglearea(){
    const triangleBaseInput = document.getElementById('rectangle-base');
    const triangleBaseText  = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    

    const triangleHeightInput  = document.getElementById('rectangle-height');
    const triangleheightText = triangleBaseInput.value;
    const height = parseFloat(triangleBaseText);

    const area = base+height;
    

    const finalArea = document.getElementById('area');
    finalArea.innerText = area;
   
    
}