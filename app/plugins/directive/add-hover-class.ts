import Vue from 'vue'

/**
 * 参照を保持しない場合は、要素へのaddはremoveしなくても大丈夫
 * https://github.com/vuejs/vue/issues/314
 */
Vue.directive('add-hover-class', {
  bind(el, binding, vnode) {
    const { value = "" } = binding;
    el.addEventListener('mouseenter', () => {
      el.classList.add(value)
    })
    el.addEventListener('mouseleave', () => {
      el.classList.remove(value)
    })
  },
})
