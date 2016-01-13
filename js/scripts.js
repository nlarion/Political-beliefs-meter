$(function(){
  $(".container form").submit(function(event){
    var income = $("#income").val(),
    trans = $("input[name=optionsRadios]:checked").val(),
    gun =  $("#gun").is(':checked'),
    donate = $("#donate").is(':checked');
    var obj = {};
    obj.gun = gun;
    console.log(obj);
    obj.donate = donate;
    $(".hillary").hide();
    $(".bernie").hide();
    $(".donald").hide();
    $(".ted").hide();
    $(".alert").hide();

    if(income){
      if (income >999999){
        if (gun){
          if(donate){
            if (trans === "car"){
              $(".hillary").show();
            }else if(trans === "bikeWalk"){
              $(".donald").show();
            }else{
              $(".donald").show();
            }
          }else{
            if (trans === "drive"){
              $(".donald").show();
            }else if(trans === "bikeWalk"){
              $(".ted").show();
            }else{
              $(".ted").show();
            }
          }
        } else {
          if(donate){
            if (trans === "drive"){
              $(".hillary").show();
            }else if(trans === "bikeWalk"){
              $(".hillary").show();
            }else{
              $(".hillary").show();
            }
          }else{
            if (trans === "drive"){
              $(".bernie").show();
            }else if(trans === "bikeWalk"){
              $(".bernie").show();
            }else{
              $(".bernie").show();
            }
          }
        }

      }else {
        if (gun){
          if(donate){
            if (trans === "car"){
              $(".hillary").show();
            }else if(trans === "bikeWalk"){
              $(".hillary").show();

            }else{
              $(".hillary").show();
            }
          }else{
            if (trans == "car"){
              $(".donald").show();
            }else if(trans === "bikeWalk"){
              $(".donald").show();
            }else{
              $(".ted").show();
            }
          }
        } else {
          if(donate){
            if (trans === "car"){
              $(".hillary").show();
            }else if(trans === "bikeWalk"){
              $(".bernie").show();
            }else{
              $(".bernie").show();
            }
          }else{
            if (trans === "car"){
              $(".donald").show();
            }else if(trans === "bikeWalk"){
              $(".donald").show();
            }else{
              $(".ted").show();
            }
          }
        }
      }

    }else {
      $(".alert").show();
    }

  event.preventDefault();
  })
});
