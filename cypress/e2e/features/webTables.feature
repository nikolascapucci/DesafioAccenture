#language: pt
Funcionalidade: Gerenciamento de Registros em Web Tables

  Cenário: Deve realizar o ciclo completo de CRUD em um registro
    Dado que eu estou na página "Web Tables" em "Elements"
    Quando eu crio um novo registro com dados únicos
    Então eu valido que o novo registro foi adicionado à tabela
    Quando eu edito o registro recém-criado
    Então eu valido que as informações do registro foram atualizadas
    Quando eu deleto o registro
    Então eu valido que o registro não existe mais na tabela

Esquema do Cenário: Deve criar múltiplos registros de forma dinâmica
    Dado que eu estou na página "Web Tables" em "Elements"
    Quando eu crio um novo registro com os dados "<FirstName>", "<LastName>", "<Email>", "<Age>", "<Salary>" e "<Department>"
    Então o registro com o email "<Email>" deve estar visível na tabela

    Exemplos:

| FirstName | LastName | Email | Age | Salary | Department |
| "Alden" | "Cantrell"| "alden.cantrell@acme.com" | 45 | 12000 | "Compliance" |
| "Kierra" | "Gentry" | "kierra.gentry@acme.com" | 29 | 2000 | "Legal" |
| "Cierra" | "Vega" | "cierra.vega@acme.com" | 39 | 10000 | "Insurance" |
| "Joe" | "Doe" | "joe.doe@acme.com" | 30 | 5000 | "Sales" |
| "Jane" | "Smith" | "jane.smith@acme.com" | 25 | 6000 | "Marketing" |
| "Peter" | "Jones" | "peter.jones@acme.com" | 50 | 15000 | "IT" |
| "Mary" | "Johnson" | "mary.johnson@acme.com" | 35 | 8000 | "HR" |
| "David" | "Williams"| "david.w@acme.com" | 42 | 11000 | "Finance" |
| "Linda" | "Brown" | "linda.brown@acme.com" | 28 | 4500 | "Support" |
| "Robert" | "Davis" | "robert.davis@acme.com" | 55 | 20000 | "Management" |
| "Susan" | "Miller" | "susan.miller@acme.com" | 33 | 7500 | "Operations" |
| "Michael" | "Wilson" | "michael.w@acme.com" | 48 | 13000 | "Engineering"|

  Cenário: Deve deletar todos os novos registros criados
    Dado que eu estou na página "Web Tables" em "Elements"
    Quando eu deleto todos os 12 registros criados
    Então a tabela deve conter apenas os 3 registros originais