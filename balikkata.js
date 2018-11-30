function balikKata(kata) {
 // tulis jawabanmu di sini
 var str = ''
 for (var i=[kata.length-1]; i>=0; i--) {
   str += kata[i]
 }

 return str
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
