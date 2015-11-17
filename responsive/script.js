/**
 * Created by arpan on 11/16/2015.
 */
(function($){

    $(document).ready(function(){
        $(".menu-trigger").click(function(){
            $(".nav").slideToggle(400,function(){
                $(this).toggleClass("nav-expanded").css('display','');
            });
        });
    });


})(jQuery);