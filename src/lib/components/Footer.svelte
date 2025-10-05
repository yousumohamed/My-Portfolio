<script lang="ts">
    // Social media links. You can change these to your own profiles.
    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/yousumohamed",
            icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/yousuf-mohamed-929689305",
            icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
        },
        {
            name: "YouTube",
            url: "https://youtube.com",
            icon: "M12.025 5.25c-3.125 0-5.625 2.5-5.625 5.625s2.5 5.625 5.625 5.625 5.625-2.5 5.625-5.625-2.5-5.625-5.625-5.625zm0 9c-1.875 0-3.375-1.5-3.375-3.375s1.5-3.375 3.375-3.375 3.375 1.5 3.375 3.375-1.5 3.375-3.375 3.375z",
        },
    ];
</script>

<footer class="bg-gray-900/95 text-gray-400">
    <!-- Gradient Border -->
    <div class="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>

    <div class="container mx-auto px-6 py-10">
        <!-- Main footer grid for alignment -->
        <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <!-- Left Side -->
            <div class="text-center md:text-left">
                <h3 class="text-xl font-bold text-cyan-400">
                    Connect with Shamil
                </h3>
                <p class="mt-2 text-sm">
                    © {new Date().getFullYear()} Shamil — Built with
                    <span class="text-red-500">😎</span>
                    <a href="https://josevault.netlify.app/"> <b>Jose</b></a>
                </p>
            </div>

            <!-- --- CHANGE START --- -->
            <!-- Middle Section (Contact Info) -->
            <div class="flex flex-col items-center gap-2 text-sm font-bold">
                <a
                    href="mailto:khaledkariim2020@gmail.com"
                    class="flex items-center hover:text-cyan-400 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        ><path
                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                        /><path
                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                        /></svg
                    >
                    yousufmoha255@gmail.com
                </a>
                <span class="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        ><path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.034 11.034 0 006.364 6.364l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                        /></svg
                    >
                    +252 906680955
                </span>
            </div>
            <!-- --- CHANGE END --- -->

            <!-- Right Side (Social Icons) -->
            <div class="flex items-center justify-center md:justify-end gap-4">
                {#each socials as social}
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        class="bg-gray-700/80 p-2 rounded-md hover:bg-gray-600 transition-colors"
                    >
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d={social.icon}></path>
                        </svg>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</footer>
