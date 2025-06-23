<template>
  <div class="container">
    <div class="login-box">
      <h1>Bem vindo de volta!</h1>
      <p class="subtitle">
        Para continuar conectado conosco, faça<br />
        login com suas informações pessoais.
      </p>

      <button class="google-button">
        <p>Entrar com o google</p>
      </button>

      <div class="link-email">ou use seu email para entrar</div>

      <div class="info">
        <input type="email" placeholder="Email" />
      </div>

      <div class="info">
        <input type="password" placeholder="Senha" />
      </div>

      <a href="#" class="link">Esqueceu sua senha?</a>

      <button class="login-button">ENTRAR</button>

      <a href="#" class="link">Ainda não possui uma conta?</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #2e4a47, #3f683d);
}

.login-box {
  background: transparent;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  max-width: 360px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px; 
}

h1 {
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 12px;
  margin: 0;
  font-family: sans-serif;
}

.google-button {
  width: 90%;
  height: 2.4rem;
  border-radius: 16px;
  border: none;
  background: white;
  color: rgb(104, 101, 101);
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-family: sans-serif;
}



.link-email {
  font-size: 11px;
  color: white;
  font-family: sans-serif;
}

.info {
  display: flex;
  align-items: center;
  background: white;
  color: #000;
  border-radius: 16px;
  width: 90%;
  height: 2.4rem;
}

.info input {
  border: none;
  outline: none;
  border-radius: 99px;
  width: 100%;
  padding-left: 10px;
  text-align: left; 
  font-size: 12px;
}

.link {
  font-size: 11px;
  color: white;
  text-decoration: none;
  font-family: sans-serif;
}

.login-button {
  width: 70%;
  padding: 10px;
  border-radius: 20px;
  background: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-family: sans-serif;
}

</style>
