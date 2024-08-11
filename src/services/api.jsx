export const fetchPilotos = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./pilotos.json');
    const data = await response.json();
    console.log(data)
    return data;
  };
  