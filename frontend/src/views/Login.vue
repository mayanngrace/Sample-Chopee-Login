<style scoped>
#main {
    background-image:url(/log.png);
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: right;
}

#logBox{
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    margin: 30px;
    margin-right: 10px;
    background-color:white;
    width: 350px;
    height: 370px;
    border: 1px solid white;
    box-shadow: 2px 3px rgba(204, 77, 22, 0.955);;
    border-radius: 5px;
    position: absolute;
    padding: 20px;
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
      margin-top:10px;
      margin-left: 3px;
      cursor: pointer;
    }

#user {
   margin-left: 7px;
}

#pass {
  margin-left: 7px;
}

#logText  {
    line-height: 45px;
    font-weight: 500;
    font-size: 20px;
    margin-left: 7px;
}

input {
    height: 40px;
    width: 300px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    margin-left: 4px;
}

button:hover {
  color: rgba(255, 255, 255, 0.833);
  transform: scale(1.05);
}
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async authorize() {
      try {
        const response = await this.axios.post('/api/authorize')
        this.$router.push('/')
      } catch (error) {
        // user is logged out, nothing
      }
    },
    async doLogin() {
      try {
        const response = await this.axios.post('/api/login', {username: this.username, password: this.password})
        this.$router.push('/')
      } catch (error) {
        alert('Error')
        console.log('Error on Login.vue > doLogin()', error.response.data.message)
      }
    }
  },
  async mounted() {
    await this.authorize()
  }
}
</script>
<template>
<div id="main" class="align-items-end d-flex justify-content-center" style="padding-right:200px;">
  <div id = "logBox">
  <div class="align-items-center d-flex flex-column justify-content-center"> 
    <span id ="logText" class="align-self-start">Log In</span>
    <span id ="user" class="align-self-start">Username</span>
    <input v-model="username" type="text">
    <span id = "pass" class="align-self-start">Password</span>
    <input v-model="password" type="password">
    <button @click="doLogin">Log In</button>
    <span><br>Don't have an account? <a href="/register">Sign Up</a></span>
    </div>
</div>
</div>
</template>
