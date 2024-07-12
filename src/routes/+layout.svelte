<script lang="ts">
	import '../app.css';
	import { A, Badge } from 'flowbite-svelte';
</script>

<main class='mb-16 p-8 min-w-96 mx-auto'>
	<div class='bg-white dark:bg-gray-900 p-2 flex justify-center gap-2'>
		<Badge large color='blue' href='/'>Home</Badge>
		<Badge large href='https://svelte-5-preview.vercel.app/coverage/index.html'>Svete 5 Coverage report</Badge>
		<Badge large color='yellow'>Flowbite Svelte: v{__FLOWBITE_SVELTE_VERSION__}</Badge>
	<Badge large color='dark'>Svelte: v{__SVELTE_VERSION__}</Badge>
	<Badge large color='green'>SvelteKit: v{__SVELTEKIT_VERSION__}</Badge>
	<Badge large color='indigo'>Vite: v{__VITE_VERSION__}</Badge>
</div>
	<slot></slot>
</main>

