$(function($){
			
			$("form").submit(function(event){
				
				event.preventDefault();
				
				$.ajax({
				url: "https://formspree.io/f/mgeradoy",
				method: "POST",
				data: {
					nome: $("#nome").val(),
					serviço: $("#serviço").val(),
					email: $("#email").val(),
					estado: $("#estado").val(),
					cidade: $("#cidade").val(),
					telefone: $("#telefone").val(),
				},
				dataType: "json"
				}).done(function(){
					$("#nome").val("");
					$("#serviço").val("");
					$("#email").val("");
					$("#estado").val("");
					$("#cidade").val("");
					$("#telefone").val("");
					window.location.href = "index.html";
				}).fail(function(){
					alert("Erro!");
					});
				});
			});

