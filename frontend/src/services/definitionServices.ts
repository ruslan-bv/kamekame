const baseUrl = 'http://localhost:8080/api/v1'

export const fetchWordDefinition = async (word: string) => {
    const url = `${baseUrl}/jisho`;
    const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}
