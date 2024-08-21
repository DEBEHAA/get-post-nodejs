http = require('http');
url = require('url');
querystring = require('querystring');

function sam(request, response) {
  if (request.url.includes('/login')) {
    console.log('URL ' + request.url + ' received.');

    var path = url.parse(request.url).pathname;
    console.log('Request for ' + path + ' received.');


    var query = url.parse(request.url).query;
    console.log("QUERY IS:");
    console.log(query);

    qs = querystring.parse(query);
    console.log("QS IS:");
    console.log(qs);
    var name = qs["name"];
    var email = qs["email"];
    var mobile = qs["mobile"];
    var age = qs["age"];

    //response.write('Helli' + name + ', your email id ' + email + ' has been registered successfully with your mobile number ' + mobile)
    response.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Calculator Result</title>
          <style>
              body {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background-image:url('https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg');
                  background-repeat: no-repeat;
                  background-size: cover;clea
                  margin: 0;
                  padding: 0;
                  align-items:center;
              }
              .result-container {
                  
                  background-color: #fff;
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  padding: 30px;
                  margin: 20px auto;
                  max-width: 600px;
              }
              h2 {
                  color: #333;
                  font-size: 28px;
                  margin-bottom: 20px;
              }           
          </style>
      </head>
      <body>
          <div class="result-container">
          <center>
              <h2>Hello ${name}, your email id ${email} has been registered successfully with your mobile number ${mobile}.</h2>
              <h4 style="font-family:arial;">Thank You!</h4>
          </center>
          </div>
      </body>
      </html>
      `);

    response.end();
  }
  else { }
}
http.createServer(sam).listen(8080);  //<p>Hello ${name}, your email id ${email} has been registered successfully with your mobile number ${mobile}.</p>`
console.log('Server has Started…….');