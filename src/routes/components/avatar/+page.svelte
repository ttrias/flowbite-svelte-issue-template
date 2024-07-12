<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider, Tooltip } from 'flowbite-svelte';
</script>

<h1>Avatar</h1>
<h2>Default avatar</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<div class="flex space-x-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-2.webp" />
  <Avatar src="/images/profile-picture-2.webp" rounded />
</div>
</div>

<h2>Bordered</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center gap-4'>
  <Avatar src="/images/profile-picture-2.webp" border />
  <Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300" />
</div>

<h2>Placeholder</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center gap-4'>
  <Avatar />
  <Avatar rounded />
  <Avatar border />
  <Avatar rounded border />
</div>

<h2>Placeholder initials</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center gap-4'>
  <Avatar>JL</Avatar>
</div>

<h2>Avatar tooltip</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center gap-4'>
  <Avatar data-name="Jese Leos" rounded src="/images/profile-picture-1.webp" />
  <Tooltip>Jese Leos</Tooltip>
  <Avatar data-name="Robert Gouth" rounded src="/images/profile-picture-2.webp" />
  <Tooltip>Robert Gouth</Tooltip>
  <Avatar data-name="Bonnie Green" rounded src="/images/profile-picture-3.webp" />
  <Tooltip>Bonnie Green</Tooltip>
</div>

<h2>Dot indicator</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center gap-4'>
  <Avatar src="/images/profile-picture-3.webp" dot={{ color: 'red' }} />
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: 'top-right', color: 'red' }} rounded />
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right', color: 'green' }} />
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: 'bottom-right' }} rounded />

<Avatar dot={{}} />
</div>

<h2>Statcked</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 justify-center gap-4'>
<div class="flex mb-5">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked />
</div>
<div class="flex">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 text-sm">+99</Avatar>
</div>
</div>

<h2>Avatar text</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center gap-4'>
<div class="flex items-center space-x-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-1.webp" rounded />
  <div class="space-y-1 font-medium dark:text-white">
    <div>Jese Leos</div>
    <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
  </div>
</div>
</div>

<h2>User dropdown</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center h-96'>
  <Avatar id="user-drop" src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: 'green' }} />
<Dropdown triggeredBy="#user-drop">
  <DropdownHeader>
    <span class="block text-sm">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
</div>

<h2>Size</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex lex-wrap justify-center space-x-4 rtl:space-x-reverse mb-52'>
  <Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="md" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
  <Avatar src="/images/profile-picture-3.webp" rounded size="none" class="w-28 h-28" />
</div>