const write_to = (id, data) => document.getElementById(id).innerHTML = data
const light_theme = `:root{
    --background: #e2e2e2;
    --background-rgb: 226, 226, 226;
    --invert_background: #161718;
    --invert_background-rgb: 22, 23, 24;

    --menu_border: #40e0d0;
}`
const dark_theme = `:root{
    --background: #161718;
    --background-rgb: 22, 23, 24;
    --invert_background:#e2e2e2;
    --invert_background-rgb:226, 226, 226;

    --menu_border: #40e0d0;
}`

write_to('index_menu',document.getElementsByClassName('main_navbar')[0].innerHTML)

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
    console.log(str);
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
function change_iframe(link) {
    document.getElementById('link_op').src = `./modules/${link}`;    
    // menu_toggel()
}
