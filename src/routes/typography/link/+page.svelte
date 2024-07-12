<script lang="ts">
  import { A, P, Button, Card } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import Figma from '../../utils/Figma.svelte';
</script>

Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons, cards, inside paragraphs, and more.

Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning user.

<h2>Default link</h2>

Use this example to set default styles to an inline link element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<A class="font-medium hover:underline">Read more</A>
</div>

<h2>Button</h2>

This example can be used to set a hyperlink on a button component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Button href="/">Read more</Button>
</div>

<h2>Paragraph</h2>

Use this example to set a link inside a paragraph with an underline style.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>
  The free updates that will be provided is based on the <A href="/" class="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
</P>
</div>

<h2>Icon link</h2>

This example can be used to set a custom SVG icon inside the hyperlink element.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>
  500,000 people have made over a million apps with Glide.
  <A href="/" textColor="text-primary-600 dark:text-primary-500" aClass="inline-flex items-center font-medium  hover:underline">
    Read their stories
    <ArrowRightOutline class="w-6 h-6 ms-2" />
  </A>
</P>
</div>

<h2>CTA link</h2>

Use this example to set a hyperlink on a CTA element with text and a custom icon.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<A textColor="text-gray-500 dark:text-gray-400 dark:hover:text-white" aClass="inline-flex justify-center items-center p-5 text-base font-medium bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
  <Figma />
  <span class="w-full ms-3">Get started with our Figma Design System</span>
  <ArrowRightOutline class="w-6 h-6 ms-2" />
</A>
</div>

<h2>Card link</h2>

Use this example to set a hyperlink on a card component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
</div>

<h2>Image link</h2>

This example can be used to set a hyperlink on an image inside a card component.
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Card img="/images/image-1.webp" href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <Button>
    Read more <ArrowRightOutline class="w-6 h-6 ms-2" />
  </Button>
</Card>
</div>
