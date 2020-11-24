import { computed, onMounted, reactive, SetupContext } from '@vue/composition-api'

export default function useDom({ root } : SetupContext) {
  const state = reactive({
    rendered: false
  })

  onMounted(() => {
    root.$nextTick().then(() => {
      state.rendered = true
    })
  })
  const fadeInClass = computed(() => ({
    fadeIn: state.rendered,
    animated: state.rendered,
  }))

  return {
    state,
    fadeInClass,
  }
}
