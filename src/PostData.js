import { v4 as uuid } from 'uuid'


export const PostData = [
  {
    id: uuid(),
    author: {
      name: 'Joubert Natividade',
      avatarUrl: "https://github.com/JoubertNatividade.png",
      role: 'Developer Full Stack',
    },
    content: [
      'Parabéns, fico feliz por você 01 .',
      'Parabéns, fico feliz por você 02.',
      'Parabéns, fico feliz por você 03.'
    ],
    publishedAt: new Date()
  }
]