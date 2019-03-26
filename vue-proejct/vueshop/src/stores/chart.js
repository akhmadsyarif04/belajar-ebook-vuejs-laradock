export default {
  namespaced: true,
  state: {
    carts: [],
    couriers: [],
    services: [],
  },
  mutations: {
    insert: (state, payload) => {
      state.carts.push({
        id: payload.id,
        title: payload.title,
        cover: payload.cover,
        price: payload.price,
        weight: payload.weight,
        quantity: 1
      })
    },
    update: (state, payload) => {
      let idx = state.carts.indexOf(payload);
      state.carts.splice(idx, 1, {
        id: payload.id,
        title: payload.title,
        cover: payload.cover,
        price: payload.price,
        weight: payload.weight,
        quantity: payload.quantity
      });
      if (payload.quantity <= 0) {
        state.carts.splice(idx,1)
      }
    },
    set: (state, payload) => {
      state.carts = payload
    },
    setCouriers: (state, value) => {
      state.couriers = value
    },
    setServices: (state, value) => {
      state.services = value
    },
  },
  actions: {
    add: ({state,commit}, payload) => {
      let cartItem = state.carts.find(item => item.id === payload.id)
      if (!cartItem) {
        commit('insert', payload)
      } else {
        cartItem.quantity++
        commit('update', cartItem)
      }
    },
    setCouriers: ({commit}, value) => {
      commit('setCouriers', value)
    },
    setServices: ({commit}, value) => {
      commit('setServices', value)
    },
    remove: ({state,commit}, payload) => {
      let cartItem = state.carts.find(item => item.id === payload.id)
      if(cartItem) {
        cartItem.quantity--
        commit('update', cartItem)
      }
    },
    set: ({commit}, payload) => {
      commit('set', payload)
    },
  },
  getters: {
    carts: state => state.carts,
    couriers: state => state.couriers,
    services: state => state.services,
    count: (state) => {
      return state.carts.length
    },
    totalPrice: (state) => {
      let total = 0
      state.carts.forEach(function(cart) {
        total += cart.price * cart.quantity
      })
      return total
    },
    totalQuantity: (state) => {
      let total = 0
      state.carts.forEach(function(cart) {
        total += cart.quantity
      })
      return total
    },
    totalWeight: (state) => {
      let total = 0
      state.carts.forEach(function(cart) {
        total += cart.weight
      })
      return total
    },
  }


}
