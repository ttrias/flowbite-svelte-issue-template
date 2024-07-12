<script lang="ts">
  import { Img, Badge } from 'flowbite-svelte';
</script>

Get started with a collection of responsive image components coded with the utility classes from Tailwind CSS that you can use inside articles, cards, sections, and other components based on multiple styles, sizes, layouts, and hover animations.


<h2>Default image</h2>

Use this example to show the a responsive image that won’t grow beyond the maximum original width.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" />
</div>

<h2>Image caption</h2>

This example can be used to add a caption for the image often used inside articles. <Badge large>Warning: the caption is using @html.</Badge>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" caption="Image caption" />
</div>

<h2>Rounded corners</h2>

Apply rounded corners to the image by using the specific utility classes from Tailwind CSS.

<h3>Border radius</h3>

Use this example to apply rounded corners to the image by using the rounded-size class where the size can be anything from small to extra large.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" alt="sample 1" size="max-w-lg" class="rounded-lg" />
</div>

<h3>Full circle</h3>

Use this example to mask the image inside a circle using the rounded-full utility class from Tailwind CSS.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-4@2x.jpg" alt="sample 1" size="w-96" imgClass="h-96" class="rounded-full" />
</div>

<h2>Image shadow</h2>

This example can be used to show a shadow effect for the image using the shadow-size utility class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-2@2x.jpg" alt="sample 1" size="max-w-xl" class="shadow-xl dark:shadow-gray-800" />
</div>

<h2>Retina-ready</h2>

Use the srcset attribute to set Retina-ready images with double resolution.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" size="w-full max-w-xl" class="rounded-lg" />
</div>

<h2>Image card</h2>

Use this example to make the image a card item with a link and a short text description.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/content-gallery-3.png" alt="sample 1" class="rounded-lg" figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" captionClass="absolute bottom-6 px-4 text-lg text-white" caption="Do you want to get notified when a new component is added to Flowbite?" />
</div>

<h2>Image effects</h2>

Use image effects such as grayscale or blur to change the appearances of the image when being hovered.

<h3>Grayscale</h3>

Use the filter option and apply a grayscale to the image element using the grayscale class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/content-gallery-3.png" size="max-w-lg" alt="My gallery" class="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" />
</div>

<h3>Blur</h3>

Apply a blur by using the blur-size utility class from Tailwind CSS to an image component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/content-gallery-3.png" size="max-w-lg" alt="My gallery" class="rounded-lg transition-all duration-300 blur-sm hover:blur-none" />
</div>

<h2>Alignment</h2>

Align the image component to the left, center or right side of the document page using margin styles.

<h3>Left</h3>

By default, the image component will be aligned to the left side of the page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-lg" alt="sample 1" />
</div>

<h3>Center</h3>

Horizontally align the image to the center of the page using the `mx-auto` class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-lg" alignment="mx-auto" alt="sample 1" />
</div>

<h3>Right</h3>

Use the `ms-auto` class to align the image to the right side of the page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-lg" alignment="ms-auto" alt="sample 1" />
</div>

<h2>Sizes</h2>

Set the size of the image using the w-size and h-size or max-w-size utility classes from Tailwind CSS to set the width and height of the element.

<h3>Small</h3>

Use the `max-w-xs` class to set a small size of the image.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-xs" alt="sample 1" />
</div>

<h3>Medium</h3>

Use the `max-w-md` class to set a medium size of the image.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-md" alt="sample 1" />
</div>

<h3>Large</h3>

Use the max-w-xl class to set a large size of the image.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-xl" alt="sample 1" />
</div>

<h3>Full width</h3>

Use the max-w-full class to set the full width of the image as long as it doesn’t become larger than the original source.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Img src="/images/examples/image-1@2x.jpg" size="max-w-full" alt="sample 1" />
</div>
