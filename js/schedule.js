$(function() {
    $("#sch_grid_mode").click(function() {
        $(".sch_list > div").addClass("col_tab_4").removeClass("col_tab_12");
        $(".sch_list .grid_row > .col_tab_3").addClass("col_tab_12").removeClass("col_tab_3");
        $(".sch_list .grid_row > .col_tab_9").addClass("col_tab_12").removeClass("col_tab_9");
        $("body").addClass("sch_grid_mode");
        return false;
    });

    $("#sch_row_mode").click(function() {
        $(".sch_list > div").addClass("col_tab_12").removeClass("col_tab_4");
        $(".sch_list .grid_row > div:first-child").addClass("col_tab_3").removeClass("col_tab_12");
        $(".sch_list .grid_row > div:last-child").addClass("col_tab_9").removeClass("col_tab_12");
        $("body").removeClass("sch_grid_mode");
        return false;
    });

    // $("#btn_sch").click(function() {
    //     $("body").addClass("sch_overlay_show");
    // });

    // $("#sch_overlay a").click(function() {
    //     $("body").removeClass("sch_overlay_show");
    // });

    $('.select_schedule').on('click', function(){
        var domain = $("meta[name='domain']").attr("content");
        var desc = $(this).html();
        var date = $(this).data('date');
        var schedules = '';
        $('#btn_sch').html(desc + '<span class="caret"></span>');
        // if ($(".sch_grid_mode")[0]) {
        //     $('body').removeClass('sch_grid_mode');
        // }
        $.get(domain + '/api/schedule', {'date':date}, function(data){
            
            $.each(JSON.parse(data.schedules), function (key, schedule) {
                schedules += '' +
                    '<div class="itemslider">' +
                        (data.live == schedule.id ? '<span class="stat"><a class="on_now" href="' + domain + '/live-streaming' + '">ON NOW</a></span>' : '') +
                        '<div class="grid_row">' +
                            '<div class="col_tab_12">' + schedule.time12format + '<span class="ampm"> ' + schedule.ampm + '</span></div>' +
                            '<div class="col_tab_12 titleacara">' + schedule.program.title + '</div>' +
                        '</div>' +
                    '</div>' +
                '';
            });
            $('#schedules-grid').html(schedules);
        })
        .always(function(){
            $('#btn_sch').html(desc + '<span class="caret"></span>');
            $('#sch_grid_mode').click();
            $("body").addClass("sch_grid_mode");
                
            var owl = $(".owl-carousel");

            $('.owl-carousel').owlCarousel('destroy');
            owl.owlCarousel({
                items: 5,
                nav: true,
                dots: false,
                navText: ["<div class='prev-bnt'></div>","<div class='next-bnt'></div>"]
            });
        });
    });
});