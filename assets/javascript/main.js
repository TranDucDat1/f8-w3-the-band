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

function openOrCloseModal() {
    modalClose.classList.add('modal-open');
}

var getCloseBtn = document.querySelector('.modal-close');

getCloseBtn.addEventListener('click', openOrCloseModal);








