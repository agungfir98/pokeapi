export const Tema = (tipe: string): string => {
  switch (tipe) {
    case "normal":
      return "bg-gradient-to-r from-gray-500 to-gray-500 text-white";
      break;
    case "fighting":
    case "dragon":
      return "bg-gradient-to-r from-red-500 to-yellow-500 text-white";
      break;
    case "poison":
    case "psychic":
      return "poison bg-gradient-to-r from-violet-900 to-violet-500 text-white";
      break;
    case "ground":
    case "rock":
      return "bg-gradient-to-r from-yellow-900 to-orange-900 text-white";
      break;
    case "ghost":
    case "dark":
    case "shadow":
      return "bg-gradient-to-r from-gray-700 to-gray-800 text-white";
      break;
    case "steel":
      return "bg-gradient-to-r from-gray-800 to-yellow-900 text-white";
      break;
    case "fire":
      return "bg-gradient-to-u from-red-500 to-red-300";
      break;
    case "flying":
    case "water":
    case "ice":
      return "bg-gradient-to-r from-cyan-500 to-blue-500 text-white";
      break;
    case "grass":
    case "bug":
      return "bg-gradient-to-r from-green-700 to-green-500 text-white";
      break;
    case "electric":
      return "bg-gradient-to-r from-yellow-600 to-yellow-400 text-white";
      break;
    case "fairy":
      return "bg-gradient-to-r from-cyan-500 to-blue-500";
      break;
    case "unknown":
      return "bg-gradient-to-r from-cyan-500 to-blue-500";
      break;
    default:
      return "bg-yellow-900 -text-white";
  }
};
