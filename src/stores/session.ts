import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core';
import sessionService from '@/services/session'
import userService from "@/services/users";
import { ref } from "vue";

export const useSession = defineStore("session", () => {
    const state = {
        token: useStorage('token', null),
        user: ref(null)
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

    const check = async () => {
        try {
            if (state.token.value) {
                state.user.value = (await userService.me()).data;
            }
        } catch (error) {
            state.token.value = null;
            state.user.value = null;
        }
    }

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