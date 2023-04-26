const text1 = document.querySelector(".text1");
const page1_btn = document.getElementById("page1-btn");
const page1 = document.querySelector("#page1");
const text3 = document.querySelector(".text3");
page1.style.opacity = "10%";

/* all page */
const allpage = document.querySelectorAll(".cont");

/* page2 */
const page2 = document.querySelector("#page2");
const p2text=document.querySelector(".page2_text");
const heart = document.querySelector(".heart");

/*page 3 */
const page3=document.querySelector("#page3");
const p3=document.querySelector(".page3_text");

//page 4
const page4 = document.querySelector("#page4");
const p4_text1 = document.querySelector(".p4_text1");
const p4_text2 = document.querySelector(".p4-text2");

//page 5
const page5 = document.querySelector("#page5");
const p5_text1 = document.querySelector(".p5_text1");

//page 6
const page6 = document.querySelector("#page6");
const p6_text1 = document.querySelector(".p6_text1");


let count=0;
let scroll = 0


console.log('Hello World!');

const music = new Audio("musica.mp3");
/*page1 event animation (onclick)*/
page1_btn.addEventListener("click",()=>{
  music.play();
  page1.style.opacity="100%";
  text1.classList.add("left1");
  page1_btn.style.left="-100%";
  const text2 = document.querySelector(".text2").classList.add("left2");
   text3.classList.add("left3");
  console.log("hellow");
})

/* scrolling event per div class */
let number=0; 
let page2_count=10;
function f_page2(){
  if(window.pageYOffset > page2.offsetTop-500){
    page2_count +=5;
    page2.style.opacity=`${page2_count}%`;
    p2text.classList.add("ani2");
    heart.classList.add("bheart");
  }else{
    page2.style.opacity="0%";
  }
  
  /* page3 */
  if(window.pageYOffset > page3.offsetTop-500){
    p3.classList.add("ani3");
  }
  //page 4
  if (window.pageYOffset > page4.offsetTop - 500) {
    p4_text1.classList.add("p4_ani1");
  
    
    setTimeout(()=>{
      p4_text2.style.left="0%";
    },1000);
      p4_text2.classList.add("p4_ani2");
}
  if (window.pageYOffset > page5.offsetTop - 500){
    p5_text1.classList.add("p5_anis");
    
  }
  if (window.pageYOffset > page6.offsetTop - 500){
    console.log("hdhd");
}
}
window.addEventListener("scroll", f_page2);

