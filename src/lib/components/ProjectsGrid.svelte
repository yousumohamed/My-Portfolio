<script lang="ts">
    import { projects } from "$lib/data/projects";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { fly } from "svelte/transition";
</script>

<section id="projects" class="container mx-auto px-6 py-16 md:py-24">
    <div class="text-center">
        <h2 class="text-3xl md:text-4xl font-bold">My Projects</h2>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I'm proud of.
        </p>
    </div>
    <div class="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {#each projects as project, i (project.title)}
            <div in:fly={{ y: 50, duration: 500, delay: i * 150 }}>
                <ProjectCard {project} />
            </div>
        {/each}
    </div>
</section>
