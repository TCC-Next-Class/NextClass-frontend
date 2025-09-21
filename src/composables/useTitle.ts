import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const appName = import.meta.env.APP_NAME || 'NextClass'
const currentTitle = ref(appName)

function applyTitle(title?: string) {
  if (title) {
    currentTitle.value = `${title} - ${appName}`
  } else {
    currentTitle.value = appName
  }
  document.title = currentTitle.value
}

export function useTitle(initWatcher = false) {
  const route = useRoute()

  if (initWatcher) {
    watch(
      () => route.meta.title,
      (title) => applyTitle(title as string | undefined),
      { immediate: true }
    )
  }

  function setTitle(title: string) {
    applyTitle(title)
  }

  return {
    currentTitle,
    setTitle,
  }
}