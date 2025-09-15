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
}