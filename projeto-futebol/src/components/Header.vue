<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand">
        <a href="" class="link navbar-brand mr-auto">
          <img
            src="./../assets/logo.svg"
            alt="Logo"
            class="img d-inline-block align-top"
            id="logo"
          />
          Portal Futebol
        </a>

        <div class="links mr-2">
          <router-link to="/" class="btn mr-5">Início</router-link>
          <router-link to="/news" class="btn mr-5">Notícias</router-link>
          <router-link to="/ranking" class="btn mr-5"
            >Classificação</router-link
          >

          <select
            name="championship"
            id="select-championship"
            class="form-control"
            @change="$emit('select-championship', $event.target.value)"
          >
            <option value="">Selecione um Campeonato</option>
            <option value="Campeonato Brasileiro" selected
              >Campeonato Brasileiro</option
            >
            <option value="Campeonato Espanhol">Campeonato Espanhol</option>
            <option value="Campeonato Inglês">Campeonato Inglês</option>
            <option value="Campeonato Italiano">Campeonato Italiano</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #fff;
}
#logo {
  width: 100px;
  height: 100%;
}
.links {
  display: inline-flex;
}
.link {
  color: #2e8b57;
  font-size: 30px;
  font-family: "Rajdhani";
}
.links a {
  color: #000;
}
.links a:focus {
  outline: none !important;
  box-shadow: none !important;
}
.link-active {
  background-color: #000;
  color: #fff !important;
}
</style>