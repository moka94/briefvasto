$(function() {
  $("#salvaImpostazioni").click(function(){
      var username = $("#username").val();
      var password = $("#password").val();
      var email = $("#email").val();
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);    // sono dati locali. quelli che ti rimangonono salvati in app fino a quando non cancelli i dati.
      window.localStorage.setItem("email", email);
  });
  $("#cancellaImpostazioni").click(function() {
      localStorage.clear();
      $("#username").val("");
      $("#password").val("");
      $("#email").val("");
  });
 
  // recupero i dati
    var username = localStorage.getItem("username");
    if(username != null) {
        // richiamo il campo user
        $("#username").val(username);
    }
    var password = localStorage.getItem("password");
    if(password != null) {
        $("#password").val(password);
    }
    var email = localStorage.getItem("email");
    if(email != null) {
        $("#email").val(email);
    }
});

//--------- OPPURE ---------
//$(function() {
//    $("#salvaImpostazioni").click(function() {
//        $(".imp").each(function() {
//            var valore = $(this).val();
//            localStorage.setItem($(this).attr("id"), valore);
//    });
//$("#cancellaImpostazioni").click(function() {
//    localStorage.clear();
//    $(".imp").val('');
//});
//$(".imp").each(function()) {
//    var valore = localStorage.getItem($(this).attr('id'));
//    if(valore !== null) {
//        $(this).val(valore);
//    }
//});