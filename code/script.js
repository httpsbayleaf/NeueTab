// Shows the time
window.onload = function() {
  setInterval(function(){
      var date = new Date();
      var displayDate = date.toLocaleDateString('en-GB'); // 'en-GB' for DD/MM/YYYY format
      var displayTime = date.toLocaleTimeString();

      document.getElementById('time').innerHTML = displayTime;
      document.getElementById('date').innerHTML = displayDate;
  }, 1000);
}

