import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useSession } from '@/stores/session'
import { useRouter } from 'vue-router'
import { useAccountLoading } from '@/composables/useGlobal';

export async function authGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const session = useSession()
    const router = useRouter()
    const { start, stop } = useAccountLoading();

    if (!session.state.user) {
        console.log('authGuard: checking session...')
        session.check(() => {
            if (to.meta.requiresAuth) {
                if (session.state.user) {
                    console.log('authGuard: user authenticated, proceeding to route')
                } else {
                    console.log('authGuard: no user, redirecting to login');
                    return router.push('/');
                }
            }
            stop();
        })
        start();
    } else {
        console.log('authGuard: user authenticated, proceeding to route')

    }

    return next();
}