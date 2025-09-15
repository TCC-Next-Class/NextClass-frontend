import api from '@/plugins/api'

export default new class SessionService {
    async create(email: string, password: string) {
        try {
            const response = await api.post('/sessions', { email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async revoke() {
        try {
            await api.post('/sessions/revoke');
        } catch (error) {
            throw error;
        }
    }
}