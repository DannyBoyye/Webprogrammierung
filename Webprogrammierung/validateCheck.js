window.addEventListener('DOMContentLoaded', init,false);

	function init(){
		var button = document.querySelector('[type="submit"]');
		button.addEventListener('click',function(e){myFunction();e.preventDefault();}, false)
		
		function validateName(name){
			var letters = /^[A-Za-z]+$/;
			if(!letters.test(name)){
				alert("enter a real name");
				return false;
			}
			return true;
		}
		function validateAge(age){
			var numbers = /^\d+$/;
			if(!numbers.test(age)){
				alert("enter a real Age");
				return false;
			}
			return true;
		}
		function validateEmail(email){
			var mail = /\S+@\S+\.\S+/;
			if(!mail.test(mail)){
				alert("enter a correct Email address");
				return false;
			}
			return true;
		}
		
		

		function myFunction() {
			var name = document.getElementById('name').value;
			var alter = String(document.getElementById('alter').value);
			var email = document.getElementById('email').value;
			var nachricht = document.getElementById('nachricht').value;
			

			if(validateName(name)){
				if(validateAge(alter)){
					if(validateEmail(email)){
						window.location.href = "game.html";
					}
			}
		}			
			
			
				
			}
			
			
        }
		
		
		
	 
    
	
