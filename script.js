const write_to = (id, data) => document.getElementById(id).innerHTML = data
const read_from = (id, method) => eval(`document.getElementById(${id}).${method}`)
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

write_to('index_menu', document.getElementsByClassName('main_navbar')[0].innerHTML)

// setInterval(()=>document.getElementById('index_menu').style = `height:${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)-100}px`,1000)
document.getElementById('index_menu').style = `height:${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 100}px`

let tab = [...document.getElementsByClassName('main_tabs')];
function main_tab(current) {
    tab.forEach(el1 => {
        el1.classList.remove("active")
    })
    current.classList.add('active')
    make_index(current.dataset.tab)
}
// tab.forEach(el =>el.addEventListener('click',()=>{
//     tab.forEach(el1=>{
//         el1.classList.remove("active")
//     })
//     el.classList.add('active')
//     make_index(el.dataset.tab)
// }))

function make_index(id) {
    let str = eval(`${id}()`).map(el => `<div class="index_menu_tabs">${el}</div>`).join("");
    // console.log(str);

    write_to('index_menu', `<div class="index_menu_tabs" onclick="index_menu_back()" id="index_menu_back"><button></button></div>${str}`)
}
function index_menu_back() {
    write_to("index_menu", document.getElementsByClassName('main_navbar')[0].innerHTML)
}
// function switch_themes(current) {
//     write_to('theme_switcher', (current.innerHTML == "Light") ? 'Dark' : 'Light')
// }
function menu_toggel(current) {
    document.getElementById('menu').classList.toggle('menu_x')
    document.getElementById('index_menu_halo').classList.toggle('index_menu_halo_x')
    document.getElementsByClassName('index_menu')[0].classList.toggle('index_menu_x')
}

function switch_themes(current) {
    current.classList.toggle('active')
    // console.log(current.getAttribute('class').split(" "));
    // console.log();
    write_to('style', (current.getAttribute('class').split(" ").indexOf('active')==1) ? dark_theme : light_theme)
}