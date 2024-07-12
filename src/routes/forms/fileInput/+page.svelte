<script lang="ts">
  import { Fileupload, Label, Helper, Listgroup, ListgroupItem, Dropzone } from 'flowbite-svelte';
  let value: string;
  let files: FileList | undefined;
  // Dropzone
  let zonevalue: any[] = [];
  const dropHandle = (event: any) => {
    zonevalue = [];
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          zonevalue.push(file.name);
          zonevalue = zonevalue;
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        zonevalue = file.name;
      });
    }
  };

  const handleChange = (event: any) => {
    const files = event.target.files;
    if (files.length > 0) {
      value.push(files[0].name);
      value = value;
    }
  };

  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = '';
    files.map((file) => {
      concat += file;
      concat += ',';
      concat += ' ';
    });

    if (concat.length > 40) concat = concat.slice(0, 40);
    concat += '...';
    return concat;
  };
</script>
<h1>File input</h1>

The file input component can be used to upload one or more files from the device storage of the user available in multiple sizes, styles, variants and support for dark mode.

<h2>File upload example</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="space-y-2 mb-2">
  <span>Upload file</span>
  <Fileupload bind:value />
</Label>
<Label>File: {value}</Label>
</div>

<h2>Helper text</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label for="with_helper" class="pb-2">Upload file</Label>
<Fileupload id="with_helper" class="mb-2" />
<Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</div>

<h2>Multiple files</h2>

When the user selected multiple files, the `value` represents the first file in the list of files they selected. The other files can be identified using the `files` property.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="pb-2" for="multiple_files">Upload multiple files</Label>
<Fileupload id="multiple_files" multiple bind:files />
<Listgroup items={files} let:item class="mt-2">
  {#if item}
    {item.name}
  {:else}
    <ListgroupItem>No files</ListgroupItem>
  {/if}
</Listgroup>
</div>

<h2>Sizes</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label class="pb-2" for="small_size">Small file input</Label>
<Fileupload id="small_size" size="sm" />
<Label class="py-2" for="default_size">Default size</Label>
<Fileupload id="default_size" />
<Label class="py-2" for="larg_size">Large file input</Label>
<Fileupload id="larg_size" size="lg" />
</div>

<h2>Dropzone</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Dropzone
  draggabel='true'
  id="dropzone"
  on:drop={dropHandle}
  on:dragover={(event) => {
    event.preventDefault();
  }}
  on:change={handleChange}>
  <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
  {#if zonevalue.length === 0}
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
  {:else}
    <p>{showFiles(zonevalue)}</p>
  {/if}
</Dropzone>
</div>
