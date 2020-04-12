function bio(){
    $("#first").on("click", function(){
      $('.page1').removeClass("hidden");
      $('.page2hiddenlayer').addClass("hidden");
      $('.page3').addClass("hidden");
      $('.hero').removeClass("hidden");
  })}
  
  function projects(){
    $('#second').click(function() {
      $('.page1').addClass("hidden");
      $('.page2hiddenlayer').removeClass("hidden");
      $('.page3').addClass("hidden");
      $('.hero').addClass("hidden");
  })}
  
  function contact(){
    $('#third').click(function() {
      $('.page1').addClass("hidden");
      $('.page2hiddenlayer').addClass("hidden");
      $('.page3').removeClass("hidden");
      $('.hero').addClass("hidden");
  })}
  
  $(function(){
    bio();
    projects();
    contact();
  });