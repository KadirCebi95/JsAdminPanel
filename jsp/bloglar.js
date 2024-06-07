let bloglar = JSON.parse(localStorage.getItem("bloglar")) || [];

window.onload = function () {
  blogTable();
};

const blogTable = () => {
  const blogListe = document.getElementById("blogListe");
  blogListe.innerHTML = "";

  bloglar.forEach((blog) => {
    let div = document.createElement("div");
    div.classList.add("col-lg-3");
    div.innerHTML = 
    `
       
        <div class="card" style="width: 18rem;">
        <img src="${blog.resim}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title" onclick="blogDetay(${blog.id})">${blog.baslik}</h5>
        <p class="card-text">${blog.aciklama.substr(0, 60)} ...</p>
        </div>
        </div>
       

        `;

        blogListe.appendChild(div);
  });
};


const blogDetay = (id) => {
    const blogListe = document.getElementById("blogListe");
    blogListe.innerHTML = "";

    let blog = bloglar.filter(blogg => blogg.id === id);
    blog = blog[0];
    let div = document.createElement("div");
    div.classList.add("col-lg-12");
    div.classList.add("card");
    div.innerHTML = `
    <div class="row">
        <div class="col-lg-4" style="display:flex;">
            <img height="300" src="${blog.resim}"
        </div>
        <div class="col-lg-7">
            <h2>${blog.baslik}</h2>
            <p>${blog.aciklama}</p>
        </div>
    </div>
    `;

    blogListe.appendChild(div);

};
