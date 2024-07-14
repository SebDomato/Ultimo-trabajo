let url_usuarios = "http://localhost:8080/webusuarios/lista";

function validateForm(form)
{
	var inputs = form.querySelectorAll("input, textarea");
	
	for(let i = 0; i < inputs.length; i++)
	{
		if(!inputs[i].value)
		{
			return false;
		}
	}
	
	return true;
}

window.postUser = function (e)
{

    e.preventDefault();

	var form = document.querySelector("#myForm");

	if(!validateForm(form))
	{
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Campos incompletos en el formulario"
		});
		
		return;
	}
    var elements = form.elements;
	var btn = document.querySelector("#btnSubmit");
	btn.setAttribute("disabled", true);
	
	var obj = {};
	for(let i =0; i < elements.length; i++)
	{
		var element = elements[i];
		if(element.name)
		{
			obj[element.name] = element.value;
		}
	}
    console.log(obj);

    const response = fetch(url_usuarios,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    })
    .then(response => {
		
		Swal.fire({
			icon: "success",
			title: "OK!",
			text: "El Usuario fue insertado exitosamente"
		});
		
		btn.removeAttribute('disabled');
		form.reset();
	})
    .catch(error => {
		
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Hubo problemas al tratar de insertar el Usuario"
		});
		
		btn.removeAttribute('disabled');
	});
	
	return false;
}
document.addEventListener("DOMContentLoaded", (event) => {

	var blog = document.querySelector(".ud-single-blog");
	
	//Page doesn't contains blog element
	if(!blog)
	{
		return;
	}
	
	fetch(url_usuarios).then(f => f.json()).then(a => {
		
		for(let i = 0; i < a.length; i++)
		{
			var clone = blog.cloneNode(true);
			
			var img = clone.querySelector("img");
			var titulo = clone.querySelector(".ud-blog-title");
			var desc = clone.querySelector(".ud-blog-desc");
			var btn = clone.querySelector(".ud-blog-date");
			
			img.src = a[i].imagen;
            titulo.innerText = a[i].nombre;
            desc.innerText = a[i].username;
			
			
			btn.onclick = function(){
				deleteMovie(a[i]);
			};
			
			var div = document.createElement("div");
			
			div.classList.add("col-lg-4")
			div.classList.add("col-md-6")
			div.appendChild(clone);
			
			var itemsRow = document.querySelector(".itemsRow");
			itemsRow.appendChild(div);
		}
	})
});	

window.deleteMovie = function(e){

		Swal.fire({
			title: "Desea eliminar el usuario "+ e.nombre + "?",
			showCancelButton: true,
			confirmButtonText: "Delete",
			confirmButtonColor: "red"
		}).then(result => {

		if (result.isConfirmed)	
		{
			fetch(url_usuarios, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(e.idPelicula),
			}).then(e => {
				Swal.fire({
					title: "Borrada exitosamente!",
					icon : "success",
					allowOutsideClick: false
				})
				.then(e => {								
					location.reload();
				});
		
			}).catch(e => {
				Swal.fire("Error!", "", "error");
			})
		}
	});
};

