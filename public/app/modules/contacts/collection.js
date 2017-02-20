define(function(require) {
  'use strict';

  var Backbone = require('backbone'),
      Model = require('./model');


  var Contacts = Backbone.Collection.extend({
    model: Model,
      url: '/contacts'
  });

  var persons = [
    {
      name: 'Dima',
      age: 23,
      occupation: 'web developer'
    },
    {
      name: 'Вася',
      age: 18,
      occupation: 'Супер-Синьер'
    },
    {
      name: 'Лена',
      age: 20,
      occupation: 'бухгалтер'
    }
  ];

  var contacts =  new Contacts();
    contacts.fetch();
  return console.log(contacts) || contacts;
});