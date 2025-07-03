function encontrarElementoUnico(arr) {
    const contador = {};
    for (const num of arr) {
        contador[num] = (contador[num] || 0) + 1;
    }
    
    for (const num in contador) {
        if (contador[num] === 1) {
            console.log("O elemento único é:", num);
            return parseInt(num);
        }
    }
}

encontrarElementoUnico([4, 1, 2, 1, 4]); 
encontrarElementoUnico([7, 3, 5, 3, 7]);