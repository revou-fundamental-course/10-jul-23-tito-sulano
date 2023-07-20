function hitungBMI(event) {
    event.preventDefault();

    // mendapatkan nilai dari form
    var gender = document.getElementById('gender').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;

    // menampilkan nilai form
    console.log('Jenis Kelamin:', gender);
    console.log('Berat Badan:', weight + ' kg');
    console.log('Usia:', age);
    console.log('Tinggi Badan:', height + ' cm');

    //mrnghitung IBM
    height = height / 100;
    if (weight && height) {
        var bmi = weight / (height * height).toFixed(2);
        document.getElementById("bmi").innerHTML = bmi;

        var kategori = "";
        var keterangan = "";
        if (bmi < 18.5) {
            kategori = "Kekurangan Berat Badan";
            keterangan = "Utamakan hidup sehat dan perhatikan konsumsi harian. Dalam 60% kasus, pola makan yang buruk dapat berisiko Diabetes";
        } else if (bmi >= 18.5 && bmi < 25) {
            kategori = "Normal (Ideal)";
            keterangan = "Pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat. Diet yang baik dapat mempertahankan kesehatan & imun";
        } else if (bmi >= 25 && bmi < 30) {
            kategori = "Kelebihan Berat Badan";
            keterangan = "Utamakan hidup sehat dan perhatikan konsumsi harian. Dalam 60% kasus, pola makan yang buruk dapat berisiko Diabetes";
        } else if (bmi >= 30) {
            kategori = "Kegemukan (Obesitas)";
            keterangan = "Utamakan hidup sehat dan perhatikan konsumsi harian. Dalam 60% kasus, pola makan yang buruk dapat berisiko Diabetes";
        }
        document.getElementById("kategori").innerHTML = kategori;
        document.getElementById("keterangan").innerHTML = keterangan;
    }

}

//fungsi yang berguna ketika klik button submit akan otomatis diarahkan ke bagian hasil
function scrollToResult() {
    var hasilElement = document.getElementById("result");
    hasilElement.scrollIntoView({ behavior: "smooth" });
}

