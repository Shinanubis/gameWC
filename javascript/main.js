$( function() {


  var step = 0;
  var goBathroom = false;
  var occupedBathroom = false;
  var wait = true;
  var bowlUp = true;
  var lightOn = false;
  var putLightOn = false;
  var bathroomOn = false;
  var doPoo = false;
  var flushToilet = false;
  var downLight = false;
  var closeDoor = false;
  var easterEgg = 0;
  var show = 1;
  var te= false;

    $("body").children().removeClass('magictime vanishIn');
  //step 0
    $( "#play" ).on( "click", function() {
      $("#step0").addClass('magictime vanishOut');
      step = 1;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 2.1
    $( "#step21" ).on( "click", function() {
      swal({
          text: "Vous retournez jouer",
          timer: 1500,
          buttons: false,
          icon:"../assets/icon/keyboardFlat.jpg"
      });
      $("#step" + step).css("display","none");
      step = 0;
      $("#step" + step).removeClass('magictime vanishOut');
    });

  //step 2.2
    $( "#step22" ).on( "click", function() {
      $("#step" + step).css("display","none");
      step = 3;
      swal({
        text: "Vous vous dirigez vers les toilettes",
        timer: 1800,
        buttons: false,
        icon:"../assets/icon/walkingMan.gif"
      });
      $("#step" + step).css("display","block");
    });

  //step 4.1
    $( "#step41" ).on( "click", function() {
      $("#step3").addClass('magictime vanishOut');
      step = 5;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 6.1
    $( "#step61" ).on( "click", function() {
      $("#step" + step).css("display","none");
      swal({
       text: "Vous retournez jouer",
       timer: 1500,
       buttons: false,
       icon:"../assets/icon/keyboardFlat.jpg"
   });
      step = 0;
      $("#step" + step).css("display","block");
    });

  //step 6.2
    $( "#step62" ).on( "click", function() {
      $("#step" + step).css("display","none");
      step = 3;
      swal({
        text: "Vous attendez quelques minutes",
        timer: 4000,
        buttons: false,
        icon:"../assets/icon/waitingMan.gif"
      });
      $("#step" + step).removeClass('magictime vanishOut');
      $("#step" + step).css("display","block");
    });

  //step 4.2
    $( "#step42" ).on( "click", function() {
      $("#step3").addClass('magictime vanishOut');
      step = 90;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 911
    $( "#step911" ).on( "click", function() {
      $("#step90").addClass('magictime vanishOut');
      step = 92;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 931
    $( "#step931" ).on( "click", function() {
      $("#step92").css("display","none");
      step = 92;
      swal({text: "Ce serait mieux de l'allumer", timer: 1500, buttons: false});
      easterEgg = easterEgg +1;
      if(easterEgg == 3){
        swal({text: "Comme vous voulez on vous aura prévenus", timer: 1500, buttons: false});
        $("#easterEgg").css("display","block");
        show = 0;
      }
      if(show == 1)
      $("#step" + step).css("display","block");
    });

  //step 932
    $( "#step932" ).on( "click", function() {
      $("#step92").css("display","none");

      swal({
       text: "Vous allumez la lumère",
       timer: 2400,
       buttons: false,
       icon:"../assets/icon/lightOn.gif"
      });
      step = 94;
      $("#step" + step).css("display","block");
    });

  //step 912
    $( "#step912" ).on( "click", function() {
      $("#step90").addClass('magictime vanishOut');
      step = 94;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 952
    $( "#step952" ).on( "click", function() {
      $("#step94").addClass('magictime vanishOut');
      swal({
       text: "Vous retournez jouer",
       timer: 1500,
       buttons: false,
       icon:"../assets/icon/keyboardFlat.jpg"
      });
      step = 0;
      $("#step" + step).css("display","block");
    });

  //step 951
    $( "#step951" ).on( "click", function() {
      $("#step94").css("display","none");
      step = 7;

      swal({
       text: "Vous entrez dans les toilettes",
       timer: 2600,
       buttons: false,
       icon:"../assets/icon/enterToWC.gif"
      });
      $("#step" + step).css("display","block");
    });

  //step 81
    $( "#step81" ).on( "click", function() {
      $("#step7").addClass('magictime vanishOut');
      step = 10;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 82
    $( "#step82" ).on( "click", function() {
      $("#step7").addClass('magictime vanishOut');
      step = 9;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step91
    $( "#step91" ).on( "click", function() {
      $("#step9").addClass('magictime vanishOut');
      step = 10;
      $("#step" + step).show();
      $("#step" + step).addClass('magictime vanishIn');
    });

  //step 92
    $( "#step920" ).on( "click", function() {
      $("#step9").css("display","none");
      swal({text: "Pensez à votre femme", timer: 1500, buttons: false});
      step = 9;
      $("#step" + step).css("display","block");
    });

  //step 111
    $( "#step111" ).on( "click", function() {
      $("#step10").css("display","none");
      swal({text: "Vous vous sentez mieux !", timer: 1500, buttons: false});
      step = 12;
      $("#step" + step).css("display","block");
    });

  //step 112
    $( "#step112" ).on( "click", function() {
      swal({
       text: "Vous retournez jouer",
       timer: 1500,
       buttons: false,
       icon:"../assets/icon/keyboardFlat.jpg"
   });
      step = 0;
      $("#step" + step).css("display","block");
    });

  //step 131
    $( "#step131" ).on( "click", function() {
      $("#step12").css("display","none");
      swal({text: "Pensez a votre confort olfactif !", timer: 1500, buttons: false});
      step = 12;
      $("#step" + step).css("display","block");
    });

  //step 132
    $( "#step132" ).on( "click", function() {
      $("#step12").css("display","none");

      swal({
        text: "Vous venez de tirer la chasse",
        timer: 2500,
        buttons: false,
        icon:"../assets/icon/flushToilet.gif"
      });
      step = 14;
      $("#step" + step).css("display","block");
    });

  //step 151
    $( "#step151" ).on( "click", function() {
      $("#step14").css("display","none");
      swal({text: "Pensez à la planète !", timer: 1500, buttons: false});
      step = 14;
      $("#step" + step).css("display","block");
    });

  //step 152
    $( "#step152" ).on( "click", function() {
      $("#step14").css("display","none");

      swal({
        text: "Vous avez éteint la lumière",
        timer: 2500,
        buttons: false,
        icon:"../assets/icon/lightOff.gif"
      });
      step = 16;
      $("#step" + step).css("display","block");
    });

  //step 171
    $( "#step171" ).on( "click", function() {
      $("#step16").css("display","none");
      swal({text: "On vous reveille à quelle heure ?", timer: 1500, buttons: false});
      step = 16;
      $("#step" + step).css("display","block");
    });

  //step 172
    $( "#step172" ).on( "click", function() {
      $("#step16").css("display","none");
      swal({
        text: "Vous sortez des toilettes",
        timer: 1600,
        buttons: false,
        icon:"../assets/icon/outToToilet.gif"
      });
      step = 18;
      $("#step" + step).css("display","block");
    });

  //step 191
    $( "#step191" ).on( "click", function() {
      $("#step18").css("display","none");
      step = 20;
      $("#step" + step).css("display","block");
    });

  //step 192
    $( "#step192" ).on( "click", function() {
      $("#step18").css("display","none");
      swal({
       text: "Vous retournez jouer",
       timer: 1500,
       buttons: false,
       icon:"../assets/icon/keyboardFlat.jpg"
      });
      step = 0;
      $("#step" + step).removeClass('magictime vanishOut');
    });

} );
