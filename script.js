 function DNKTORNK(dnk) {
     let rnk = ''
     dnk = dnk.toUpperCase()
     if (!/^[ACGT]+$/.test(dnk))
         alert('не верно осущствлен ввод данных')
     else {
         for (var i = 0; i < dnk.length; i++) {
             switch (dnk[i]) {
                 case 'G':
                     rnk += 'C';
                     break;
                 case 'C':
                     rnk += 'G';
                     break;
                 case 'T':
                     rnk += 'A';
                     break;
                 case 'A':
                     rnk += 'U';
                     break;
             }
         }
         return rnk
     }
 }
