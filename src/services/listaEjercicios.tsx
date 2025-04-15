import { useEffect, useState } from "react";

interface Ejercicio {
  id: number;
  name: string;
  description: string;
  category: number;
  muscles: number[];
  muscles_secondary: number[];
  equipment: number[];
}

interface Opcion {
  id: number;
  name: string;
}

interface Musculo {
    id: number;
    name: string;
    is_front: boolean;
  }
  

function ListaDeEjercicios() {
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);
  const [categorias, setCategorias] = useState<Opcion[]>([]);
  const [musculos, setMusculos] = useState<Opcion[]>([]);
  const [equipos, setEquipos] = useState<Opcion[]>([]);

  // Cargar ejercicios
  useEffect(() => {
    fetch("https://wger.de/api/v2/exercise/?language=4&limit=10")
      .then((res) => res.json())
      .then((data) => setEjercicios(data.results));
  }, []);

  // Cargar categorías
  useEffect(() => {
    fetch("https://wger.de/api/v2/exercisecategory/")
      .then((res) => res.json())
      .then((data) => setCategorias(data.results));
  }, []);

  // Cargar músculos (solo los del cuerpo, no los internos)
  useEffect(() => {
    fetch("https://wger.de/api/v2/muscle/")
      .then((res) => res.json())
    .then((data) =>
  setMusculos(data.results.filter((m: Musculo) => m.is_front))
);

  }, []);

  // Cargar equipamiento
  useEffect(() => {
    fetch("https://wger.de/api/v2/equipment/")
      .then((res) => res.json())
      .then((data) => setEquipos(data.results));
  }, []);

  // Helpers para traducir IDs
  const getNombre = (lista: Opcion[], id: number) =>
    lista.find((item) => item.id === id)?.name || "Desconocido";

  const getNombres = (lista: Opcion[], ids: number[]) =>
    ids.map((id) => getNombre(lista, id)).join(", ");

  return (
    <div>
      <h2>Lista de ejercicios</h2>
      <ul>
        {ejercicios.map((ej) => (
          <li key={ej.id} style={{ marginBottom: "2rem" }}>
            <strong>{ej.name}</strong>
            <p><b>Categoría:</b> {getNombre(categorias, ej.category)}</p>
            <p><b>Músculos:</b> {getNombres(musculos, ej.muscles)}</p>
            <p><b>Secundarios:</b> {getNombres(musculos, ej.muscles_secondary)}</p>
            <p><b>Equipamiento:</b> {getNombres(equipos, ej.equipment)}</p>
            <div dangerouslySetInnerHTML={{ __html: ej.description }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeEjercicios;
