<script lang="ts">
  import { Indicator, Avatar, Badge, Button } from 'flowbite-svelte';
  import { EnvelopeSolid, CheckCircleSolid } from 'flowbite-svelte-icons';
</script>

<h1>Indicator</h1>

The indicator component can be used as a small element positioned absolutely relative to another component such as a button or card and show a number count, account status (red for offline, green for online) and other useful information.



<h2>Default indicator</h2>

Use this example to create a simple indicator with multiple colors and position it anywhere on the website.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex gap-2'>
<Indicator color="gray" />
<Indicator color="dark" />
<Indicator color="orange" />
<Indicator color="blue" />
<Indicator color="green" />
<Indicator color="red" />
<Indicator color="purple" />
<Indicator color="indigo" />
<Indicator color="yellow" />
<Indicator color="teal" />
</div>

<h2>Legend indicator</h2>

This example can be used as a legend indicator for charts to also add a text next to the bullet point.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 text-sm font-medium text-gray-900 dark:text-white flex gap-2'>
<span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>
<span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>
<span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>
<span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>
</div>

<h2>Indicator count</h2>

This example can be used to show a number count inside the indicator and position it relative to a button component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<Button size="lg" class="relative">
  <EnvelopeSolid class="w-6 h-6 me-2 text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  Messages
  <Indicator color="red" border size="xl" placement="top-right">
    <span class="text-white text-xs font-bold">8</span>
  </Indicator>
</Button>
</div>

<h2>Status indicator</h2>

Use this example to show a status indicator for the currently logged in user by showing red for offline and green for online.

`Avatar` component uses `Indicator` internally as parameter `dot`. You can pass all props accepted by `Indicator` component as an object.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 gap-2'>
<Avatar src="/images/profile-picture-5.webp" dot={{ color: 'green', size: 'lg', placement: 'top-right' }} />
<Avatar src="/images/profile-picture-5.webp" dot={{ color: 'red', size: 'lg', placement: 'top-right' }} />
</div>

<h2>Badge indicator</h2>

This example can be used to add an indicator inside of a badge component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 gap-2'>
<ul class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700 w-full">
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Neil Sims</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <Badge color="green" rounded class="px-2.5 py-0.5">
        <Indicator color="green" size="xs" class="me-1" />Available
      </Badge>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <div class="flex-shrink-0">
        <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">Bonnie Green</p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@flowbite.com</p>
      </div>
      <Badge color="red" rounded class="px-2.5 py-0.5">
        <Indicator color="red" size="xs" class="me-1" />Unavailable
      </Badge>
    </div>
  </li>
</ul>
</div>

<h2>Stepper indicator</h2>

You can also use the indicators inside of a stepper component when completing a form element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-8'>
<ol class="flex items-center">
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-300" />
      </Indicator>
      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
    </div>
  </li>
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-300" />
      </Indicator>
      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <CheckCircleSolid class="w-6 h-6 text-primary-600 dark:text-primary-300" />
      </Indicator>
      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <CheckCircleSolid class="w-6 h-6 text-gray-800 dark:text-gray-300" />
      </Indicator>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
    </div>
  </li>
</ol>
<ol class="flex items-center">
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <Indicator color="orange" />
      </Indicator>
      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
    </div>
  </li>
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <Indicator color="orange" />
      </Indicator>
      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="none" class="bg-primary-200 dark:bg-primary-900 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <Indicator color="orange" />
      </Indicator>
      <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
    </div>
  </li>
  <li class="relative w-full mb-6">
    <div class="flex items-center">
      <Indicator size="xl" color="gray" class="dark:bg-gray-700 z-10 ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0">
        <Indicator color="dark" class="dark:!bg-gray-300" />
      </Indicator>
    </div>
    <div class="mt-3">
      <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
    </div>
  </li>
</ol>
</div>

<h2>Indicator position</h2>

Use these examples to position the indicator component anywhere relative to the parent element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex gap-4'>
<div class="w-56 h-56 relative bg-gray-100 borer border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
  <Indicator placement="top-left" color="gray" />
  <Indicator placement="top-center" color="dark" />
  <Indicator placement="top-right" color="orange" />
  <Indicator placement="center-left" color="green" />
  <Indicator placement="center" color="red" />
  <Indicator placement="center-right" color="purple" />
  <Indicator placement="bottom-left" color="indigo" />
  <Indicator placement="bottom-center" color="yellow" />
  <Indicator placement="bottom-right" color="teal" />
</div>
</div>
