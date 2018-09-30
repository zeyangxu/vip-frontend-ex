// Keep track of the item user added in modal
var card_list = [];

$(document).ready(function() {
  // Create a new item element using the input
  $('#addButton').click(function(e) {
    e.preventDefault();
    var unique = true;
    var toAdd = $('input[name=addContent]').val();
    // Check existed item
    $.each(card_list, function(index, item) {
      if (toAdd == item) {
        unique = false;
      }
    });
    // Check if the input is empty
    if (!toAdd) {
      alert('please enter something');
    } else if (unique) {
      card_list.push(toAdd);
      var $newItem = $(
        `<div class="itemCard">
          <div class="itemContent"></div>
          <div class="deleteCross">
            <div class="crossLine"></div>
            <div class="crossLine"></div>
          </div>
        </div>`
      );
      $newItem.children(':first').text(toAdd);
      $('#itemBox').append($newItem);
      $('#inputBar').val('');
    } else {
      alert('item existed');
    }
  });

  // Clear the records of everything and close the modal
  $('#cancelButton').click(function() {
    card_list = [];
    $('#submitOl').empty();
    $('#itemBox').empty();
    $('#inputBar').val('');
  });

  // Render the new item added in modal to the main page
  $('#submitButton').click(function() {
    // Loop through list
    $.each(card_list, function(index, item) {
      var $newItem = $(
        `<div class="itemCard">
          <div class="itemContent"></div>
          <div class="deleteCross">
            <div class="crossLine"></div>
            <div class="crossLine"></div>
          </div>
        </div>`
      );
      $newItem.children(':first').text(item);
      $('.displayBox').append($newItem);
    });
    // Clean up
    card_list = [];
    $('#submitOl').empty();
    $('#itemBox').empty();
  });

  // Delete item from the list and add a fadeout effect
  $('body').on('click', '.deleteCross', function() {
    var target = $(this)
      .prev()
      .text();
    $(this)
      .parent()
      .fadeOut('slow');
    card_list.splice(card_list.indexOf(target), 1);
  });
});
