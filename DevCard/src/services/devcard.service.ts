



export async function getDevCard() {

    const res = await fetch("https://devcardfuntions2026-hqasc0gcbkbxdnf8.swedencentral-01.azurewebsites.net/api/devcard");

    if (!res.ok) return console.error("Error al cargar DevCard");

    const data = await res.json();
    // Si data es un array, devolvemos el primer elemento
    return Array.isArray(data) ? data[0] : data;
}