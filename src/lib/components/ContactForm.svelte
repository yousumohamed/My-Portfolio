<script lang="ts">
	// This script handles submitting the form in the background without a redirect.
	let submitting = false;
	let status = '';

	async function handleSubmit(event: Event) {
		submitting = true;
		status = '';

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});

			if (response.ok) {
				status = 'Thanks! We Cntact You Soon.';
				form.reset();
			} else {
				status = 'Error! Something went wrong. Please try again. ';
			}
		} catch (error) {
			status = 'Error! Could not send message. Please check your connection.';
		} finally {
			submitting = false;
		}
	}
</script>

<section id="contact" class="container mx-auto px-6 py-16 md:py-24">
	<div class="text-center">
		<h2 class="text-3xl md:text-4xl font-bold">Get In Touch</h2>
		<p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
			Have a question or want to work together? Leave a message!
		</p>
	</div>

	<form
		action="https://formspree.io/f/mqayllbb"
		method="POST"
		class="mt-12 max-w-xl mx-auto"
		on:submit|preventDefault={handleSubmit}
	>
		<div class="grid grid-cols-1 gap-6">
			<label class="block">
				<span class="text-gray-700 dark:text-gray-300">Full name</span>
				<input
					type="text"
					name="name"
					class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0"
					placeholder="Jose M.abdi"
					required
				/>
			</label>
			<label class="block">
				<span class="text-gray-700 dark:text-gray-300">Email address</span>
				<input
					type="email"
					name="email"
					class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0"
					placeholder="Yusuf@example.com"
					required
				/>
				
			</label>
			<label class="block">
				<span class="text-gray-700 dark:text-gray-300">Message</span>
				<textarea
					name="message"
					class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-0"
					rows="4"
					placeholder="Your message here..."
					required
				></textarea>
			</label>
<br>
			<div class="text-center">
				<button
					type="submit"
					class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-500"
					disabled={submitting}
				>
					{#if submitting}
						Sending...
					{:else}
						Send Message
					{/if}
				</button>
			</div>
		</div>

		{#if status}
			<p
				class="mt-4 text-center"
				class:text-green-500={status.includes('Success')}
				class:text-red-500={status.includes('Error')}
			>
				{status}
			</p>
		{/if}
	</form>
</section>