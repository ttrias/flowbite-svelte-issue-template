<script lang="ts">
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from 'flowbite-svelte';
</script>

<h1>Skeleton</h1>
Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.


<h2>Default skeleton</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Skeleton size="sm" class="my-8" />
<Skeleton size="md" class="my-8" />
<Skeleton size="lg" class="my-8" />
<Skeleton size="xl" class="my-8" />
<Skeleton size="xxl" class="mt-8 mb-2.5" />
</div>

<h2>Image placeholder</h2> 

To display image placeholder without text, use `imgOnly` prop as seen in the following examples.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<ImagePlaceholder />
<ImagePlaceholder imgHeight="64" class="mt-8" />
<ImagePlaceholder imgOnly class="mt-8" />
</div>

<h2>Video placeholder</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<VideoPlaceholder />
<VideoPlaceholder size="md" class="mt-8" />
<VideoPlaceholder size="lg" class="mt-8" />
<VideoPlaceholder size="xl" class="mt-8" />
<VideoPlaceholder size="xxl" class="mt-8" />
</div>

<h2>Text placeholder</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<TextPlaceholder />
<TextPlaceholder size="md" class="mt-8" />
<TextPlaceholder size="lg" class="mt-8" />
<TextPlaceholder size="xl" class="mt-8" />
<TextPlaceholder size="xxl" class="mt-8" />
</div>

<h2>Card placeholder</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<CardPlaceholder />
<CardPlaceholder size="md" class="mt-8" />
<CardPlaceholder size="lg" class="mt-8" />
<CardPlaceholder size="xl" class="mt-8" />
<CardPlaceholder size="xxl" class="mt-8" />
</div>

<h2>Widget placeholder</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<WidgetPlaceholder />
</div>

<h2>List placeholder</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<ListPlaceholder />
</div>

<h2>Testimonial placeholder</h2> 

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<TestimonialPlaceholder />
</div>
