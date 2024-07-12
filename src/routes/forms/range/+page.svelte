<script lang="ts">
  import { Range, Label } from 'flowbite-svelte';
  let minmaxValue = 5;
  let stepValue = 2.5;
</script>

<h1>Range</h1>

The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

<h2>Range slider example</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label>Default range</Label>
<Range id="range1" value={50} />
</div>

<h2>Disabled state</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label>Default range</Label>
<Range id="range-disabled" value={50} disabled />
</div>

<h2>Binding value</h2>

Use bind:value to bind the range input value as seen the the following examples.

<h2>Min and max</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label>Min-max range</Label>
<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
<p>Value: {minmaxValue}</p>
</div>

<h2>Steps</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label>Range steps</Label>
<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5" />
<p>Value: {stepValue}</p>
</div>

<h2>Sizes</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-6'>
<Label>Small range</Label>
<Range id="small-range" value={50} size="sm" />
<Label>Default range</Label>
<Range id="default-range" value={50} size="md" />
<Label>Large range</Label>
<Range id="large-range" value={50} size="lg" />
</div>
