<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-5 text-center principal-news">
          <h2 @click="goToPage('/news')">
            Veja as últimas notícias do campeonato
          </h2>
        </div>

        <div class="col-5 offset-2 text-center principal-news">
          <h2 @click="goToPage('/ranking')">
            Confira a classificação dos times
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToPage(page) {
      this.$router.push(page);
    }
  }
};
</script>

<style scoped>
section {
  margin-top: 25px;
}

.container .row {
  height: 300px;
}

.container .row .col-5:first-child {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("../assets/football.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.container .row .col-5:nth-child(2) {
  background: url("../assets/football2.jpg") no-repeat;
  background-size: 125%;
}

h2 {
  margin: 25% 0;
  color: #f6b64e;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
}

.principal-news {
  cursor: pointer;
}
</style>