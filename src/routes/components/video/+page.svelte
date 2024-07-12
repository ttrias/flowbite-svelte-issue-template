<script lang="ts">
  import { Video } from 'flowbite-svelte';
</script>

<h1>Video</h1>

<h2>Video player</h2>

Use this example to create a native browser video player and apply the w-full utility class from Tailwind CSS to span the full width of the parent container.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" controls trackSrc="flowbite.mp4" />
</div>

<h2>Autoplay</h2>

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" autoplay controls trackSrc="flowbite.mp4" />
</div>

<h2>Muted</h2>

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" autoplay muted controls trackSrc="flowbite.mp4" />
</div>

<h2>Sizes</h2>


<h3>Width</h3>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" controls class="w-96" trackSrc="flowbite.mp4" />
</div>

<h3>Height</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" controls class="h-80" trackSrc="flowbite.mp4" />
</div>

<h3>Responsive</h3>

Use the following example to make the video responsive across all devices and viewports.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" controls class="w-full max-w-full h-auto" trackSrc="flowbite.mp4" />
</div>

<h3>Custom styles</h3>

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-size` or border to set rounded corners and border.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Video src="/videos/flowbite.mp4" controls class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
</div>
