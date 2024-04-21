function claculateRhombusarea(){
    const rhombusinput = document.getElementById('rhombus-base');
    const rhombusText = rhombusinput.value;
    const d = parseFloat(rhombusText);

    const rhombusinput2 = document.getElementById('rhombus-height');
    const rhombusText2 = rhombusinput2.value;
    const D = parseFloat(rhombusText2);

    const rhombus1 = 0.5*d*D;
    console.log(rhombus1)

    const rhombus = document.getElementById('area-rhombus');
    rhombus.innerText = rhombus1;

}