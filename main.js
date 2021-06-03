var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;
 var TextBox = 

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById('camera');


function start(){

    document.getElementById("textbox").innerHTML= "";

    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content == "hello")
    {
        console.log("taking the selfie");
        speak();
    }
}

function speak(){
 var synth = window.speechSynthesis;

  //speak_data = document.getElementById("textbox").value;

  speak_data = "Taking your selfie in 5 seconds";

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);
 Webcam.attach(camera);

 //setTimedout(action, ms); 1 sec = 1000 ms

 setTimedout(function(){ take_selfie(); save_selfie()}, 5000);


}

function take_selfie(){
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id = 'selfie' src= '" + data_uri + "'>";
 });

}

function save_selfie(){
 link = document.getElementById("link");
 image = document.getElementById("selfie").src;
 link.href = image;
 link.click();
}