var http = require('http');
var querystring = require('querystring');
var qs, name, email;
http.createServer(function (req, res) {
  var d = '';
  req.on('data', function (chunk) {
    console.log(chunk);
    d += chunk;
    console.log("Data in String format: " + d);
  });
  req.on('end', function () {
    console.log("Data: " + d);

    qs = querystring.parse(d);
    console.log(qs);

    name = qs['username'];
    email = qs['email'];
    mobile = qs['mobile'];
    age = qs['age'];
    //res.write("Happy to inform that " + name + ", of age " + age + ", with email id " + email + " has been registered successfully with your mobile number: " + mobile);
    res.write(`<!DOCTYPE html>
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
    res.end();
  });
}).listen(8808);
console.log("Server started running...");

