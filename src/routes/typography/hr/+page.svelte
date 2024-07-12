<script lang="ts">
  import { Hr, P, Blockquote } from 'flowbite-svelte';
  import { QuoteSolid } from 'flowbite-svelte-icons';
</script>

The `Hr` component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

<h2>Default HR</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr classHr="my-8" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2>Trimmed</h2>

Use this example to show a shorter version of the horizontal line.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr classHr="w-48 h-1 mx-auto my-4 rounded md:my-10" />
<P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<h2>Icon HR</h2>

This example can be used to set a custom SVG icon in the middle of the HR element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr classHr="my-8 w-64 h-1" icon>
    <QuoteSolid class="w-6 h-6 text-gray-700 dark:text-gray-300" />
  </Hr>
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>
</div>

<h2>HR with text</h2>

Use this example to add a text in the middle of the HR component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Hr classHr="my-8 w-64">or</Hr>
  <P>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>
</div>

<h2>HR shape</h2>

This example can be used to separate content with a HR tag as a shape instead of a line.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<Hr classHr="my-8 mx-auto w-8 h-8" />
<Blockquote alignment="center">
  <p>"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
</Blockquote>
</div>
