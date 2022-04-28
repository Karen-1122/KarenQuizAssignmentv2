let currentQuestion = 0;
let score = 0;
let timeleft = 100; // 10 second timer
let hints = 0; // counter for hints shown
let maxHints = 3; // max hints to show

let questions = [
   {
	"question": "What is the name of this character?",
	"a": "Miku",
	"b": "Ichika",
	"c": "Nino",
	"d": "Itsuki",
	"image":"quizimages/q1.jpg",
	"hint":"She is the second daughter. Second in Japanese is Ni.",
	"answer": "c"
   },
   {
	"question": "What is the name of the anime?",
	"a": "Pokemon",
	"b": "Re:Zero",
	"c": "Naruto",
	"d": "One Piace",
	"image":"quizimages/q2.jpg",
	"hint":"Originally a light novel.",
	"answer": "b"
   },
   {
	"question": "How old is this character?",
	"a": "13 years old",
	"b": "320 years old",
	"c": "1302 years old",
	"d": "12013 years old",
	"image":"quizimages/q3.jpg",
	"hint":"Totoro is the lord of the forest.",
	"answer": "c"
   },
   {
	"question": "How tall is this character?",
	"a": "115cm",
	"b": "415cm",
	"c": "715cm",
	"d": "915cm",
	"image":"quizimages/q4.jpg",
	"hint":"She is a giant.",
	"answer": "d"
   },
   {
	"question": "What is this character’s favorite food?",
	"a": "Mochi",
	"b": "Matcha ice",
	"c": "Dorayaki",
	"d": "Daifuku",
	"image":"quizimages/q5.jpg",
	"hint":"What is the name of the brown food in the picture?",
	"answer": "c"
   },
   {
	"question": "What Breathing this character uses?",
	"a": "Water",
	"b": "Insect",
	"c": "Sound",
	"d": "Mist",
	"image":"quizimages/q6.jpg",
	"hint":"The shape of her hair ornament is a butterfly.",
	"answer": "b"
   },
   {
	"question": "What instrument does this she play?",
	"a": "Piano",
	"b": "Saxphone",
	"c": "Flute",
	"d": "Violin",
	"image":"quizimages/q7.jpg",
	"hint":"She has a hobby of making songs.",
	"answer": "a"
   },
   {
	"question": "What is her favorite food?",
	"a": "Sushi",
	"b": "Tonkatsu",
	"c": "Curry rice",
	"d": "Ramen",
	"image":"quizimages/q8.jpg",
	"hint":"Originally Indian food, but arranged in a Japanese style.",
	"answer": "c"
   },
   {
	"question": "What name is this character?",
	"a": "Honoka",
	"b": "Umi",
	"c": "Rin",
	"d": "Kotori",
	"image":"quizimages/q9.jpg",
	"hint":"The meaning of her name is a small bird.  in Japanese?",
	"answer": "d"
   },
   {
	"question": "What anime is  this?",
	"a": "Fate.",
	"b": "Jujutsu Kaisen",
	"c": "Violet Evergarden",
	"d": "Evangelion",
	"image":"quizimages/q10.jpg",
	"hint":" Her name is Violet.",
	"answer": "c"
   }
 ];



// show hint for current question if max not reached
 let getHintF = function () {
	 console.log("hint pressed");
	 // if max hints not reached
	 if (hints < maxHints) {
		 
		 // get hint for current question
		 let currentHint = questions[currentQuestion].hint;
		 
		 // show in page
		 document.getElementById("hint").innerHTML = currentHint;
		 
		 // increment hints shown
		 hints++;
		 
	 } // if
 }; 
 
 
let onloadPage = function () {
	console.log("");
	 document.getElementById("hintButton").onclick = getHintF;
	 
	 loadQuestion();
 };
 
window.addEventListener('load',onloadPage);
 
 
 
 // call the annonymous function every 1000 ms or 1 second
  let downloadTimer = setInterval(function(){
  
      // update display
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      timeleft -= 1;  // decrement time left
      
	  message = "Game over";
	  message += "<div id='restart' onclick='restartQuiz()'>Restart Quiz</div>";
	  
      // if time runs out, end timer
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
        document.getElementById("lightbox").style.display = "block";
        document.getElementById("message").innerHTML = message;
  }
}, 1000);



 
 // load a new question
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
			
	// reset the hint box
	document.getElementById("hint").innerHTML = "You have " + (maxHints - hints) +"hints left.";
	
 } // loadQuestion
 
 
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
	   
	   // create a special message
	   if (score>5){
       message = "You are awesomed! User's score is   " + score + " / " + questions.length; 
       }else{
       	if (score<5){
       message = "Good job. User's score is   " + score + " / " + questions.length; 
       }
	}
	   // add ability to restart quiz
       message += "<div id='restart' onclick='restartQuiz()'>Restart Quiz</div>";
    } else {
       loadQuestion();
    }

    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 
 
 function restartQuiz() {
	 location.reload();
 }// restart quiz
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}