<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#/"><h1 class="brandy">WEKU Explorer</h1></b-navbar-brand>
    <div class="container">
      <b-navbar-nav>
        <!-- <b-nav-item href="#/votes" class="ml-auto">Votes</b-nav-item> -->
        <!-- <b-nav-item href="#/transfers" class="ml-auto">Transfers</b-nav-item> -->
        <!-- <b-nav-item href="#/" class="ml-auto" active>Block Explorer</b-nav-item>
        <b-nav-item href="#/witness/map" class="ml-auto">Witness Map</b-nav-item> -->
        <!-- <b-nav-item to="/" class="ml-auto">Block Explorer</b-nav-item> -->
        <b-nav-item>
          <b-form class="nav-search">
            <b-input-group>
              <b-form-input id="tx-search" type="text" placeholder="TX ID#" v-model="txId"></b-form-input>
              <b-input-group-addon append=true is-text=true @click="onTxSearch"><i class="far fa-search"></i></b-input-group-addon>
              <b-popover target="tx-search" triggers="focus" placement="bottomright" content="Type or paste a transaction number"></b-popover>
            </b-input-group>
          </b-form>
        </b-nav-item>
        <b-nav-item>
          <b-form class="nav-search">
            <b-input-group>
              <b-form-input id="block-search" type="text" placeholder="Block ID#" v-model="blockId"></b-form-input>
              <b-input-group-addon append=true is-text=true @click="onBlockSearch"><i class="far fa-search"></i></b-input-group-addon>
              <b-popover target="block-search" triggers="focus" placement="bottomleft" content="Type or paste a block number"></b-popover>
            </b-input-group>
          </b-form>
        </b-nav-item>
        <b-nav-item>
          <b-form @submit="onUserSearch" class="nav-search">
            <b-input-group>
              <b-form-input id="user-search" type="text" placeholder="Username" v-model="username"></b-form-input>
              <b-input-group-addon append=true is-text=true @click="onUserSearch"><i class="far fa-search"></i></b-input-group-addon>
              <b-popover target="user-search" triggers="focus" placement="bottomleft" content="Type or paste a username"></b-popover>
            </b-input-group>
          </b-form>
        </b-nav-item>
        <b-nav-item to="/witnesses/map" class="mt-2 mr-2 nav-text-item">Witness Map</b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
import router from '@/router'
export default {
  data: function() {
    return {
      blockId: null,
      username: null,
      txId: null
    }
  },
  methods: {
    onBlockSearch(evt) {
      evt.preventDefault()
      this.blockId = this.blockId.trim()
      if (!/[0-9]+/.test(this.blockId)) alert('Block ID invalid, please try again.')
      else router.push('/b/' + this.blockId)
      // else window.location = window.location.protocol + '//' + window.location.host + '/#/b/' + this.blockId
    },
    onUserSearch(evt) {
      evt.preventDefault()
      this.username = this.username.trim()
      if (this.username.startsWith('@')) this.username = this.username.slice('1')
      if (validateUsername(this.username)) {
        router.push('/@' + this.username)
        window.location.reload()
      } else alert('Invalid username, please try again.')
      // console.log(this.username)
    },
    onTxSearch(evt) {
      // sample TxId: 64aa8ece3cd871cff951a0cc9f9d15eab974006a
      evt.preventDefault()
      if (this.txId) router.push('/t/' + this.txId)
      // steem.api.getTransaction('64aa8ece3cd871cff951a0cc9f9d15eab974006a', (err, res) =>
      //   err ? console.error(err) : alert(JSON.stringify(res)))
      // alert('got searched!')
    }
  }
}

const usernameValidationRegex = /^[a-z](-[a-z0-9](-[a-z0-9])*)?(-[a-z0-9]|[a-z0-9])*(?:\.[a-z](-[a-z0-9](-[a-z0-9])*)?(-[a-z0-9]|[a-z0-9])*)*$/i

const validateUsername = username =>
  usernameValidationRegex.test(username)

</script>

<style>

.nav-search {
  width: 150px;
  margin: auto 15px;
}

.nav-text-item {
  border-bottom: 2px solid rgb(219, 218, 218);
}

body {
  margin-top:-61px !important;
}

.router-link-exact-active {
  color: rgb(51, 51, 51) !important;
}

.navbar-brand {
  margin-left: 40px;
}

.navbar-light {
  background-color:white !important;
  height:90px;
}

.brandy {
  margin-top:5px;
  color:rgb(51, 51, 51);
}

.container {
  margin-left:5%
}

</style>