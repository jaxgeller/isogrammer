'use strict';

function getTemplate(isogram) {
  var template = _.template('&lt;script&gt;<br/>&nbsp;&nbsp;(function(<span class="char-0 char-highlight"><%=isogram[0]%></span>,<span class="char-1 char-highlight"><%=isogram[1]%></span>,<span class="char-2 char-highlight"><%=isogram[2]%></span>,<span class="char-3 char-highlight"><%=isogram[3]%></span>,<span class="char-4 char-highlight"><%=isogram[4]%></span>,<span class="char-5 char-highlight"><%=isogram[5]%></span>,<span class="char-6 char-highlight"><%=isogram[6]%></span>){<span class="char-0"><%=isogram[0]%></span>[&#039;GoogleAnalyticsObject&#039;]=<span class="char-4"><%=isogram[4]%></span>;<span class="char-0"><%=isogram[0]%></span>[<span class="char-4"><%=isogram[4]%></span>]=<span class="char-0"><%=isogram[0]%></span>[<span class="char-4"><%=isogram[4]%></span>]||function(){<br/>&nbsp;&nbsp;(<span class="char-0"><%=isogram[0]%></span>[<span class="char-4"><%=isogram[4]%></span>].q=<span class="char-0"><%=isogram[0]%></span>[<span class="char-4"><%=isogram[4]%></span>].q||[]).push(arguments)},<span class="char-0"><%=isogram[0]%></span>[r].l=1*new Date();<span class="char-5"><%=isogram[5]%></span>=<span class="char-1"><%=isogram[1]%></span>.createElement(<span class="char-2"><%=isogram[2]%></span>),<br/>&nbsp;&nbsp;<span class="char-6"><%=isogram[6]%></span>=<span class="char-1"><%=isogram[1]%></span>.getElementsByTagName(<span class="char-2"><%=isogram[2]%></span>)[0];<span class="char-5"><%=isogram[5]%></span>.async=1;<span class="char-5"><%=isogram[5]%></span>.src=<span class="char-3"><%=isogram[3]%></span>;<span class="char-6"><%=isogram[6]%></span>.parentNode.insertBefore(<span class="char-5"><%=isogram[5]%></span>,<span class="char-6"><%=isogram[6]%></span>)<br/>&nbsp;&nbsp;})(window,document,&#039;script&#039;,&#039;//www.google-analytics.com/analytics.js&#039;,&#039;ga&#039;);<br/><br/>&nbsp;&nbsp;ga(&#039;create&#039;, &#039;UIDHERE&#039;, &#039;auto&#039;);<br/>&nbsp;&nbsp;ga(&#039;send&#039;, &#039;pageview&#039;);<br/>&lt;/script&gt;');

  return template({isogram: isogram});
}

// thanks --> http://jsperf.com/isisogram/2
function isIsogram(word){
  var seen = [];
  var letters = word.split('');
  var is = true;
  var letter;

  for(var i = 0, l = letters.length; i < l; i++){
    letter = letters[i];

    // added to check if number
    if(seen.indexOf(letter) !== -1 || !isNaN(letter) ){
      is = false;
      break;
    }
    else{
      seen.push(letter);
    }
  }
  return is;
}

$(document).on('ready', function() {
  var $input = $('.isogram-input');
  var $output = $('.output-bottom');
  var $warning = $('.warning');
  $output.html(getTemplate(['i','s','o','g','r','a','m']));

  $input.on('input', function(e) {
    var currChars = $input.val().split('');
    var currIndex = currChars.length -1;

    if ($input.val().length > 7) {
      $warning.text('Cannot be longer than 7 characters.');
    }

    else if (!isIsogram($input.val())) {
      $input.val($input.val().substring(0, $input.val().length-1))
      $warning.text('Cannot have repeat characters, not an isogram.');
    }

    else {
      $warning.text('');
      $output.html(getTemplate(currChars));
      $('.output-bottom span.char-'+currIndex).addClass('active');
      if (isIsogram($input.val()) && $input.val().length === 7) {

        $('.output-bottom span.char-'+currIndex).removeClass('active');
        $('.char-highlight').each(function(i, item) {
          setTimeout(function(){$(item).addClass('is-valid');}, 20 * i);
        });

      }
    }

  });
});
