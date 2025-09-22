import { ref, nextTick } from 'vue';

const isLoading = ref(false);

function useAccountLoading() {

  const start = () => {
    isLoading.value = true
  };

  const stop = () => {
    nextTick(() => {
    isLoading.value = false
    });
  };

  return { isLoading, start, stop };
}

export { useAccountLoading };