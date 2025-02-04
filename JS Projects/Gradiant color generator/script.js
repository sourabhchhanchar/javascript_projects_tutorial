const gradientBox = document.querySelector('.gradient-box');
const selectMenu = document.querySelector('.select-box select');
const colorInputs = document.querySelectorAll('.colors input');
const textArea = document.querySelector('textarea');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

const getRandomColor = () => {
    //generating random color in hexadecimal code
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradiant = (isRandom) => {
    if(isRandom){
      //if isRandom is true,update the color inputs value with random color.
      colorInputs[0].value = getRandomColor();
      colorInputs[1].value = getRandomColor();
    }
    //creating a gradient string using the color input value
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value},${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textArea.value = `background: ${gradient};`;
}
const copyCode = () => {
    //copying textarea value
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerHTML = 'Code Copied';
    setTimeout(() => copyBtn.innerHTML = 'Copy Code',1600);
}

colorInputs.forEach(input => {
    //calling generateGradiant function for every inputs click
    input.addEventListener('input',() => generateGradiant(false));
});
selectMenu.addEventListener('change',() => generateGradiant(false));
refreshBtn.addEventListener('click',() => generateGradiant(true));
copyBtn.addEventListener('click',() => copyCode());