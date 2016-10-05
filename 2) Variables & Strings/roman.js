function romanize(num) {
  var lookup = {C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

for (var i = 1; i <= 100; i++) {
    console.log(romanize(i));
}