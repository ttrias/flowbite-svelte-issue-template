<script lang="ts">
  import { List, Li, Heading } from 'flowbite-svelte';
</script>

<h1>Typography</h1>

The typography for FlowBite is completely based on the utility classes from Tailwind CSS.

We have listed some of the commonly used typography classes that we use throughout the FlowBite UI, however, you can also check out all of the utility classes on the <a class="link" href="https://tailwindcss.com/docs/font-family">Tailwind CSS documentation</a> directly.

<h2>Font Size</h2>

Use the following text-size utility classes from Tailwind to set the font size for any text element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="text-xs dark:text-white">Flowbite</p>

<p class="text-sm dark:text-white">FlowBite</p>

<p class="text-base dark:text-white">FlowBite</p>

<p class="text-lg dark:text-white">FlowBite</p>

<p class="text-xl dark:text-white">FlowBite</p>

<p class="text-2xl dark:text-white">FlowBite</p>

<p class="text-3xl dark:text-white">FlowBite</p>

<p class="text-4xl dark:text-white">FlowBite</p>

<p class="text-5xl dark:text-white">FlowBite</p>

<p class="text-6xl dark:text-white">FlowBite</p>

<p class="text-7xl dark:text-white">FlowBite</p>

<p class="text-8xl dark:text-white">FlowBite</p>

<p class="text-9xl dark:text-white">FlowBite</p>
</div>

<h2>Font Weight</h2>

Use the following font-weight utility classes to set the font weight for any text element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="font-thin dark:text-white">FlowBite</p>

<p class="font-extralight dark:text-white">FlowBite</p>

<p class="font-light dark:text-white">FlowBite</p>

<p class="font-normal dark:text-white">FlowBite</p>

<p class="font-medium dark:text-white">FlowBite</p>

<p class="font-semibold dark:text-white">FlowBite</p>

<p class="font-bold dark:text-white">FlowBite</p>

<p class="font-extrabold dark:text-white">FlowBite</p>

<p class="font-black dark:text-white">FlowBite</p>
</div>

<h2>Line Height</h2>

Use the following leading-type utility classes to set the line height for any text element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="leading-none dark:text-gray-400">Themesberg was created to bring quality ...</p>

<p class="leading-tight dark:text-gray-400">Themesberg was created to bring quality ...</p>

<p class="leading-snug dark:text-gray-400">Themesberg was created to bring quality ...</p>

<p class="leading-normal dark:text-gray-400">Themesberg was created to bring quality ...</p>

<p class="leading-relaxed dark:text-gray-400">Themesberg was created to bring quality ...</p>

<p class="leading-loose dark:text-gray-400">Themesberg was created to bring quality ...</p>
</div>

<h2>Lists</h2>

Use the following code to create list items with ordered and unordered lists.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Heading tag="h5">List disc</Heading>
<List list="disc">
  <Li>Design</Li>
  <Li>Develop</Li>
  <Li>Test</Li>
</List>
<Heading tag="h5">List decimal</Heading>
<List list="decimal">
  <Li>Design</Li>
  <Li>Develop</Li>
  <Li>Test</Li>
</List>
<Heading tag="h5">List none</Heading>
<List list="none">
  <Li>Design</Li>
  <Li>Develop</Li>
  <Li>Test</Li>
</List>
</div>

<h2>List position</h2>

Use the list-inside and list-outside classes to set the list item position inside a list component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Heading tag="h5">List inside</Heading>
<List position="inside">
  <Li>Design</Li>
  <Li>Develop</Li>
  <Li>Test</Li>
</List>
<Heading tag="h5">List outside</Heading>
<List position="outside">
  <Li>Design</Li>
  <Li>Develop</Li>
  <Li>Test</Li>
</List>
</div>

<h2>Text Decoration</h2>

You can use the following classes to set the text decoration for any inline text element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="underline dark:text-gray-400">please read our terms and services</p>

<p class="line-through dark:text-gray-400">please read our terms and services</p>
</div>
