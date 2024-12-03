$(document).ready(function () {

    let table = new DataTable('#myTable');


    $('#myTable').DataTable();
    
    
    
    
    let page = 1; 

    
    function loadData(page) {
        $.get(`http://api.mindconnect.ua/posts/${page}`, function (result) {
            $('.tbody').empty(); 
            result.forEach(element => {
                $('.tbody').append(`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.username}</td>
                        <td>${element.number}</td>
                        <td>${element.fibbonachi}</td>
                        <td>${element.ip}</td>
                    </tr>
                `);
            });
        }).fail(function () {
            console.error("Ошибка загрузки данных");
        });
    }

    



    
    $('.prev').on('click', function () {
        if (page > 1) { 
            page--;
            loadData(page); 
        }
    });

    $('.next').on('click', function () {
        page++;
        loadData(page);
    });

    
    loadData(page);


    

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
