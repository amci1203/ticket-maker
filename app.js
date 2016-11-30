(function (app) {
    app.controller('MainController', function () {
        var main = this;
        ///////////////////////////////////////////////////
        this.ticketsPrinted = false;
        this.items = [
            {
                name: 'Regular Shelf Mixed Drink',
                price: 6
            },
            {
                name: 'Top Shelf Mixed Drink',
                price: 10
            },
            {
                name: 'Regular Shelf Shot',
                price: 2
            },
            {
                name: 'Top Shelf Shot',
                price: 4
            },
            {
                name: ' Local Beer',
                price: 4
            },
            {
                name: ' Imported Beer',
                price: 5
            },
            {
                name: 'Beer Bucket',
                price: 20
            },
            {
                name: 'Remy Martin Bottle',
                price: 200,
                amount: 4
            },
            {
                name: 'Moet Bottle',
                price: 200,
                amount: 4,
            },
            {
                name: 'Hennessey Bottle',
                price: 150,
                amount: 12
            },
            {
                name: 'Cigarettes',
                price: 10,
                amount: 40
            },
            {
                name: 'Black n\' Mild',
                price: 2,
                amount: 50
            },

        ];
        this.printTickets = function () {
            main.items.forEach(function (item) {
                var htmlString = '', i;
                for (i = 0; i < item.amount; i++) {
                    var currentTicketNumber = i + 1;
                    htmlString += "<div class='ticket'>" +
                        "<div class='wrapper'>" +
                            "<img class='ticket-signature' src='ticket-signature.jpg' />" +
                            "<p class='ticket-number'>#" + currentTicketNumber + "</p>" +
                            "<div class='ticket-body'>" +
                                "<h2 class='ticket-item-name'>" + item.name + "</h2>" +
                                "<h3 class='ticket-item-price'>$" + item.price + "</h3>" +
                            "</div>" +
                        "</div>" +
                    "</div>";
                }
                $('.ticket-sheet-wrapper').append(htmlString);
            })
            main.ticketsPrinted = true;
        }
        this.return = function () {
            main.ticketsPrinted = false;
        }
    })
})(angular.module('ticket-generator', []))
