<template>
  <div class="container">
    <h1>Список Персонажей</h1>
    <div class="list-person">
      <div
        class="card-person"
        v-for="person in persons"
        :key="person.id + Math.random()"
      >
        <div class="card" :id="person.id" @click="openCard">
          <img class="avatar" :src="person.image" alt="avatar" />
          {{ person.name }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight + 20 >=
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.$store
            .dispatch("addPersons")
            .then(this.$store.dispatch("changePage"));
        }
      };
    },
    openCard(e) {
      const parent = e.target.closest(".card");
      if (parent) {
        this.$router.push(`/person?id=${parent.id}`);
      }
    },
  },
  computed: {
    persons() {
      return this.$store.getters.allPersons;
    },
  },
  mounted() {
    this.$store.dispatch("addPersons").then(this.$store.dispatch("changePage"));
    this.scroll();
  },
};
</script>


<style lang="scss" scoped>
.list-person {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}
.card {
  width: 100%;
  background-color: aliceblue;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.5);
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: contain;
  margin-right: 10px;
}

@media (max-width: 600px) {
  .list-person {
    grid-template-columns: 1fr;
  }
}
</style>