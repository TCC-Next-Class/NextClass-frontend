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
        if (session.state.user) {
            // pass
        } else {
            return router.push('/');
        }
    }

    return next();
}