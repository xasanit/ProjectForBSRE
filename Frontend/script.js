// Получаем элемент кнопки
const button = document.getElementById("myButton");

// Назначаем обработчик клика
button.addEventListener("click", function() {
    // Отправляем GET-запрос на сервер
    fetch('http://localhost:8080/greet')
        .then(response => response.text())
        .then(data => {
            // Отображаем полученный текст в абзаце
            document.getElementById("responseText").innerText = data;
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
});