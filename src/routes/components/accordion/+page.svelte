<script lang="ts">
  import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline, CartSolid, CogOutline } from 'flowbite-svelte-icons';
  const items = Array(3);
  const open_all = () => items.forEach((_, i) => (items[i] = true));
  const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<h1>Accordion</h1>

<h2>Default accordion</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Accordion>
  <AccordionItem>
    <span slot="header">My Header 1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header">My Header 2</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
</div>

<h2>Always open</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion>
    <AccordionItem open>
      <span slot="header">Header 2-1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Header 2-2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2>Color option</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
    <AccordionItem class="">
      <span slot="header">Header 2-1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Header 2-2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2>Flush accordion</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion flush>
    <AccordionItem>
      <span slot="header">Header 2-1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Header 2-2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2>Arrow style</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion>
    <AccordionItem>
      <span slot="header">Header 2-1</span>
      <div slot="arrowup">
        <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
      </div>
      <span slot="arrowdown">
        <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
      </span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">Header 2-2</span>
      <div slot="arrowup">
        <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
      </div>
      <span slot="arrowdown">
        <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
      </span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2>Icon Accordion</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion>
    <AccordionItem>
      <span slot="header" class="text-base flex gap-2">
        <CartSolid class="mt-0.5" />
        <span>My Header 1</span>
      </span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
        and start websites even faster with components on top of Tailwind CSS.
      </p>
    </AccordionItem>
    <AccordionItem>
      <span slot="header" class="text-base flex gap-2">
        <CogOutline class="mt-0.5" />
        <span>My Header 2</span>
      </span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2>Multiple mode</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Button on:click={open_all}>Open all</Button>
<Button on:click={close_all}>Close all</Button>
<Accordion multiple class='mt-8'>
  <AccordionItem bind:open={items[0]}>
    <span slot="header">My Header 1</span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem bind:open={items[1]}>
    <div slot="header">My Header 2</div>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
  </AccordionItem>
  <AccordionItem bind:open={items[2]}>
    <div slot="header">My Header 3</div>
    <p>Something more</p>
  </AccordionItem>
</Accordion>
</div>

<h2>Custom transitions</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion>
    <AccordionItem>
      <span slot="header">My Header 1</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem transitionParams={{ duration: 2000 }}>
      <span slot="header">My Header 2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem transitionType="fade" transitionParams={{ duration: 1000 }}>
      <span slot="header">My Header 3</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</div>

<h2>Nesting accordians</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Accordion>
    <AccordionItem open>
      <span slot="header">My Header 1</span>
      <Accordion>
        <AccordionItem>
          <span slot="header">My Header 1</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </AccordionItem>
        <AccordionItem>
          <span slot="header">My Header 2</span>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
            <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
            <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
          </ul>
        </AccordionItem>
      </Accordion>
    </AccordionItem>
    <AccordionItem>
      <span slot="header">My Header 2</span>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
        <li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li>
        <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </AccordionItem>
  </Accordion>
</div>

