// importar dependenca express (/biblioteca/pacote/plugin)
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express(biblioteca)
const server = express();
server
	//utilisar body do req
	.use(express.urlencoded({ exteded: true }))

	//utilizando arquivos estáticos
	.use(express.static('public'))

	//configurar os arquivos estáticos
	.set('views',path.join(__dirname,"views"))
	.set('view engine', 'hbs')

	//criar rotas da aplicação
	.get('/', pages.index)
	.get('/orphanage', pages.orphanage)
	.get('/orphanages', pages.orphanages)
	.get('/create-orphanage', pages.createOrphanage)
	.post('/save-orphanage', pages.saveOrphanage)

// ligar servidor
server.listen(5500);