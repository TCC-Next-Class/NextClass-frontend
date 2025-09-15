import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import sessionService from '@/services/session'
import userService from "@/services/users";
import { computed } from "vue";

export const useSession = defineStore("session", () => {
    const state = {
        token: useStorage('token', null),
        user: useStorage('user', null),
    };
    const token = computed(() => state.token.value);

    const create = async (email: string, password: string) => {
        try {
            const response = await sessionService.create(email, password);

            state.token = response.token;
            state.user = await userService.me();
            return response;
        } catch (error) {
            throw error;
        }
    };

    return {
        token,
        create,
    }
});