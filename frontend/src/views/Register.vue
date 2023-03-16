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
    height: 440px;
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
      margin-top:20px;
      margin-bottom: 20px;
      margin-left: 3px;
      cursor: pointer;
    }

#user {
    margin-left: 7px;
}

#pass {
    margin-left: 7px;
}

#role {
    margin-left: 7px;
}

#logText  {
    line-height: 45px;
    font-weight: 500;
    font-size: 20px;
    margin-left: 7px;
    margin-bottom: 10px;
}

input {
    height: 40px;
    width: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    margin-left: 4px;
}

button:hover {
  color: rgba(255, 255, 255, 0.833);
  transform: scale(1.05);
}

select {
  width: 300px;
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      role: 'role1'
    }
  },
  methods: {
    async authorize() {
      try {
        const response = await this.axios.post('/api/authorize')
        this.$router.push('/')
      } catch (error) {
      }
    },
    async doRegister() {
      try {
        const response = await this.axios.post('/api/register', {username: this.username, password: this.password, role: this.role})
        this.$router.push('/')
      } catch (error) {
        alert(error.response.data.message)
        console.log('Error on Register.vue > doRegister()', error.response.data.message)
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
  <span id ="logText" class="align-self-start">Sign Up</span>
  <span id ="user" class="align-self-start">Username</span>
  <input v-model="username" type="text">
  <span id ="pass" class="align-self-start">Password</span>
  <input v-model="password" type="password">
  <span id ="role" class="align-self-start">Sign Up as:</span>
  <select class="align-self-start" v-model="role">
    <option value="AS GUEST">Guest</option>
    <option value="AS BUYER">Buyer</option>
    <option value="AS SELLER">Seller</option>
  </select>
  <button @click="doRegister">Sign Up</button>
  <span>Have an existing account? <a href="/login">Log In</a></span>
</div>
</div>
</div>
</template>
