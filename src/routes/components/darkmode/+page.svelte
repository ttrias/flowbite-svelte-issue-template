<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
  import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
</script>


<h1>Dark Mode</h1>

In Flowbite-Svelte, the `class` strategy is used to support toggling dark mode manually, so you should explicitly configure it in Tailwind CSS:

Then you can use `dark:` prefixed classes to configure the styles applied when dark mode is enabled. For example, if you want to change the body background color from `bg-white` when dark mode is disabled to `bg-gray-800` when dark mode is enabled:



Finally, use the dark mode component to display a switcher (that is a button) for users to toggle dark mode manually. The best place to put this component is in the root layout:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DarkMode />
</div>

## Initial theme

Use `class="dark"` to set the initial theme to the dark mode. The default mode is `light`.


## Switcher style

Use the `btnClass` prop to overwrite the default classes:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DarkMode {btnClass} />
</div>

Or just use `class` attribute to append classes to the default classes:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
</div>

## Mode icon

Use the `lightIcon` and `darkIcon` slots to change icons:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DarkMode class="text-lg">
    <ThumbsUpSolid slot="lightIcon" color="red" />
    <ThumbsDownSolid slot="darkIcon" color="green" />
</DarkMode>
</div>
