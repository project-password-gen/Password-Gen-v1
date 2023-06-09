    let enter_encode = document.getElementById('enter_encode');
    
   enter_encode.onclick = function () {
  
 
  const rusToLat = function(str) {
  let ru = {
    'а': 'f0Z', 'б': '@1Y', 'в': 'd2X', 'г': 'u3DW', 'д': 'l4V', 
    'е': 't5U', 'ё': '#6T', 'ж': ':7S', 'з': 'p8R', 'и': 'b9Q', 
    'к': 'r0P', 'л': 'k1O', 'м': 'v2N', 'н': 'y3M', 'о': 'j4L', 
    'п': 'g5K', 'р': 'h6J', 'с': 'c7I', 'т': 'n8H', 'у': 'e9G', 
    'ф': 'a0F', 'х': '&1E', 'ц': 'w2D', 'ч': 'x3C', 'ш': 'i4B', 
    'щ': 'o5A', 'ы': 's6ch', 'э': '!7sh', 'ю': '?8zh', 'я': 'z9', 
    'ъ': '$0', 'ь': 'm', 'й': 'q', '1':'0a','2':'9B','3':'8c','4':'7D','5':'6e','6':'5F','7':'4g','8':'3H','9':'2i','0':'1J'
  };
  
  
  
  
  let newString = [];
  
  return [...str].map(l => {
    
    let latL = ru[l.toLocaleLowerCase()];
    
    if (l !== l.toLocaleLowerCase()) {

      latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);

    } else if (latL === undefined) {

      latL = l;

    }
    
    return latL;
  }).join('');
}
  
  
let encode = document.getElementById('encode').value;

const str = encode;

let out_encode = rusToLat (str);



let out_code = document.getElementById('out_code');

   out_code.innerHTML = out_encode;



};




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/*let enter_decode = document.getElementById('enter_decode');

enter_decode.onclick = function () {
  
let decode = document.getElementById('decode').value;

console.log(decode);

let out_decoder = Base64.decode(decode);
/*let out_decode1 = window.atob(out_decoder);

let out_decode = document.getElementById('out_decode');

   out_decode.innerHTML = out_decoder;

/*let out1 = document.getElementById('out1');

out1.innerHTML = ver_os;

};*/




/*let text = "Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);

document.getElementById("demo").innerHTML = "Encoded: " + encoded + "<br>" + "Decoded: " + decoded;*/