function check(key){
        switch(key){
                case "w":               
                var audio = new Audio('sounds/tom-1.mp3');
                        audio.play();
                break;
                case "a":               
                var audio = new Audio('sounds/tom-2.mp3');
                        audio.play();
                break;
                case "s":               
                var audio = new Audio('sounds/tom-3.mp3');
                        audio.play();
                break;
                case "d":               
                var audio = new Audio('sounds/tom-4.mp3');
                        audio.play();
                break;
                case "j":               
                var audio = new Audio('sounds/snare.mp3');
                        audio.play();
                break;
                case "k":               
                var audio = new Audio('sounds/crash.mp3');
                        audio.play();
                break;
                case "l":               
                var audio = new Audio('sounds/kick-bass.mp3');
                        audio.play();
                break;
    
                default: console.log(key);
            }
}
/* frist we create for loop all drum
then with each index, we add event listener 
!!! important
correct syntax of addevent listener is 
element.addEventListener("event",function,useCapture(this is optinal))
when event triggerd, it create object capture manything about our event(which button was click, event type etc)
then we use this to take this object and take it innerHTML ("w" "a",etc... string )
pass innerHTML of object to function which use to play the sound */
for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
                var clicked = this.innerHTML;
                check(clicked);
                buttonAnimation(clicked);
        })

}

//this time we use event
//when event is triggered, interpreter create object of this event
//we use event to pass this object into event function
document.addEventListener("keydown",function(event){
       check(event.key);
       buttonAnimation(event.key);
})

function buttonAnimation(value){
        var choosen = document.querySelector("."+value);
        choosen.classList.add("pressed");
        setTimeout(function(){
                choosen.classList.remove("pressed");
        },50);
}