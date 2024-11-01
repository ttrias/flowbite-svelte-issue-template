<script lang="ts">
	import '../app.css';
	import { Badge } from 'flowbite-svelte';
	let { children } = $props();
</script>

<main class="mx-auto mb-16 min-w-96 p-8">
	<div class="flex justify-center gap-2 bg-white p-2 dark:bg-gray-900">
		<Badge large color="blue" href="/">Home</Badge>
		<Badge large color="yellow">Flowbite Svelte: v{__FLOWBITE_SVELTE_VERSION__}</Badge>
		<Badge large color="dark">Svelte: v{__SVELTE_VERSION__}</Badge>
		<Badge large color="green">SvelteKit: v{__SVELTEKIT_VERSION__}</Badge>
		<Badge large color="indigo">Vite: v{__VITE_VERSION__}</Badge>
	</div>
	{@render children()}
</main>
