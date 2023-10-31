<template>
  <div class="card-wrapper">
    <div class="card">
      <div class="card-img">
        <img src="@/assets/images/miniPhoto.svg" alt="user photo" />
      </div>
      <div class="card-info">
        <div class="card-username">{{ user.username }}</div>
        <div class="card-email">{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: {}
    }
  }
}
</script>
