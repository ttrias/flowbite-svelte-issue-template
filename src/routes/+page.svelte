<script lang="ts">
	import { List, Li, Heading } from 'flowbite-svelte';
	import { CheckCircleSolid, CloseCircleSolid, QuestionCircleSolid } from 'flowbite-svelte-icons';
	interface Component {
		checked: boolean;
		problems?: string;
	}

	interface ListType {
		[key: string]: Component;
	}
	const components: ListType = {
		accordion: {
			checked: true,
		  
		},
		alert: {
			checked: true,
			// problems: 'Dismissabel transition'
		},
		avatar: {
			checked: true,
		},
		badge: {
			checked: true,
		},
		banner: {
			checked: true,
			// problems: 'add transition (Flowbite-Svelte v0.46 as well)'
		},
		bottomNavigation: {
			checked: true
		},
		breadcrumb: {
			checked: true
		},
		buttonGroup: {
			checked: true
		},
		buttons: {
			checked: true
		},
		cards: {
			checked: true,
			// problems: 'User profile card dropdown react to hover and a wrong direction.'
		},
		carousel: {
			checked: true,
			// problems: 'Advanced customization arrows'
		},
		darkmode: {
			checked: true
		},
		deviceMockups: {
			checked: true
		},
		drawer: {
			checked: true
		},
		dropdown: {
			checked: true,
			// problems: 'Adding links and active class'
		},
		footer: {
			checked: true
		},
		forms: {
			checked: true,
		},
		gallery: {
			checked: true
		},
		indicators: {
			checked: true
		},
		kbd: {
			checked: true
		},
		listGroup: {
			checked: true
		},
		megaMenu: {
			checked: true,
			// problems: 'Menu opens upward when it is the bottom of the page.'
		},
		modal: {
			checked: true,
		},
		navbar: {
			checked: true,
			// problems: 'Mobile size menu transition jerks. See Svelte coverage report at https://svelte-5-preview.vercel.app/coverage/src/transition/index.html'
		},
		pagination: {
			checked: true
		},
		popover: {
			checked: true,
			// problems: 'Animation'
		},
		progress: {
			checked: true
		},
		rating: {
			checked: true
		},
		sidebar: {
			checked: true
		},
		skeleton: {
			checked: true
		},
		spinner: {
			checked: true
		},
		speedDial: {
			checked: true
		},
		table: {
			checked: true,
		},
		tabs: {
			checked: true
		},
		timeline: {
			checked: true
		},
		toast: {
			checked: true,
		},
		tooltip: {
			checked: true,
			// problems: 'Color dark changes to light, etc.'
		},
		typography: {
			checked: true
		},
		video: {
			checked: true
		}
	};

	const forms: ListType = {
		checkbox: {
			checked: true,
		},
		fileInput: {
			checked: true
		},
		floatingLabel: {
			checked: true
		},
		inputField: {
			checked: true,
			problems: 'Dropzone click and select a file does not show file name.'
		},
		radio: {
			checked: true,
			// problems: 'Radio in dropdown example.'
		},
		range: {
			checked: true
		},
		searchInput: {
			checked: true,
			// problems: 'Search with dropdown example. Location search example.'
		},
		select: {
			checked: true,
		},
		textarea: {
			checked: true
		},
		toggle: {
			checked: true
		}
	};

	const typography: ListType = {
		blockquote: {
			checked: true
		},
		heading: {
			checked: true
		},
		hr: {
			checked: true
		},
		image: {
			checked: true
		},
		link: {
			checked: true
		},
		list: {
			checked: true
		},
		paragraph: {
			checked: true,
		},
		text: {
			checked: true
		}
	};

	function analyzeComponents(components: ListType) {
		let total = 0;
		let checked = 0;
		let unchecked = 0;
		let withProblems = 0;
		let withoutProblems = 0;

		for (const component in components) {
			total++;
			checked += components[component].checked ? 1 : 0;
			unchecked += !components[component].checked ? 1 : 0;
			withProblems += components[component].problems ? 1 : 0;
		}
		withoutProblems = checked - withProblems; 

		return {
			total,
			checked,
			unchecked,
			withProblems,
			withoutProblems
		};
	}

	const componentsAnalysis = analyzeComponents(components);
	const formsAnalysis = analyzeComponents(forms);
	const typographyAnalysis = analyzeComponents(typography);

	// console.log("Components:", componentsAnalysis);
	// console.log("Forms:", formsAnalysis);
	// console.log("Typography:", typographyAnalysis);

</script>

<h1>Flowbite Svelte Check for Svelte 5 Legacy mode (No Runes)</h1>

<h2>Components</h2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	<Li># of pages - {componentsAnalysis.total}</Li>
	<Li># of pages checked - {componentsAnalysis.checked}</Li>
	<Li># of pages unchecked - {componentsAnalysis.unchecked}</Li>
	<Li liClass='text-green-500'># of pages without problems - {componentsAnalysis.withoutProblems}</Li>
	<Li liClass='text-red-500'># of pages with problems - {componentsAnalysis.withProblems}</Li>
</List>
	

<h2>Forms</h2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	<Li># of pages - {formsAnalysis.total}</Li>
	<Li># of pages checked - {formsAnalysis.checked}</Li>
	<Li># of pages unchecked - {formsAnalysis.unchecked}</Li>
	<Li liClass='text-green-500'># of pages without problems - {formsAnalysis.withoutProblems}</Li>
	<Li liClass='text-red-500'># of pages with problems - {formsAnalysis.withProblems}</Li>
</List>

<h2>Typography</h2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	<Li># of pages - {typographyAnalysis.total}</Li>
	<Li># of pages checked - {typographyAnalysis.checked}</Li>
	<Li># of pages unchecked - {typographyAnalysis.unchecked}</Li>
	<Li liClass='text-green-500'># of pages without problems - {typographyAnalysis.withoutProblems}</Li>
	<Li liClass='text-red-500'># of pages with problems - {typographyAnalysis.withProblems}</Li>
</List>

<Heading
	tag="h2"
	customSize="text-lg font-semibold"
	class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Components</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	{#each Object.entries(components) as [key, { checked, problems }]}
		<Li icon>
			{#if checked && !problems}
				<CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
			{:else if problems}
				<CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
			{:else}
				<QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
			{/if}
			<a href="/components/{key}" class='text-blue-800 hover:text-blue-500 underline'>{key}</a> {#if problems} <span class="text-red-500 ml-4">({problems})</span> {/if}
		</Li>
	{/each}
</List>

<Heading
	tag="h2"
	customSize="text-lg font-semibold"
	class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Forms</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	{#each Object.entries(forms) as [key, { checked, problems }]}
		<Li icon>
			{#if checked && !problems}
				<CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
			{:else if problems}
				<CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
			{:else}
				<QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
			{/if}
			<a href="/forms/{key}" class='hover:underline'>{key}</a> {#if problems} <span class="text-red-500 ml-4">({problems})</span> {/if}
		</Li>
	{/each}
</List>

<Heading
	tag="h2"
	customSize="text-lg font-semibold"
	class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Typography</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
	{#each Object.entries(typography) as [key, { checked, problems }]}
		<Li icon>
			{#if checked && !problems}
				<CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
			{:else if problems}
				<CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
			{:else}
				<QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
			{/if}
			<a href="/typography/{key}" class='hover:underline'>{key}</a> {#if problems} <span class="text-red-500 ml-4">({problems})</span> {/if}
		</Li>
	{/each}
</List>
