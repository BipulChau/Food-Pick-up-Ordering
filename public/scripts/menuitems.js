

$(() => {
// making a get request to see some data... jQuery.get( url [, data ] [, success ] [, dataType ] )
const loadMenu = () => {
  $.get(
    "/api/menu",
    (data) => {
      let menuItems = data.menuItems;
      let container = $("#menuitems");
      if (menuItems.length > 0) {
        menuItems.forEach((element) => {
          container.append(`<li class="list-group-item menu-item row">
        <div class="pull-left text-center col-md-3 item-image">
          <img
            id="item-image"
            src="${element.imglink}"
            class="img-reponsive img-rounded img-menu"
          />
          <p>Price: $<span id="item-price">${element.price}</span></p>
        </div>
        <div class="col-md-6 item-description" id="item-description">${element.description}</div>

        <div class="pull-right col-md-3 item-quantity">
          <input type="number" min=0 id="${element.id}"/>
        </div>
      </li>`);
        });
      }
    },
    "json"
  );
};

loadMenu();


})
