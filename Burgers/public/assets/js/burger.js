$(function() {
  $(".change-with cheese").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newsleep");

    var newBurger = {
      sleepy: newBurger
    };

    $.ajax("/api/burgers.js/" + id, {
      type: "PUT",
      data: newBuildBurger
    }).then(
      function() {
        console.log("changed burger to", newBurger);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=with cheese]:checked").val().trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
