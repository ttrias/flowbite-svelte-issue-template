<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
</script>

<h1>Breadcrumb</h1>
<h2>Default</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</div>

<h2>Solid Breadcrumb</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
  <Breadcrumb aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
</div>

<h2>Icons</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6">
  <Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
    <BreadcrumbItem href="/" home>
      <svelte:fragment slot="icon">
        <HomeOutline class="w-4 h-4 me-2" />
      </svelte:fragment>Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/">
      <svelte:fragment slot="icon">
        <ChevronDoubleRightOutline class="w-5 h-5 mx-2 dark:text-white" />
      </svelte:fragment>
      Projects
    </BreadcrumbItem>
    <BreadcrumbItem>
      <svelte:fragment slot="icon">
        <ChevronDoubleRightOutline class="w-5 h-5 mx-2 dark:text-white" />
      </svelte:fragment>
      Flowbite Svelte
    </BreadcrumbItem>
  </Breadcrumb>
</div>