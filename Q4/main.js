var baseUrl = "http://localhost:3000/";

$(document).ready(function(){
  $.ajax({
    method: "GET",
    url: baseUrl + "companies.json",
    success: function(companies){
      var template = $('#company-summary').html();
      Mustache.parse(template);
      for(var i = 0; i < companies.companies.length; i++) {
        var rendered = Mustache.render(template, companies.companies[i]);
        $("#companies").append(rendered)
      }

      //Q6
      for (var i = 0; i < companies.companies.length; i++) {
        $("#company-" + companies.companies[i].id).hide()
      }
      for (var i = 0; i < companies.companies.length; i++) {
        var counter = 0
        setTimeout(function(){
          $("#company-" + companies.companies[counter].id).fadeIn();
          counter++;
        }, 50*(i+1));
        // console.log(50*(i+1));
      }
    },
    error: function() {
      alert("Problem loading companies. Please retry");
    }
  });



});
