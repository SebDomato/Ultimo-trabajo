(function () {
    "use strict";
  
    // ======= Sticky
    window.onscroll = function () {
      const ud_header = document.querySelector(".ud-header");
      const sticky = ud_header.offsetTop;
      const logo = document.querySelector(".navbar-brand img");
  
      if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }
  
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        logo.src = "assets/images/logo/logo-2.svg";
      } else {
        logo.src = "assets/images/logo/logo.svg";
      }
  
      // show or hide the back-top-top button
      const backToTop = document.querySelector(".back-to-top");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    };
  
    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
      })
    );
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });
  
    // ===== submenu
    const submenuButton = document.querySelectorAll(".nav-item-has-children");
    submenuButton.forEach((elem) => {
      elem.querySelector("a").addEventListener("click", () => {
        elem.querySelector(".ud-submenu").classList.toggle("show");
      });
    });
  
    // ===== wow js
    new WOW().init();
  
    // ====== scroll top js
    function scrollTo(element, to = 0, duration = 500) {
      const start = element.scrollTop;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;
  
      const animateScroll = () => {
        currentTime += increment;
  
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
  
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
  
      animateScroll();
    }
  
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    document.querySelector(".back-to-top").onclick = () => {
      scrollTo(document.documentElement);
    };
  
    /**********************************/
   
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
   
   window.postMovie = function(e)
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
       
      const response = fetch(url_usuarios, {
        method: "POST",
        headers: {
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
            titulo.innerText = a[i].titulo;
            desc.innerText = a[i].genero;
            
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
              title: "Desea eliminar un Usuario "+ e.titulo + "?",
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
                      title: "Borrado exitosamente!",
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
      } 
  
  })();
  