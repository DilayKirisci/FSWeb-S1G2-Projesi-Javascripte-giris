const ehliyet = (age) => age >= 18;

console.log("ehliyet", ehliyet(21));

let birinciDeger = 2;
let ikinciDeger = 1;

birinciDeger > ikinciDeger ? (ikinciDeger = 3) : (birinciDeger = 1);

let num = "1999";
const int = Number(num);
console.log("numdonustur", int);

function carpma(a, b) {
	return a * b;
}

console.log("carpma", carpma(7, 4));

function kopeginYasi(a) {
	return a * 7;
}

let gercekYas = kopeginYasi(10);
console.log("kopekyas", gercekYas);

function oyun() {
	let secenekler = ["Taş", "Kağıt", "Makas"];
	const random = Math.floor(Math.random() * secenekler.length);
	const random1 = Math.floor(Math.random() * secenekler.length);
	let bilgisayarinSecimi = secenekler[random];
	let oyuncununSecimi = secenekler[random1];

	console.log(oyuncununSecimi);
	console.log(bilgisayarinSecimi);

	if (
		(oyuncununSecimi === "Taş" && bilgisayarinSecimi === "Makas") ||
		(oyuncununSecimi === "Kağıt" && bilgisayarinSecimi === "Taş") ||
		(oyuncununSecimi === "Makas" && bilgisayarinSecimi === "Kağıt")
	) {
		console.log("Kazandın!");
	} else if (oyuncununSecimi === bilgisayarinSecimi) {
		console.log("Berabere!");
	} else {
		console.log("Kaybettin!");
	}
}

oyun();

function cocukSarkisi(sayi) {
	console.log(
		`${sayi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`
	);
}

let maymunSayisi = 10;

while (maymunSayisi >= 1) {
	cocukSarkisi(maymunSayisi);
	maymunSayisi--;
}

function notHesapla(num) {
	if (num <= 100 && num >= 90) {
		console.log("A aldın");
	} else if (num <= 89 && num >= 80) {
		console.log("B aldın");
	} else if (num <= 79 && num >= 70) {
		console.log("C aldın");
	} else if (num <= 69 && num >= 60) {
		console.log("D aldın");
	} else {
		console.log("F aldın");
	}
}

notHesapla(20);

const nonsense = "Hello my name ";
const sesli = ["a", "e", "i", "o", "u"];

function sesliHarfSayaci() {
	let count = 0;
	sesli.forEach((ses) => {
		if (nonsense.includes(ses)) {
			count++;
		}
		console.log(count);
	});
}
sesliHarfSayaci();
/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
	console.log("Kodlar çalışıyor");
	return "as";
}

sa();

module.exports = {
	sa,
	carpma,
	kopeginYasi,
	oyun,
	milDonusturucu,
	feetDonusturucu,
	cocukSarkisi,
	notHesapla,
};
