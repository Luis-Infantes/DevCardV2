



export async function getDevCard() {

    const res = await fetch("http://localhost:7071/api/devcard");

    if (!res.ok) return console.error("Error al cargar DevCard");

    const data = await res.json();
    // Si data es un array, devolvemos el primer elemento
    return Array.isArray(data) ? data[0] : data;
}