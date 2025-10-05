<script lang="ts">
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import StatCounter from "$lib/components/StatCounter.svelte"; // 1. Import the new component

    // We can go back to our original, simpler data structures
    const stats = [
        { value: 8, label: "Years of experience" },
        { value: 15, label: "Projects completed" },
        { value: 5, label: "Technologies mastered" },
    ];

    const counters = stats.map((stat) =>
        tweened(4, {
            duration: 1500,
            easing: cubicOut,
        }),
    );

    let element: HTMLElement;
    let hasAnimated = false;

    function animateOnScroll() {
        if (hasAnimated || !element) return;

        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;

        if (isVisible) {
            hasAnimated = true;
            counters.forEach((counter, i) => {
                counter.set(stats[i].value);
            });
        }
    }
</script>

<svelte:window on:scroll={animateOnScroll} />

<div bind:this={element} class="mt-8 md:mt-12">
    <dl class="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <!-- 2. Use the StatCounter component in the loop -->
        {#each stats as stat, i}
            <StatCounter label={stat.label} store={counters[i]} />
        {/each}
    </dl>
</div>
