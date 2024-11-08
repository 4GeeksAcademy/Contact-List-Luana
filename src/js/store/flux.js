const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		contacts:[]	
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			createAgenda: async () => {
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/Luana", {
						method:"POST", 
						headers:{"Content-Type":"application/json"}
					})
					if(response.status == 201){
						await getActions().getContacts()
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},
			
			getContacts: async () => {
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/Luana", {
						method:"GET", 
						headers:{"Content-Type":"application/json"}
					})
					if(response.status == 404){
						await getActions().createAgenda()
						return 
					}
					const data = await response.json()
					console.log(data.contacts)
					setStore({contacts:data.contacts})
					return true 
				} catch (error) {
					console.log(error)
					return false
				}
			},

			createContact: async (newContact) => {
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/Luana/contacts", {
						method:"POST", 
						headers:{"Content-Type":"application/json"}, 
						body: JSON.stringify(newContact)

					})
					if(response.status == 201){
						await getActions().getContacts()
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},
			
		}
	};
};

export default getState;
