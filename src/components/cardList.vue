<template>
  <div class="cardList-wrapper">
    <h2 class="title">Результаты</h2>
    <div v-if="activeBlock == 0" class="msg">начните поиск</div>
    <div v-else-if="activeBlock == 1" class="msg">ничего не найдено</div>
    <div v-else-if="activeBlock == 2"><Spinner /></div>
    <div v-else class="cardList">
      <Card
        :user="user"
        v-for="(user, index) in users"
        :key="index"
        @click="openCardUser(user)"
      ></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import Spinner from '@/components/spinner.vue'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default {
  components: {
    Card,
    Spinner
  },
  setup() {
    const store = useStore()
    const users = ref(
      computed(() => {
        return store.getters.getData
      })
    )
    const activeBlock = ref(
      computed(() => {
        return store.getters.getActiveBlock
      })
    )
    const openCardUser = user => {
      store.dispatch('setActiveUser', user)
    }
    return {
      users,
      activeBlock,
      openCardUser
    }
  }
}
</script>
