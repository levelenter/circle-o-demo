<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404" class="clr-gray">
      404 ━ (・o･ ))(( ･o･) ━ Not Found
    </h1>
    <h1 v-else class="clr-gray">
      {{ error.statusCode }} ━ (・o･ ))(( ･o･) ━ Error Occurred
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    error: { type: Object, default: () => {} }
  },
  layout: 'error_layout' // エラーページ用のカスタムレイアウトを指定できます
}
</script>
