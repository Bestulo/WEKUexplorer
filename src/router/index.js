import Vue from 'vue'
import Router from 'vue-router'
import Config from '@/config.js'

import Home from '@/components/Home'
import Account from '@/components/Account'
import AccountVotes from '@/components/Account_votes'
import AccountTransfers from '@/components/Account_transfers'
import AccountComments from '@/components/Account_comments'
import Post from '@/components/Post'
import Block from '@/components/Block'
import Transaction from '@/components/Transaction'
import Map from '@/components/Map'

steem.api.setOptions(Config.RPC_NODE);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/@:account',
      name: 'Account',
      component: Account
    },{
      path: '/@:account/votes',
      name: 'AccountVotes',
      component: AccountVotes
    },{
      path: '/@:account/comments',
      name: 'AccountComments',
      component: AccountComments
    },{
      path: '/@:account/transfers',
      name: 'AccountTransfers',
      component: AccountTransfers
    },{        
      path: '/@:account/:permlink',
      name: 'Post',
      component: Post
    },{
      path: '/b/:id',
      name: 'Block',
      component: Block
    },{
      path: '/b/:id/:tx',
      name: 'Transaction',
      component: Transaction
    },{
      path: '/t/:tx',
      name: 'Transaction2',
      component: Transaction
    },
    {
      path: '/witnesses/map',
      name: 'Map',
      component: Map
    },    
  ],
  //mode: 'history',
})
