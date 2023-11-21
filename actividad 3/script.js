$(document).ready(function() {
    $('#vehicle-form').on('submit', function(e) {
        e.preventDefault();

        let vehicle = {
            description: $('#description').val(),
            image: $('#image').val(),
            brand: $('#brand').val(),
            model: $('#model').val(),
            type: $('#type').val(),
            year: $('#year').val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/vehicles',
            data: JSON.stringify(vehicle),
            contentType: 'application/json',
            success: function(data) {
                alert('Vehículo agregado con éxito');
                loadVehicles();
            },
            error: function(error) {
                alert('Error al agregar el vehículo');
            }
        });
    });

    function loadVehicles() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/vehicles',
            success: function(data) {
                let list = '';
                for (let i = 0; i < data.length; i++) {
                    list += `<p>${data[i].description}</p>`;
                }
                $('#vehicle-list').html(list);
            },
            error: function(error) {
                alert('Error al cargar los vehículos');
            }
        });
    }

    loadVehicles();
});