

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   
   
  $('.modal-trigger').leanModal();
 $Container = $('#container');
 $Container1 = $('#container1');
$Container.hide();
$Container1.hide();
$('#form1').on('submit', function(p_oEvent){
    
    var sUrl, sMovie, oData;
    var sUrl1, sMovie1, oData1;
    p_oEvent.preventDefault();
sMovie = $('#search2').val();
sMovie1 = $('#search3').val(); //$Form.find('input').val();

console.log(sMovie1);
    sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true';
    sUrl1 = 'https://www.omdbapi.com/?t=' + sMovie1 + '&type=movie&tomatoes=true';
    console.log(sUrl1);
    
    $.ajax(sUrl, {
        complete: function(p_oXHR, p_sStatus){
            oData = $.parseJSON(p_oXHR.responseText);
            console.log(oData.Poster);
            $Container.find('.title').text(oData.Title);
            $Container.find('.awards').text(oData.Awards);
            $Container.find('.metascore').text(oData.Metascore);
            $Container.find('.rating').text(oData.imdbRating);
            $Container.find('.votes').text(oData.imdbVotes);
            $Container.find('.tmeter').text(oData.tomatoMeter);
            $Container.find('.trating').text(oData.tomatoRating);
            $Container.find('.treview').text(oData.tomatoReviews);
            $Container.find('.tfresh').text(oData.tomatoFresh);
            $Container.find('.trotten').text(oData.tomatoRotten);
            $Container.find('.tusermeter').text(oData.tomatoUserMeter);
            $Container.find('.tuserrating').text(oData.tomatoUserRating);
            $Container.find('.tuserreview').text(oData.tomatoUserReviews);

            $("#box3").css("-webkit-animation","slideIn3 2s forwards");
            $("#box3").css("animation","slideIn3 2s forwards");
            
  
            $Container.show();
            
  
        }
        
    });
    $.ajax(sUrl1, {
        complete: function(p_oXHR, p_sStatus){
            oData1 = $.parseJSON(p_oXHR.responseText);
            console.log(oData1.Plot);
           $Container1.find('.title1').text(oData1.Title);
            $Container1.find('.awards1').text(oData1.Awards);
            $Container1.find('.metascore1').text(oData1.Metascore);
            $Container1.find('.rating1').text(oData1.imdbRating);
            $Container1.find('.votes1').text(oData1.imdbVotes);
            $Container1.find('.tmeter1').text(oData1.tomatoMeter);
            $Container1.find('.trating1').text(oData1.tomatoRating);
            $Container1.find('.treview1').text(oData1.tomatoReviews);
            $Container1.find('.tfresh1').text(oData1.tomatoFresh);
            $Container1.find('.trotten1').text(oData1.tomatoRotten);
            $Container1.find('.tusermeter1').text(oData1.tomatoUserMeter);
            $Container1.find('.tuserrating1').text(oData1.tomatoUserRating);
            $Container1.find('.tuserreview1').text(oData1.tomatoUserReviews);
            $("#box4").css("-webkit-animation","slideIn4 2s forwards 0s");
  $("#box4").css("animation","slideIn4 2s forwards 0s");
            $Container1.show();
        }  
    });
});
