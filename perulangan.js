function panggilPerulangan() {
 var dataKota = ['Kisaran', 'lampung', 'jambi'];
 for (var i = 0; i < dataKota.length; i++) {
   console.log(dataKota[i]);
   console.log(i);
   console.log(dataKota);
 }
}

panggilPerulangan();

function panggilPerulangan() {
 var dataKota = ['Kisaran', 'lampung', 'jambi'];
 dataKota.forEach((tes1, tes2, tes3) => {
   console.log(tes1);
   console.log(tes2);
   console.log(tes3);
 });
}

panggilPerulangan();

function panggilPerulangan() {
 var dataKota = ['Kisaran', 'lampung', 'jambi'];
 dataKota.map((tes1, tes2, tes3) => {
   console.log(tes1);
   console.log(tes2);
   console.log(tes3);
 });
}

panggilPerulangan();
