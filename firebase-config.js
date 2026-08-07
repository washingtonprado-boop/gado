// ============================================================
// CONFIGURAÇÃO DO FIREBASE — SisGado Pro
// ============================================================
// Este arquivo fica separado do sistema (index.html) justamente
// para facilitar o uso em outras fazendas: para colocar o SisGado
// Pro em uma fazenda nova, basta:
//
//   1. Criar um novo projeto no Firebase (https://console.firebase.google.com)
//   2. Ativar "Realtime Database" e "Authentication" (E-mail/Senha)
//   3. Copiar as credenciais do projeto (Configurações do projeto > Geral
//      > "Seus apps" > SDK do Firebase) e colar abaixo
//   4. Enviar este arquivo junto com o index.html para o novo local
//
// NÃO é necessário alterar o index.html — ele já lê esta variável
// automaticamente (window.FIREBASE_CONFIG).
// ============================================================

window.FIREBASE_CONFIG = {
    apiKey: "AIzaSyC7SscZZ2uhic2JXaQYfmnvh5mRgwpk0y8",
    authDomain: "gado-5821a.firebaseapp.com",
    databaseURL: "https://gado-5821a-default-rtdb.firebaseio.com",
    projectId: "gado-5821a",
    storageBucket: "gado-5821a.firebasestorage.app",
    messagingSenderId: "1065455551718",
    appId: "1:1065455551718:web:9e20cc6e84dc76e0ae6727",
    measurementId: "G-Q98K1CMBK3"
};
