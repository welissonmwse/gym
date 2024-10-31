type Exercicio = {
  nome: string;
  descricao: string;
  videoURL: string[];
};

export type Treinos = {
  'treino 1': Exercicio[];
  'treino 2': Exercicio[];
  'treino 3': Exercicio[];
};

export const treinos: Treinos = {
  'treino 1': [
    { nome: 'Abdominal canivete combinado com prancha', descricao: '3 séries para cada 10 repetições no canivete e 30 segundos na prancha', videoURL: ['m3wYt0_L1mA?si=QidGQtkXraJvuaFV', 'glxWBDz5Efg?si=kRIGHn69ECPnFUQW'] },
    { nome: 'Supino Reto', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['PTXq4-McnuM?si=xHbw3FBAcJJWSl7O'] },
    { nome: 'Crucifixo inclinado', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['6wyaMhgalkQ?si=ehTADK35CViYqqI3'] },
    { nome: 'Desenvolvimento ombros livre ou máquina', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['B7XVbxW7ng4?si=Ub3qf2-DMyGw_BZ5', '_LgFQaEessA?si=_W1Dr9SdUwlWQXou'] },
    { nome: 'Elevação lateral', descricao: '4 séries até a falha', videoURL: ['QTZeC8Uzi3w?si=Qu9VaBd1UAbwst7r'] },
    { nome: 'Tríceps na corda combinado com tríceps na polia', descricao: '3 séries de 10 para cada', videoURL: ['jIKwfyGri30?si=is2TQ0ATjYOU-3uY', 're-ILvqD1RE?si=kDbvfFijnnPw-HSZ'] },
  ],
  'treino 2': [
    { nome: 'Pulley frente', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 - aumente a carga em cada série', videoURL: ['R1TvEBo-eWw?si=GQuKVFB28nA3lR3Z'] },
    { nome: 'Remada sentada triângulo', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['eg9BbzwUiG0?si=Z0CfhLpsO0kMyl-W'] },
    { nome: 'Remada serrote', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['2fdyRNvUuOs?si=lLszoHa88xpF_WwH'] },
    { nome: ' Remada Curvada unilateral na polia', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['n_at3YBkFoI?si=UhmzBT3c7y8F9Tt_'] },
    { nome: 'Rosca direta com halteres combinado com rosca martelo', descricao: '4 séries de 15 a 20 para cada', videoURL: ['NSI2tL8GTQk?si=dSA8GYpB_YYYV1HY', 'mWmQKNEYsp0?si=F09g8uDDkI8BCNyv'] },
  ],
  'treino 3': [
    { nome: 'Abdominal canivete combinado com prancha', descricao: '3 séries para cada 10 repetições no canivete e 30 segundos na prancha', videoURL: ['m3wYt0_L1mA?si=QidGQtkXraJvuaFV', 'glxWBDz5Efg?si=kRIGHn69ECPnFUQW'] },
    { nome: 'Leg Press 45', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['rrcV63jP54k?si=j_2FasYmSstP95jW'] },
    { nome: 'Agachamento sumô', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['-Ec-pqMy5BA?si=0SFDj8OhRPHjKCU4'] },
    { nome: 'Leg Press Horizontal', descricao: '4 séries de 15 a 20 repetições', videoURL: ['JNU6vvYcdL4?si=kC3zhloDSvHYO9AK'] },
    { nome: 'Cadeira extensora', descricao: '4 séries de 15 a 20 repetições', videoURL: ['B6yZD8p5HBk?si=EaaO6WwDPDl3RXa-'] },
    { nome: 'Cadeira flexora', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['myM-BqUkf58?si=zhZ0Wh2xMP0RHLcq'] },
    { nome: 'Cadeira abdutora', descricao: '4 séries de 15', videoURL: ['Hu-1DuJxdCc?si=YB7O_3mTBIZO0eCt'] },
    { nome: 'Cadeira adutora', descricao: '4 séries de 15', videoURL: ['keFloePM4e0?si=8Ry8We04wt__KNHX'] },
    { nome: 'Panturrilha no leg press horizontal ou 45', descricao: '1 série de 15, 1 série de 10 e 1 série de 8 aumente a carga em cada série', videoURL: ['J0_eOTnvZms?si=JfYTZsejb0inIbxx'] },
  ],
}

