/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

  $('#registerSubmit').click(function(e) {
    e.preventDefault();
    $('#errorRegAlert').slideDown();
  });

  $('#loginSubmit').click(function(e) {
    e.preventDefault();
    $('#errorLoginAlert').slideDown();
  });

  $('.carousel1').carousel({
    interval: 1000 * 3
  });

  $('a.pop').click(function(e) {
    e.preventDefault();
  });

  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();
});
