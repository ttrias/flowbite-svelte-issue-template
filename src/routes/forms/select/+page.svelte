<script lang="ts">
  import { Select, Label, Dropdown, DropdownItem, Badge, MultiSelect, Kbd, ArrowKeyDown, ArrowKeyUp } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import Usa from '../../utils/icons/Usa.svelte';
  import Germany from '../../utils/icons/Germany.svelte';
  import Italy from '../../utils/icons/Italy.svelte';
  import China from '../../utils/icons/China.svelte';
  import type { SelectOptionType } from 'flowbite-svelte';

  let countries: SelectOptionType<any>[] = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
  let selected = '';
  let states = [
    { value: 'CA', name: 'California' },
    { value: 'TX', name: 'Texas' },
    { value: 'WH', name: 'Washinghton' },
    { value: 'FL', name: 'Florida' },
    { value: 'VG', name: 'Virginia' },
    { value: 'GE', name: 'Georgia' },
    { value: 'MI', name: 'Michigan' }
  ];

  let selected2: SelectOptionType<any>[] = [];
  let countries2 = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    { value: 'jp', name: 'Japan' },
    { value: 'en', name: 'England' }
  ];
  let placeholder = 'placeholder text';
  let selected3 = ['us', 'fr'];
  let selected4: SelectOptionType<any>[] = [];
</script>

<h1>Select</h1>

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.


<h2>Select input example</h2> 

Get started with the default example of a select input component to get a single option selection.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
</div>

<h2>Disabled state</h2>

Apply the disable state to the select component to disallow the selection of new options.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label for="select-disabled" class="mb-2">Disabled select</Label>
<Select id="select-disabled" disabled items={countries} placeholder="You can't select anything..." />
</div>

<h2>Underline select</h2>

Use the underline style for the select component as an alternative appearance.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label for="select-underline" class="sr-only">Underline select</Label>
<Select id="select-underline" underline class="mt-2" items={countries} />
</div>

<h2>Select with dropdown</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-64'>
<div class="flex">
  <button id="states-button" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
    <Usa />
    USA
    <ChevronDownOutline class="w-6 h-6 ms-2" />
  </button>
  <Dropdown triggeredBy="#states-button">
    <DropdownItem class="flex items-center">
      <Usa />
      United States
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <Germany />
      Germany
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <Italy />
      Italy
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <China />
      China
    </DropdownItem>
  </Dropdown>
  <Select items={states} placeholder="Choose the state" class="!rounded-s-none" />
</div>
</div>

<h2>Sizes</h2>

Get started with the small, default, and large sizes for the select component from the example below.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label for="select-sm" class="mb-2">Small select</Label>
<Select id="select-sm" size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="mb-2">Default select</Label>
<Select id="select-md" size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="mb-2">Large select</Label>
<Select id="select-lg" size="lg" items={countries} class="mb-6" />
<p class="my-6"></p>
<Label for="select-sm" class="sr-only">Underline small select</Label>
<Select id="select-sm" underline size="sm" items={countries} class="mb-6" />
<Label for="select-md" class="sr-only">Underline default select</Label>
<Select id="select-md" underline size="md" items={countries} class="mb-6" />
<Label for="select-lg" class="sr-only">Underline large select</Label>
<Select id="select-lg" underline size="lg" items={countries} class="mb-6" />
</div>

<h2>Custom options</h2>

If you want custom options, put them directly inside the component and leave the `items` prop unset. Furthermore, if the default placeholder is not what you want, set the `placeholder` prop to `""`.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label for="countries">Select an option</Label>
<Select id="countries" class="mt-2" bind:value={selected} placeholder="">
  <option selected value="all">All</option>

  {#each countries as { value, name }}
    <option {value}>{name}</option>
  {/each}
</Select>
</div>

<h2>MultiSelect</h2>

<h3>Basic example</h3>

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-80'>
<MultiSelect items={countries2} bind:value={selected2} size="lg" />
</div>

<h3>Placeholder</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-80'>
<MultiSelect items={countries} bind:value={selected} size="lg" placeholder={placeholder} />
</div>

<h3>Pre-select values</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96'>
<MultiSelect items={countries} bind:value={selected3} />
</div>

<h3>Keyboard Usage</h3>

Some keyboard interaction was implemented. Use <Kbd class="p-1.5"><ArrowKeyUp class="inline-block"/></Kbd>/<Kbd class="p-1.5"><ArrowKeyDown class="inline-block"/></Kbd> to highlight an item, then press <Kbd class="p-1.5">Enter</Kbd> or <Kbd class="p-1.5">SpaceBar</Kbd> to toggle the highlighted item. Press <Kbd class="p-1.5">Esc</Kbd> to close the selection pop-up.

<h3>Customization</h3>

To customize the look and feel use the `slot` to insert inner [`Badge`](/docs/components/badge) component.

Remember to connect the `clear` slot's prop to trigger option removal.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96'>
<MultiSelect items={countries} bind:value={selected4} let:item let:clear>
  <Badge color={item.color} dismissable params={{ duration: 100 }} on:close={clear}>
    {item.name}
  </Badge>
</MultiSelect>
</div>
