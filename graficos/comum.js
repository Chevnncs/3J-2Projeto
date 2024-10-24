const getCSS = (variavel) => {
return getComputedStyle(document.body).getPropertyValue(variavel);

}
const tickfont = {
 color: getCSS(' --cor-secundaria'),
 size: 16,
 family: getCSS('--fonte'),
}

export{
    getCSS,tickfont
}
