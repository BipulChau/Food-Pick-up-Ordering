

$(() => {
// making a get request to see some data... jQuery.get( url [, data ] [, success ] [, dataType ] )
const loadMenu = () => {
  $.get(
    "/api/menu",
    (data) => {
      let menuItems = data.menuItems; // array
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
          <p><span id="item-price">${element.name}</span></p>
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

$( "#userForm" ).submit(function( event ) { //event handler for submit - modal after pressing confirm button
  alert( "Placing your order ☕️🥤🧋" );
  event.preventDefault();
  let fullname = $("#fullName").val(); // using if of each input to get the value
  let address = $("#address").val(); // using if of each input to get the value
  let phnumber = $("#phNumber").val(); // using if of each input to get the value
let customer= { //creating object using destructuring method which is equivalent to {fullname: 'Raman', address: 'Toronto', phnumber:'1234567890'}
fullname,
address,
phnumber
};
console.log(customer);

// jQuery.post( url [, data ] [, success ] [, dataType ] )

$.post("/api/order", customer, (res) => { // using jquery we are sending the form values, i.e. cusstomer details to the server. url used for this purpose is "/api/order" and we are passing details using variable named customer. Next step we go to server.js where we will create  app.use("/api/order", orderRoutes(db)); And them go to routes folder ->o rderdetails.js where we will creare router to handle customer data which is being passed from ajax post request from menuitems.js where we are passing customer details to the router
  console.log("Oggy Poggy 🐻");
} )

});


})
