function midFinder() {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total / (arr.length))
}
// midFinder()
// Array-dəki elementlərin ortalamasını qaytaran function yazın.

// -------------------------------------------------------------------------------------

function ArrayAdd() {
    const arr = [1, 5, 2, 7]
    const num = 11
    arr.push(num)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// ArrayAdd()
// suali umid edirem dogru anlayib hell etmisem

// -------------------------------------------------------------------------------------

function nCountFinder() {
    str = prompt()
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "n" || str[i] == "N") {
            result++
        }
    }
    console.log(result)
}
// nCountFinder()
// Göndərilən string sözdə neçə ədəd n hərfi var funksiyasını yazın.Məs: str="Salam Necesen"  result=2 eded n herfi var

// -------------------------------------------------------------------------------------

function nCountFinder() {
    str = prompt()
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result++
            break;
        }
    }
    // !!!!!!!!!!!!!!!!!!
    // resultLower resultUpper deye result deyisenini 2 ayri deyisene cevirsem 1 for ilede yaza bilerdim.
    // !!!!!!!!!!!!!!!!!!
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            result++
            break;
        }
    }
    if (result == 2) {
        console.log("daxil etdiyiniz stringde en az 1 kicik ve 1 boyuk herf var")
    }
    else {
        console.log("daxil etdiyiniz stringde en az 1 kicik ve 1 boyuk herf yoxdur")
    }
}
// nCountFinder()
// Göndərilən sözün içində ən az 1 böyük 1 kiçik hərf olmasini yoxlayan function yazın.