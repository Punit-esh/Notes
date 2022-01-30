const CONVERTORS = ()=>{
    return ["Color"]
}
const HTML = ()=>{
    return ["Introduction","Editos","Elements","Attributes","Comments","Styles","Colors","Responsive","Centered","Basic Example","Heading","Paragraphs","Links","Line Break","Horizontal Rule"]
}
const CSS = ()=>{
    return ["Introduction","Syntax and Selectors","Inserting","Colors","Backgrounds","Borders","Margins","Padding","Width and Height","Box Models","Text","Fonts","Icons","Links","Lists","Tables"]
}
const JS = ()=>{
    return ["Overwiew","introduction","Writind Code","Displaying Output","Statements","Syntax","Comments","Variables","Data Types","Operators","Arithematic Operators","Assignment Operators","Comparison operators","Logic & Conditional Operators"]
}

// const fun_hsb_to_rgb = (h, s, b) => {
//     s /= 100;
//     b /= 100;
//     const k = (n) => (n + h / 60) % 6;
//     const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
//     return [255 * f(5), 255 * f(3), 255 * f(1)];
// }

// final module runner
const find_module = (module)=>{
    return `<div class="${module}">${eval(module+'()')}</div>`
}

const html_introduction = ()=>{
    return `kjabsdjb`  ;
}

const color_convertor = [ "HSB TO RGB", "HSL TO RGB", "RGB To HSB", "RGB To HSL", "RGB TO HEX" ];
const color=`${div(`${select(ArrToOption(color_convertor),null,`select_colorConvertor`)}${input(`text`),null,`inp_colorConvertor`}`,`colorConvertor`,`colorConvertor`)}`
// const hsb_to_rgb = `${label(`H : ${input()}`)}${label(`S : ${input()}`)}${label(`B : ${input()}`)}${btn(`Convert`)}${label(`RGB : ${div(`RGB`,`RGB`,``)}`)}`;