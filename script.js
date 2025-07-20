const cards = document.querySelectorAll('.portfolio-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "scale(1)";
    }
  });
}, {
  threshold: 0.5
});

cards.forEach(card => {
  observer.observe(card);
});
window.onload = () => {
  
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      const main = document.getElementById("main-content");
      main.style.display = "block";
      main.classList.add("animate__fadeInUp");
     
    }, 1070); // 2 seconds
      speckji()
 };
 
function speckji(){
  
 const textToSpeack="Wellocome to  my website "
     const nanags=new SpeechSynthesisUtterance(textToSpeack)

     window.speechSynthesis.speak(nanags)

}
  document.addEventListener("DOMContentLoaded", () => {
 function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
   current = start,
   range = end - start,
   increment = end > start ? 1 : -1,
   step = Math.abs(Math.floor(duration / range)),
   timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
     clearInterval(timer);
    }
   }, step);
 }
 counter("count1", 0, 2, 5000);
 counter("count2", 0, 5, 5000);
 counter("count3", 0, 50, 5000);


});




var i = 0;
var txt = `I’m a passionate Java Backend Developer with a focus on clean code and scalable systems.
       I specialize in Spring Boot, REST APIs, and MySQL with hands-on project experience.
      Quick learner, team player, and always ready to tackle real-world tech challenges.`;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    

 
  var typed = new Typed('#element', {
      strings: ["Java Developer","Backend Developer","Coder"],
      typeSpeed: 150,
      backSpeed:150,
      loop:true
    });




         
