const str = str=>(str!=null)?str:``
const input = (Type=`text`,Class=null,Id=null)=>`<input type="${Type}" class="${str(Class)}" id="${str(Id)}">`;
const label = Txt=>`<label>${Txt}</label>`;
const btn = Txt=>`<button>${Txt}</button>`;
const div = (Txt=null,Class=null,Id=null) => `<div class="${str(Class)}" id="${str(Id)}">${str(Txt)}</div>`
const select = (Txt=null,Class=null,Id=null) =>`<select class="${str(Class)}" id="${str(Id)}">${str(Txt)}</select>`
// const convert_StrToArr = str => {
//     current_input = str.replaceAll(" ", "");
//     return current_input.split(",")
// }
const ArrToOption = arr => arr.map(el=>`<option>${el}</option>`).join("")