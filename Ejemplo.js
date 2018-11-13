$(document).ready(function(){
    
    $(function () {
        // Initialize Example 1
        $('#example1').dataTable( {
            dom: "<'row'<'col-sm-4'f>>tp",
            buttons: [
            ]
           
        });
        $("#example1_paginate").hide();
        $("#example1_length").hide();
        $("#example1_filter").hide();

        $('#example2').dataTable( {
            dom: "<'row'<'col-sm-4'f>>tp",
            buttons: [
            ]
           
        });
        $("#example2_paginate").hide();
        $("#example2_length").hide();
        $("#example2_filter").hide();
    });

    

    $("#TSNotaDeTrabajoSocialSeguimiento").hide();
    $("#TSAdjuntarInformacion").hide();
    $("#TSHistorico").hide();

    $("#TSNotaDeTrabajoSocialPestaña").click(function(){
    
        $("#TSNotaDeTrabajoSocial").show();
        $("#TSNotaDeTrabajoSocialSeguimiento").hide();
        $("#TSAdjuntarInformacion").hide();
        $("#TSHistorico").hide();

    });

    $("#TSNotaDeTrabajoSocialSeguimientoPestaña").click(function(){

        $("#TSNotaDeTrabajoSocial").hide();
        $("#TSNotaDeTrabajoSocialSeguimiento").show();
        $("#TSAdjuntarInformacion").hide();
        $("#TSHistorico").hide();
       
    });

    $("#TSAdjuntarInformacionPestaña").click(function(){

        $("#TSNotaDeTrabajoSocial").hide();
        $("#TSNotaDeTrabajoSocialSeguimiento").hide();
        $("#TSAdjuntarInformacion").show();
        $("#TSHistorico").hide();
       
    });

    $("#TSHistoricoPestaña").click(function(){

        $("#TSNotaDeTrabajoSocial").hide();
        $("#TSNotaDeTrabajoSocialSeguimiento").hide();
        $("#TSAdjuntarInformacion").hide();
        $("#TSHistorico").show();
       
    });


    var checado=1;

    $("#TSSwitch").click(function() {
        switch(checado){
            case 1:
                $(this).removeClass('fas fa-toggle-off');
                $(this).addClass('fas fa-toggle-on');
                checado--;
            break;
            case 0:
                $(this).removeClass('fas fa-toggle-on');
                $(this).addClass('fas fa-toggle-off');
                checado++;
            break;
        }
        
    });


    //Datepicker

    $('#TSFechaNacimiento').datepicker();
    $("#TSFechaIngreso").datepicker();
    $("#TSFechaAtencion").datepicker();
    $("#TSFechaCanalizacion").datepicker();
    $("#TSFechaConclusion").datepicker();
    $("#TSFecha01").datepicker();

    

    $("#TSBuscador1").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#example1 tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

      $("#TSBuscar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#example2 tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });


    $("#TSOtrosInput").attr('disabled','disabled');

    $("#TSOtros").on("click", function(){

    if($("#TSOtros").is(":checked")==true){
        $("input").removeAttr('disabled');
    }
    else{
        $("#TSOtrosInput").attr('disabled','disabled');
    }
        
    });

});