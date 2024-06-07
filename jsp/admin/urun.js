let urunler = JSON.parse(localStorage.getItem('urunler')) || [];

// Sayfa yüklendiğinde ürün tablosunu güncelle
window.onload = function () {
    urunTablosunuGuncelle();
};

// Formu gönderme fonksiyonu
function urunEkle() {
    // Formdaki değerleri al
    const urunAdi = document.getElementById('urunAdi').value;
    const urunAciklama = document.getElementById('urunAciklama').value;
    const urunFiyati = document.getElementById('urunFiyati').value;
    const urunResmi = document.getElementById('urunResmi').value;
    // kategori ekledik filtrelerde kullanacağız
    const urunKategori = document.getElementById('urunKategori').value;

    // benzersiz bir id için tarihi kullandık
    const urunId = Date.now();

    // Degerleri json objesine ekle
    const yeniUrun = {
        // id değerini javascript nesnesine ekledik
        id: urunId,
        adi: urunAdi,
        aciklama: urunAciklama,
        fiyat: urunFiyati,
        resim: urunResmi,
        // kategori değerini javascript nesnesine ekledik
        kategori: urunKategori
    };

    // Ürünü dizıye ekle
    urunler.push(yeniUrun);

    // Formu temizle
    document.getElementById('urunForm').reset();

    // Tabloyu güncelle
    urunTablosunuGuncelle();

    // Ürünleri localStorage'e kaydet
    localStorage.setItem('urunler', JSON.stringify(urunler));
}
console.log(urunler);
// Tabloyu güncelleme fonksiyonu
function urunTablosunuGuncelle() {
    const urunListesiElement = document.getElementById('urunListesi');
    urunListesiElement.innerHTML = ''; // Tabloyu temizle

    // Her bir ürün için tabloya yeni bir satır ekle
    // index parametresini sildik artık id kullanacağız
    urunler.forEach((urun) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <form id="guncelle">
            <td>${urun.id}</td>
            <td><input id="guncelleAdi-${urun.id}" type="text" value="${urun.adi}"></td>
            <td><input id="guncelleAciklama-${urun.id}" type="text" value="${urun.aciklama}"></td>
            <td><input id="guncelleFiyat-${urun.id}" type="number" value="${urun.fiyat}"></td>
            <td><input id="guncelleResim-${urun.id}" type="text" value="${urun.resim}"></td>
            <td>${urun.kategori}</td>
            
            <td><img src="${urun.resim}" alt="${urun.adi}" style="max-width: 100px;"></td>
            <td><button class="btn btn-success" onclick="guncelleUrun(${urun.id})">Guncelle</button> <button class="btn btn-danger" onclick="silUrun(${urun.id})">Sil</button></td>
        </form>
            `;
        urunListesiElement.appendChild(row);
    });
}

// Ürünü silme fonksiyonu
function silUrun(urunId) {
    const index = urunler.findIndex(urun => urun.id === urunId)
    // findIndex eğer bulamazsa -1 döner bulursa id değerini döner

    if(index > -1){
        // İlgili indeksteki ürünü listeden kaldır
        urunler.splice(index, 1);

        // Tabloyu güncelle
        urunTablosunuGuncelle();

        // Ürünleri localStorage'e kaydet
        localStorage.setItem('urunler', JSON.stringify(urunler));
    }
}

function guncelleUrun(urunId){
    const guncelleAdi = document.getElementById('guncelleAdi-'+urunId).value;
    const guncelleAciklama = document.getElementById('guncelleAciklama-'+urunId).value;
    const guncelleFiyat = document.getElementById('guncelleFiyat-'+urunId).value;
    const guncelleResim = document.getElementById('guncelleResim-'+urunId).value;

    // Indexdeki ürünü bulup güncelledik


    const index = urunler.findIndex(urun => urun.id === urunId)

    if(index > -1){
        urunler[index].adi = guncelleAdi;
        urunler[index].aciklama = guncelleAciklama;
        urunler[index].fiyat = guncelleFiyat;
        urunler[index].resim = guncelleResim;
        
        // Tabloyu güncelle
        urunTablosunuGuncelle();
        
        // Ürünleri localStorage'e kaydet
        localStorage.setItem('urunler', JSON.stringify(urunler));
    }
    

}




