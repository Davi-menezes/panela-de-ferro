export const RESTAURANT = {
  name: 'Restaurante Panela De Ferro',
  tagline: 'Sabor que aquece a alma',
  description:
    'Desde 2000 em Pantano Grande, o Restaurante Panela De Ferro serve a culinária gaúcha com ingredientes frescos e receitas que passam de mão em mão. Um lugar onde cada prato conta uma história.',
  address: 'R. Olinto Pereira da Rosa, 619, Pantano Grande - RS',
  phone: '+55 51 98070-7772',
  whatsapp: 'https://wa.me/5551980707772',
  instagram: 'https://instagram.com/restpaneladeferro2000?igshid=MzRlODBiNWFlZA==',
  maps: 'https://www.google.com/maps/search/?api=1&query=Restaurante%20Panela%20De%20Ferro&query_place_id=ChIJGdsWM8g_G5URWz4_3xv5fTQ',
  horarios: [
    { dias: 'Segunda — Sexta', horas: '11h às 14h · 18h às 22h' },
    { dias: 'Sábado e Domingo', horas: '11h às 22h (ininterrupto)' },
  ],
}

export interface Prato {
  nome: string
  descricao: string
  preco: string
  imageUrl: string
}

export interface Categoria {
  titulo: string
  pratos: Prato[]
}

export const CARDAPIO: Categoria[] = [
  {
    titulo: 'Entradas',
    pratos: [
      {
        nome: 'Bolinho de Bacalhau',
        descricao: 'Crocante por fora, cremoso por dentro. Feito com bacalhau desfiado e temperos da casa.',
        preco: 'R$ 38,90',
        imageUrl: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=600&q=80',
      },
      {
        nome: 'Salada da Roça',
        descricao: 'Mix de folhas frescas, tomate cereja, queijo colonial fatiado e vinagrete artesanal.',
        preco: 'R$ 29,90',
        imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
      },
      {
        nome: 'Caldo de Mocotó',
        descricao: 'Caldo encorpado e temperado, servido bem quente com pão de alho artesanal.',
        preco: 'R$ 24,90',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
      },
    ],
  },
  {
    titulo: 'Pratos Principais',
    pratos: [
      {
        nome: 'Costelão na Brasa',
        descricao: 'Costela bovina assada lentamente por 12h, desmanchando no garfo. Acompanha arroz, feijão e mandioca frita.',
        preco: 'R$ 89,90',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
      },
      {
        nome: 'Arroz de Carreteiro',
        descricao: 'Prato símbolo do Rio Grande do Sul. Carne seca desfiada, arroz soltinho e temperos da roça.',
        preco: 'R$ 62,90',
        imageUrl: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&q=80',
      },
      {
        nome: 'Galinhada Caipira',
        descricao: 'Galinha caipira cozida com açafrão, pimentões coloridos e arroz temperado ao estilo da casa.',
        preco: 'R$ 58,90',
        imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80',
      },
      {
        nome: 'Frango ao Molho Ferreiro',
        descricao: 'Meio frango grelhado ao molho especial da casa com ervas frescas, batata rústica e salada.',
        preco: 'R$ 54,90',
        imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
      },
    ],
  },
  {
    titulo: 'Sobremesas',
    pratos: [
      {
        nome: 'Pudim de Leite da Vó',
        descricao: 'Receita original da família, com caramelo artesanal e textura aveludada que derrete na boca.',
        preco: 'R$ 22,90',
        imageUrl: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?w=600&q=80',
      },
      {
        nome: 'Arroz Doce Cremoso',
        descricao: 'Arroz cozido no leite com canela e baunilha, servido quentinho ou gelado, à escolha.',
        preco: 'R$ 18,90',
        imageUrl: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=600&q=80',
      },
      {
        nome: 'Cuca de Banana Colonial',
        descricao: 'Cuca artesanal assada no dia, com cobertura crocante de canela e banana nanica madura.',
        preco: 'R$ 19,90',
        imageUrl: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&q=80',
      },
    ],
  },
]
