// Importa os comandos customizados para que fiquem disponíveis globalmente
import './commands'

// Registra o suporte do Mochawesome reporter
import 'cypress-mochawesome-reporter/register';

// Importa o plugin de drag-and-drop para registrar o comando.drag()
import '@4tw/cypress-drag-drop'