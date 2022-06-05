const BOOKS_REST_API = 'http://localhost:8080/readbooks';
class APIService {    
    getBooks(){
        return fetch(BOOKS_REST_API,{ 
            method: 'GET',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());
    }
	
	getBook(id){
        return fetch(`http://localhost:8080/readbooks/${id}`,{ 
            method: 'GET',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());
    }
	
	searchBook(name){
        return fetch("http://localhost:8080/searchbook",{ 
            method: 'POST',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin',
				body: JSON.stringify({
					name: name
				  }),
        })
        .then(res => res.json());
    }
	
	deleteBook(name){
        return fetch("http://localhost:8080/deletebook",{ 
            method: 'DELETE',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin',
				body: JSON.stringify({
					name: name
				  }),
        })
        .then(res => res.json());
    }
	
	addBook(name, rating){
        return fetch("http://localhost:8080/createbook",{ 
            method: 'POST',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin',
				body: JSON.stringify({
					name: name,
					rating: rating
				  }),
        })
        .then(res => res.json());
    }
	
	updateBook(name, rating){
        return fetch("http://localhost:8080/updatebook",{ 
            method: 'PUT',
			
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin',
				body: JSON.stringify({
					name: name,
					rating: rating
				  }),
        })
        .then(res => res.json());
    }

}

export default new APIService();