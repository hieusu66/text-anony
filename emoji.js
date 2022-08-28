var originTextArea = $('#origin-text');
var transType = "txt2icn";
var resultTextArea = $('#converted-text');
var transBtn = document.querySelector('#transTypeBtn');
$(document).on("click","#emoji-picker",function(e){
   e.stopPropagation();
    $('.intercom-composer-emoji-popover').toggleClass("active");
});

$(document).click(function (e) {
    if ($(e.target).attr('class') != '.intercom-composer-emoji-popover' && $(e.target).parents(".intercom-composer-emoji-popover").length == 0) {
        $(".intercom-composer-emoji-popover").removeClass("active");
    }
});

$(document).on("click",".intercom-emoji-picker-emoji",function(e){
    var myTextArea = $('#origin-text');
    myTextArea.val(myTextArea.val() + $(this).html());
    doConversion();
});

$('.intercom-composer-popover-input').on('input', function() {
    var query = this.value;
    if(query != ""){
      $(".intercom-emoji-picker-emoji:not([title*='"+query+"'])").hide();
    }
    else{
      $(".intercom-emoji-picker-emoji").show();
    }
});

function doConversion() {
  var originText = originTextArea.val();
  if (transType == 'txt2icn'){
    originText = originText.toLowerCase();
      originText = originText.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, "1");
      originText = originText.replace(/b/g, "2");
        originText = originText.replace(/c/g, "3");
      originText = originText.replace(/đ|d/g, "4");
      originText = originText.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, "5");
        originText = originText.replace(/f/g, "6");
        originText = originText.replace(/g/g, "7");
      originText = originText.replace(/h/g, "8");
        originText = originText.replace(/ì|í|ị|ỉ|ĩ|i/g, "9");
        // There's no letter "j", I don't understand why
        originText = originText.replace(/k/g, "@");
        originText = originText.replace(/l/g, "£");
        originText = originText.replace(/m/g, "€");
        originText = originText.replace(/n/g, "✓");
        originText = originText.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, "¢");
        originText = originText.replace(/p/g, "~");
        originText = originText.replace(/q/g, "°");
        originText = originText.replace(/r/g, "=");
        originText = originText.replace(/s/g, "•");
        originText = originText.replace(/t/g, "√");
        originText = originText.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, "π");
        originText = originText.replace(/v/g, "÷");
        originText = originText.replace(/x/g, "×");
        originText = originText.replace(/ỳ|ý|ỵ|ỷ|ỹ|y/g, "¶");
      originText = originText.replace(/w/g, "∆");
      originText = originText.replace(/z/g, "%");
      originText = originText.replace(/ /g, "-"); // Replace space with dot

        // Some system encode Vietnamese combining accent as individual utf-8 characters
        originText = originText.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
        originText = originText.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư       
}
else if (transType == 'icn2txt'){
    originText = originText.toLowerCase();
      originText = originText.replace(/1/g, "a");
      originText = originText.replace(/2/g, "b");
        originText = originText.replace(/3/g, "c");
      originText = originText.replace(/4/g, "d");
      originText = originText.replace(/5/g, "e");
        originText = originText.replace(/6/g, "f");
        originText = originText.replace(/7/g, "g");
      originText = originText.replace(/8/g, "h");
        originText = originText.replace(/9/g, "i");
        // There's no letter "j", I don't understand why
        originText = originText.replace(/@/g, "k");
        originText = originText.replace(/£/g, "l");
        originText = originText.replace(/€/g, "m");
        originText = originText.replace(/✓/g, "n");
        originText = originText.replace(/¢/g, "o");
        originText = originText.replace(/~/g, "p");
        originText = originText.replace(/°/g, "q");
        originText = originText.replace(/=/g, "r");
        originText = originText.replace(/•/g, "s");
        originText = originText.replace(/√/g, "t");
        originText = originText.replace(/π/g, "u");
        originText = originText.replace(/÷/g, "v");
        originText = originText.replace(/×/g, "x");
        originText = originText.replace(/¶/g, "y");
      originText = originText.replace(/∆/g, "w");
      originText = originText.replace(/%/g, "z");
      originText = originText.replace(/\-/g,' '); // Replace dot with space
};
  resultTextArea.val(originText);
}

transBtn.addEventListener('click', function(event) {
  if (transType == 'icn2txt'){
    transType = 'txt2icn';
    document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Tin nhắn ---> Mã hoá)';
  } else if (transType == 'txt2icn'){
    transType = 'icn2txt'
    document.getElementById('typeConvert').innerHTML = 'Nhập đoạn văn bản cần chuyển đổi: (Loại dịch: Mã hoá ---> tin nhắn)';
  }
  doConversion();
});