var cname=document.getElementById('name');
var btnrandom=document.querySelector('.btn');
var story=document.querySelector('.story');
function randomValueSelectionFromArray(array)
{
 return array[Math.floor(Math.random()*array.length)];
}
    var oldstory= "Sham's summary is that the movie tells the dramatic story of the Titanic with :insertx: and :inserty: as the main actors.In the year 1912 a young poor guy, Leonardo, travels by the :insertz: ship Titanic from London to New York with a big dream. On board he meets a fabulous, wealthy girl, Kate Winslet. He fells in love with her as soon as he sees this gorgeous girl. However, after a few days the ship hits an enormous iceberg and the tragedy begins to unfold. The Titanic starts sinking.";
    var insertX=["Leonardo Di Caprio","Jack"];
    var insertY=["kate Winslet","Rose"];
    var insertZ=["huge","expensive","gorgeous"]; 
    btnrandom.addEventListener('click',result);
    function result(){
      var newstory=oldstory;
      var xitem=randomValueSelectionFromArray(insertX);
      var yitem=randomValueSelectionFromArray(insertY);
      var zitem=randomValueSelectionFromArray(insertZ);
      var newstory=newstory.replace(":insertx:",xitem);
      var newstory=newstory.replace(":inserty:",yitem);
      var newstory=newstory.replace(":insertz:",zitem);
      if(cname.value!=''){
          var name=cname.value;
          newstory=newstory.replace('Sham',name);
      }
      story.textContent=newstory;
      story.style.visibility='visible';
        }



