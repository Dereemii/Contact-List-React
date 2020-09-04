const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Datos que se van a guardar en mi store
			agendas: [],
			fullName: "",
			email: "",
			phone: "",
			address: "",
			id: ""
		},
		actions: {
			getAgendas: async url => {
				const response = await fetch(url);
				const data = await response.json();
				//	console.log(data); --> Permite revisar respuesta
				setStore({
					agendas: data
				});
				// console.log(data[0].full_name); --> Me trae el nombre de la agenda en ciclo
			},
			getUpdate: contacto => {
				//console.log(contacto.id);
				const store = getStore();
				console.log(contacto);
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/" + contacto, {
					method: "PUT",
					body: JSON.stringify({
						full_name: store.fullName,
						email: store.email,
						agenda_slug: "perrosAgenda",
						address: store.address,
						phone: store.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			getDelete: id => {
				const store = getStore();
				console.log(id);
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			getContactos: datos => {
				setStore({
					fullName: datos.full_name,
					email: datos.email,
					phone: datos.phone,
					address: datos.address
				});
			},

			getName: newdata => {
				const data = newdata;
				// console.log(data);
				setStore({
					fullName: data
				});
			},
			getEmail: newdata => {
				const data = newdata;
				setStore({
					email: newdata
				});
			},
			getPhone: newdata => {
				const data = newdata;
				setStore({
					phone: newdata
				});
			},
			getAddress: newdata => {
				const data = newdata;
				setStore({
					address: newdata
				});
			},
			getId: newdata => {
				const data = newdata;
				setStore({
					id: newdata
				});
			},
			getNewContact: () => {
				const store = getStore();
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: store.fullName,
						email: store.email,
						agenda_slug: "perrosAgenda",
						address: store.address,
						phone: store.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
