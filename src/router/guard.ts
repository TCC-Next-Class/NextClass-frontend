import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useSession } from '@/stores/session'
import { useRouter } from 'vue-router'

export async function authGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const session = useSession()
    const router = useRouter()

    if (to.meta.requiresAuth) {
        if (!session.state.user) {
            (async () => {
                console.log('authGuard: checking session...')
                session.check(() => {
                    if (session.state.user) {
                        console.log('authGuard: user authenticated, proceeding to route')
                        return;
                    } else {
                        console.log('authGuard: no user, redirecting to login');
                        return router.push('/');
                    }
                })
            })();
        } else {
        console.log('authGuard: user authenticated, proceeding to route')
        }
    }
    return next();
}