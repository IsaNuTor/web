$(document).ready(function(){
   
    // Hacemos la clase active para el enlace primero de todos
    $('ul.botones-con li a:first').addClass('active');
    
    // Ocultamos los paneles menos el de todos.
    $('.conocimientos .contenedor-web').hide();
    $('.conocimientos .contenedor-programacion').hide();
    $('.conocimientos .contenedor-bbdd').hide();
    $('.conocimientos .contenedor-ide').hide();
    $('.conocimientos .contenedor-programacion').hide();
    $('.conocimientos .contenedor-frame').hide();
    
    $('.conocimientos .contenedor-todos').show(); // Mostramos todos.
    
    // Cuando pulsamos los botones, tenemos que desactivar todos los contendeores que no sean y
    // mostrar solo el que se pulsa, además de activar el enlace.
    $('ul.botones-con li a').click(function(){
        $('ul.botones-con li a').removeClass('active'); // Quitamos la clase active.
        // Al qe le damos clic nos agrega la clase active.
        $(this).addClass('active');
        
        // Ocultamos los paneles.
        $('.conocimientos .contenedor-todos').hide();
        $('.conocimientos .contenedor-web').hide();
        $('.conocimientos .contenedor-programacion').hide();
        $('.conocimientos .contenedor-bbdd').hide();
        $('.conocimientos .contenedor-ide').hide();
        $('.conocimientos .contenedor-programacion').hide();
        $('.conocimientos .contenedor-frame').hide();
        
        // Activamos el panel que se ha pulsado.
        var activeCon = $(this).attr('href');
        $(activeCon).show(); // Mostramos
        
        return false;
    });
});