<script lang="ts">
	import { Heading, List, Li } from 'flowbite-svelte';
	import {onMount} from "svelte";
	import Test from '../lib/Test.svelte';
	type ItemType = {
		name: string,
		value: number,
		extra: string
	}
	let selectedItems: itemType[] = []
	let testCtl: Test
	onMount(() => {
		testCtl.setNewSearchItems([
			{
				name: 'a',
				value: 1,
				extra: 'Foo'
			},
			{
				name: 'b',
				value: 2,
				extra: 'Bar'
			},
			{
				name: 'c',
				value: 3,
				extra: 'Baz'
			}
		])
	})
</script>

<div class="p-9">
	<Heading tag="h1">Flowbite-Svelte Playground</Heading>
	<List tag="ol">
		<Li class="text-2xl">Fork this Stackblitz project</Li>
		<Li class="text-2xl">Update Flowbite-Svelte by running `pnpm i -D flowbite-svelte@latest`</Li>
		<Li class="text-2xl">Run `pnpm update` to update dependencies.</Li>
		<Li class="text-2xl">Add your code.</Li>
		<Li class="text-2xl">Run `pnpm check`.</Li>
    <Li class="text-2xl">It's a good practice to run `pnpm format && pnpm lint`</Li>
	</List>
	<Test bind:this={testCtl} bind:selectedItems/>
</div>
