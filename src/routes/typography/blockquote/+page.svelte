<script lang="ts">
  import { P, A, Heading, Blockquote, Rating } from 'flowbite-svelte'; 
  import { QuoteSolid } from 'flowbite-svelte-icons';
</script>

<h1>Blockquote</h1>
Get started with Blockquote component when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

<h2>Default blockquote</h2>

Use this example to quote an external source inside a blockquote element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h2>Solid background</h2>

This example can be used as an alternative style to the default one by applying a solid background color.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P color="text-gray-500 dark:text-gray-400">Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>
<Blockquote border bg class="p-4 my-4">
  <P size="xl" height="relaxed">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</P>
</Blockquote>
<P color="text-gray-500 dark:text-gray-400">First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>
</div>

Blockquote icon

Use this example to show an icon above the blockquote text content.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote size="xl">
  <QuoteSolid class="w-10 h-10 text-gray-400 dark:text-gray-600" />
  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
</Blockquote>
</div>

<h2>Paragraph context</h2>

Use this example to show a blockquote component between multiple paragraph elements.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
  <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Blockquote class="mb-3" size="xl">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote>
</div>
<P class="mb-3" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2>User testimonial</h2>

This example can be used for user testimonials by mentioning the author and occupation of the author.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<figure class="mx-auto max-w-screen-md text-center">
  <QuoteSolid class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" />
  <Blockquote alignment="center" size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
  <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />
    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
    </div>
  </figcaption>
</figure>
</div>

<h2>User Review</h2>

Use this example to show a user review with rating stars and the name and occupation of the author.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<figure class="max-w-screen-md">
  <div class="flex items-center mb-4 text-yellow-300">
    <Rating total={5} rating={4.66} ceil size={24} />
  </div>
  <Blockquote italic={false} size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
  <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />
    <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
    </div>
  </figcaption>
</figure>
</div>

<h2>Alignment</h2>

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

<h3>Left</h3>

The default alignment of the blockquote text content is the left side of the document.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h2>Center</h2>
Use the `alignment="center"` prop to align the text content inside the blockquote to the center.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote alignment="center" size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h2>Right</h2>

Use the `alignment="right"` prop to align the blockquote text content to the right side of the page.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote alignment="right" size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h2>Sizes</h2>

<h3>Small</h3>

Use the `size="lg"` prop to apply the small size for the blockquote component. You can use any size from `xs` to `9xl`. See more details in the Prop section below.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote size="lg">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h3>Medium</h3>

Use the `size="xl"` to set the default size for the blockquote element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>

<h3>Large</h3>

The `size="2xl"` prop can be used to set a large size for the blockquote component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Blockquote size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
</div>