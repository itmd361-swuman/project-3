$(document).ready(function() {
  $('#rl-form').on('submit', function (event) {
    var query = $('#rl-name').val();
    $.get(
      'https://nutritionix-api.p.mashape.com/v1_1/search/' + query, //resource
      function(data) { // things to do with data
        $("#result").append(
          '<p>'+ data.hits[0].fields.item_name +' is producted by '
                + data.hits[0].fields.brand_name 
                + '. It has ' + data.hits[0].fields.nf_calories + 'per 1 serving</p>');
      });
      event.preventDefault();
      //alert('Form Submitted');
  });
});
