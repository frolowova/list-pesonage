<template>
  <div class="container-profile">
    <div class="profile">
      <h1 class="title">Это страница персонажа {{ person.name }}</h1>
      <p class="text">Статус: {{ person.status }}</p>
      <p class="text">Пол: {{ person.gender }}</p>
      <p class="text">Локация: {{ person.location.name }}</p>
      <img class="avatar" :src="person.image" alt="photo" />
    </div>
    <nuxt-link to="/" class="link">BACK</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    person() {
      return this.$store.getters.person_data(this.$route.query.id);
    },
  },
  mounted() {
    if (!this.person) this.$router.push("/");
  },
};
</script>


<style lang="scss" scoped>
.container-profile {
  width: 100%;
  display: grid;
  justify-items: center;
}
.profile {
  display: grid;
  grid-template-columns: 1fr;
  background-color: aliceblue;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.5);
  padding: 20px;
  align-items: center;
}
.avatar {
  justify-self: center;
  max-width: 100%;
  max-height: auto;
  object-fit: contain;
}
.title {
  text-transform: uppercase;
  margin-bottom: 30px;
}
.link {
  text-decoration: none;
  margin: 10px;
  padding: 5px;
}
</style>