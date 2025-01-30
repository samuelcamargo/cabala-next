// Matriz dos orixás
const orixas: { [key: number]: string } = {
  1: "Exu", 2: "Ibeji", 3: "Ogum", 4: "Omolu", 5: "Oxum", 
  6: "Obará", 7: "Obaluaê", 8: "Ejionilê", 9: "Iemanjá", 10: "Oxalufã",
  11: "Owonrin", 12: "Xangô", 13: "Nanã", 14: "Oxumarê", 15: "Obá", 16: "Oxalá"
};

function recalc16(valor: number): number {
  return String(valor).split('').reduce((a, b) => Number(a) + Number(b), 0);
}

export function calcularCabala(numeros: string[]) {
  const [n1, n2, n3, n4, n5, n6, n7, n8] = numeros.map(Number);
  
  // Cálculo inicial
  let soma1 = n1 + n3 + n5 + n7;
  let soma2 = n2 + n4 + n6 + n8;
  
  if (soma1 > 16) soma1 = recalc16(soma1);
  if (soma2 > 16) soma2 = recalc16(soma2);
  
  // Cálculo do coração
  let somaCoracao = soma1 + soma2;
  if (somaCoracao > 16) somaCoracao = recalc16(somaCoracao);
  
  // Cálculo racional
  let somaRacional = soma1 + soma2 + somaCoracao;
  if (somaRacional > 16) somaRacional = recalc16(somaRacional);
  
  // Cálculo destino
  let somaDestino = soma1 + soma2 + somaCoracao + somaRacional;
  if (somaDestino > 16) somaDestino = recalc16(somaDestino);
  
  // Cálculo fé
  let somaFe = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8;
  if (somaFe > 16) somaFe = recalc16(somaFe);
  
  return {
    dinheiro: { numero: soma1, orixa: orixas[soma1] },
    pessoas: { numero: soma2, orixa: orixas[soma2] },
    coracao: { numero: somaCoracao, orixa: orixas[somaCoracao] },
    racional: { numero: somaRacional, orixa: orixas[somaRacional] },
    destino: { numero: somaDestino, orixa: orixas[somaDestino] },
    fe: { numero: somaFe, orixa: orixas[somaFe] }
  };
}

export function calculateCabala(day: string, month: string, year: string) {
  // Garante que day e month tenham sempre 2 dígitos
  const dayPadded = day.padStart(2, '0');
  const monthPadded = month.padStart(2, '0');
  
  // Converte a data em números individuais, mantendo os zeros
  const numbers = [
    parseInt(dayPadded[0]),
    parseInt(dayPadded[1]),
    parseInt(monthPadded[0]),
    parseInt(monthPadded[1]),
    ...year.split('').map(Number)
  ];
  
  // Preenche o array até ter 8 números
  while (numbers.length < 8) {
    numbers.push(0);
  }

  // Cria o array de números para o cálculo da cabala
  const numerosArray = numbers.slice(0, 8);
  
  // Calcula os resultados dos orixás
  const resultadosOrixa = calcularCabala(numerosArray.map(String));
  
  // Retorna tanto os números quanto os resultados
  return {
    numbers: {
      number1: numbers[0],
      number2: numbers[1],
      number3: numbers[2],
      number4: numbers[3],
      number5: numbers[4],
      number6: numbers[5],
      number7: numbers[6],
      number8: numbers[7],
    },
    ...resultadosOrixa
  };
} 