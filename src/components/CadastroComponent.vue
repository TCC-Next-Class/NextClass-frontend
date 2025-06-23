<template>
  <div class="container">
    <div class="left-panel">
      <div class="content">
        <h2>Bem vindo de volta!</h2>
        <p>para continuar conectado conosco, <br> faça login com suas informações pessoais.</p>
        <button class="bt-entrar">ENTRAR</button>
      </div>
    </div>

    <div class="right-panel">
      <div class="campos">
        <h2>Crie uma conta</h2>

        <button class="bt-google">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="18" />
          Entrar com google
        </button>

        <p class="link">ou use seu email para se registrar</p>

        <form class="form">
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <button type="text" class="btn-green">CADASTRAR</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.content p{
font-size: 12px;
}

.container {
  display: flex;
  width: 100vw;
  height: 100vh;

}


.left-panel,
.right-panel {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.left-panel {
  background: linear-gradient(to right, #2e3a59, #406c3b);
  color: white;
  text-align: center;
}


.right-panel {
  background-color: white;
}


.campos {
  width: 80%;
  max-width: 400px;
  
}


h2 {
  font-weight: bold;
  margin-bottom: 1,5rem;
  font-family:sans-serif;
  text-align: center;
}

p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: sans-serif;
}


.bt-entrar {
  background-color: white;
  color: #2e3a59;
  border: none;
  padding: 0.6rem 2rem;
  border-radius: 19px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-family: sans-serif;
}

.bt-google {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #f5f5f5;
  border: none;
  padding: 0.6rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  width: 100%;
  cursor: pointer;
  font-family: sans-serif;
}

.link {
  text-align: center;
  margin: 1rem 0;
  font-size: 0.85rem;
  color: #888;
  font-family: sans-serif;
  
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.form input {
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 0.9rem;
  box-shadow: -2px 2px -2px rgba(0, 0, 0, 0.205);
}

.btn-green {
  background-color: #406c3b;
  color: white;
  padding: 0.6rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-weight: bold;
}
</style>
