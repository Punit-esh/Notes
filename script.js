const write_to = (id, data) => document.getElementById(id).innerHTML = data
const light_theme = `:root{
    --background: #e2e2e2;
    --invert_background:#161718;
}`
const dark_theme = `:root{
    --background: #161718;
    --invert_background:#e2e2e2;
}`

function switch_themes(current) {
    if (current.innerHTML == "Dark") {
        write_to('theme_switcher', 'Light')
        write_to('style', dark_theme)
        return
    }
    write_to('theme_switcher', 'Dark')
    write_to('style', light_theme)
}
function menu_toggel(current) {
    current.classList.toggle('menu_x')
    document.getElementById('index_menu').classList.toggle('index_menu_x')
}
function change_iframe(link) {
    document.getElementById('link_op').src = `./modules/${link}`;
    
    menu_toggel()
}