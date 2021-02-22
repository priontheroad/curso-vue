<template>
  <section>
    <div class="container">
      <SectionNewsIndividual
        v-for="notice in news"
        :key="notice.id"
        :img-name="notice.img"
        :img-info="notice.imgInfo"
        :news-date="notice.date"
      >
        <template #title>
          <h2 @click="goToPage('/notice')">{{ notice.title }}</h2>
        </template>

        <p>{{ notice.content | truncate(200) }}</p>
      </SectionNewsIndividual>
    </div>
  </section>
</template>

<script>
import SectionNewsIndividual from "./SectionNewsIndividual";
import { mapGetters } from "vuex";

export default {
  components: {
    SectionNewsIndividual
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ news: "getNews" })
  },
  methods: {
    goToPage(page) {
      this.$router.push(page);
    }
  }
};
</script>

<style scoped>
section {
  padding: 50px 0;
  margin-top: 25px;
  background-color: #f37520;
}
</style>