/*
    #Javascript Primite Types#

    1- Number
    2- String
    3- Boolean
    4- Null
    5- Undefined

    Diger cogu dilin aksine JS sayilar icin tek bir veri tipi tanimlamistir
    o da number. Integers, float vs butun sayi tipleri number olarak ifade edilir.

    #NAN#

    Nan, Not a number, Javascript dilinde aslında sayi olmayan degerleri tutan
    bir numeric value olarak tanımlanır. Ancak Js dunyasinda NaN number ailesine 
    mensuptur.

    Ornegin 0/0 cikti olarak NaN doner.

    #Variables#
    Degisken tanimi yapmak icin let anahtar kelimesini kulanıyoruz.

    let name = value;  

    Bir diger degisken tanimlama yontemi const.
    Const, let ile benzerlik gosterir. Aralarindaki fark ise const ile tanimlanan
    deigskenin degeri sonradan degistirilemez.

    Ornegin,

    const degisken1 = 10;
    degisken1 = 24  // hata firlatir

    bir baska degisken tanimlama yontemi var. Ancak bu gunlerde nerdeyse hic 
    kullanilmiyor ve kullanılmasi tavsiye edilmiyor.

    #Booleans#

    Sadece true veya false alabilen veri tipidir.

    #Strings#

    Javascript deki bir baska primitive veri tipidir. Metinsel ifadeleri 
    saklamak icin kullanilir ve cift tırnak arasina yazilir.

    Stringler karakterlerden olusur ve her bir bir karakter bir indexe denk gelir.

    -> String methods
    String veri tipleri ile uyumlu calisan ve onceden tanimli pek cok metot bulunur.

    Bazı populer string methodları;
    - toUpperCase
    - toLowerCase
    - trim => String ifadenin basindaki ve sonuncaki space karakterlerini kırpar
    - indexOf('') => param olarak verilen char'ın bulundugu ilk indexi doner
    - slice(p1,p2?) => param olarak verilen karakter(ler) arasındaki degerleri
        keserek orijinal degiskene dokunmadan yeni bir string doner.
    - replace(p1,p2) => param1 deki degerleri param2 ile degistirir

    #Undefined vs Null#
    Js'de undefined bir veri tipiyken null bir objedir.
    Bir degisken yaratılır ancak ilk degeri atanmazsa undefined olur.
    Null bir objedir ve degiskenlere deger olarak atanabilir.

    let var1;           //undefined
    let var2 = null     //object


    #Comparision

    == vs ===

    == (double equality)
    degiskenlerinin degerinin esit olup olmadigini kontrol eder ancak degiskenlerinin
    tipinin de esit olup olmadigina bakmaz.

    1 == '1'     => true

    === (triple equality)
    degiskenlerinin degerlerinin ve tiplerinin esitligini kontrol eder

    1 === '1'   => false

    #Arrays
    Verileri gruplamaya yarayan veri yapısıdır. Degişkenlerin sırali listesini
    tutar.

    let array = []  //bos bir array yaratir

    #Array Methodları

    - push => Sona bir eleman ekler
    - pop => sondan bir eleman cikarir
    - shift => Bastan bir eleman cikarir
    - unshshift => basa bir eleman ekler
    - concat => iki veya daha fazla arrayi birlestirir  array1.concat(array2)
    - include => parametre olarak verilen degerin arrayde olup olmadıgını boolean doner
    - reverse => diziyi tersine cevirir

    - slice(?param1,?param2) => optional olarak verilen parametler arası arrayin elemanlarini
    yeni bir array olarak doner. Mevcut array uzerinde degisiklik yapmaz.
    - splice(start,?deleteCount,itemss) => array icindeki mevcut ogeleri kaldırarak veya 
    degistirerek ve/veya uzerine yeni ogeler ekleyerek arrayin icerigini degistirir.

    
*/
