const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function CreateProject({ name, token }){
  const res = await fetch(`${API_URL}/project/create`,{
             method: "POST",
    headers: {"content-type": "application/json",
              "Authorization": `Bearer ${token}`},
    body: JSON.stringify({name})
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => { });
    throw new Error(errorBody.error || "Failed to create project");
  }
  return res.json();
}