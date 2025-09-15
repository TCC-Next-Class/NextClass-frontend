import api from "@/plugins/api";

export default new class UserService {
    async me() {
        try {
            const response = await api.get('/me');
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    async search(email: string) {
        try {
            const response = await api.get('/users/search', { params: { email } })
            return response.data
        } catch (error: any) {
            if (error.response?.status === 404) {
                return null
            }
            throw error
        }
    }

    async create(name: string, cpf: string, email: string, password: string, password_confirmation: string) {
        try {
            const response = await api.post('/users', { name, cpf, email, password, password_confirmation })
            return response.data
        } catch (error) {
            throw error
        }
    }
}