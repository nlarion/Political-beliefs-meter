$(function(){
  $('#income').keyup(function(){
    var income = $("#income").val();
    console.log(isNaN(income));
    if(isNaN(income)){
      $('.form-group').removeClass('has-success');
      $('.form-group').addClass('has-error');
    } else {
      $('.form-group').removeClass('has-error');
      $('.form-group').addClass('has-success');
    }
  });

  $(".container form").submit(function(event){
    var income = $("#income").val(),
    trans = $("input[name=optionsRadios]:checked").val(),
    gun =  $("#gun").is(':checked'),
    donate = $("#donate").is(':checked');
    var obj = {};
    obj.gun = gun;
    obj.donate = donate;
    console.log(obj);
    $(".hillary").hide();
    $(".bernie").hide();
    $(".donald").hide();
    $(".ted").hide();
    $(".alert").hide();

    if(income && !isNaN(income)){
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
