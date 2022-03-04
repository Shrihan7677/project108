var dog=0;
var cat=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9o-IGqH42/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="Detected Voice is of "+results[0].label; 
        img=document.getElementById("ear");
        if(results[0].label=="Barking"){
            img.src="32.gif";
        }
        else if(results[0].label=="Meowing"){
            img.src="R.gif";
        }
        else{
            img.src="clipart-ear-simple.png";
        }
    }
}



        