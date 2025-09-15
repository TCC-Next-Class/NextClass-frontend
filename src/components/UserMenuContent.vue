<script setup lang="ts">
import UserInfo from '@/components/UserInfo.vue';
import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import type { User } from '@/types';
import { LogOut, Route, Settings } from 'lucide-vue-next';
import { useSession } from '@/stores/session';
import { RouterLink } from 'vue-router';

interface Props {
    user: User;
}

const handleLogout = () => {
    useSession().revoke().then(() => {
    });
};

defineProps<Props>();
</script>

<template>
    <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserInfo :user="user" :show-email="true" />
        </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
        <DropdownMenuItem :as-child="true">
            <RouterLink class="block w-full" to="/profile/edit" prefetch as="button">
                <Settings class="mr-2 h-4 w-4" />
                Settings
            </RouterLink>
        </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem :as-child="true">
        <RouterLink class="block w-full" method="post" to="logout" @click="handleLogout" as="button">
            <LogOut class="mr-2 h-4 w-4" />
            Log out
        </RouterLink>
    </DropdownMenuItem>
</template>
