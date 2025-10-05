<script lang="ts">
    import { onMount } from "svelte";

    // Define our skills with name, image path, and proficiency level
    const skills = [
        { name: "MemStack", image: "/images/memstack.png", level: 90 },
        { name: "DayTrader", image: "/images/memstack.png", level: 85 }, // Placeholder image
        { name: "Content Creator", image: "/images/memstack.png", level: 80 }, // Placeholder image
        { name: "Tailwind", image: "/images/tailwind.png", level: 95 },
    ];

    let bars: HTMLElement[] = [];
    let hasAnimated = false;

    function animateOnScroll() {
        if (hasAnimated) return;

        const isVisible =
            bars[0]?.getBoundingClientRect().top < window.innerHeight;

        if (isVisible) {
            hasAnimated = true;
            bars.forEach((bar, i) => {
                // Set the width to the skill's level
                const targetWidth = skills[i].level;
                bar.style.width = `${targetWidth}%`;
            });
        }
    }
</script>

<svelte:window on:scroll={animateOnScroll} />

<div class="mt-12">
    <h3 class="text-3xl font-bold mb-8">My Skills</h3>
    <div class="space-y-8">
        {#each skills as skill, i}
            <div class="w-full">
                <!-- Skill Header: Image, Name, Percentage -->
                <div class="flex items-center mb-2">
                    <img
                        src={skill.image}
                        alt="{skill.name} logo"
                        class="w-8 h-8 mr-4 object-contain"
                    />
                    <p class="flex-1 font-semibold">{skill.name}</p>
                    <p class="font-mono">{skill.level}%</p>
                </div>
                <!-- Progress Bar -->
                <div
                    class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"
                >
                    <div
                        bind:this={bars[i]}
                        class="bg-cyan-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style="width: 0%;"
                    ></div>
                </div>
            </div>
        {/each}
    </div>
</div>
