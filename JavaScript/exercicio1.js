const a = parseFloat(prompt("Digite o coeficiente a:"));
const b = parseFloat(prompt("Digite o coeficiente b:"));
const c = parseFloat(prompt("Digite o coeficiente c:"));

const delta = b * b - 4 * a * c;

if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`A equação possui duas raízes reais e distintas:`);
    console.log(`x1 = ${x1.toFixed(2)}`);
    console.log(`x2 = ${x2.toFixed(2)}`);
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`A equação possui uma raiz real (raiz dupla):`);
    console.log(`x = ${x.toFixed(2)}`);
} else {
    console.log("A equação não possui raízes reais.");
}