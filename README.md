# [Запустить проект](https://johnnystorm19.github.io/test_weatherApp/)
### Тестовое задание на позицию Frontend-разработчик
Техническое задание проекта:
>Нарисовать 3d куб с помощью three.js. На каждой грани отобразить погоду в Санкт-Петербурге, начиная с текущего дня + плюс дней, равных количеству оставшихся граней. Куб можно вертеть в разные стороны

Реализация задания:
- для получения актуального прогноза погоды был выбран [Openweathermap API](https://openweathermap.org/)
- запросы осуществлялись с помощью [Axios](https://axios-http.com/ru/),  через кастомный хук **useFetchData**
- **куб** был сгенерирован с помощью библиотеки [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Html**-разметка на каждой из граней реализована с помощью хелпера [drei](https://github.com/pmndrs/drei) для React Three Fiber
- для стилизации был использован обычный CSS

[![test_weatherApp](https://github.com/JohnnyStorm19/test_weatherApp/actions/workflows/web.yml/badge.svg)](https://github.com/JohnnyStorm19/test_weatherApp/actions/workflows/web.yml)