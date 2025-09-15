import { defineStore } from "pinia";
import userService from "@/services/users";
import { useSession } from "./session";
import { useRouter } from "vue-router";

export const useUsers = defineStore("users", () => {

    const create = async (
        name: string,
        cpf: string,
        email: string,
        password: string,
        password_confirmation: string,
        router: ReturnType<typeof useRouter>
    ) => {
        try {
            const user = await userService.create(name, cpf, email, password, password_confirmation);

            const sessionStore = useSession();
            await sessionStore.create(email, password);

            router.push('/dashboard');
        } catch (error) {
            return Promise.reject(error);
        }
    };

    return { create }
});
