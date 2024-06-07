let sepetUrunler = JSON.parse(localStorage.getItem("sepetUrunler")) || [];

window.onload = function () {
  urunTablosunuGuncelle();
};

function urunTablosunuGuncelle() {
  const urunListesiElement = document.getElementById("sepetListe");
  urunListesiElement.innerHTML = ""; // Tabloyu temizle


  let toplam = 0;


  // Her bir ürün için tabloya yeni bir satır ekle
  sepetUrunler.forEach((urun, index) => {
    const row = document.createElement("div");
    row.classList.add("card");
    row.classList.add("mb-3");
    row.innerHTML = `
<div class="card-body">
  <div class="d-flex justify-content-between">
      <div class="d-flex flex-row align-items-center">
          <div>
              <img src="${urun.resim}"
                  class="img-fluid rounded-3" alt="Shopping item"
                  style="width: 65px;">
          </div>
          <div class="ms-3">
              <h5>${urun.adi}</h5>
          </div>
      </div>
      <div class="d-flex flex-row align-items-center">
          
          <div style="width: 80px;">
              
              <input type="number" value="${urun.adet}" 
              onchange="adetDegistir(${index},this.value)"
              id="fiyatGuncelle" class="fiyatinput">
          </div>
          <div>
          <button class="btn btn-danger" onclick="urunKaldir(${index})">Urun Kaldır</button>
          </div>
          <a href="#!" style="color: #cecece;"><i
                  class="fas fa-trash-alt"></i></a>
      </div>
  </div>
</div>
`;
    urunListesiElement.appendChild(row);
    let fiyat = urun.adet * urun.fiyat;
    toplam+= fiyat;
  });
  const araToplam = document.createElement("div");
  araToplam.classList.add("card");
  araToplam.innerHTML= 
  `
  <h4>Toplam Fiyat: ${toplam}</h4>
  `;
  urunListesiElement.appendChild(araToplam);
}
function urunKaldir(index) {
  sepetUrunler.splice(index, 1);
  localStorage.setItem("sepetUrunler", JSON.stringify(sepetUrunler));
  urunTablosunuGuncelle();
}
function adetDegistir(index,adet) {
  sepetUrunler[index].adet = adet;
  // Ürün Adetini güncelledikten sonra localimize kaydettik 
  localStorage.setItem("sepetUrunler", JSON.stringify(sepetUrunler));
  urunTablosunuGuncelle();
}
//
function tumUrunleriKaldir() {
  sepetUrunler = [];
  localStorage.setItem("sepetUrunler", JSON.stringify(sepetUrunler));
  urunTablosunuGuncelle();
}
