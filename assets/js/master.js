$(function() {
    $('[rel=awesome]').on('click', function(e) {
        $('[name=awesome]').addClass('awesome')
        e.preventDefault()
    })
})