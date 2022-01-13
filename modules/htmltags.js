const str = (str)=>(str!=null)?str:``
const input = ()=>`<input type="text">`;
const label = (Txt)=>`<label>${Txt}</label>`;
const btn = (Txt)=>`<button>${Txt}</button>`;
const div = (Class=null,Id=null,Txt=null) => `<div class="${str(Class)}" id="${str(Id)}">${str(Txt)}</div>`