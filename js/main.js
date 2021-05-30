
/* selectors */
const switch_btn = document.querySelector('.switch-button-container')
const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen-input')
const themes = ["theme1", "theme2", "theme3"]
const btn_align = ["flex-start", "center", "flex-end"]
let selected = 1

switch_btn.addEventListener('click', () => {
    container.classList.remove(themes[selected - 1]) // remove last selected theme :$ 
    selected = selected == 3 ? 1: selected + 1
    container.classList.add(themes[selected - 1])
    switch_btn.style.justifyContent = btn_align[selected-1]
})

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerHTML
        switch(value) {
            case 'DEL':
                screen.value = screen.value.slice(0, -1)
                break;
            case 'RESET':
                screen.value = ""
                break;
            
            case '=':
                screen.value = eval(screen.value)
                break;
            case 'x':
                screen.value += '*'
                break;
            default:
                screen.value = screen.value + value
        }
    })
})
