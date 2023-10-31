<template>
  <div class="home-wrapper">
    <div class="home-navigation">
      <div class="home-search">
        <h2 class="title">Поиск сотрудников</h2>
        <input
          v-model="value"
          type="text"
          placeholder="Введите id или имя"
          @keyup.enter="send"
        />
      </div>
      <CardList></CardList>
    </div>
    <div class="cardPeople-wrapper"><CardPeople></CardPeople></div>
  </div>
</template>

<script>
import CardPeople from '@/components/cardPeople.vue'
import CardList from '@/components/cardList.vue'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    CardList,
    CardPeople
  },
  setup() {
    const value = ref('')
    const store = useStore()
    const send = () => {
      store.dispatch('setData', value.value)
    }

    watch(value, newValue => {
      if (newValue == '') {
        store.dispatch('setData', newValue)
      }
    })

    return {
      value,
      send
    }
  }
}
</script>
