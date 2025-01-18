export const gradients = [
  {
    // Azul Pastel
    start: '#E3F2FD',
    middle: '#90CAF9',
    end: '#42A5F5'
  },
  {
    // Rosa Pastel
    start: '#FCE4EC',
    middle: '#F8BBD0',
    end: '#F48FB1'
  },
  {
    // Verde Pastel
    start: '#E8F5E9',
    middle: '#A5D6A7',
    end: '#66BB6A'
  },
  {
    // Lavanda Pastel
    start: '#F3E5F5',
    middle: '#CE93D8',
    end: '#AB47BC'
  },
  {
    // Pêssego Pastel
    start: '#FFF3E0',
    middle: '#FFCC80',
    end: '#FFA726'
  }
];

export const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
}; 