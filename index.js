const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000

/*fs.writeFile('document.txt', 'Registro de log', function(err) {
    if (err) throw err
    console.log('O arquivo foi criado com sucesso')  
})*/

fs.appendFile('console.txt', '\nConteudo - Log', function(err){
    if (err) throw err
    console.log('O arquivo foi salvo com sucesso')
})

fs.readFile('console.txt', function(err, data){
    console.log(data.toString())
})

const server = http.createServer( function(req, res) {
//  #res.statusCode = 200
//  #res.setHeader('Content-Type', 'text/plain')
//  #res.end('Hello World pelo JS')
    if(req.url == '/home' || req.url == '/') {
        fs.readFile('./pages/index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        }) 
    } else if (req.url == '/contato') 
        fs.readFile('./pages/contato.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
    }) 
    else {
        return res.end()
    }

    

})

server.listen(port, hostname, function() {
    console.log('Servidor está rodando')
})


