 $(document).ready(function() {

    $.ajax( {

         type: "GET",
         url: "user.xml",
         dataType: "xml",
         success: function(xml){



      $(xml).find("personnes").each(function(){

        
        var x = $(html).find("#"= value);

        var x = $(this).find('name').text();
        console.log("Bonjour");

        var compagny = $(this).find('compagny').text();
        console.log("Coucou");
        
        var phone= $(this).find('phone').text();
        console.log("Téléphone"); 


        $('.personne').append($('<option>',{ value: id, text: name} ));
        console.log("lilaloulali");




         });

      $('select').change(function(){
          name =$(this).text();
          console.log("Dormir");

          $('#receiver').html(name);
       

        });  

    }

  });

  //xhr.send();

  
});



















/*document.addEventListener('DOMContentLoaded', function(event) {
	onsole.log ("Coucou");

	xhr = new XMLHttpRequest();
	xhr.open ("GET", "user.xml", true);

	xhr.onreadystatechange = function(){
		console.log ("lalalala");

      if (xhr.readyState === 4 && xhr.status === 200) {
    	console.log ("Salut");

    	var xml =xhr.responseXML;
    	var personnes = xml.getElementsByTagName ("personne");
    	console.log ("ok");

    	for(var i =0; i < personnes.length; i++){
    		
    		inputs[i].addEventListener('click', function() {
    			loadFile(this.personne); 

              console.log ("personnel");

       }

       });       

        
    		
	var personne = personnes.childNodes[i];
	var names = personnes.getElementsByTagName ("name");
	console.log ("personnes["+i+"]", personne);
	var names = personnes.getElementsByTagName ("nom");

	for(var j = 0; j < names.length; j++) {
		lert(names[j].childNodes[0].nodeValue);

  }
     document.getElementsByTagName
    }

    }	
    
    }; 
  
  
  xhr.send();

  } 
      // Votre code....

xhr.open("GET", "user.xml",true);
xhr.send();
var xml = xhr.responseXML;
var contactInfo =xml.getElementsByTagName ("contact-info");
for(var i =0; i < contactInfo.length; i++){
	var contactinfos = contactInfo[i];
	var names = contactInfo.getElementsByTagName ("name");

  }

for(var j = 0; j < names.length; j++) {
		alert(names[j].childNodes[0].nodeValue);
	}
};

$(document).ready(function(event){*/



 


  /*xhr = new XMLHttpRequest();
  xhr.open ("GET", "user.xml", true);

  xhr.onreadystatechange = function(){
    console.log ("lalalala");*/




   