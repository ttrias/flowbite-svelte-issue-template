<script lang="ts">
  import { Label, Input, Helper, ButtonGroup, Textarea, Select, MultiSelect, Checkbox, Radio, Fileupload, Toggle, InputAddon } from 'flowbite-svelte';
  
  import { EnvelopeSolid, UserCircleSolid } from 'flowbite-svelte-icons';
  let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Leave a comment...'
  };

  let selected: string | undefined;

  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
 
  let selected2: string[] = [];
  let countries2 = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    { value: 'jp', name: 'Japan' },
    { value: 'en', name: 'England' }
];
let fileuploadprops = {
  id: 'user_avatar'
};

let fileuploadprops2 = {
  id: 'user_avatar2'
};
</script>

<h1>Forms</h1>

The Input component allows you to change the input size, add disabled, helper text, and floating label.

<h2>Input Sizes</h2>

User the size prop to change the input size. Choose one from 'sm:text-md' | 'text-sm' | 'sm:text-xs'. The default size is text-sm.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="mb-6">
  <Label for="large-input" class="block mb-2">Large input</Label>
  <Input id="large-input" size="lg" placeholder="Large input" />
</div>
<div class="mb-6">
  <Label for="default-input" class="block mb-2">Default input</Label>
  <Input id="default-input" placeholder="Default input" />
</div>
<div class="mb-6">
  <Label for="small-input" class="block mb-2">Small input</Label>
  <Input id="small-input" size="sm" placeholder="Small input" />
</div>
</div>

<h2>Disabled</h2>

Get started with this example if you want to apply the disabled state to an input field. Add the disabled to change the input to disabled.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Input id="disabled-input" class="mb-6" disabled value="Disabled input" />
<Input id="disabled-input-2" class="mb-6" disabled readonly value="Disabled readonly input" />
</div>

<h2>Helper text</h2>

Use the helper prop to add your helper text. You can use HTML in the helper text.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="block mb-2">Your email</Label>
<Input label="Email" id="email" name="email" required placeholder="name@flowbite.com" />
<Helper class="text-sm mt-2">
  We’ll never share your details. Read our <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500"> Privacy Policy </a>
  .
</Helper>
</div>

<h2>Input element with icon</h2>

With the Input component, you can add <a href="https://flowbite-svelte.vercel.app/icons/heroicons" class="text-primary-700 dark:text-primary-500 hover:underline">Heroicons</a> or <a href="https://svelte-svg-icons.vercel.app/" class="text-primary-700 dark:text-primary-500 hover:underline">other icon sets</a>.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="mb-6">
  <Label for="input-group-1" class="block mb-2">Your Email</Label>
  <Input id="email" type="email" placeholder="name@flowbite.com">
    <EnvelopeSolid slot="left" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
  </Input>
</div>
</div>

<h2>Input element with addon</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="mb-6">
  <Label for="website-admin" class="block mb-2">Username</Label>
  <ButtonGroup class="w-full">
    <InputAddon>
      <UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </InputAddon>
    <Input id="website-admin" placeholder="elonmusk" />
  </ButtonGroup>
</div>
</div>

<h2>Form validation</h2>

Use the following example to apply validation styles for success and error messages.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="mb-6">
  <Label for="success" color="green" class="block mb-2">Your name</Label>
  <Input id="success" color="green" placeholder="Success input" />
  <Helper class="mt-2" color="green">
    <span class="font-medium">Well done!</span>
    Some success message.
  </Helper>
</div>
<div class="mb-6">
  <Label for='error' color='red' class='block mb-2'>Your name</Label>
  <Input id='error' color='red' placeholder="Error input" />
  <Helper class='mt-2' color='red'><span class="font-medium">Not so well done!</span> Some error message.</Helper>
</div>
</div>

<h2>Textarea</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Textarea {...textareaprops} />
</div>

<h2>Select input</h2>

Get started with the default example of a select input component to get a single option selection.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label>
  Select an option
  <Select class="mt-2" items={countries} bind:value={selected} />
</Label>
</div>

<h2>MultiSelect</h2>


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<MultiSelect items={countries2} bind:value={selected2} />
</div>

<h2>Checkbox</h2>


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Checkbox>Default checkbox</Checkbox>
<Checkbox checked>Checked state</Checkbox>
</div>

<h2>Radio buttons</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Radio name="example">Default radio</Radio>
<Radio name="example" checked={true}>Checked state</Radio>
</div>

<h2>File upload</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
</div>

<h2>Toggle Switch</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-2'>
<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
</div>
