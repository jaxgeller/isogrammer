'use strict';

function getTemplate(isogram) {
  var template = _.template("&lt;script&gt;<br/>&nbsp;&nbsp;(function(<%=isogram[0]%>,<%=isogram[1]%>,<%=isogram[2]%>,<%=isogram[3]%>,<%=isogram[4]%>,<%=isogram[5]%>,<%=isogram[6]%>){<%=isogram[0]%>[&#039;GoogleAnalyticsObject&#039;]=<%=isogram[4]%>;<%=isogram[0]%>[<%=isogram[4]%>]=<%=isogram[0]%>[<%=isogram[4]%>]||function(){<br />&nbsp;&nbsp;(<%=isogram[0]%>[<%=isogram[4]%>].q=<%=isogram[0]%>[<%=isogram[4]%>].q||[]).push(arguments)},<%=isogram[0]%>[r].l=1*new Date();<%=isogram[5]%>= <%=isogram[1]%>.createElement(<%=isogram[2]%>),<br />&nbsp;&nbsp;<%=isogram[6]%>= <%=isogram[1]%>.getElementsByTagName(<%=isogram[2]%>)[0];<%=isogram[5]%>.async=1;<%=isogram[5]%>.src=<%=isogram[3]%> ;<%=isogram[6]%>.parentNode.insertBefore(<%=isogram[5]%>,<%=isogram[6]%>)<br />&nbsp;&nbsp;})(window,document,&#039;script&#039;,&#039;//www.google-analytics.com/analytics.js&#039;,&#039;ga&#039;);<br /><br />&nbsp;&nbsp;ga(&#039;create&#039;, &#039;UIDHERE&#039;, &#039;auto&#039;);<br />&nbsp;&nbsp;ga(&#039;send&#039;, &#039;pageview&#039;);<br /><br />&lt;/script&gt;");

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

  $input.on('input', function() {

    if ($input.val().length === 7) {

      if (isIsogram($input.val())) {
        $input.removeClass('invalid');
        $input.addClass('valid');
        var split = $input.val().split('');

        $('.isogram-code').html(getTemplate(split));
      }
      else {
        $input.removeClass('valid');
        $input.addClass('invalid');
      }
    }

    else {
      $input.removeClass('valid');
      $input.addClass('invalid');
    }

    if ($input.val().length <= 0) {
      $input.removeClass('valid');
      $input.removeClass('invalid');
    }
  });

});