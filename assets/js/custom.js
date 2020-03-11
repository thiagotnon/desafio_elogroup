$(document).ready(function(){
    $(".phone").mask("99 – 99999999");
    $("input:radio").change(function () {
        if(this.value === 'yes' && this.name === 'social_media'){
            $('.active').slideDown();
        }else if(this.value === 'no' && this.name === 'social_media'){
            $('.active').slideUp();
        }
    });
    $('#send').click(validate);
});

function validate() {

    var fullName = /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    var inputName =  $('#name');
    var name = inputName.val();
    console.log('input:name' + name);
    if(!fullName.test(name)){
        alert('É necessário inserir Nome e Sobrenome.');
        inputName.focus();
        return false;
    }

    $(":text").each(function () {
        if($(this).val() === ''){
            alert('Há campos vazios no formulário.' + this.id);
            return false;
        }
    });

    $('#send').prop('disabled', true);

    var socialList = [];
    $.each($("input[name='social']:checked"), function(){
        socialList.push($(this).val());
    });
    var data = {
        name: inputName.val(),
        phone: $('#phone').val(),
        meeted_us: $('#meeted-us').val(),
        social_media: $('input[name="social_media"]:checked').val(),
        social: $('input[name="social_media"]:checked').val() === 'yes'? socialList : undefined,

    };
    console.log(JSON.stringify(data));
    $.ajax({
        type: "POST",
        url: "http://localhost:8080",
        data: JSON.stringify(data),
    })
}

