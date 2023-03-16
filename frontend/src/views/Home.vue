<style scoped>
#main2 {
  background-image:url(/welcome.png);
  height: 150px;
  position: relative;
}

#role {
  margin-top: 240px;
}

button{
  border: none;
  color: white;
  font-weight: 600;
  width:302px;
  height: 40px;
  background-color: rgb(240, 76, 44) ;
  text-align: center;
  padding: 4px;
  border-radius: 2px;
  cursor: pointer;
  margin-top: 220px;
  }
.end {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 20px;
  margin-top: 60px;
  margin-right: 100px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}

button:hover {
  color: rgba(255, 255, 255, 0.833);
  transform: scale(1.05);
}
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async authorize() {
      try
      {
        const response = await this.axios.post('/api/authorize')
        this.user = response.data
      } 
      catch (error) 
      {
        console.log('Error on Home.vue > authorize()', error.response.data.message)
        this.$router.push('/login')
      }
    },
    async doLogout() {
      try 
      {
        const response = await this.axios.post('/api/logout')
        this.$router.push('/login')
      }
       catch (error) 
      {
        alert('Error')
        console.log('Error on Home.vue > doLogout()', error.respone.data.message)
      }
    }
  },
  async mounted() {
    await this.authorize()
  }
}
</script>

<template>
<div id ="main2">
  <div class="end">
    Hi,&nbsp; <span style="color:rgb(240, 76, 44);"><b>{{ user.username }}!</b></span>
  </div>
  <div>
  <div class="center" id ="role">
    <h3>{{user.role}}</h3>
  </div>
  <div class="center">
    <button @click="doLogout">Log Out</button>
  </div>
</div>
</div>
</template>
