
let menuItems = document.querySelectorAll(".interest__check");
let firstMenuItem = menuItems.item(0);
let fourthMenuItem = menuItems.item(3);

firstMenuItem.addEventListener("click", function() {
    if (firstMenuItem.checked) {
        menuItems.item(1).checked = true;
        menuItems.item(2).checked = true;

    }else {
        menuItems.item(1).checked = false;
        menuItems.item(2).checked = false;
       

    }
    
})
fourthMenuItem.addEventListener("click", function() {
    if (fourthMenuItem.checked) {
        menuItems.item(4).checked = true;
        menuItems.item(5).checked = true;
    }else {
        menuItems.item(4).checked = false;
        menuItems.item(5).checked = false;
      

    }
})
