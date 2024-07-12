<script lang="ts">
  import { P, A, Layout, Popover } from 'flowbite-svelte';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<h1>Paragraph</h1>

The paragraph element is one of the most commonly used HTML tags on a document page because it is used to write longer blocks of text separated by a blank line and can massively improve the on-page SEO of the page when used correctly. Get started with a collection of paragraph components based on multiple styles, layouts, colors and sizes to use for your website.

<h2>Default paragraph</h2>

Use this example of a paragraph element to use inside article content or a landing page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<P weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2>Leading paragraph</h2>

The leading text can be used as the first paragraph inside an article content page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3 md:text-xl" weight="light" size="lg" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work and deploy.</P>
<P weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
</div>

<h2>First letter</h2>

Use `firstupper` prop to highlight the first letter of the paragraph, often used in e-books and PDF documents.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" color="text-gray-500 dark:text-gray-400" firstupper>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<P weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2>Paragraph link</h2>

This example can be used to add a custom styled link element inside the paragraph.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <A href="/">Link issues across Jira</A> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
</div>

<h2>Paragraph bold</h2>

Use this example to highlight a piece of text inside the paragraph by using a bolder font weight.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <strong class="font-semibold text-gray-900 dark:text-white"> Link issues across Jira </strong>
  and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
</div>

<h2>Paragraph underline</h2>

This example can be used to underline a certain part of the text inside the paragraph.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <u class="underline"> Link issues across Jira </u>
  and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
</div>

<h2>Paragraph italic</h2>

Use this example to make the font style of the text inside the paragraph italic.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">
  Track work across the enterprise through an open, collaborative platform. <em class="font-italic"> Link issues across Jira </em>
  and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
</P>
</div>

<h2>Paragraph popover</h2>

Get started with this example to show a popover with extra information inside paragraph elements.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex h-96 items-end'>
<P weight="light" color="text-gray-500 dark:text-gray-400">
  Due to its central geographic location in Southern Europe, <A href="/" id="popover-image">Italy</A> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy
</P>
<Popover triggeredBy="#popover-image" class="w-96 text-sm font-light" defaultClass="">
  <div class="grid grid-cols-5">
    <div class="col-span-3 p-3">
      <div class="space-y-2">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">About Italy</h3>
        <p class="text-gray-500 dark:text-gray-400">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe.</p>
        <A href="/">Read more <ChevronRightOutline class="w-2 h-2 ms-1.5" /></A>
      </div>
    </div>
    <img src="/images/image-1.webp" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />
  </div>
</Popover>
</div>

<h2>Layout</h2>

Get started with examples of layouts for the paragraph component to separate content into multiple rows and columns.

<h3>One column</h3>

Use this example to show multiple paragraphs on a single line.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h3>Two columns even</h3>

Use this example to separate paragraphs into two columns for better readability.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Layout gap={6}>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</Layout>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h3>Three columns even</h3>

This example can be used to separate paragraphs into three separate columns.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</Layout>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h3>Two columns uneven</h3>

Use this example to separate paragraphs into two uneven columns.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Layout gap={6} cols="grid-cols-1 sm:grid-cols-3">
  <div class="col-span-2">
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
    <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
  </div>
  <P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</Layout>
<P class="mb-3" weight="light" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2>Text alignment</h2>

Align the paragraph component to the left (default), center or right side of the document page using the `text-left|center|right` utility class from Tailwind CSS.

<h3>Left</h3>

The default alignment of the paragraph is to the left side and you can use the `align="left"` prop to align it manually.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P align="left">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
</div>

<h3>Center</h3>

Use the `align="center"` prop to align the paragraph text to the center.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P align="center">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
</div>

<h3>Right</h3>

Use the `align="right"` prop to align the paragraph text the right side of the page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P align="right">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
</div>
