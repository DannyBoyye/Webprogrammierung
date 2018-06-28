window.addEventListener('DOMContentLoaded', init,false);

function init(){
	/*Alle checkboxen und radiobuttons im Array-like checks und radios speichern*/
	var 
    texts=document.querySelectorAll('[type="text"]');
	/*form Element in variable form speichern*/
	var form=document.querySelector('form');
		
	
	
	
	
	
	
	
	
	
	/*
	submit ist vorbelegt, bei click wird normalerweise das Formular gelöscht und ich sehe nicht was passiert ist. Dafür übernehme ich das event und unterdrücke das abschicken mit der Methode preventDefault(). Können wir gern am Mittwoch besprechen.
	Jetzt die check-Funktion für beide array-likes aufrufen und als Parameter jeweils übergeben
	*/
	form.addEventListener('submit',function(e){check(texts);e.preventDefault();},false);
	
	/*
	Jetzt wird einmal checks an arr übergeben und dann noch einmal radios.
	*/
	function check(arr){
		/*
		Ein array deklarieren in dem die gecheckten Werte gespeichert werden können.
		*/
		var checkedArr=[];
		/*
		Aus performance-Gründen werden length und i schon vor dem Schleifendurchlauf dekliert und initialisiert.
		*/
		var len=arr.length;
		var i=0;
		/*
		Alle checkboxen werden durchlaufen. Wenn eine gescheckt ist, dann wird der Wert ins oben deklarierte array gespeichert mit der Methode push().
		*/
		for(i;i<len;i++){
			if(arr[i].checked){
				checkedArr.push(arr[i].id);
			}
		}
        
        
		
		/*
		Hier kann man prüfen, welches array-like übergeben wurde.
		console.log(typeOfCheck);
		*/
		var typeOfCheck=arr[0].id;
		
		/*
		Wenn nichts gescheckt ist, dann ist auch nichts im array und die length ist 0. Dann gibt's den alert(). Den alert() können wir später noch durch ein schönes Textfeld ersetzen :-).
        
        Checkt ob die Arraylist 0 ist und ob die Textarea bei name leer ist
		*/
		if(checkedArr.length==0 ){
			
			alert('Please answer the following field '+typeOfCheck);
		}
        
      /* document.getElementById("name").value.trim() == '' -> testet ob feld leer ist
      */
      
        
        /* --> Überprüft ob alterangabe eine Zahl ist
        
                    var chkZ = 1;
                    for(i=0;i<document.Formular.Alter.value.length;++i)
                    if(document.Formular.Alter.value.charAt(i) < "0"
                                                                            || document.Formular.Alter.value.charAt(i) > "9")
                        chkZ = -1;
                        if(chkZ == -1) {
                        alert("Altersangabe keine Zahl!");
                        document.Formular.Alter.focus();
                        return false;
                }
                
                & 
                
            --> überprüft ob bei Emailadresse ein @ vorhanden ist, wenn nicht wird sie false
            
                if(document.Formular.Email.value.indexOf('@') == -1) {
                        alert("Keine E-Mail-Adresse!");
                        document.Formular.Mail.focus();
                        return false;
                        
                &
                
            --> überprüft ob etwas in der Zeile steht
            
                    if(document.Formular.Name.value == "") {
                        alert("Bitte Ihren Wohnort eingeben!");
                        document.Formular.Ort.focus();
                        return false;
                    }
                }
        */
		/*
		Ansonsten liefern wir das array mit den gescheckten Werten einfach aus der Methode raus und können diese später noch verarbeiten.
		*/	
        
                
        
        
        
        
		else {
			console.log(checkedArr);
			return checkedArr;
		}
			
	}
}