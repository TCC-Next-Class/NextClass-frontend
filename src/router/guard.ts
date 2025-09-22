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
        session.check(() => {
            if (to.meta.requiresAuth) {
                if (session.state.user) {
                    // pass
                } else {
                    return router.push('/');
                }
            }
            stop();
        })
        start();
    } else {
        // pass
    }

    return next();
}