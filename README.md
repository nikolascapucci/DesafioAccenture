# demoqa-robot-browser

Projeto de automação usando **Robot Framework** com **Selenium** para executar os cenários do site https://demoqa.com/.

## O que contém
- Testes `.robot` cobrindo 5 etapas (ProgressBar, Browser Windows, Sortable, WebTables e Practice Form)
- Recursos em `resources/` (locators e keywords comuns)
- Arquivo de suporte para upload: `upload_files/sample_upload.txt`
- Workflow GitHub Actions para rodar os testes em CI

## Pré-requisitos (local)
- Python 3.10+
- Node.js 16+ (recomendado 18)
- pip
- robotframework==6.2.0
- robotframework-seleniumlibrary
- robotframework-browser==14.0.0
- robotframework-requests==0.9.3
- robotframework-faker==1.0.3
- Faker==18.9.0

## Instalação local
```bash
pip install -r requirements.txt
