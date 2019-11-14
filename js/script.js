function filterPlate() {

    // variables declared
    var input, filter, ul, li, a, i, txtValue;
    input   = document.getElementById('search-filter');
    filter  = input.value.toUpperCase();
    ul      = document.getElementById("list-plates");
    li      = ul.getElementsByClassName('item');
 
    // loop all items list
     for (i = 0; i < li.length; i++) {        
      a = li[i].getElementsByClassName("item-name")[0];    
      txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";        
        } else {
            li[i].style.display = "none";
        }

    }
  }
