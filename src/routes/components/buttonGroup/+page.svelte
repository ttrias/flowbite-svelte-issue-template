<script lang="ts">
  import { ButtonGroup, Button, GradientButton } from 'flowbite-svelte';
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from 'flowbite-svelte-icons';

  const handleClick = () => {
    alert('Clicked');
  };
</script>

<h1>Button Group</h1>
<h2>Default</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<ButtonGroup class="*:!ring-primary-700">
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
</div>

<h2>More examples</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col flex-wrap gap-4'>
<div class="text-gray-900 dark:text-gray-100">
  <div class="py-4">Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill color="purple">Profile</Button>
    <Button pill color="purple">Settings</Button>
    <Button pill color="purple">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Standard buttons</div>
  <ButtonGroup>
    <Button color="red">Profile</Button>
    <Button color="green">Settings</Button>
    <Button color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Outline</div>
  <ButtonGroup>
    <Button outline color="red">Profile</Button>
    <Button outline color="green">Settings</Button>
    <Button outline color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Gradient with shadows</div>
  <ButtonGroup>
    <GradientButton shadow color="green">Profile</GradientButton>
    <GradientButton shadow color="pink">Settings</GradientButton>
    <GradientButton shadow color="teal">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <GradientButton color="purpleToBlue">Profile</GradientButton>
    <GradientButton color="cyanToBlue">Settings</GradientButton>
    <GradientButton color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
</div>
</div>

<h2>Button group as links</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center">
<ButtonGroup class="*:!ring-primary-700">
  <Button href="/">Profile</Button>
  <Button href="/">Settings</Button>
  <Button href="/">Messages</Button>
</ButtonGroup>
</div>

<h2>Group buttons with icons</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center">
  <ButtonGroup class="*:!ring-primary-700">
    <Button>
      <UserCircleSolid class="w-4 h-4 me-2" />
      Profile
    </Button>
    <Button>
      <AdjustmentsVerticalOutline class="w-4 h-4 me-2" />
      Settings
    </Button>
    <Button>
      <DownloadSolid class="w-4 h-4 me-2" />
      Download
    </Button>
  </ButtonGroup>
</div>

<h2>Outline</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center">
<ButtonGroup>
  <Button outline color="dark">Profile</Button>
  <Button outline color="dark">Settings</Button>
  <Button outline color="dark">Messages</Button>
</ButtonGroup>
</div>

<h2>Outline with icon</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center">
<ButtonGroup>
  <Button outline color="dark">
    <UserCircleSolid class="w-4 h-4 me-2" />
    Profile
  </Button>
  <Button outline color="dark">
    <AdjustmentsVerticalOutline class="w-4 h-4 me-2" />
    Settings
  </Button>
  <Button outline color="dark">
    <DownloadSolid class="w-4 h-4 me-2" />
    Download
  </Button>
</ButtonGroup>
</div>

<h2>Events</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center">
<ButtonGroup class="*:!ring-primary-700">
  <Button on:click={handleClick}>Click me</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
</div>