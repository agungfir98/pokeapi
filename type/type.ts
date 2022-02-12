export type stat = {
  stat: {
    name: string;
    id: number;
  };
  base_stat: number;
};

export type move = {
  move: {
    name: string;
    id: number;
  };
};

export type pokemons = {
  name: string;
  id: number;
  image: string;
  dreamworld: string;
};

export type tipe = {
  type: {
    name: string;
    id: number;
  };
};

export type tangkap = {
  nama: string;
  img: string;
  tipe: [string];
};

export type myPoke = {
  nama: string;
  img: string;
  tipe: [string];
  nickname: string;
};
