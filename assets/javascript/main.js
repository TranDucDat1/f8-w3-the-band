// ***** DOM *****
// 1. Element(h1, h2, p, a,...)
// 2. Attributes(tittle, class, id, style, href,...)
// 3. Text

// 1.Get elements

// var a = document.querySelector("#main #header #nav");

// console.log(a);
// console.log(a.querySelectorAll("li"));


// 2.Attributes Node

// var tourDate = document.getElementsByClassName("content-section")[1];
// var sectionHeading = document.querySelectorAll("#content .content-section .section-heading")[1];
// sectionHeading.setAttribute("style", "color:red");

// 3.innerText VS textContent Property
// innerText: chi in noi dung cua the(nhung thu duoc hien thi tren man hinh)
// textContent: khong chi in nhung thu tren man hinh ma con in nhung thu da duoc an di(Vd: the co thuoc tinh display:none, the <style>, <script>)

// var sectionHeading = document.querySelectorAll("#content .content-section .section-heading")[1];

// 4.innnerHTML(Them mot element vao DOM) VS OuterHTML


// 5. DOM CSS
// var tourSection = document.querySelector('.tour-section');
// // console.log(tourSection.style);
// tourSection.style.backgroundColor = "red";

// console.log(tourSection.style.backgroundColor);


// 6. DOM events
// 6.1 Attribute Events
// 6.2 Assign event using the element node
// var contactElement = document.querySelector('.click');
// var randomFunc = function(e){console.log(e);}
// contactElement.addEventListener('click', randomFunc);


// Modal
var modalClose = document.querySelector('.modal');

modalClose.addEventListener('click', openOrCloseModal);

function openOrCloseModal() {
    modalClose.classList.toggle('modal-open');
}

var getCloseBtn = document.querySelectorAll('.open-close');

for(var i=0; i<getCloseBtn.length; i++){
    getCloseBtn[i].addEventListener('click', openOrCloseModal);
}

// Xu ly khi nhan menu-icon thi se mo ra va dong lai mobile menu
var mobileMenu = document.querySelector('.mobile-menu-btn');
var header = document.querySelector('#header');
var headerHeight = header.clientHeight;

// An hien menu mobile
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;

    if(isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tu dong dong khi chon the <li>
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for(var i=0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

// // JSON
// var json = ["Javascript", "PHP"];

// console.log(JSON.stringify(json));
// // console.log(JSON.parse(json));



// promise

// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(2);
//         setTimeout(function(){
//             console.log(3);
//         }, 1000);
//     }, 1000);
// }, 1000);

// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//         // reject();
//         // resolve();
//     }
// )

// promise
//     .then(function() {
//         console.log("thanh cong!");
//     })
//     .catch(function() {
//         console.log("that bai!");
//     })
//     .finally(function() {
//         console.log("hoan thanh!");
//     })




