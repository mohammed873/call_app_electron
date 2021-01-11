//setting the input value from the spans
$(".numPad").click(function () {
  //checking input value length before displying the save contact div
  if ($("#output").val().length >= 9) {
    $(".contact-div").css("display", "block");
    $(".call-div").css("display", "block");
  } else {
    $(".contact-div").css("display", "none");
    $(".call-div").css("display", "none");
  }
  //resetting the input attr  to accept only 10 degit
  if ($("#output").val().length < 10) {
    $("#output").attr(
      "value",
      $(".output").val() + $(this).children(".span").text()
    );
  }
});

// the clear function to delete last character(degit)
$("#clear").click(function () {
  //checking input value length before displying the save contact div
  if ($("#output").val().length >= 12) {
    $(".contact-div").css("display", "block");
  } else {
    $(".contact-div").css("display", "none");
  }
  //resetting the input value to the new value after deleting a last degit
  var oldValue = document.getElementById("output").value;
  var newValue = oldValue.substring(0, oldValue.length - 1);
  console.log(newValue);
  $("#output").attr("value", newValue);
});

//show alert div on call
$("#call").click(function () {
  alert("CALL in proggress");
});

//searching method for contact
$("#searchContact").keyup(function () {
  var search = $("#searchContact").val();
  $(".namePhone").each(function () {
    if ($(this).text() === search) {
      $(this).parent().css("display", "block");
    } else if (search == "") {
      $(this).parent().css("display", "block");
    } else {
      $(this).parent().css("display", "none");
    }
  });
});

//searching method for contact
$("#searchHistory").keyup(function () {
  var search = $("#searchHistory").val();
  $(".numberPhone").each(function () {
    if ($(this).text() === search) {
      $(this).parent().css("display", "block");
    } else if (search == "") {
      $(this).parent().css("display", "block");
    } else {
      $(this).parent().css("display", "none");
    }
  });
});
