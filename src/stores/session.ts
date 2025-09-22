import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import sessionService from '@/services/session'
import userService from "@/services/users";
import { ref } from "vue";
import type { Ref } from "vue";
import type { User } from "@/types";

export const useSession = defineStore("session", () => {
    const state = {
        token: useStorage('token', null),
        user: ref<User | null>(null)
    };

    const create = async (email: string, password: string) => {
        try {
            const response = await sessionService.create(email, password);

            state.token.value = response.access_token;
            state.user.value = (await userService.me()).data;
            return response;
        } catch (error) {
            throw error;
        }
    };

    const check = (onFinally?: () => void) => {
        const loading: Ref<boolean> = ref(true);
        const error: Ref<any> = ref(null);

        (async () => {
            try {
                if (state.token.value) {
                    state.user.value = (await userService.me()).data;
                }
            } catch (err: any) {
                if (err.response && err.response.status === 401) {
                    state.token.value = null;
                    state.user.value = null;
                }
                error.value = err;
            } finally {
                loading.value = false;
                if (onFinally) onFinally();
            }
        })();

        return { loading, error };
    };

    const revoke = async () => {
        try {
            await sessionService.revoke();
            state.token.value = null;
            state.user.value = null;
        }
        catch (error) {
            throw error;
        }
    }

    return {
        state,
        create,
        check,
        revoke,
    }
});