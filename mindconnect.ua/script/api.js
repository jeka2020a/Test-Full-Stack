





$(document).ready(function () {

    $('#myTable').DataTable();
    let page = 1; // Начальная страница

    // Функция для загрузки данных
    function loadData(page) {
        $.get(`http://api.mindconnect.ua/posts/${page}`, function (result) {
            $('.tbody').empty(); // Очищаем таблицу перед добавлением новых данных
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
        if (page > 1) { // Предотвращаем переход на страницу меньше 1
            page--;
            loadData(page); // Загружаем данные для новой страницы
        }
    });

    $('.next').on('click', function () {
        page++;
        loadData(page); // Загружаем данные для новой страницы
    });

    // Загружаем данные для первой страницы при загрузке страницы
    loadData(page);
});
