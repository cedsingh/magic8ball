var userName;
var index = 0;
var userQuestions = [
	"Will I win the lottery in 2020?",
	"Is it wise to get my advice from a Magic 8-ball?",
	"Will I go Goa this year?",
	"Should I avoid anything to live a healthy lifestyle?",
	"Should I change my career?",
	"Will I get money from somewhere?",
	"Will I have friends if I move away?",
	"Will my ex come back into my life",
	"Will I marry my boyfriend/girlfriend?",
	"Am I going to get the promotion in my job?"
];
var answers = [
	"It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes - definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Yes.",
	"Signs point to yes.",
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Very doubtful."
];
var form = document.getElementById('form');
var quesAns = document.getElementById('quesAns');
var popup = document.getElementById('popup');
function getName() {
	userName = document.getElementById('userName').value;
	form.style.display = "none";
	showPopup(true);
	return false;
}

function showPopup(show) {
	document.getElementById('name').innerText = (userName == "")?"Hello!": "Hello, " + userName;
	popup.style.display = show?"block": "none";
}

function showQuesAns(show) {
	popup.style.display = 'none';
	quesAns.style.display = show?"block":"none";
	if(index == userQuestions.length) {
		quesAns.innerHTML = "<h2>No More Questions. Thanks for playing.</h2><button class='green' style='float: none; margin-top: 10px' onclick='quit()'>Start Again?</button>";
		return;
	}
	var temp = `<div style="margin: 20px">
				<h1>${userQuestions[index]}</h1>
				<div class='spinner'></div>
				<p class="answer">${answers[Math.floor(Math.random()*answers.length)]}</p>
				<button class="danger" onclick='quit(true)'>Lier</button>
				<button class="green" onclick='showQuesAns(true)'>Next</button>
				</div>`;
	quesAns.innerHTML = temp;
	index++;
	setTimeout(function(){
		document.getElementsByClassName('spinner')[0].style.display = "none";
		document.getElementsByClassName('answer')[0].style.display = "block";
	}, 2000);
}

function quit(isMiddle) {
	if(isMiddle) {
		quesAns.innerHTML = "<h2>I am just a game.</h2><button class='green' style='float: none; margin-top: 10px' onclick='quit()'>Start Again?</button>";
	}
	else {
		quesAns.style.display = "none";
		form.style.display = 'block';
	}
	popup.style.display = 'none';
	userName = "";
	index = 0;
}