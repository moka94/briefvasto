$(function(){
$("#monumenti").on("pagecreate",function(){
      $.ajax("https://vasto-58389.firebaseio.com/Monumenti.json")
              .done(function(data){
                  var lista = $("#lista-monumenti");
                  lista.empty();
                  $.map(data,function(riga,indice){
                      
                      
                      var monumenti = riga.nome +  "";
                      var descrizione = riga.descrizione + "";
                         
                      $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + monumenti +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                  });
                  
                  
                  $(".monumenti").click(function(){
                      var id = $(this).attr('data-id');
                              
                              $.ajax("https://vasto-58389.firebaseio.com/Monumenti.json")
                                      .done(function(data){
                                          $.map(data,function(riga,indice){
                                              if(indice == id){
                                                  $("#nomeContenuto").html(riga.nome);
                                                  
                                                  $("#anteprimaContenuto").attr("src", riga.anteprima);
                                              }
                                          });
                              });
                      
                  });
              })
                      .fail(function(){
                          alert("Errore!");
              });
          });
      });