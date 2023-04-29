# react-app
При сдаче работы отправляйте 2 ссылки: первая - ссылка на репозиторий, вторая - ссылка для предпросмотра с хостинга (GitHub Pages или Vercel)

Для выполнения этого задания вам нужно:

1. Создать новый проект через create-react-app

2. Создать компонент Card.js и файл со стилями (styles.css) в папке components (ссылка на дизайн). Не забудьте экспортировать этот компонент, чтобы использовать его в других местах

3. Компонент должен принимать следующие пропсы

date (string)
title (string)
imageUrl (string)
onClick (function)
4. При клике на кнопку "Read Full Article" должна вызывать функция, переданная в пропс "onClick". Чтобы в этом убедиться в теле, передаваемой функции вызывайте alert("text")

5. В компоненте App.js импортировать Card.js и использовать его не менее 5 раз, передавая разные пропсы

6. Дальше вам надо будет залить проект на гитхаб в репозиторий с названием "react-card" и также залить проект на бесплатный хостинг-сервис (GitHub Pages или Vercel), так как проекты на React уже не получиться передавать в зип формате.

* Если вы всё выполнили правильно, то вы получите 80 баллов

ДОП ЗАДАНИЕ (20 баллов)
Добавить пропс size с вариантами small и large, чтобы изменять ширину/высоту карточки как в макете (одна карточка большая, остальные маленькие) 
