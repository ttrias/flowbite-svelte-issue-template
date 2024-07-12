<script lang="ts">
  import { Badge, Indicator, Button } from 'flowbite-svelte';
  import { ClockSolid, EnvelopeSolid, CheckOutline, CloseCircleSolid } from 'flowbite-svelte-icons';
  function handleClose(event: MouseEvent) {
    alert('Badge dismissed');
  }
</script>

<h1>Badge</h1>
<h2>Default Badge</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge>Default</Badge>
<Badge color="dark">Dark</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
</div>

<h2>Larger badges</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge large>Default</Badge>
<Badge large color="dark">Dark</Badge>
<Badge large color="red">Red</Badge>
<Badge large color="green">Green</Badge>
<Badge large color="yellow">Yellow</Badge>
<Badge large color="indigo">Indigo</Badge>
<Badge large color="purple">Purple</Badge>
<Badge large color="pink">Pink</Badge>
</div>

<h2>Bordered badge</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge border>Default</Badge>
<Badge border color="dark">Dark</Badge>
<Badge border color="red">Red</Badge>
<Badge border color="green">Green</Badge>
<Badge border color="yellow">Yellow</Badge>
<Badge border color="indigo">Indigo</Badge>
<Badge border color="purple">Purple</Badge>
<Badge border color="pink">Pink</Badge>
</div>

<h2>Pills badge</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge rounded>Default</Badge>
<Badge rounded color="dark">Dark</Badge>
<Badge rounded color="red">Red</Badge>
<Badge rounded color="green">Green</Badge>
<Badge rounded color="yellow">Yellow</Badge>
<Badge rounded color="indigo">Indigo</Badge>
<Badge rounded color="purple">Purple</Badge>
<Badge rounded color="pink">Pink</Badge>
</div>

<h2>Badges as links</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge href="/">Badge link</Badge>
<Badge href="/" large>Badge link</Badge>
<Badge href="/" border>Badge link</Badge>
<Badge href="/" rounded>Badge link</Badge>
</div>

<h2>Badges with icon</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge color="dark" border>
    <ClockSolid class="w-2.5 h-2.5 me-1.5" />
    3 days ago
  </Badge>
  <Badge border>
    <ClockSolid class="text-primary-800 dark:text-primary-400 w-2.5 h-2.5 me-1.5" />
    2 minutes ago
  </Badge>
</div>

<h2>Notification badge</h2>
<div class='flex gap-4'>
  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
  </Button>
  
  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
  </Button>
  
  <Button class="relative" size="sm">
    <EnvelopeSolid class="text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    <Indicator color="dark" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
  </Button>
</div>

<h2>Button with badge</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Button>
    Messages
    <Badge rounded class="w-4 h-4 ms-2 p-0 font-semibold text-primary-800 bg-white dark:text-primary-800 dark:bg-white">2</Badge>
  </Button>
</div>

<h2>Badge with icon only</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge color="dark" rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-3 w-3" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-3 w-3 text-primary-800 dark:text-primary-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
</div>

<h2>Dismissable badges Transition NOT WORKING</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge dismissable large>Default</Badge>
<Badge dismissable large color="dark">Dark</Badge>
<Badge dismissable large color="red">Red</Badge>
<Badge dismissable large color="green">Green</Badge>
<Badge dismissable large color="yellow">Yellow</Badge>
<Badge dismissable large color="indigo">Indigo</Badge>
<Badge dismissable large color="purple">Purple</Badge>
<Badge dismissable large color="pink">Pink</Badge>
</div>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge dismissable>
    Default
    <button slot="close-button" let:close on:click={close} type="button" class="inline-flex items-center rounded-full p-0.5 my-0.5 ms-1.5 -me-1.5 text-sm bg-primary-500 dark:bg-primary-400 text-white dark:text-primary-800 hover:bg-primary-900 hover:text-white dark:hover:bg-red-900 dark:hover:text-yellow-300" aria-label="Remove">
      <CloseCircleSolid class="h-4 w-4" />
      <span class="sr-only">Remove badge</span>
    </button>
  </Badge>
</div>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Badge dismissable large on:close={handleClose}>Default</Badge>
</div>