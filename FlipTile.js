$('.flippy').dblclick(function(){
    $(this).attr('flipped','flipped');
}).click(function(){
    $(this).attr('flipped');
    $(this).removeAttr('flipped');
});
