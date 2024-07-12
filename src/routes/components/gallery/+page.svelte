<script lang="ts">
  import { Gallery, Button } from 'flowbite-svelte';
  const images = [
    { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
    { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
    { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
    { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
    { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
    { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
  ];
  
  const images1 = [
    { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' }
  ];
  const images2 = [
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' }
  ];
  const images3 = [
    { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
    { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' }
  ];
  const images4 = [
    { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
    { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg' },
    { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
  ];
  const image5 = {
    alt: 'erbology',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  };
  const images6 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
  ];

  const images7 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' }
  ];

  const images8 = [
    { alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg' },
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
    { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
    { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
    { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
    { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
    { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
  ];

  const images9 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
  ];
</script>

<h1>Gallery</h1>

The gallery component can be used to show multiple images inside a masonry grid layout styles with the utility-first classes from Tailwind CSS to show a collection of pictures to your users based on various layouts, styles, sizes, and colors.

This component is recommended for usage within marketing UI interfaces and website sections when you want to show pictures of your team members, office pictures, or even case study images.

<h2>Default gallery</h2>

Use this component to show a collection of images inside a gallery.

Number of rows in the gallery is set by passing the `grid-cols-n` Tailwind class (including the reactive prefix). Spacing between images is set by `gap-n` class. If you don't set them it behaves like `grid-cols-1` and `gap:inherit`.

Example below show a gallery with three pictures on a row.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
</div>

<h2>Masonry grid</h2>

This example can be used to show the images inside a masongry grid layouts with four columns.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
  <Gallery items={images1} />
  <Gallery items={images2} />
  <Gallery items={images3} />
  <Gallery items={images4} />
</Gallery>
</div>

<h2>Featured image</h2>

This example can be used to feature the most important image and show a row of five pictures below.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<Gallery class="gap-4">
  <img src={image5.src} alt={image5.alt} class="h-auto max-w-full rounded-lg" />
  <Gallery class="grid-cols-5" items={images6} />
</Gallery>
</div>

<h2>Quad gallery</h2>

Use this example to show four larger images with two items on a row.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<Gallery class="gap-2 grid-cols-2" items={images7} />
</div>

<h2>Gallery with tag filters</h2>

Use this example to show a list of tags and filter the images below based on the activately selected tag.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto">
  <Button pill size="xl" outline>All categories</Button>
  <Button pill size="xl" color="alternative">Shoes</Button>
  <Button pill size="xl" color="alternative">Bags</Button>
  <Button pill size="xl" color="alternative">Electronics</Button>
  <Button pill size="xl" color="alternative">Gaming</Button>
</div>

<Gallery items={images8} class="gap-4 grid-cols-2 md:grid-cols-3" />
</div>

<h2>Heterogeneous gallery</h2>

Gallery items don't have to be all the same but then you need to list them manually - don't set the `items` property.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<Gallery class="gap-4 grid-cols-2">
  <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="h-auto max-w- rounded-lg" />
  <div class="h-auto max-w- rounded-lg flex items-center justify-center text-6xl font-extrabold bg-red-300">Sale</div>
  <div class="h-auto max-w- rounded-lg flex items-center justify-center text-6xl font-extrabold bg-blue-300">Sale</div>
  <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="h-auto max-w- rounded-lg" />
</Gallery>
</div>

<h2>Custom image rendering</h2>

This example shows how to get a complete control over the gallery images look and feel.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap gap-2'>
<Gallery class="gap-4 grid-cols-3" items={images9} let:item>
  <div class="ring-4 ring-red-600 dark:ring-red-400 p-1">
    <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
  </div>
</Gallery>
</div>
