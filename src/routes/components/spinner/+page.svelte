<script lang="ts">
  import { Spinner, Button } from 'flowbite-svelte';
</script>

<h2>Default spinner</h2>

Use the following SVG element to show a loading animation:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Spinner />
</div>

<h2>Colors</h2>

You can change the colors of the spinner element using the `color` prop.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
</div>

<h2> Sizes</h2>

Change the size of the spinner component using the `size` prop.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Spinner size={4} />
<Spinner size="6" />
<Spinner size={8} />
</div>

<h2> Alignment</h2>

Because the spinner component is an inline HTML element it can easily be aligned on the left, center, or right side using the `text-left|center|right` utility classes:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-left"><Spinner /></div><div class="text-center"><Spinner /></div><div class="text-right"><Spinner /></div>
</div>

<h2> Buttons</h2>

The spinner component can also be used inside elements such as buttons when submitting form data:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="flex flex-wrap items-center gap-2">
  <Button>
    <Spinner class="me-3" size="4" color="white" />
    Loading ...
  </Button>
  <Button outline color="dark">
    <Spinner class="me-3" size="4" />
    Loading ...
  </Button>
</div>
</div>
