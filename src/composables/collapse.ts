import {ref} from 'vue'

export const useCollapse = () => {
  const isOpen = ref(false)
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  return {
    isOpen,
    toggle
  }
}
