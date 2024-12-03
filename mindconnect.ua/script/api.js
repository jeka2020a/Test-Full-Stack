$(document).ready(function () {

    $('#myTable').DataTable({
        ajax: {
            url: 'http://api.mindconnect.ua/all/', 
            type: 'GET',                        
            dataSrc: '',                         
            dataType: 'json'
        },
        columns: [
            { data: 'id' },
            { data: 'username' },
            { data: 'number' },
            { data: 'fibbonachi' },
            { data: 'ip' }
        ]
    });



    $('.send__data').click(function() {

        let username = $('#username').val();
        let number = $('#number').val();
        
        $.post('http://api.mindconnect.ua/posts/', 
            {username: username, number: number}, 
            function(data){
                alert(data);
            });
    })



});
