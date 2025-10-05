<script lang="ts">
    import Stats from "$lib/components/Stats.svelte";
    import { onMount } from "svelte";
    

    // --- Code for the typing animation ---
    const roles = [
        "Software Designer",
        "UI/UX Designer",
        "Creative Designer",
        "Shamil M.Sugulle",
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let currentRole = "";
    let isDeleting = false;

    function type() {
        const fullRole = roles[roleIndex];

        if (isDeleting) {
            // Deleting characters
            charIndex--;
            currentRole = fullRole.substring(0, charIndex);
        } else {
            // Typing characters
            charIndex++;
            currentRole = fullRole.substring(0, charIndex);
        }

        if (!isDeleting && charIndex === fullRole.length) {
            // Finished typing, wait, then start deleting
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to the next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    onMount(() => {
        const typingInterval = setInterval(type, 150);
        return () => clearInterval(typingInterval);
    });
    // --- End of animation code ---
</script>

<section id="home" class="container mx-auto px-6 py-16 md:py-24">
    <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left side: Text content -->
        <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm <br /> A

                <span
                    class="text-blue-600 dark:text-blue-400 min-h-[80px] md:min-h-[100px] inline-block"
                >
                    {currentRole}
                </span>
                <span class="animate-ping">|</span>
            </h1>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                I build modern, fast, and accessible web applications. Turning
                ideas into real life products is my calling.
            </p>

            <a
                href="#projects"
                class="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
                View My Work
            </a>


            
            <a
                href="/contact"
                class="mt-8 inline-block  bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Contact Here ↝
            </a>
        </div>

        <!-- Right side: Image -->
        <div class="flex justify-center">
            <div
                class="w-80 h-80 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden"
            >
                <img
                    src="src/lib/assets/ezgif-8735ea063a736b.png"
                    alt="A portrait of Khalid"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>

    <!-- Stats Component -->
    <Stats />
</section>
