let users = JSON.parse(localStorage.getItem('users')) || [];

function kayit() {
    let email = document.getElementById('kayitEmail').value;
    let sifre = document.getElementById('kayitSifre').value;

    if (users.find(user => user.email === email)) {
        alert("Bu kullanıcı zaten kayıtlı");
        return;
    }

    users.push({ email, sifre });

    // Kullanıcıları localStorage'e kaydet..
    localStorage.setItem('users', JSON.stringify(users));

    temizle();
}

function login() {
    let email = document.getElementById('girisEmail').value;
    let sifre = document.getElementById('girisSifre').value;

    let kontrol = users.find(user => user.email === email && user.sifre === sifre);

    if (kontrol) {
        sessionStorage.setItem('giris', 'true');
        window.location.href = "index.html";
    } else {
        sessionStorage.setItem('giris', 'false');
        alert('Giriş yapılamadı');
    }
}

function temizle() {
    document.getElementById('kayitEmail').value = '';
    document.getElementById('kayitSifre').value = '';
}
