# Calo: contexto para o Claude Code

App Expo (React Native + TypeScript + expo-router) de aulas de violão popular, com modo aluno e modo professor. Sem backend: o progresso fica no aparelho (AsyncStorage).

## Comandos

- `npx expo start`: abre no Expo Go
- `npm run typecheck`, `npm run lint`, `npm run lint:typed`, `npm run conferir`: rode os quatro antes de dar uma tarefa como pronta
- `npx expo export --platform android --platform ios`: confere se o bundle compila

## Onde mexer

- Conteúdo das aulas: `src/content/aulas/aNN.ts` (um arquivo por aula, tipo `Aula` em `src/content/tipos.ts`). Nova aula = novo arquivo + entrada em `src/content/aulas/index.ts`.
- Acordes: `src/content/acordes.ts`. Ordem das cordas em `casas` e `dedos`: 6, 5, 4, 3, 2, 1. Toda casa apertada precisa de dedo.
- Batidas e dedilhados: `src/content/ritmos.ts`. 8 golpes por compasso (1 e 2 e 3 e 4 e).
- Cores e fontes: `src/theme.ts`. Paleta de madeira e papel, títulos em Bitter, texto em Source Sans 3.

## Regras do projeto

- Quality gates do vibe-coding-toolkit (`eslint-rules/*.cjs` são cópia byte a byte; não edite):
  - no máximo 350 linhas por arquivo; se estourar, divida por responsabilidade real, nunca por contagem
  - nada de `console.*` fora de `src/lib/log.ts`
  - telas (`src/app`) e componentes não importam o AsyncStorage; use `src/store/progresso.tsx`
- Burndown de warnings: correção mecânica pode ser feita direto; mudança de arquitetura, pergunte antes.
- Visual sem cara de IA (taste-skill): nada de roxo, gradiente, emoji no lugar de ícone, glassmorphism ou animação em toda tela. Um estilo de botão, um de card, raio 8.
- Textos em português do Brasil, diretos, sem travessão longo, sem exclamação, sem palavras de marketing ("desbloqueie", "jornada", "domine"). Botão = verbo + objeto.
- Violão popular: sem partitura. Acordes em diagrama, solos em tablatura.

## Próximos passos possíveis

- Build de teste com EAS (`eas build -p android --profile preview`)
- Áudio de exemplo de cada batida
- Vincular professor e aluno (exige backend; Supabase é uma opção)
- Afinador pelo microfone
