function hoverButton() {
    document.getElementById("mybtn").classList.remove("btn-success");
    document.getElementById("mybtn").classList.add("btn-primary");
  }

  function unhoverButton() {
    document.getElementById("mybtn").classList.remove("btn-primary");
    document.getElementById("mybtn").classList.add("btn-success");
  }

  var btn=document.getElementById("mybtn");
  btn.style.backgroundColor=blur;


  var zoomElement = document.getElementById('zoom');

  zoomElement.addEventListener('mouseover', function() 
  {
    zoomElement.style.transform = 'scale(1.2)';
  });

  zoomElement.addEventListener('mouseout', function() 
  {
    zoomElement.style.transform = 'scale(1)';
  });

