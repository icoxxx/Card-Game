var time = document.getElementById('time');

time.addEventListener("animationend", function(){
    window.location.assign("gameOver.html")
});



/*  var cardClicked = document.getElementById("gameSection");
cardClicked.addEventListener("click", function(event){
    cardClicked = event.target;
})  */
var firstClass;
var timesClicked = 0;
var domNodeLiveScore = document.getElementById("liveScore");
var domNodeHighScore = document.getElementById("highScore");
var liveScore = 0;
var highScore = 0;

function flipCard(event, className){
    timesClicked += 1;
    if (timesClicked < 3){
        event.target.classList.toggle(className);
        if(timesClicked === 1){
            firstClass = className;
        }
        else if(timesClicked === 2 && firstClass === className){
            liveScore += 50;
            domNodeLiveScore.innerHTML = `Score: ${liveScore}`
            if(liveScore > highScore){
                highScore = liveScore;
                domNodeHighScore.innerHTML = `High Score: ${highScore}`
            }
            if (liveScore === 450){
                window.location.assign("gameWin.html");
            }
            function deleteCards(){
            var cards = document.getElementsByClassName(firstClass);
            for(var i = 0; i < cards.length; i++){
               cards[i].style.display = "none";
            } 
            timesClicked = 0;
        }
            setTimeout (deleteCards, 1300);
        }
        else if(timesClicked === 2 && firstClass !== className)  {
            var firstCard = document.getElementsByClassName(firstClass).item(0);
            var secondCard = event.target;
            function unFlipCards(){
                firstCard.classList.remove(firstClass);
                secondCard.classList.remove(className);
                firstCard.classList.add("rotateBack");
                secondCard.classList.add("rotateBack");
                firstClass = undefined;
                timesClicked = 0;
            }
            //timeOut < 1200ms
            setTimeout (unFlipCards, 1500);
        }
    }
    
    console.log(timesClicked)
    sessionStorage.setItem("value", highScore);
    sessionStorage.setItem("liveValue", liveScore);
    
    
}
