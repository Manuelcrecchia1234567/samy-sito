<script src="https://api.landbot.io/"></script>




fetch('https://api.landbot.io/')
  .then(response => response.json())
  .then(data => {
    // Gestisci i dati ricevuti dall'API
    console.log(data);
  })
  .catch(error => {
    // Gestisci eventuali errori
    console.error('Errore nella richiesta API', error);
  });



  HTTP/1.1 201 OK
  {
      "success": true,
      "customer": {
          "id": 42,
          "name": "Samy Pulizie",
          "phone": "3276869328",
          "email": "Manuelcrecchia8@gmail.com",
          "postal_code": "46021",
          "country": "GB",
          "token": "6VY5K2YT7W7A9IJL"
      }
    }

    HTTP/1.1 422 Unprocessable entity
{
    'success': false,
    'error': 'Invalid message type'
}