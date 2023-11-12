document.getElementById('navbarSupportedContent').style.display = 'none';

function hidenav() {
    let ele = document.getElementById('navbarSupportedContent').style.display;
    if (ele != 'none') {
        document.getElementById('navbarSupportedContent').style.display = 'none';
    }
    else {
        document.getElementById('navbarSupportedContent').style.display = 'flex';
    }
}

// Onload of page event on home

window.onload = function runonload() {
    comingText();
    comingImg();
}

function comingText() {
    addele = "Hey, This is a Great Brand You haven't seen yet"
    let i = 0;
    setInterval(() => {
        var temp = document.getElementById('comingtexth').innerHTML;
        document.getElementById('comingtexth').innerHTML = temp + addele.charAt(i);
        i = i + 1;
    }, 60);
    let cleartime = setTimeout(() => {
        addele2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        let i = 0;
        setInterval(() => {
            var temp = document.getElementById('comingtextp').innerHTML;
            document.getElementById('comingtextp').innerHTML = temp + addele2.charAt(i);
            i = i + 1;
        }, 50);
        clearTimeout(cleartime);
    }, 4000)

}

function comingImg() {
    let ele = document.querySelectorAll('.reveal_img1');
    for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove('notreveal');
        ele[i].classList.add('reveal');
    }
}

// Auto Show images on scroll
window.addEventListener('scroll', reveal_img())
function reveal_img() {
    let images = document.querySelectorAll('.reveal_img');
    for (let i = 0; i < images.length; i++) {
        let win_height = window.innerHeight;
        let ele_top = images[i].getBoundingClientRect().bottom;
        let bottomheight = 300;
        console.log(win_height, ele_top, bottomheight);

        if (ele_top <= win_height - bottomheight) {
            images[i].classList.add('reveal');
        }
        else {
            images[i].classList.remove('reveal');
        }
    }
}
