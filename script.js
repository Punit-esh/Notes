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
    try{
        make_index(current.dataset.tab)
    }
    catch{
        console.log(current.dataset.tab.toLowerCase().split(" ").join("_"));
        make_main(current.dataset.tab)
        menu_toggel()
    }
    finally{
        tab.forEach(el1 => {
            el1.classList.remove("active")
        })
        current.classList.add('active')
}
}
function make_index(id) {
    console.log(id);
    let str = eval(`${id}()`).map(el => `<div data-tab="${el.toUpperCase()}" class="index_menu_tabs" onclick="main_tab(this)">${el}</div>`).join("");
    write_to('index_menu', `<div class="index_menu_tabs" onclick="index_menu_back()" id="index_menu_back"><button></button></div>${str}`)
}
function make_main(changes_in_main) {
    console.log(changes_in_main.toLowerCase().split(" ").join("_"));
    let str = find_module(changes_in_main.toLowerCase().split(" ").join("_"))
    // let str = eval(changes_in_main.toLowerCase().split(" ").join("_"))
    // let str = label(`${id} : ${input()}`)
    write_to('main',str)
}
function index_menu_back() {write_to("index_menu", document.getElementsByClassName('main_navbar')[0].innerHTML)}

function menu_toggel() {
    document.getElementById('menu').classList.toggle('menu_x')
    document.getElementById('index_menu_halo').classList.toggle('index_menu_halo_x')
    document.getElementsByClassName('index_menu')[0].classList.toggle('index_menu_x')
}

function switch_themes(current) {
    current.classList.toggle('active')
    write_to('style', (current.getAttribute('class').split(" ").indexOf('active')==1) ? dark_theme : light_theme)
}