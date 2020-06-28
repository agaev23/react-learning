class HttpService {

    static URL = 'http://localhost:4000/notes'

    static getNotes = async () => {
		const response = await fetch(this.URL);
		const data = await response.json();
        const list = data.filter(note => !note.isArchived);

		return list;
	}

	static deleteItem = async (id) => {
		const response = await fetch(`${this.URL}/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});

		return await response.json();
	}

	static toArchive = async (note) => {
		const data = {
			...note,
			isArchived: !note.isArchived,
		};

		const response = await fetch(`${this.URL}/${note.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		});

		return await response.json();
	}

	static setAsDone = async (note) => {
		const data = {
			...note,
			isDone: !note.isDone,
		};

		const response = await fetch(`${this.URL}/${note.id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		});

		return await response.json();
	}

	static editNote = async (id, data) => {
        const response = await fetch(`${this.URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
		});

        return await response.json();
	}

	static getNote = async (id) => {
		const response = await fetch(`${this.URL}/${id}`);
		const data = await response.json();

		return data;
	}

	static createNote = async (data) => {
		const response = await fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
		});

        return await response.json();
	}
}

export default HttpService;