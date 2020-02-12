

function check() {
    let txt = document.querySelector('.fixed-textarea');
    let checkBox = document.querySelector('#checkBox');

    if (checkBox.checked == true) {
        txt.classList.add('bold');
    }

    else {
        txt.classList.remove('bold');
    }

}




/*function checkGreyClass() {
  let checkBox2 = document.querySelector('#greyTheme');
  let body = document.getElementsByTagName('body')[0];


  if (checkBox2.checked == true) {
      body.classList.add('dark');
      txt.classList.add = ('white');
      console.log(txt);
  }

  else {
      body.classList.remove('dark');
      txt.classList.remove('white');
      console.log(body);
  }
}
*/

/////////////-----OpenFile--------////////////

var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var node = document.querySelector('.text');
        node.innerText = text;
    };
    reader.readAsText(input.files[0]);
};

function previewFile() {
    var preview = document.querySelector('.img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;

    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}

////////////////

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
    ;
}
function updateFirst(event) {
    var p = document.querySelector(".text");

    if (p) {
        p.style.color = event.target.value;
    }
} function updateAll(event) {
    document.querySelector("p").forEach(function (p) {
        p.style.color = event.target.value;

    });

}


///////////////////////////////////////

document.querySelector('.fontFamilySelect').addEventListener('change', (e) => {

    $('.txt').toggle('bolder');



});


////////////------------Code---------/////////////


function ClearForm() {
    document.conv_form.dest_text.value = "";
    document.conv_form.src_text.value = "";
}
function Code() {
    var temp = "", i, l, c = 0, out = "";
    var str = document.conv_form.src_text.value;
    l = 0;
    if (str == "") return;
    while (l <= str.length - 1) {
        out = out + str.charCodeAt(l) + '!';
        l++;
    }
    document.conv_form.dest_text.value = "<scri" + "pt>\nfunction s_(s,c){return s.charAt(c)};function D_(){" +
        "var temp=\"\",i,c=0,out=\"\";var str=\"" + out + "\";" +
        "l=str.length;" +
        "while(c<=str.length-1){" +
        "while(s_(str,c)!=\'!\')temp=temp+s_(str,c++);" +
        "c++;" +
        "out=out+String.fromCharCode(temp);" +
        "temp=\"\";}" +
        "document.write(out);}" +
        "\n<\/script>" +
        "<script>\nD_();\n<\/script>";
}