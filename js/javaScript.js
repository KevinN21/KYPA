function surligne(champ, erreur)
{
	if(erreur)
		champ.style.backgroundColor = "#fba";
	else
		champ.style.backgroundColor = "";
}


function verifierEmail(champ)
{
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(champ.value))
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}

function verifier(f){

	var verifEmail = verifierEmail(f.mailSender);

	if (verifEmail) {
		/*var fileOK= document.getElementsByTagName('input');
		console.log($("form#formain input[type=file].value"));*/
		/*console.log(fileOK);
		alert(fileOK);*/

		/*$.get('envoiMail.php', { "file" : fileOK})

		.done(function(data, test, test2) {

			console.log(test, test2);
		})
		.fail(function(data) {
			alert('Error: ' + data);
		});*/

		
		
		return true;

	}
	else {
		alert("Veuillez remplir correctement tous les champs");
		return false;
	}
}

/*$(document).ready(function() {

                        $('.file-upload-input').change(function() {
                            $fileOkName=$(this);
                            console.log($fileOkName);
                            $myarr=$fileOkName.split("/");
                            console.log($myarr);
                            $fileNameToDisplay=$myarr[2];
                            console.log($fileNameToDisplay);

                        });

                    });*/


                  /*  $(document).ready(function(){*/
                    	/*("input[type=file]").click(function(){
                    		console.log(this.files[0].name);
                    		console.log(this.files[1].name);
                    		$(this).val("");
                    	});*/

                    	/*$("input[type=file]").change(function(){
                    		console.log($(this));
                    		console.log($(this).val());
                    		$('.liste-des-inputs').append('<input type="file" name="files[]">');                    	
                    	});
                    });

*/

                    











// drag and drop 
function readURL(input) {
	if (input.files && input.files[0]) {

		var reader = new FileReader();

		reader.onload = function(e) {
			$('.image-upload-wrap').hide();

			$('.file-upload-image').attr('src', e.target.result);
			$('.file-upload-content').show();

			$('.image-title').html(input.files[0].name);
		};

		reader.readAsDataURL(input.files[0]);

	} else {
		removeUpload();
	}
}

function removeUpload() {
	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
	$('.file-upload-content').hide();
	$('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
	$('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
	$('.image-upload-wrap').removeClass('image-dropping');
});



