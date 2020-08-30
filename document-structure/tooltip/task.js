let link = document.querySelectorAll('.has-tooltip');

for (let i of link) {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        let title = e.target.getAttribute('title');
        let tooltip = document.querySelector('.tooltip_active');
        if(tooltip){
            if(tooltip.textContent !=title) {
                tooltip.remove();
                i.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${i.getBoundingClientRect().left}px; top: ${i.getBoundingClientRect().top + 15}px">${title}</div>`)
            } else {
                tooltip.remove();
            } 
            }else {
                i.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${i.getBoundingClientRect().left}px; top: ${i.getBoundingClientRect().top + 15}px">${title}</div>`);
            }   
    })
}
  
