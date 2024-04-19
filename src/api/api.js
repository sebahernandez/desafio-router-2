export const fetchMortyData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/character`
    );
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud a la API:", error);
    throw error;
  }
};
