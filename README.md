# 📱 Minha Saúde Hoje

**Minha Saúde Hoje** é um aplicativo em React Native desenvolvido com Expo, que simula o monitoramento do bem-estar pessoal através de uma interface intuitiva, responsiva e inspirada em apps reais de saúde.

---

## 🧩 Funcionalidades

- 🧍‍♂️ Exibe quantidade de **passos dados** no dia
- 😴 Mostra as **horas de sono** registradas
- 💧 Indica o nível de **hidratação** (em litros)
- ❤️ Apresenta a **frequência cardíaca média**
- 📊 Gráficos de barras para acompanhamento diário:
  - Horas de sono
  - Hidratação
  - Frequência cardíaca
- 🔗 Botão "Ver mais informações" com link externo

---

## 💻 Tecnologias Utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- `react-native-chart-kit` para gráficos
- `react-native-svg`
- Hooks `useState` e `useEffect` para estado e carregamento de dados

---

## 📁 Estrutura de Pastas
    MinhaSaudeHoje/
    ├── assets/ # Recursos gráficos (logo, etc.)
    ├── components/ # Componentes reutilizáveis (Header, InfoCard, BarChartCard)
    ├── screens/ # Telas principais (Dashboard)
    └── App.tsx # Ponto de entrada do app

---

## 📦 Instalação

1. Clone o repositório:

```bash
    git clone https://github.com/seu-usuario/minha-saude-hoje.git
    cd minha-saude-hoje
    
    npm install

    npx expo start
    
```

## 📌 Observações

    Os dados exibidos são simulados via useState e carregados com useEffect.

    Compatível com mobile (iOS/Android) e web (Expo Web).

    O estilo é responsivo e adaptado ao modo escuro.

## 🧑‍💻 Autor

Desenvolvido por Caique Moura 👨‍💻