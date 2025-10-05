<script lang="ts">
	// Define the items for your "About Me" section.
	// You can change the title, description, and icon for each item.
	// The 'icon' is SVG path data. You can find more icons on sites like heroicons.com
	const aboutItems = [
		{
			title: 'Frontend Development',
			description: 'I create beautiful and responsive user interfaces using modern technologies like SvelteKit and Tailwind CSS.',
			icon: 'M10 20l4-16m4 16l4-16M1 9h22M2 15h20' // Icon for code
		},
		{
			title: 'UI/UX Design',
			description: 'I design user-friendly and intuitive layouts, focusing on a great user experience and clean aesthetics.',
			icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' // Icon for design/pencil
		},
		{
			title: 'Content Creation',
			description: 'I enjoy sharing my knowledge by creating short-form content about technology and trading.',
			icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' // Icon for video
		}
	];
</script>

<section id="about" class="container mx-auto px-6 py-16 md:py-24">
	<div class="max-w-4xl mx-auto">
		<!-- Section Title and Introduction -->
		<div class="text-center md:text-left">
			<h2 class="text-3xl md:text-4xl font-bold">About Me</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
				I am a multi-talented creative with a passion for building amazing things for the web. Here's a little more about what I do.
			</p>
		</div>

		<!-- This is the list of items with icons -->
		<div class="mt-12 space-y-10">
			{#each aboutItems as item}
				<div class="flex items-start gap-6">
					<!-- The Icon/Picture -->
					<div class="flex-shrink-0 bg-cyan-400/10 p-4 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-7 w-7 text-cyan-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
						</svg>
					</div>
					<!-- The Text Content -->
					<div>
						<h3 class="text-xl font-bold">{item.title}</h3>
						<p class="mt-1 text-gray-400">{item.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>