document.querySelector(".compare #compare-ip").addEventListener("input",function(e){
    document.querySelector(".compare .before .after").style.width=(+e.target.value) +"px";
  })
  
  document.querySelector(".compare #compare-ip").addEventListener("change",function(e){
    document.querySelector(".compare .before .after").style.width=(+e.target.value) +"px";
  })

const infoEmil = document.getElementById("info-emil");
const infoKirsten = document.getElementById("info-kirsten");
const infoAlessandro = document.getElementById("info-alessandro");

  function visEmil() {
      if (infoEmil.innerHTML ==="") {
        document.getElementById("info-kirsten").innerHTML="";
        document.getElementById("info-alessandro").innerHTML="";
        document.getElementById("info-emil").innerHTML = "Emil er det ældste barn i værtsfamilien. Han og hans to brødre elsker sport og vil meget gerne spille fodbold med Alessandro. Emil synes det er rigtig sjovt at have en udvekslingsstuderende i familien.<br><br>";
      } else {
        return infoEmil.innerHTML = "";
      }
    
  }
  function visKirsten() {
    if (infoKirsten.innerHTML ==="") {
      document.getElementById("info-emil").innerHTML="";
      document.getElementById("info-alessandro").innerHTML="";
      document.getElementById("info-kirsten").innerHTML = "Kirsten er værtsfamiliens mor. Hun har i sine egne studiedage selv været på udveksling i Frankrig og er meget interesseret i andre kulturer. Det er anden gang Kirsten er værtsmor, og hun håber at oplevelsen vil ende med et livslangt venskab.";
    } else {
      return infoKirsten.innerHTML = "";
    }
  
}
function visAlessandro() {
    if (infoAlessandro.innerHTML ==="") {
      document.getElementById("info-emil").innerHTML="";
      document.getElementById("info-kirsten").innerHTML="";
      document.getElementById("info-alessandro").innerHTML = "Alessandro er familiens udvekslingsstuderende. Han er 17 år og kommer fra området omkring Genoa i Norditalien. Han er meget sportsglad, især for fodbold og basketball. Alessandro er taget på udveksling for at udfordre sig selv med en masse nye oplevelser.";
    } else {
      return infoAlessandro.innerHTML = "";
    }
  
}
