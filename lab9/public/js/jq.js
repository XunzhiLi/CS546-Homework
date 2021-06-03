$('#myForm').submit((event) => {
  event.preventDefault();
  if ($('#phrase').val()) {
    $('#error').hide();
    result = Judge($('#phrase').val());
    $('#attempts').append('<li>' + $('#phrase').val() + '</li>');
    if (result == true) {
      $('ol li:last').addClass('is-palindrome');
    }
    if (result == false) {
      $('ol li:last').addClass('not-palindrome');
    }
    $('#myForm').trigger('reset');
    $('#phrase').focus();
  } else {
    $('#error').show();
    $('#error').html('you should input a string');
    $('#phrase').focus();
  }
});
function Judge(str) {
  str = str.toLowerCase();
  str = str.replace(/\s*/g, '');
  str = str.replace(
    /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\‘|\’|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
    ''
  );
  len = str.length;
  l = 0;
  r = len - 1;
  while (l < r) {
    if (str[l] != str[r]) {
      return false;
    } else {
      l += 1;
      r -= 1;
    }
  }
  return true;
}
