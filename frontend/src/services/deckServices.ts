const baseUrl = 'http://localhost:8080/api/v1'

export const fetchUserDecks = async (user: object) => {
    const url = `${baseUrl}/getall`;
    const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response.json();
}
