<template>
  <div class="container">
    <div class="lateral">
        <div class="lateral-interno">
      </div>
    </div>

    
    <div class="conteudo">
      <div class="superior">
        <div class="barra"></div>
        <div class="user-icon"></div>
      </div>
      
      <div class="welcome">
        <div class="welcome-title">Olá, Matheus Lopes</div>
        <div class="welcome-text">
          Bem-vindo ao NextClass! Sua sala de aula digital, reinventada.<br />
          Gerencie suas aulas e mantenha tudo organizado em um só lugar.
        </div>
        <div class="welcome-button">Sobre</div>
      </div>
      
      <div class="card-box">
        <div class="card" v-for="i in 5" :key="i">  
          <div class="card-cima">
            <div class="card-title">Materia 1</div>
            <div class="card-pontos"></div>
            <div class="card-avatar"></div>
          </div>
          <div class="card-baixo">
            <div class="card-subtitle">Exercícios</div>
            <div class="card-list">
              <div>Atividade 1</div>
              <div>Trabalho 2</div>
              <div>Prova 1</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>

.container {
  display: flex;
  height: 100vh;
  background: #f2f2f2;
  font-family: sans-serif;
}


.lateral {
  width: 200px;
  background: #f2f2f2;
  padding: 20px;
}

.lateral-interno {
    background: white;
    border: solid 0.2px #ccc;
    border-radius: 14px;
    height: 94vh;
    width: 12rem;
}


.conteudo {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.superior {
  display: flex;
  gap: 75%;
  align-items: center;
}

.barra {
  width: 200px;
  height: 24px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.user-icon {
  width: 24px;
  height: 24px;
  background: #ccc;
  border-radius: 50%;       
}


.welcome {
  background: linear-gradient(to right, #24736d, #56ba89);
  border-radius: 12px;
  padding: 30px;
  color: #fff;
  text-align: center;
}

.welcome-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 14px;
}

.welcome-text {
  font-size: 13px;
  margin-bottom: 10px;
}

.welcome-button {
  display: inline-block;
  padding: 5px 5rem;
  border: 1px solid #fff;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
}


.card-box {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}

.card {
  width: 180px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}


.card-cima {
  background: #56ba89;
  height: 100px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.card-avatar {
  position: absolute;
  right: 10px;
  bottom: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ddd;
  border: 3px solid #fff;
}


.card-baixo {
  padding: 30px 12px 12px;
}

.card-subtitle {
  font-weight: bold;
  font-size: 13px;
  color: #333;
  margin-bottom: 6px;
}

.card-list div {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 6px;
}
</style>
