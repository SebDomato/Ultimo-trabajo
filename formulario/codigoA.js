var url = "http://localhost:8080/webusuarios/lista"
fetch(url)
    .then(response => response.json())
    .then(a => mostrarData(a))
    .catch(error => console.log(error))

const mostrarData = (a) =>{
    console.log(a)
    var body = ""
    for (var i = 0; i<a.length; i++){
        body+=`<tr><td>${a[i].nombre}</td><td>${a[i].edad}</td><td>${a[i].username}</td><td>${a[i].imagen}</td></tr>`
    }
    document.getElementById("a").innerHTML = body
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