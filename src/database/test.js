const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
	//inserir dados na tabela
	// await saveOrphanage(db, {
	// 	lat: "-27.234633",
	// 	lng: "-49.6345874",
	// 	name: "Lar dos Meninos",
	// 	about:
	// 		"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
	// 	whatsapp: "988001122",
	// 	images: [
	// 		"https://www.educacao.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2020-03/09012020-c.e._vinicius_de_morais-09-01-20_13.jpg",
			
	// 		"https://emc-src.eptv.com.br/dbimagens/escola_ulysses_790x444_24012020194513.jpg",

	// 		"https://cdn.wizard.com.br/wp-content/uploads/2020/01/17075301/formas-de-_incentivar-as_crian%C3%A7as-a_pensarem-em_ingl%C3%AAs1.jpg",

	// 		"https://www.altoastral.com.br/wp-content/uploads/2017/01/meninas-escola.jpg",

	// 		"https://2.bp.blogspot.com/-35do3Fnx2Tc/Tn14jb3pQXI/AAAAAAAAfJ0/giFb7UZm9sY/s1600/1%2Ba%2Ba%2Ba%2Ba%2Bacol%2Bcolegio%2Bsb.jpg",

	// 		"https://nova-escola-producao.s3.amazonaws.com/CNTSAay7tZTCDqaGnh8KpXFcFER7e49FZBrNqbbb6p4RJcdmY3Pzt8YuNATR/meninos-na-biblioteca-da-escola-foto-valter-campanato-agencia-brasil.jpg"

	// 	].toString(),
	// 	instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
	// 	opening_hours: "Horário de visitas das 9h até as 14h.",
	// 	open_on_weekends: "1",
	// });

	//   //consultar dados da tabela
	const selectedOrphanages = await db.all("SELECT * FROM orphanages")
	console.log(selectedOrphanages)

	//consultar somente um orfanato pelo id
	// const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "8"')
	// console.log(orphanage)

	//deletar dado da tabela
});
