//create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 14);

//create tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//create icon
const icon = L.icon({
	iconUrl: "/images/map-marker.svg",
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

// create add marker
let marker = "";
map.on("click", (event) => {
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector("[name=lat]").value = lat;
	document.querySelector("[name=lng]").value = lng;

	// remove marker
	marker && map.removeLayer(marker);

	marker = L.marker([lat, lng], { icon }).addTo(map);
});


// adiconar campo de fotos
function addPhotoField() {
	//selecionar o container de fotos #images.
	const container = document.querySelector("#images");

	// selecionar o container para duplicar  .new-image
	const fieldsContainer = document.querySelectorAll(".new-upload");

	//realizar o clone da ultima imagem adicionada
	const newFieldContainer = fieldsContainer[
	fieldsContainer.length - 1
	].cloneNode(true);

	// limpar campo
	if (newFieldContainer.children[0].value == "") {
	return;
	}
	newFieldContainer.children[0].value = "";

	//adicionar o clone ao container de #images
	container.appendChild(newFieldContainer);
}

//remover campo
function removePhotoField(event) {
	//identificar o campo a ser removido pelo botão acionado
	const span = event.currentTarget;

	//verificar se a apenas um campo, se sim não exclui
	container = document.querySelector("#images");

	if (container.children.length <= 1) {
		span.parentNode.children[0].value = "";
		return;
	}

	//remover campo
	span.parentNode.remove();
}

	//selecionar sim e não

	function toggleSelect(event) {
		//remover classe 'active' dos botões sim e não
		document.querySelectorAll(".button-select  button").forEach((button) => {
			button.classList.remove("active");
		});

		//adicionar a classe do 'active' ao botão acionado
		event.currentTarget.classList.add("active");

		//atualizar o input hidden com o valor selecionado
		const input = document.querySelector('[name="open_on_weekends"]');
		input.value = event.currentTarget.dataset.value;
	}

	function validate(event){
		const lat = document.querySelector("[name=lat]").value 
		const lng = document.querySelector("[name=lng]").value 
	
		if(lat == '' || lng == ''){
			event.preventDefault()
			alert('Selecione uma localizaçâo no mapa.')
	} 
	 
	
}