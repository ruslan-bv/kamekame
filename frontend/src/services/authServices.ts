const baseUrl = 'http://localhost:8080/api/v1';

export const signup = async (user: any) => {
    const url = `${baseUrl}/signup`;
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    return response.json();
}

export const signin = async (user: any) => {
    const url =`${baseUrl}/signin`;
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    return response.json();
}