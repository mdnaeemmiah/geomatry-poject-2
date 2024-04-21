function claculateTrianglearea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText  = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    

    const triangleHeightInput  = document.getElementById('triangle-height');
    const triangleheightText = triangleBaseInput.value;
    const height = parseFloat(triangleBaseText);

    const area = 0.5*base*height;
    console.log(area);

    const finalArea = document.getElementById('area-here');
    finalArea.innerText = area;
   
    
}