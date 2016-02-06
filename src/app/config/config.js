'use strict';

angular.module('app.config', [])

.constant('Settings', {
  'API': {
    'baseURL': 'http://jsonplaceholder.typicode.com/',
    'posts':{
      'all': 'posts',
      'item': 'posts/:id'
    }
  },
  'UI': {
    
  }
});
