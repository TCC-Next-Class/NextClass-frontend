import { ref, readonly } from 'vue'

const store = ref<Record<string, any>>({})

export function useTempSession() {
    function get(key: string) {
        return store.value[key] ?? null
    }

    function set(key: string, value: any) {
        store.value[key] = value
    }

    function remove(key: string) {
        delete store.value[key]
    }

    function clear() {
        store.value = {}
    }

    return {
        get,
        set,
        remove,
        clear,
        state: readonly(store),
    }
}