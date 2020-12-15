"use strict";

$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    var username = $('.sign-up [name="username"]');
    var email = $('.sign-up [name="email"]');
    var password = $('.sign-up [name="password"]');
    var confirmPassword = $('.sign-up [name="password-confirm"]');

    if (username.val() == '') {
      setErrorFor(username, 'Username cannot be blank');
    } else {
      setSuccessFor(username);
    }

    if (email.val() == '') {
      setErrorFor(email, 'E-mail cannot be blank');
    } else if (validateEmail(email.val())) {
      setSuccessFor(email);
    } else {
      setErrorFor(email, 'E-mail is not valid');
    }

    if (password.val() == '') {
      setErrorFor(password, 'Password cannot be blank');
    } else {
      setSuccessFor(password);
    }

    if (confirmPassword.val() == '') {
      setErrorFor(confirmPassword, 'Password cannot be blank');
    } else if (password.val() != confirmPassword.val()) {
      setErrorFor(confirmPassword, 'Passwords does not match');
    } else {
      setSuccessFor(confirmPassword);
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function setSuccessFor(input, message) {
    input.parent().children('small').removeClass('error-message');
    input.removeClass("input-error");
    input.addClass("input-success");
    input.parent().children('i.error').removeClass('i-error');
    input.parent().children('i.success').addClass('i-success');
  }

  function setErrorFor(input, message) {
    input.removeClass("input-success");
    input.addClass("input-error");
    input.parent().children('i.success').removeClass('i-success');
    input.parent().children('i.error').addClass('i-error');
    input.parent().children('small').addClass('error-message').html(message);
    console.log("error");
  }
});