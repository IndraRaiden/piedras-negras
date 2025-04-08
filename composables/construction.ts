export const useConstruction = () => {
  // Construction mode is now disabled
  return useState('mostrarEnConstruccion', () => false);
};
