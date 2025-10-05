<script lang="ts">
	// Import all the sections for our homepage
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import About from '$lib/components/About.svelte';
	import Tools from '$lib/components/Tools.svelte'; // 1. Import the new component
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
	<title>Shamil- Portfolio</title>
</svelte:head>

<!-- All of your page sections in the correct order -->
<Hero />
<ProjectsGrid />
<About />
<Tools /> <!-- 2. Add the new component here -->
<ContactForm />