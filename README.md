# Typescript

## Passos de como ativar o typescript no projeto

-- Para baixar a lib do ts digite yarn/npm typescript -D
-- A extensão do Typescript é .ts
-- Caso uma lib não reconheça o .ts por padrão baixe de novo usando o -D @types/libName
-- Pode baixar o typescript e libs com o @types apenas em desenvolvimento pois não é necessário utiliza-los em produção
-- Para criar o arquivo configuravel do ts use tsc --init
-- Para criar uma build .ts para .js use tsc
-- Para mudar o local do arquivo gerado pelo typescript descomente "outDir" e coloque o caminho desejado
-- Para inicar o app use node dist/index.js

## Tipagem

-- Uma boa maneira de saber quando tipar algo é quando o intellisense do VSC define o tipo como "any"
-- Bibliotecas possuem a propria tipagem, é possivel ver quando for fazer a importação
-- O uso da interface serve quando necessario tipar um conjunto de informações, tipo arrays ou objetos
-- ? na interface é quando o parâmetro não é obrigatório
-- É possivel criar também interfaces para array utilizando :Array<tipoUtilizado>
-- Para usar um array com mais de um tipo crie uma interface nova com as propriedades a serem utilizadas