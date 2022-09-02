const baseUrl = '/api/v1/'

export const fetchStandardKanjiList = async () => {
    const url = `${baseUrl}/joyo`;
    const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}
