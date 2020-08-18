let rotator = document.querySelectorAll('.rotator__case');
let count = 0;

for (let i of Array.from(rotator)) {
    function asd() {
        if (count == rotator.length - 1) {
            rotator.item(count).classList.toggle('rotator__case_active');
            count = 0;
            rotator.item(count).classList.toggle('rotator__case_active');
        } else {
            rotator.item(count).classList.toggle('rotator__case_active');    
            count ++;
            rotator.item(count).classList.toggle('rotator__case_active');
    }
    }
}
setInterval(asd, 1000);
