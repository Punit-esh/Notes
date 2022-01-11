const write_to = (id, data) => document.getElementById(id).innerHTML = data
const read_from = (id,method) => eval(`document.getElementById(${id}).${method}`)
const light_theme = `:root{
    --background: #ffffff;
    --invert_background: #161718;

    --menu_border: #40e0d0;
}`
const dark_theme = `:root{
    --background: #161718;
    --invert_background:#ffffff;

    --menu_border: #40e0d0;
}`

write_to('index_menu',document.getElementsByClassName('main_navbar')[0].innerHTML)

// setInterval(()=>document.getElementById('index_menu').style = `height:${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)-100}px`,1000)
document.getElementById('index_menu').style = `height:${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)-100}px`

let tab = [...document.getElementsByClassName('main_tabs')];
tab.forEach(el =>el.addEventListener('click',()=>{
    tab.forEach(el1=>{
        el1.classList.remove("active")
    })
    el.classList.add('active')
    make_index(el.dataset.tab)
}))
function make_index(id) {
    let str = eval(`${id}()`).map(el=>`<div class="index_menu_tabs">${el}</div>`).join("");
    // console.log(str);
    write_to('index_menu',str)
}
function switch_themes(current) {
    write_to('theme_switcher', (current.innerHTML=="Light")?'Dark':'Light')
    write_to('style',(current.innerHTML=="Light")?dark_theme:light_theme)
}
function menu_toggel(current) {
    current.classList.toggle('menu_x')
    document.getElementsByClassName('index_menu')[0].classList.toggle('index_menu_x')
}
// console.log(read_from("main_navbar","innerHTML"))
// console.log(document.getElementById("main_navbar").innerHTML)
// function change_iframe(link) {
//     document.getElementById('link_op').src = `./modules/${link}`;
//     // menu_toggel()
// }
