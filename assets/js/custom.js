$(document).ready(function(){
    $(".phone").mask("99 – 99999999");
    $("input:radio").change(function () {
        if(this.value === 'yes' && this.name === 'social-media'){
            $('.active').slideDown();
        }else if(this.value === 'no' && this.name === 'social-media'){
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

}

C:\Users\Coria\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs\bin