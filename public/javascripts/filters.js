'use strict';

angular.module('filters', [])
  .filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
)

.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
