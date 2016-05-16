// Visit this page http://vancouver.craigslist.ca and write a piece of jQuery code that changes all the links on the home page to have a color red if the link's anchor text includes the pattern eal (20%)


// $('a:contains("eal")').css("color", "red");
$("a[href]:contains('eal')").css("color", "red");
