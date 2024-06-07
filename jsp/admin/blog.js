let bloglar = JSON.parse(localStorage.getItem("bloglar")) || [];

window.onload = function () {
    tabloGuncelle();
};

const blogEkle = () => {
    const baslik = document.getElementById("baslik").value;
    const aciklama = document.getElementById("aciklama").value;
    const resim = document.getElementById("resim").value;
    const blogid = Date.now();

// 
    const yeniBlog = {
        id: blogid,
        baslik: baslik,
        aciklama: aciklama,
        resim: resim,
    };

    bloglar.push(yeniBlog);

    localStorage.setItem("bloglar", JSON.stringify(bloglar));

    tabloGuncelle();

    temizle();
};

const tabloGuncelle = () => {
    const alan = document.getElementById("blogListesi");
    alan.innerHTML = "";

    bloglar.forEach((blog) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <form id="guncelle">
            <td>${blog.id}</td>
            <td><input id="baslik-${blog.id}" type="text" value="${blog.baslik}"></td>
            <td><input id="aciklama-${blog.id}" type="text" value="${blog.aciklama}"></td>
            <td><input id="resim-${blog.id}" type="text" value="${blog.resim}"></td>
            <td><img height="150" src="${blog.resim}" /></td>
            <td><button class="btn btn-success" onclick="guncelleBlog(${blog.id})">Guncelle</button> <button class="btn btn-danger" onclick="silBlog(${blog.id})">Sil</button></td>
            </form>
                `;
        alan.appendChild(row);
    });
};


const silBlog = (id) => {
    let newBlogList = bloglar.filter(blog => blog.id !== id);
    localStorage.setItem('bloglar', JSON.stringify(newBlogList));
    tabloGuncelle();
};


const guncelleBlog = (id) => {
    const baslik = document.getElementById(`baslik-${id}`).value;
    const aciklama = document.getElementById(`aciklama-${id}`).value;
    const resim = document.getElementById(`resim-${id}`).value;

    const blogIndex = bloglar.findIndex(blog => blog.id === id);

    if(blogIndex > -1) {
        bloglar[blogIndex].baslik = baslik;
        bloglar[blogIndex].aciklama = aciklama;
        bloglar[blogIndex].resim = resim;
    }

    localStorage.setItem('bloglar', JSON.stringify(bloglar));
    tabloGuncelle(); 
}
const temizle = () => {
    document.getElementById("blogForm").reset();
};
