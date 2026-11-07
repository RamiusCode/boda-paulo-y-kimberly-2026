// pases.ts
// Frases que dependen de la cantidad de pases: se arman solo acá.
export const palabraPases = (n: number) => (n === 1 ? "pase" : "pases");

export const textoEnSuHonor = (n: number) => `${palabraPases(n)} en su honor`;

// "Tienes 1 pase reservado." / "Tienes 3 pases reservados."
// Se devuelve en partes para poder resaltar el número.
export const frasePasesReservados = (n: number) => ({
    antes: "Tienes",
    numero: n,
    despues: `${palabraPases(n)} ${n === 1 ? "reservado" : "reservados"}.`,
});

// "1 persona" / "3 personas"
export const textoPersonas = (n: number) => `${n} ${n === 1 ? "persona" : "personas"}`;
