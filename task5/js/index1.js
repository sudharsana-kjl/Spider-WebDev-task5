

    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   
    $('.modal-trigger').leanModal();
  
 $Container2 = $('#container2');
 //$Container1 = $('#container1');
$Container2.hide();
//$Container1.hide();
$('#form2').on('submit', function(p_oEvent){
    
    var sUrl2, sMovie2, oData2;
    //var sUrl1, sMovie1, oData1;
    p_oEvent.preventDefault();
sMovie2 = $('#search1').val();
//sMovie1 = $('#search2').val(); //$Form.find('input').val();

console.log(sMovie2);
    sUrl2 = 'https://www.omdbapi.com/?t=' + sMovie2 + '&type=movie&tomatoes=true';
    //sUrl1 = 'https://www.omdbapi.com/?t=' + sMovie1 + '&type=movie&tomatoes=true';
    console.log(sUrl2);
    
    $.ajax(sUrl2, {
        complete: function(p_oXHR, p_sStatus){
            oData2 = $.parseJSON(p_oXHR.responseText);
            console.log(oData2.imdbRating);
            $Container2.find('.title2').text(oData2.Title);
            $Container2.find('.rated2').text(oData2.Rated);
            $Container2.find('.runtime2').text(oData2.Runtime);
            $Container2.find('.rating2').text(oData2.imdbRating);
            $Container2.find('.year2').text(oData2.Year);
            $Container2.find('.plot2').text(oData2.Plot);
            $Container2.find('.poster2').html('<img style="width:25%;" src="' + oData2.Poster + '"/>');
            
            
            $Container2.find('.released2').text(oData2.Released);
            $Container2.find('.genre2').text(oData2.Genre);
            $Container2.find('.director2').text(oData2.Director);
            $Container2.find('.cast2').text(oData2.Actors);
            
            
            
            
            
            
            $Container2.show();
        }
        
    });
    /*$.ajax(sUrl1, {
        complete: function(p_oXHR, p_sStatus){
            oData1 = $.parseJSON(p_oXHR.responseText);
            console.log(oData1.Plot);
            $Container1.find('.title1').text(oData1.Title);
            $Container1.find('.plot1').text(oData1.Plot);
            $Container1.find('.poster1').html('<img src="' + oData1.Poster + '"/>');
            $Container1.find('.year1').text(oData1.Year);
            $Container1.show();
        }  
    });*/
});
