<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col-2">Colocação</th>
          <th scope="col-5">Time</th>
          <th scope="col-5">Pontuação</th>
        </tr>
      </thead>
      <tbody v-for="time in times" :key="time.colocacao">
        <tr>
          <th scope="row">{{ time.colocacao }}</th>
          <td>{{ time.nomeTime }}</td>
          <td>{{ time.pontos }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      times: [
        {
          nomeTime: "Flamengo",
          colocacao: 1,
          pontos: 71
        },
        {
          nomeTime: "Internacional",
          colocacao: 2,
          pontos: 69
        },
        {
          nomeTime: "Atlético MG",
          colocacao: 3,
          pontos: 65
        },
        {
          nomeTime: "Fluminense",
          colocacao: 4,
          pontos: 61
        },
        {
          nomeTime: "Grêmio",
          colocacao: 5,
          pontos: 59
        },
        {
          nomeTime: "Palmeiras",
          colocacao: 6,
          pontos: 57
        },
        {
          nomeTime: "Santos",
          colocacao: 7,
          pontos: 54
        },
        {
          nomeTime: "Athlético PR",
          colocacao: 8,
          pontos: 50
        },
        {
          nomeTime: "Corinthians",
          colocacao: 9,
          pontos: 50
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>