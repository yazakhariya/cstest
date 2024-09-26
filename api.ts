const baseURL = "http://localhost:3002";

export async function getItems() {
    const response = await fetch(`${baseURL}/items`);
    const data = await response.json();
    return data;
}