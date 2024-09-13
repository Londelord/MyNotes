Это мое первое тестовое веб-приложение для ведения заметок. 
#### Использованный стек:
- ASP .Net Core
  - MVC модель
  - Entity Framework
  - PostgreSQL
  - Swagger
- React js
  - Chakra UI
  - Axios

### Backend
Серверная часть написана на C# с использованием ASP .Net Core. 
Имеется один контроллер "NotesController", обрабатывающий запросы GET, POST и DELETE.
Одна модель - Note {Guid id, string title, string description, DateTime createdAt}.
Подключен Swagger для удобства проверки работоспособности контроллеров.
Также есть docker-compose файл для запуска БД в контейнере. Обращение к БД происходит с помощью Entity Framework.
Имеется возможность поиска заметок по тексту и сортировки по дате.

### Frontend
Клиентская часть написана на React js.
Запросы на сервер отправляются с помощью библиотеки Axios.
Основные компоненты UI описаны библиотекой ChakraUI.
