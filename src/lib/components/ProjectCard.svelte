<script lang="ts">
    import type { Project } from "$lib/data/projects";

    export let project: Project;
</script>

<div
    class="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
>
    <div class="relative">
        <img
            src={project.image}
            alt="Screenshot of {project.title}"
            class="w-full h-48 object-cover"
        />
        <!-- Overlay for links -->
        <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
            {#if project.githubUrl}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-blue-400"
                    aria-label="View source code on GitHub"
                >
                    <!-- GitHub Icon -->
                    <svg
                        class="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        ><path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                            clip-rule="evenodd"
                        /></svg
                    >
                </a>
            {/if}
            {#if project.liveUrl}
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-blue-400"
                    aria-label="View live demo"
                >
                    <!-- External Link Icon -->
                    <svg
                        class="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path></svg
                    >
                </a>
            {/if}
        </div>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold">{project.title}</h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
            {project.description}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
            {#each project.tags as tag}
                <span
                    class="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full"
                    >{tag}</span
                >
            {/each}
        </div>
    </div>
</div>
