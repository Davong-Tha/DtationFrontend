const API_URL = "http://localhost:3000";

export async function registerUser({ name, email, password }) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
        const errorBody = await res.json().catch(() => { });
        throw new Error(errorBody.error || "Failed to register");
    }
    return res.json();
}

export async function loginUser({ email, password }) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if(!res.ok){
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.error || 'Failed to login')
    }
    return res.json();
}
