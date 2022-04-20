// places all queries matching panel in the node list/array
const panels = document.querySelectorAll('.panel')


// now go through each panel
// add an event listener (click)
// remove the active class first, with the function
// whenever a panel is clicked, it has the active class added to  it
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}