<template>
  <input
    type="text"
    :value="value"
    @keyup="updateClubName($event.target.value)"
    class="form-control"
    placeholder="Digite seu clube"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    value: String
  },

  computed: {
    ...mapGetters(["getClubName"])
  },

  methods: {
    ...mapActions(["updateClubName"])
  }
};
</script>

<style scoped>
</style>