import path from "path";
import mkcert from "vite-plugin-mkcert";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  // Define o diretório raiz do projeto
  root: path.resolve(__dirname, "src"),
  // Define as configurações de build do projeto
  build: {
    // Indica se o diretório de saída deve ser esvaziado antes de realizar o build
    emptyOutDir: true,
    // Define o diretório de saída do build
    outDir: path.resolve(__dirname, "dist/apps-script"),
    // Define as opções de otimização de dependências
    optimizeDeps: {
      include: ["src/main.jsx"],

      input: path.resolve(__dirname, "src/main.jsx"),
    },
    // Define as opções do rollup para o build
    rollupOptions: {
      // Define o arquivo de entrada do build
      input: path.resolve(__dirname, "src/main.jsx"),
      // Adiciona a opção --mode=development para desativar otimizações e habilitar o modo de desenvolvimento
      mode: "development",
      // Adiciona a opção --fresh para desativar o cache e forçar o Vite a recriar todo o projeto a partir do zero
      fresh: true,
      // Adiciona a opção --no-sourcemap para desativar a geração de mapas de código-fonte
      sourcemap: false,
    },
  },
  // Define as configurações de resolução de caminhos e alias
  resolve: {
    alias: {
      // Define um alias para o diretório raiz do projeto
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  // Define as configurações do servidor  de desenvolvimento
  server: {
    // Habilita o uso de HTTPS
    https: true,
  },
  // Define a lista de plugins utilizados pelo projeto
  plugins: [
    // Utiliza o plugin react para ler arquivos .jsx
    [react()],
    // Utiliza o plugin mkcert para gerar certificados SSL
    mkcert(),
    // Utiliza o plugin copy para copiar arquivos para o diretório de saída do build
    copy({
      targets: [
        { src: "src/*", dest: "dist/apps-script" },
        {
          src: "./.env",
          dest: "dist/apps-script",
        },
      ],
    }),
  ],
  // Define as configurações de teste do projeto
  test: {
    // Define o ambiente de teste como jsdom
    environment: "jsdom",
  },
});
