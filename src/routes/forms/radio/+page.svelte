<script lang="ts">
  import { Radio, RadioButton, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Label, Helper, Dropdown, Button, ButtonGroup } from 'flowbite-svelte';
  import { ChevronDownOutline, ArrowRightOutline, ListMusicSolid, OrderedListOutline, ListOutline } from 'flowbite-svelte-icons';

  let radioGroup = "notes";
  let group3 = 2;
  let selectedValue = "2";
  let selectedValue2 = "2";
  let selectedValue3 = "2";
  let technology = 'svelte';
  let inline1 = 'second';
  let inline2 = 'third';
  let colors = "text-purple-500";
</script>

<h1>Radio</h1>

The radio component can be used to allow the user to choose a single option from one or more available options coded with the utility classes from Tailwind CSS and available in multiple styles, variants, and colors and support dark mode.

<h2>Radio examples</h2>

Use the default example of a radio component with the checked and unchecked state.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Radio name="example1" value="1" bind:group={selectedValue}>Default radio</Radio>
<Radio name="example1" value="2" bind:group={selectedValue}>Checked state</Radio>
</div>

<h2>Disabled state</h2>

Apply the `disabled` attribute to the radio component to disallow the selection for the user.

This example can be used for the disabled state of the radio component by applying the disabled attribute to the input element.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Radio name="disabled-state" disabled value="1" bind:group={selectedValue2}>Disabled radio</Radio>
<Radio name="disabled-state" disabled value="2" bind:group={selectedValue2}>Disabled checked</Radio>
</div>

<h2>Alternative syntax</h2>

If you need separate control over the label and the radio you can use the verbose syntax, but then you need to take care about aligning manually.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Label for="radio1">Default radio</Label></TableBodyCell>
      <TableBodyCell><Label for="radio2">Disabled radio</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Radio name="separate" id="radio1" /></TableBodyCell>
      <TableBodyCell><Radio name="separate" id="radio2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Radio name="separate" class="ms-2" />
</Label>
</div>

<h2>Radio with a link</h2>

Use this example if you want to add an anchor link inside the label of the radio component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Radio name="with-link">
  I agree with the <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline ms-1"> terms and conditions </a>
  .
</Radio>
</div>

<h2>Helper text</h2>

Get started with this example if you want to add a secondary helper text for the radio component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Radio aria-describedby="helper-checkbox-text">Free shipping via Flowbite</Radio>
<Helper id="helper-checkbox-text" class="ps-6">For orders shipped from $25 in books or $29 in other categories</Helper>
</div>

<h2>Bordered</h2>

Use this example of a radio inside a card element to enable a larger area of clicking activation.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="grid grid-cols-2 gap-6">
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" value="1" bind:group={selectedValue3} class="w-full p-4">Default radio</Radio>
  </div>
  <div class="rounded border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" value="2" bind:group={selectedValue3} class="w-full p-4">Checked state</Radio>
  </div>
</div>
</div>

<h2>Radio list group</h2>

Use this example to show a list of radio items grouped inside a card.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">
  Technology <span class="capitalize">{technology}</span>
</p>
<ul class="w-48 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600">
  <li><Radio class="p-3" bind:group={technology} value="svelte">Svelte</Radio></li>
  <li><Radio class="p-3" bind:group={technology} value="vue js">Vue JS</Radio></li>
  <li><Radio class="p-3" bind:group={technology} value="react">React</Radio></li>
  <li><Radio class="p-3" bind:group={technology} value="angular">Angular</Radio></li>
</ul>
</div>

<h2>Horizontal list group</h2>

Use this example to show a list of radio items inside a card horizontally.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>
<ul class="items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-800 dark:border-gray-600 divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-600">
  <li class="w-full"><Radio name="hor-list" class="p-3">Svelte</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">Vue JS</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">React</Radio></li>
  <li class="w-full"><Radio name="hor-list" class="p-3">Angular</Radio></li>
</ul>
</div>

<h2>Radio in dropdown</h2>

Here’s an example of a list group that you can use right away.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center items-start h-80'>
<Button>Dropdown radio<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
<Dropdown class="w-60">
  <ul class="p-2">
    <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
    <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
      <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
      <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
    </li>
  </ul>
</Dropdown>
</div>

<h2>Inline layout</h2>

You can align the radio elements horizontally by using a wrapper tag and applying the flex class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="flex gap-3">
  <Radio bind:group={inline1} value="first">Inline 1</Radio>
  <Radio bind:group={inline1} value="second">Inline 2 checked</Radio>
  <Radio bind:group={inline1} value="third">Inline 3</Radio>
  <Radio bind:group={inline1} value="fourth" disabled>Inline disabled</Radio>
</div>
</div>

You can use the property `inline` as the alternative.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Radio bind:group={inline2} inline value="first" class="me-2">Inline 1</Radio>
<Radio bind:group={inline2} inline value="second" class="me-2">Inline 2</Radio>
<Radio bind:group={inline2} inline value="third" class="me-2">Inline checked</Radio>
<Radio bind:group={inline2} inline value="fourth" class="me-2" disabled>Inline disabled</Radio>
</div>

<h2>Colors</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-4 font-semibold {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color="red" value="text-red-500">Red</Radio>
  <Radio bind:group={colors} color="green" value="text-green-500">Green</Radio>
  <Radio bind:group={colors} color="purple" value="text-purple-500">Purple</Radio>
  <Radio bind:group={colors} color="teal" value="text-teal-500">Teal</Radio>
  <Radio bind:group={colors} color="yellow" value="text-yellow-500">Yellow</Radio>
  <Radio bind:group={colors} color="orange" value="text-orange-500">Orange</Radio>
</div>
</div>

<h2>Advanced layout</h2>

Use this example of an advanced layout of radio elements where the label parent element can be styled when the radio is checked.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>
<div class="grid gap-6 w-full md:grid-cols-2">
  <Radio name="custom" custom>
    <div class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div>
        <div class="w-full text-lg font-semibold">0-50 MB</div>
        <div class="w-full">Good for small websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-10 h-10" />
    </div>
  </Radio>
  <Radio name="custom" custom>
    <div id="hosting-big" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="block">
        <div class="w-full text-lg font-semibold">500-1000 MB</div>
        <div class="w-full">Good for large websites</div>
      </div>
      <ArrowRightOutline class="ms-3 w-10 h-10" />
    </div>
  </Radio>
</div>
</div>

<h2>RadioButton</h2>  

The special case component - `RadioButton` - is the `Radio` with the [Button](/docs/components/buttons) look and feel. I can be used as standalone element or be wrapped inside [ButtonGroup](/docs/components/button-group).

This component accepts all props from the [Button](/docs/components/buttons) for styling and `Radio` for behaviour.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<div>
  <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid class="w-7 h-7" /></RadioButton>
  <RadioButton value={"numbers"} bind:group={radioGroup}><OrderedListOutline class="w-7 h-7"/></RadioButton>
  <RadioButton value={"bullets"} bind:group={radioGroup}><ListOutline class="w-7 h-7"/></RadioButton>
</div>

<ButtonGroup>
  <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid class="w-7 h-7"/></RadioButton>
  <RadioButton value={"numbers"} bind:group={radioGroup}><OrderedListOutline class="w-7 h-7"/></RadioButton>
  <RadioButton value={"bullets"} bind:group={radioGroup}><ListOutline class="w-7 h-7"/></RadioButton>
</ButtonGroup>

<p>List style: {radioGroup}</p>
</div>
