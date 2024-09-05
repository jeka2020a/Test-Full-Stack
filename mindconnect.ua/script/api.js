




/*
async function getPosts ()
{
    let result = await fetch("http://api.mindconnect.ua/index.php");
    let posts  = await result.json();

    //document.querySelector('.tbody').innerHTML = '';

    posts.forEach((post) => {
        document.querySelector('.tbody').innerHTML += 
        `
            <tr>
              <td>${post.id}</td>
              <td>${post.username}</td>
              <td>${post.number}</td>
              <td>${post.fibbonachi}</td>
              <td>${post.ip}</td>
            </tr>
        `;
    });
}
*/
let currentPage = 1; // Текущая страница
let postsPerPage = 5; // Количество постов на одной странице

async function getPosts(page = 1) {
    let result = await fetch(`http://api.mindconnect.ua/index.php?page=${page}`);
    let posts = await result.json();
    
    // Очищаем предыдущие записи
    document.querySelector('.tbody').innerHTML = '';
    
    posts.forEach((post) => {
        document.querySelector('.tbody').innerHTML += 
        `
            <tr>
              <td>${post.id}</td>
              <td>${post.username}</td>
              <td>${post.number}</td>
              <td>${post.fibbonachi}</td>
              <td>${post.ip}</td>
            </tr>
        `;
    });

    updatePaginationControls();
}

function updatePaginationControls() {
    let paginationControls = document.querySelector('.pagination');
    paginationControls.innerHTML = '';

    // Добавляем кнопку "Назад"
    if (currentPage > 1) {
        paginationControls.innerHTML += `<button class='page-link' onclick="changePage(${currentPage - 1})">previous</button>`;
    }

    // Добавляем кнопку "Вперед"
    paginationControls.innerHTML += `<button class='page-link' onclick="changePage(${currentPage + 1})">next</button>`;
}

function changePage(page) {
    currentPage = page;
    getPosts(currentPage);
}

// Инициализация получения постов
getPosts(currentPage);















async function addPost() {
    const username = document.getElementById('username').value;
    const number = document.getElementById('number').value;

    let formdata = new FormData();


    formdata.append('username', username);
    formdata.append('number', number);

    let res = await fetch("http://api.mindconnect.ua/index.php",{
        method: 'POST',
        body: formdata
    });

    const data = await res.json();
}


getPosts();