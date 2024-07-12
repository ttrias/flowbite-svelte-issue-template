<script lang="ts">
import { Toggle } from 'flowbite-svelte';
const customSize = 'w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8';
const customSize2 = 'w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8';
</script>

<h1>Toggle</h1>

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-2'>
<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
</div>

## Colors

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-between'>
<Toggle color="red" checked>Red</Toggle>
<Toggle color="green" checked>Green</Toggle>
<Toggle color="purple" checked>Purple</Toggle>
<Toggle color="yellow" checked>Yellow</Toggle>
<Toggle color="teal" checked>Teal</Toggle>
<Toggle color="orange" checked>Orange</Toggle>
</div>

## Sizes

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-2'>
<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
<Toggle size="custom" customSize={customSize2}>Custom toggle</Toggle>
</div>
