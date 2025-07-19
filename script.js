document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('#salam form');
        form.addEventListener('submit', function(e) {
            let valid = true;
            let nama = document.getElementById('nama');
            let tanggal = document.getElementById('tanggal_lahir');
            let pesan = document.getElementById('pesan');
            let jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');

            // Remove previous error messages
            document.querySelectorAll('.form-error').forEach(el => el.remove());

            // Nama validation
            if (!nama.value.trim()) {
                valid = false;
                let err = document.createElement('div');
                err.className = 'form-error';
                err.style.color = 'red';
                err.textContent = 'Nama wajib diisi.';
                nama.parentNode.insertBefore(err, nama.nextSibling);
            }

            // Tanggal lahir validation
            if (!tanggal.value) {
                valid = false;
                let err = document.createElement('div');
                err.className = 'form-error';
                err.style.color = 'red';
                err.textContent = 'Tanggal lahir wajib diisi.';
                tanggal.parentNode.insertBefore(err, tanggal.nextSibling);
            }

            // Jenis kelamin validation
            if (!jenisKelamin) {
                valid = false;
                let radioGroup = document.getElementById('laki').parentNode;
                let err = document.createElement('div');
                err.className = 'form-error';
                err.style.color = 'red';
                err.textContent = 'Pilih jenis kelamin.';
                radioGroup.parentNode.insertBefore(err, radioGroup.nextSibling);
            }

            // Pesan validation
            if (!pesan.value.trim()) {
                valid = false;
                let err = document.createElement('div');
                err.className = 'form-error';
                err.style.color = 'red';
                err.textContent = 'Pesan wajib diisi.';
                pesan.parentNode.insertBefore(err, pesan.nextSibling);
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    });