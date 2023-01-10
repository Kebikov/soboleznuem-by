'use strict';
let path = require('path');

module.exports = {
  mode: 'production', //режим разработки(в финале сборки production/development)
  entry: './public/js/script.js', //файл с зависимостями
  output: {
    filename: 'bundle.js', //имя финального файла
    path: __dirname + '/public/dist' //путь сохранения финального файла
  },
  watch: true, //указание надо ли следить за изминениями в модулях

  devtool: "source-map", //режим сохранения исходных файлов

  module: {}
};