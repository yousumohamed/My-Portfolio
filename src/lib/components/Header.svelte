<script lang="ts">
    import { page } from '$app/stores';
    import { derived, writable } from 'svelte/store';
    import { onMount } from 'svelte';

    let mobileMenuOpen = false;

    // Track hash for in-page navigation (like #about)
    const currentHash = writable('');

    // Update hash when it changes
    onMount(() => {
        const updateHash = () => {
            currentHash.set(window.location.hash.replace('#', '') || '');
        };
        updateHash();
        window.addEventListener('hashchange', updateHash);
        return () => window.removeEventListener('hashchange', updateHash);
    });

    // Derive the active section from either the URL path or hash
    const activeSection = derived([page, currentHash], ([$page, $hash]) => {
        const path = $page.url.pathname;

        // Handle hash first
        if ($hash) return $hash;

        // Then handle route paths
        if (path === '/' ) return 'home';
        if (path.startsWith('/projects')) return 'projects';
        if (path.startsWith('/about')) return 'about';
        if (path.startsWith('/contact')) return 'contact';
        // if (path.startsWith('/certifications')) return 'certifications';;

        return 'home';
    });

    function handleNavClick() {
        mobileMenuOpen = false; // close mobile menu
    }
</script>

<header
    class="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-500/20"
>
    <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <a
            href="/"
            on:click={handleNavClick}
            class="flex items-center gap-3 group"
        >
            <div
                class="bg-cyan-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl text-gray-900 group-hover:scale-110 transition-transform"
            >
                S
            </div>
            <span class="font-bold text-lg text-gray-200">Shamil M.sugulle</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 font-medium">
            <a
                href="/"
                on:click={handleNavClick}
                class="py-2 transition-colors hover:text-cyan-400 border-b-2"
                class:text-cyan-400={$activeSection === 'home'}
                class:border-cyan-400={$activeSection === 'home'}
                class:border-transparent={$activeSection !== 'home'}
            >Home</a>

            <a
                href="/projects"
                on:click={handleNavClick}
                class="py-2 transition-colors hover:text-cyan-400 border-b-2"
                class:text-cyan-400={$activeSection === 'projects'}
                class:border-cyan-400={$activeSection === 'projects'}
                class:border-transparent={$activeSection !== 'projects'}
            >Projects</a>

            <a
                href="/about"
                on:click={handleNavClick}
                class="py-2 transition-colors hover:text-cyan-400 border-b-2"
                class:text-cyan-400={$activeSection === 'about'}
                class:border-cyan-400={$activeSection === 'about'}
                class:border-transparent={$activeSection !== 'about'}
            >About</a>

            <a
                href="/contact"
                on:click={handleNavClick}
                class="py-2 transition-colors hover:text-cyan-400 border-b-2"
                class:text-cyan-400={$activeSection === 'contact'}
                class:border-cyan-400={$activeSection === 'contact'}
                class:border-transparent={$activeSection !== 'contact'}
            >Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
            <button
                on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
                aria-label="Open main menu"
                class="p-2"
            >
                <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div class="md:hidden px-6 pb-4 flex flex-col items-center space-y-4">
            <a
                href="/#home"
                on:click={handleNavClick}
                class="font-medium"
                class:text-cyan-400={$activeSection === 'home'}
            >Home</a>

            <a
                href="/#projects"
                on:click={handleNavClick}
                class="font-medium"
                class:text-cyan-400={$activeSection === 'projects'}
            >Projects</a>

            <a
                href="/#about"
                on:click={handleNavClick}
                class="font-medium"
                class:text-cyan-400={$activeSection === 'about'}
            >About</a>

            <a
                href="/#certifications"
                on:click={handleNavClick}
                class="font-medium"
                class:text-cyan-400={$activeSection === 'certifications'}
            >Certifications</a>

            <a
                href="/#contact"
                on:click={handleNavClick}
                class="font-medium"
                class:text-cyan-400={$activeSection === 'contact'}
            >Contact</a>
        </div>
    {/if}
</header>
