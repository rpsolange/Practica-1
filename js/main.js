$(document).ready(function(){
  $('html').keydown(function(e){
    if(e.which== 40){
      if($("#rojo").prop("checked")){
        $("#verde").prop("checked", true);
      } else if($("#verde").prop("checked")){
        $("#gris").prop("checked", true)
      }
    } else if(e.which== 38){
      if($("#gris").prop("checked")){
        $("#verde").prop("checked", true)
      } else if($("#verde").prop("checked")){
        $("#rojo").prop("checked", true)
      }
    }
  })
  $("#btn").click(function(){
    user();
    clean();
  })

})

/*
var usuario=[];

function user(){

  var meses = new Date;
  var dias= new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  var mes= new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var año= meses.getFullYear();
  var day= dias[meses.getDay()];
  var porcion = day.substring(0, 3);

  var name= $("#nombre").val();
  var apellido= $("#apellido").val();
  var dni= $("#dni").val();
  var phone= $("#tel").val();
  var dir= $("#dir").val();

  $("#usuarios").append('<div class="user-box"><div class="close glyphicon glyphicon-remove"></div><div>'+name+' '+apellido+'</div><div> DNI: '+dni+'</div><div> Tel: '+phone+' </div><div> '+dir+' </div><div>Creado el '+porcion.toLowerCase()+" "+meses.getDate()+ " de "+mes[meses.getMonth()]+" , "+año+'</div>')
}
*/
function clean(){
  $('input').val("");
}
