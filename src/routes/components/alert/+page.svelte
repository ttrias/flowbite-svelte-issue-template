<script lang="ts">
  import { Alert, Li, List, Button  } from 'flowbite-svelte';
  import { InfoCircleSolid, EyeSolid } from 'flowbite-svelte-icons';
  import { fly } from 'svelte/transition';
</script>

<h1>Alert</h1>
<h2>Default alert</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<Alert>
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
</div>

<h2>Alert with icons</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<Alert>
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
</div>

<h2>Bordered alert</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<Alert border>
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="blue">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="red">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="green">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="yellow">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="dark">
  <InfoCircleSolid slot="icon" class="w-5 h-5" />
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
</div>

<h2>Alerts with list </h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
  <Alert class="!items-start">
    <span slot="icon">
      <InfoCircleSolid class="w-5 h-5" />
      <span class="sr-only">Info</span>
    </span>
    <p class="font-medium">Ensure that these requirements are met:</p>
    <ul class="mt-1.5 ms-4 list-disc list-inside">
      <li>At least 10 characters (and up to 100 characters)</li>
      <li>At least one lowercase character</li>
      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </Alert>
  <Alert color="blue" class="!items-start">
    <span slot="icon">
      <InfoCircleSolid class="w-5 h-5" />
      <span class="sr-only">Info</span>
    </span>
    <p class="font-medium">Ensure that these requirements are met:</p>
    <List class="mt-1.5 ms-4">
      <Li>At least 10 characters (and up to 100 characters)</Li>
      <Li>At least one lowercase character</Li>
      <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
    </List>
  </Alert>
</div>

<h2>Dismissable alerts</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
  <Alert dismissable>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    A simple default alert with an
    <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="blue" dismissable>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    A simple info alert with an
    <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="red" dismissable>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    A simple info alert with an
    <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="green" dismissable>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    A simple info alert with an
    <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
    . Give it a click if you like.
  </Alert>
  <Alert color="yellow" dismissable transition={fly} params={{ x: 200 }}>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    An alert with non default animation - fly away.
  </Alert>
  <Alert color="dark" dismissable>
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    An alert with the custom dismissal button.
    <Button slot="close-button" size="xs" let:close on:click={close} class="ms-auto">Dissmiss</Button>
  </Alert>
</div>

<h2>Border accent</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
  <Alert rounded={false} class="border-t-4">
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="red" rounded={false} class="border-t-4">
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    <span class="font-medium">Danger alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="green" rounded={false} class="border-t-4">
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    <span class="font-medium">Success alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="yellow" rounded={false} class="border-t-4">
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    <span class="font-medium">Warning alert!</span>
    Change a few things up and try submitting again.
  </Alert>
  <Alert color="dark" rounded={false} class="border-t-4 flex-row-reverse">
    <InfoCircleSolid slot="icon" class="w-5 h-5" />
    <span class="font-medium">Dark alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>

<h2>Additional content</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
  <Alert>
    <div class="flex items-center gap-3">
      <InfoCircleSolid class="w-5 h-5" />
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <div class="flex gap-2">
      <Button size="xs"><EyeSolid class="w-4 h-4 me-2" />View more</Button>
      <Button size="xs" outline>Go to Home</Button>
    </div>
  </Alert>
  <Alert color="green">
    <div class="flex items-center gap-3">
      <InfoCircleSolid class="w-5 h-5" />
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mt-2 mb-4 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <div class="flex gap-2">
      <Button size="xs" color="green"><EyeSolid class="w-4 h-4 me-2" />View more</Button>
      <Button size="xs" outline color="green">Go to Home</Button>
    </div>
  </Alert>
</div>