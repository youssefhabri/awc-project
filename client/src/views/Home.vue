<template>
  <div class="home">
    <button @click="login()">Login</button>
    <div v-if="user != null">{{ user }}</div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';
  import { namespace } from 'vuex-class';

  const auth = namespace('auth');

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
    @auth.Getter user: any;

    public login() {
      this.$store.dispatch('auth/login', {
        username: 'habri',
        password: 'Youssef1',
      });

      console.log(this.user);
    }
  }
</script>
