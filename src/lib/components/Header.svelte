<script lang="ts">
    import { page } from '$app/stores';
    import { derived, writable } from 'svelte/store';
    import { onMount } from 'svelte';

    let mobileMenuOpen = false;
    const currentHash = writable('');

    onMount(() => {
        const updateHash = () => {
            currentHash.set(window.location.hash.replace('#', '') || '');
        };
        updateHash();
        window.addEventListener('hashchange', updateHash);
        return () => window.removeEventListener('hashchange', updateHash);
    });

    const activeSection = derived([page, currentHash], ([$page, $hash]) => {
        const path = $page.url.pathname;

        if ($hash) return $hash;
        if (path === '/') return 'home';
        if (path.startsWith('/projects')) return 'projects';
        if (path.startsWith('/about')) return 'about';
        if (path.startsWith('/contact')) return 'contact';

        return 'home';
    });

    function handleNavClick() {
        mobileMenuOpen = false;
    }
</script>

<header class="sticky top-4 z-50 px-4 md:px-6">
    <nav class="mx-auto max-w-6xl rounded-full border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <div class="flex items-center justify-between px-5 py-3 md:px-8">
            <a href="/" on:click={handleNavClick} class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-full bg-white/20 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white font-semibold transition-transform duration-300 group-hover:scale-110">
                    S
                </div>
                <span class="font-semibold tracking-tight text-white">Shamil M.sugulle</span>
            </a>

            <div class="hidden md:flex items-center gap-2 text-sm font-medium">
                <a href="/" class="px-4 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white" class:bg-white={$activeSection === 'home'} class:text-black={$activeSection === 'home'}>Home</a>
                <a href="/projects" class="px-4 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white" class:bg-white={$activeSection === 'projects'} class:text-black={$activeSection === 'projects'}>Projects</a>
                <a href="/about" class="px-4 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white" class:bg-white={$activeSection === 'about'} class:text-black={$activeSection === 'about'}>About</a>
                <a href="/contact" class="px-4 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white" class:bg-white={$activeSection === 'contact'} class:text-black={$activeSection === 'contact'}>Contact</a>
            </div>

            <button on:click={() => (mobileMenuOpen = !mobileMenuOpen)} class="md:hidden p-2 rounded-full bg-white/10 border border-white/10 text-white">
                ☰
            </button>
        </div>
    </nav>

    {#if mobileMenuOpen}
        <div class="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6 md:hidden">
            <div class="flex flex-col gap-3">
                <a href="/" on:click={handleNavClick} class="px-4 py-3 rounded-2xl text-white/90 hover:bg-white/10">Home</a>
                <a href="/projects" on:click={handleNavClick} class="px-4 py-3 rounded-2xl text-white/90 hover:bg-white/10">Projects</a>
                <a href="/about" on:click={handleNavClick} class="px-4 py-3 rounded-2xl text-white/90 hover:bg-white/10">About</a>
                <a href="/contact" on:click={handleNavClick} class="px-4 py-3 rounded-2xl text-white/90 hover:bg-white/10">Contact</a>
            </div>
        </div>
    {/if}
</header>