let updatesOptions      = [];
let multiselectItems    = document.querySelectorAll('.multiselect__item');
let multiselectButton   = document.querySelector('.multiselect__button');
let subscribeButton     = document.querySelector('.subscribe__button button');
let multiselect         = document.querySelector('.multiselect');

function countOptions(e) {

    multiselectItems.forEach(item => {
        if (item === this) {
            item.classList.toggle('multiselect__item_checked');
            let itemIsChecked = item.classList.contains('multiselect__item_checked');
            let optionTitle = item.dataset.value;

            if (itemIsChecked) { // if we check the option push it into the array.
                updatesOptions.push(optionTitle);
            } else { // if we uncheck the option remove it from the array.
                removeOption(optionTitle);
            } 
        }
    });

    function setNumberOfOptions() {
        if (updatesOptions.length === 0) {
            multiselectButton.innerHTML = 'Nothing selected!';
            subscribeButton.disabled = true;
        } else if (updatesOptions.length === 1) {
            multiselectButton.innerHTML = updatesOptions.length +  ' newsletter';
            subscribeButton.disabled = false;
        } else { // if updatesOptions.length > 1 add newsletters instead of newsletter
            multiselectButton.innerHTML = updatesOptions.length +  ' newsletters';
        }
    }
    setNumberOfOptions();

    function removeOption(option) {
        updatesOptions.map((item, index) => {
            if (item === option) updatesOptions.splice(index, 1);
        });
    }
}


multiselectItems.forEach(item => item.addEventListener('click', countOptions));

multiselectButton.addEventListener('click', () => {
    multiselect.classList.toggle('multiselect_open');
});

// ---- 
// Figure Source

// ---- 
// Figure Source

let imgWrappers = document.querySelectorAll('.img-wrapper-contains-src');

function moveFigSource(e) {
    let figSource = this.querySelector('.fig-source');
    let {offsetX: x, offsetY: y} = e;

    let left = x - 20;
    let top = y; 
    let rightEdge = this.offsetWidth - figSource.offsetWidth;
    let bottomEdge =  this.offsetHeight - figSource.offsetHeight;

    console.log(x, y);
    console.log(left, top);
    // console.log(this, e.target);

    if (left < 0) { left = 0 }
    if (top  < 0) { top  = 0 }
    if (left > rightEdge)   { left = rightEdge}
    if (top  > bottomEdge ) { top = bottomEdge }

    figSource.style.transform = `translate(${left}px, ${top}px)`;
}

imgWrappers.forEach(wrapper => wrapper.addEventListener('mousemove', moveFigSource))


// -----------