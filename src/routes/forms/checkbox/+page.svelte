<script lang="ts">
  import { Checkbox, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, Label, TableBodyRow, Helper, Dropdown, DropdownItem, Button, Search, CheckboxButton, ButtonGroup  } from 'flowbite-svelte';
  import { ChevronDownOutline, UserRemoveSolid, AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from 'flowbite-svelte-icons';
  import React from '../../utils/icons/React.svelte';
  import Vue from '../../utils/icons/Vue.svelte';
  import Angular from '../../utils/icons/Angular.svelte';
  type CheckboxItem = {
    value: string;
    label: string; 
    isChecked?: boolean; 
  };
  let choices = [
    { value: '1', label: 'One'},
    { value: '2', label: 'Two'},
    { value: '3', label: 'Three' }
  ]
  let group = ['2', '3'];
</script>

<h1>Checkbox</h1>
The checkbox component can be used to receive one or more selected options from the user in the form of a square box available in multiple styles, sizes, colors, and variants.

<h2>Checkbox examples</h2>

Use this default example of a checbkox element in a checked, unchecked and indeterminate state.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
<Checkbox indeterminate>Indeterminate state</Checkbox>
</div>

<h2>Disabled state</h2>

This example can be used for the disabled state of the checkbox component by applying the disabled attribute to the input element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Checkbox disabled>Disabled checkbox</Checkbox>
<Checkbox disabled checked>Disabled checked</Checkbox>
<Checkbox disabled indeterminate>Disabled indeterminate</Checkbox>
</div>

<h2>Alternative syntax</h2>

If you need separate control over the label and the checkbox you can use the verbose syntax, but then you need to take care about aligning manually.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
NOT WORKING

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Checkbox class="ms-2" />
</Label>
</div>

<h2>Checkbox with a link</h2>

Use this example if you want to add an anchor link inside the label of the checkbox component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Checkbox>
  I agree with the
  <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ms-1">terms and conditions</a>
  .
</Checkbox>
</div>

<h2>Helper text</h2>

Get started with this example if you want to add a secondary helper text for the checkbox component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Checkbox aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Checkbox>
<Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
</div>

<h2>Bordered</h2>

Use this example of a checkbox inside a card element to enable a larger area of clicking activation.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="rounded border border-gray-200 dark:border-gray-700">
  <Checkbox class="w-full p-4">Default radio</Checkbox>
</div>
<div class="rounded border border-gray-200 dark:border-gray-700">
  <Checkbox checked class="w-full p-4">Checked state</Checkbox>
</div>
</div>

<h2>Checkbox list group</h2>

Use this example to show a list of checkbox items grouped inside a card.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
  <li><Checkbox class="p-3">svelte</Checkbox></li>
  <li><Checkbox class="p-3">Vue JS</Checkbox></li>
  <li><Checkbox class="p-3">React</Checkbox></li>
  <li><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
</div>

<h2>Horizontal list group</h2>

Use this example to show a list of checkbox items inside a card horizontally.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
  <li class="w-full"><Checkbox class="p-3">Svelte</Checkbox></li>
  <li class="w-full"><Checkbox class="p-3">Vue JS</Checkbox></li>
  <li class="w-full"><Checkbox class="p-3">React</Checkbox></li>
  <li class="w-full"><Checkbox class="p-3">Angular</Checkbox></li>
</ul>
</div>

<h2>Checkbox dropdown</h2>

Use this example to show a list of checkbox items inside a dropdown menu.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center items-start h-96'>
<Button>Project users<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
<Dropdown containerClass="overflow-y-auto px-3 pb-3 text-sm h-44">
  <div slot="header" class="p-3">
    <Search size="md" />
  </div>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Robert Gouth</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Jese Leos</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox checked>Bonnie Green</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Jese Leos</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Robert Gouth</Checkbox>
  </li>
  <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Bonnie Green</Checkbox>
  </li>
  <a slot="footer" href="/" class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
    <UserRemoveSolid class="w-5 h-5 me-1" />Delete user
  </a>
</Dropdown>
</div>

<h2>Inline layout</h2>

You can align the checkbox elements horizontally by using a wrapper tag and applying the flex class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="flex gap-3">
  <Checkbox>Inline 1</Checkbox>
  <Checkbox>Inline 2</Checkbox>
  <Checkbox checked>Inline checked</Checkbox>
  <Checkbox disabled>Inline disabled</Checkbox>
</div>
</div>

You can use the property `inline` as the alternative.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Checkbox inline class="me-2">Inline 1</Checkbox>
<Checkbox inline class="me-2">Inline 2</Checkbox>
<Checkbox inline class="me-2" checked>Inline checked</Checkbox>
<Checkbox inline class="me-2" disabled>Inline disabled</Checkbox>
</div>

<h2>Colors</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="flex gap-4">
  <Checkbox checked color="red">Red</Checkbox>
  <Checkbox checked color="green">Green</Checkbox>
  <Checkbox checked color="purple">Purple</Checkbox>
  <Checkbox checked color="teal">Teal</Checkbox>
  <Checkbox checked color="yellow">Yellow</Checkbox>
  <Checkbox checked color="orange">Orange</Checkbox>
  <Label class="flex items-center">
    <Checkbox checked inline class="text-sky-400 focus:ring-pink-500" />
    Your custom color
  </Label>
</div>
</div>

<h2>CheckboxButton</h2>

The special case component - `CheckboxButton` - is the `Checkbox` with the [Button](/docs/components/buttons) look and feel. I can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Checkbox` for behaviour.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
  <div>
    <CheckboxButton><AppleSolid class="w-6 h-6 me-2"/>Apple</CheckboxButton>
    <CheckboxButton><FacebookSolid class="w-6 h-6 me-2"/>Facebook</CheckboxButton>
    <CheckboxButton><DiscordSolid class="w-6 h-6 me-2"/>Discord</CheckboxButton>
    <CheckboxButton><DropboxSolid class="w-6 h-6 me-2"/>Dropbox</CheckboxButton>
  </div>

  <ButtonGroup>
    <CheckboxButton><AppleSolid class="w-6 h-6 me-2"/>Apple</CheckboxButton>
    <CheckboxButton><FacebookSolid class="w-6 h-6 me-2"/>Facebook</CheckboxButton>
    <CheckboxButton><DiscordSolid class="w-6 h-6 me-2"/>Discord</CheckboxButton>
    <CheckboxButton><DropboxSolid class="w-6 h-6 me-2"/>Dropbox</CheckboxButton>
  </ButtonGroup>
</div>

<h2>Advanced layout</h2>

Use this example of an advanced layout of checkbox elements where the label parent element can be styled when the checkbox is checked.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid gap-6 w-full md:grid-cols-3">
  <Checkbox custom>
    <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <React />
      <div class="w-full text-lg font-semibold">React Js</div>
      <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Vue />
      <div class="w-full text-lg font-semibold">Vue Js</div>
      <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
    </div>
  </Checkbox>
  <Checkbox custom>
    <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Angular />
      <div class="w-full text-lg font-semibold">Angular</div>
      <div class="w-full text-sm">A TypeScript-based web application framework.</div>
    </div>
  </Checkbox>
</div>
</div>

<h2>Group variable</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <div class="flex gap-2">
    <Checkbox name="flavours" {choices} bind:group groupInputClass='ms-2'/>
  </div>
  <div class="my-2 border border-gray-200 dark:border-gray-700 rounded-lg p-2 w-44 dark:text-gray-400">Group: {group}</div>
  <Button on:click={() => (group.length = 0)}>Clear</Button>
</div>
