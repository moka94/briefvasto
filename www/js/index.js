$(function(){
$("#monumenti").on("pagecreate",function(){
      $.ajax("https://vasto-58389.firebaseio.com/Monumenti.json")
              .done(function(data){
                  var lista = $("#lista-monumenti");
                  lista.empty();
                  $.map(data,function(riga,indice){
                      
                      
                      var monumenti = riga.nome +  "";
                      var descrizione = riga.descrizione + "";
                         
                      $(lista).append('<a class="monumenti" href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + monumenti +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                  });
                  
                  
                  $(".monumenti").click(function(){
                      var id = $(this).attr('data-id');
                              
                              $.ajax("https://vasto-58389.firebaseio.com/Monumenti.json")
                                      .done(function(data){
                                          $.map(data,function(riga,indice){
                                              if(indice == id){
                                                  $("#nomeContenuto").html(riga.nome);
                                                  $("#viaContenuto").html(riga.via);
                                                  $("#testoContenuto").html(riga.testo);
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
          
          
          $("#chiese").on("pagecreate",function(){
      $.ajax("https://vasto-58389.firebaseio.com/Chiese.json")
              .done(function(data){
                  var lista = $("#lista-chiese");
                  lista.empty();
                  $.map(data,function(riga,indice){
                      
                      
                      var chiese = riga.nome +  "";
                      var descrizione = riga.descrizione + "";
                         
                      $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + chiese +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                  });
          
          $(".chiese").click(function(){
                      var id = $(this).attr('data-id');
                              
                              $.ajax("https://vasto-58389.firebaseio.com/Chiese.json")
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
     
    $("#musei").on("pagecreate",function(){
         $.ajax("https://vasto-58389.firebaseio.com/Musei.json")
                 .done(function(data){
                     var lista = $("#lista-musei");
                     lista.empty();
                     $.map(data,function(riga,indice){


                         var musei = riga.nome +  "";
                         var descrizione = riga.descrizione + "";

                         $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + musei +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                     });

             $(".musei").click(function(){
                         var id = $(this).attr('data-id');

                                 $.ajax("https://vasto-58389.firebaseio.com/Musei.json")
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

    $("#spiagge").on("pagecreate",function(){
             $.ajax("https://vasto-58389.firebaseio.com/Spiagge.json")
                     .done(function(data){
                         var lista = $("#lista-spiagge");
                         lista.empty();
                         $.map(data,function(riga,indice){


                             var spiagge = riga.nome +  "";
                             var descrizione = riga.descrizione + "";

                             $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + spiagge +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                         });

                 $(".spiagge").click(function(){
                             var id = $(this).attr('data-id');

                                     $.ajax("https://vasto-58389.firebaseio.com/Spiagge.json")
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
                 
                 $("#svago").on("pagecreate",function(){
             $.ajax("https://vasto-58389.firebaseio.com/Svago.json")
                     .done(function(data){
                         var lista = $("#lista-svago");
                         lista.empty();
                         $.map(data,function(riga,indice){


                             var svago = riga.nome +  "";
                             var descrizione = riga.descrizione + "";

                             $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + svago +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                         });

                 $(".svago").click(function(){
                             var id = $(this).attr('data-id');

                                     $.ajax("https://vasto-58389.firebaseio.com/Svago.json")
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

                 $("#ristoranti").on("pagecreate",function(){
             $.ajax("https://vasto-58389.firebaseio.com/Ristoranti.json")
                     .done(function(data){
                         var lista = $("#lista-ristoranti");
                         lista.empty();
                         $.map(data,function(riga,indice){


                             var ristoranti = riga.nome +  "";
                             var descrizione = riga.descrizione + "";

                             $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + ristoranti +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                         });

                 $(".ristoranti").click(function(){
                             var id = $(this).attr('data-id');

                                     $.ajax("https://vasto-58389.firebaseio.com/Ristoranti.json")
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

                 $("#hotel").on("pagecreate",function(){
             $.ajax("https://vasto-58389.firebaseio.com/Hotel.json")
                     .done(function(data){
                         var lista = $("#lista-hotel");
                         lista.empty();
                         $.map(data,function(riga,indice){


                             var hotel = riga.nome +  "";
                             var descrizione = riga.descrizione + "";

                             $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + hotel +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                         });

                 $(".hotel").click(function(){
                             var id = $(this).attr('data-id');

                                     $.ajax("https://vasto-58389.firebaseio.com/Hotel.json")
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
                 
                  $("#itinerari").on("pagecreate",function(){
             $.ajax("https://vasto-58389.firebaseio.com/Itineriari.json")
                     .done(function(data){
                         var lista = $("#lista-itinerari");
                         lista.empty();
                         $.map(data,function(riga,indice){


                             var itinerari = riga.nome +  "";
                             var descrizione = riga.descrizione + "";

                             $(lista).append('<a href="#contenuto" data-id="' + indice +'" style="text-decoration:none;"><div class="ui-grid-b list-categ"><img src="'+riga.anteprima+'" id="anteprima" class="thumb"/><h3 class="list-title">' + itinerari +'</h3><p class="list-testo">'+ descrizione +'</p></div></a>');
                         });

                 $(".itinerari").click(function(){
                             var id = $(this).attr('data-id');

                                     $.ajax("https://vasto-58389.firebaseio.com/Itinerari.json")
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
                 
                 $(function () {
                    $("#inserisciMessaggio").submit(function (event) {
                        event.preventDefault();
                        var json = JSON.stringify($(this).serializeArray());
                        $.ajax({
                            url: "https://vasto-58389.firebaseio.com/Contatti.json",
                            type: "POST",
                            data: json
                        })
                                .done(function () {
                                    alert("Tutto ok!");
                                })
                                .fail(function () {
                                    alert("Errore!");
                                });
                    });
                });


});