$(document).ready(function () {


    $('.scroll-top').on('click', function () {
      $('html').animate({
        scrollTop: 0
      }, 'slow');
    }) 

    $('#checkBox').on("click",function () {
      if ($(this).is(':checked')) {
        $('#checkBoxDisabled').removeAttr('disabled');
      } else {
        $('#checkBoxDisabled').attr('disabled', 'disabled');
      }
    });


    $('#changeColor').on("click",function () {
      $('#color').css('background-color', 'yellow')
      $('#color1').css('background-color', 'yellow')
      $('#color2').css('background-color', 'yellow')
    });

   
    var maxlength = 15;

    $('.text-box').on('keyup', function () {
      var textLength = maxlength - $(this).val().length;

      $('.r-chars').text(textLength);
    }) 

   
     $(".text-box").on('keyup', function () {
      var toDisplay = $(this).val();

      $('.display').text(toDisplay);
    }) 


    
    $('.add-option').on('click', function () {
      var option = $('.text-box').val();
      var data = '<option value = " ' + option + '">' + option + '</option>';

      $('.dropdown').append(data);
    }) 

    
    $('.remove-option').on('click', function () {
      var toRemove = $('.dropdown').val();

      $('.dropdown option[value="' + toRemove + '"]').remove();
    }) 

   
  
    $(".change").on('click', function () {
      if ($(".change").val() == "Good Morning") {
        $(".change").val("Good Evening");
      } else {
        $(".change").val("Good Morning");
      }
    }) 

   

    
    $('.numbers').keyup(function () {
      this.value = this.value.replace(/[^0-9\.]/g, '');
    }) 

    
    $('.animate').on("click",function () {
      $(".jquery").animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500);
    }) 

    
    $('.right').on("click",function () {
      $('.block').animate({
        left: '+=50px'
      }, 'slow');
    })

    $('.left').on("click",function () {
      $('.block').animate({
        left: '-=50px'
      }, 'slow');
    })

    $('.up').on("click",function () {
      $('.block').animate({
        top: '-=50px'
      }, 'slow');
    })

    $('.down').on("click",function () {
      $('.block').animate({
        top: '+=50px'
      }, 'slow');
    }) 

  }) 