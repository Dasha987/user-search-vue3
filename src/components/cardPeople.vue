<template>
  <div v-if="Object.keys(user).length === 0" class="msg">
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
  <div v-else class="cardPeople">
    <div>
      <img src="@/assets/images/maxPhoto.svg" alt="" />
    </div>
    <div>
      <div class="cardPeople-name">{{ user.name }}</div>
      <div class="cardPeople-contact">
        <div>
          email: <span>{{ user.email }}</span>
        </div>
        <div>
          phone: <span>{{ user.phone }}</span>
        </div>
      </div>
      <div class="cardPeople-info">
        О себе: <span>Информация о человеке</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const user = ref(
      computed(() => {
        return store.getters.getActiveUser
      })
    )
    return {
      user
    }
  }
}
</script>
