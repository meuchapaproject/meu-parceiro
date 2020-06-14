import mapa01 from '../../assets/mapa01.png';
import mapa02 from '../../assets/mapa02.png';
import mapa03 from '../../assets/mapa03.png';

export default {
  1: {
    map: mapa01,
    pedagio: 'R$ 308,00',
    tempo: '13 horas e 20 minutos',
    distancia: '1135',
    estabelecimentos: '236',
    sugestions: [
      {
        name: 'Posto Alexandria',
        address: 'Rodovia Presidente Dutra, km 145 São José dos Campos - SP',
        km: 3,
        promoted: true,
        rating: {
          gas: 3.4, shower: 4.4, food: 4.8, workshop: 2, sleep: 1.4,
        },
      }, {
        name: 'Auto Posto Emcubencia',
        address: 'Rodovia Presidente Dutra, km 145 São José dos Campos - SP',
        km: 5.6,
        rating: {
          gas: 4.8, shower: 4.4, food: 4.8, workshop: 2, sleep: 5,
        },
      },
    ],
  },
  2: {
    map: mapa02,
    pedagio: 'R$ 376,00',
    tempo: '14 horas e 54 minutos',
    distancia: '1163',
    estabelecimentos: '272',
    sugestions: [
      {
        name: 'Posto Memorial',
        address: 'Rodovia Presidente Dutra, km 145 São José dos Campos - SP',
        km: 8.6,
        rating: {
          gas: 4.9, shower: 3.4, food: 4.8, workshop: 4.9, sleep: 4.8,
        },
      }, {
        name: 'Auto Posto Galinus',
        address: 'Rodovia Presidente Dutra, km 145 São José dos Campos - SP',
        km: 12.3,
        rating: {
          gas: 4.9, shower: 4.4, food: 3.3, workshop: 2.9, sleep: 1.8,
        },
      }, {
        name: 'Posto Marinas',
        address: 'Rodovia Presidente Dutra, km 145 São José dos Campos - SP',
        km: 15,
        rating: {
          gas: 4.9, shower: 4.4, food: 1.3, workshop: 4.1, sleep: 3.8,
        },
      },
    ],
  },
  3: {
    map: mapa03,
    pedagio: 'R$ 242,90',
    tempo: '15 horas 41 minutos',
    distancia: '1247',
    estabelecimentos: '298',
    sugestions: [
      {
        name: 'Posto Alexandria',
        address: 'Rodovia Presidente Dutra, km 145 São José dos Campos - SP',
        km: 3,
        promoted: true,
        rating: {
          gas: 3.4, shower: 4.4, food: 4.8, workshop: 2, sleep: 1.4,
        },
      },
    ],
  },
};
