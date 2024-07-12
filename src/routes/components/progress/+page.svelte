<script lang="ts">
  import { Progressbar, Button } from 'flowbite-svelte';
  import { sineOut } from 'svelte/easing';

  let progress = '45'
</script>

<h1>Progress</h1>

The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

## Default progress bar

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Progressbar progress="50" />
</div>

## Sizes

Use the `size` prop to change the size of a progress bar.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Small</div>
  <Progressbar progress="50" size="h-1.5" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Default</div>
  <Progressbar progress="50" size="h-2.5" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium dark:text-white">Large</div>
  <Progressbar progress="50" size="h-4" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
  <Progressbar progress="50" size="h-6" />
</div>
</div>

## With label inside

Use the `labelInside` prop to add the progress in a progress bar.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Progressbar progress="50" size="h-4" labelInside />
</div>

## With label outside

Use the `labelOutside` prop to add the progress outside of a progress bar.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
</div>

## Colors

Use the `color` prop to change the color of a progress bar.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
  <Progressbar progress="50" color="gray" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue</div>
  <Progressbar progress="50" color="blue" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
  <Progressbar progress="50" color="red" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
  <Progressbar progress="50" color="green" />
</div>

<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
<div class="my-4">
  <Progressbar progress="50" color="yellow" />
</div>

<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>
<div class="my-4">
  <Progressbar progress="50" color="indigo" />
</div>

<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">Purple</div>
<div class="my-4">
  <Progressbar progress="50" color="purple" />
</div>
</div>

## Custom style

Use `labelInsideClass` prop to style your progressbar.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Progressbar progress="50" size="h-3" labelInside color="green" labelInsideClass="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full" class="my-4" labelOutside="Size h-3" />

<Progressbar progress="50" size="h-10" labelInside color="red" labelInsideClass="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full" class="my-4" labelOutside="Size h-10" />

<Progressbar progress="50" size="h-6" labelInside labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full" class="my-4" labelOutside="Size h-6" />
</div>

## Animation

By default progress bar has animation disabled, you can activate with `animate`, you can custumize with `tweenDuration` and `easing`. By changing `precision` you can custumize the precision inside the progress bar.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Progressbar
  {progress}
  animate
  precision={2}
  labelOutside="With animation"
  labelInside
  tweenDuration={1500}
  easing={sineOut}
  size="h-6"
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="mb-8"
/>
<Progressbar
  {progress}
  labelOutside="Without animation"
  labelInside
  size="h-6"
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
/>
<Button on:click={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mt-8">
  Randomize
</Button>
</div>
