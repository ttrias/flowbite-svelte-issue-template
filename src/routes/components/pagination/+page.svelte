<script lang="ts">
  import { page } from '$app/stores';
  import { Pagination, PaginationItem } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline, ArrowLeftOutline, ArrowRightOutline  } from 'flowbite-svelte-icons';
  import type { LinkType } from 'flowbite-svelte'

  $: activeUrl = $page.url.searchParams.get('page');
  let pages: LinkType[] = [
    { name: '1', href: '/components/pagination?page=1' },
    { name: '2', href: '/components/pagination?page=2' },
    { name: '3', href: '/components/pagination?page=3' },
    { name: '4', href: '/components/pagination?page=4' },
    { name: '5', href: '/components/pagination?page=5' }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href?.split('?');
      let queryString = splitUrl?.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  const previous = () => {
    alert('Previous btn clicked. Make a call to your server to fetch data.');
  };
  const next = () => {
    alert('Next btn clicked. Make a call to your server to fetch data.');
  };

  let pages2: LinkType[] = [
    { name: '6', href: '/components/pagination?page=6' },
    { name: '7', href: '/components/pagination?page=7' },
    { name: '8', href: '/components/pagination?page=8' },
    { name: '9', href: '/components/pagination?page=9' },
    { name: '10', href: '/components/pagination?page=10' }
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href?.split('?');
      let queryString = splitUrl?.slice(1).join('?');
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get('page');
      if (hrefValue === activeUrl) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    pages = pages;
  }

  let helper = { start: 1, end: 10, total: 100 };
  let pages4 = [{ name: "1"}, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }];

  const handleClick = () => {
    alert('Page clicked');
  };
</script>

<h1>Pagination</h1>


The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

<h2>Default pagination</h2>

Use the following list of pagination items to indicate a series of content for your website.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<Pagination {pages} on:previous={previous} on:next={next} />
<Pagination {pages} large on:previous={previous} on:next={next} />
</div>

<h2>Pagination with icons</h2>

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<Pagination pages={pages2} on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="w-2.5 h-2.5" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="w-2.5 h-2.5" />
  </svelte:fragment>
</Pagination>

<Pagination {pages} large on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="w-6 h-6" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="w-6 h-6" />
  </svelte:fragment>
</Pagination>
</div>

<h2>Previous and next</h2>

Use the following markup to show simple previous and next elements.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem on:click={previous}>Previous</PaginationItem>
  <PaginationItem on:click={next}>Next</PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem large on:click={previous}>Previous</PaginationItem>
  <PaginationItem large on:click={next}>Next</PaginationItem>
</div>
</div>

<h2>Previous and next with icons</h2>

Use the following code to show simple previous and next elements with icons.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem class="flex items-center" on:click={previous}>
    <ArrowLeftOutline class="me-2 w-3.5 h-3.5" />
    Previous
  </PaginationItem>
  <PaginationItem class="flex items-center" on:click={next}>
    Next
    <ArrowRightOutline class="ms-2 w-3.5 h-3.5" />
  </PaginationItem>
</div>
<div class="flex space-x-3 rtl:space-x-reverse">
  <PaginationItem large class="flex items-center" on:click={previous}>
    <ArrowLeftOutline class="me-2 w-5 h-5" />
    Previous
  </PaginationItem>
  <PaginationItem large class="flex items-center" on:click={next}>
    Next
    <ArrowRightOutline class="ms-2 w-5 h-5" />
  </PaginationItem>
</div>
</div>

<h2>Table data pagination</h2>

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table>
    <span slot="prev">Prev</span>
  </Pagination>
</div>
<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table large>
    <span slot="prev">Prev</span>
  </Pagination>
</div>
</div>

<h2>Table data pagination with icons</h2>

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table>
    <div slot="prev" class="flex items-center gap-2 text-white bg-gray-800">
      <ArrowLeftOutline class="w-3.5 h-3.5 me-2" />
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2 text-white bg-gray-800">
      Next
      <ArrowRightOutline class="w-6 h-6 ms-2" />
    </div>
  </Pagination>
</div>
<div class="flex flex-col items-center justify-center gap-2">
  <div class="text-sm text-gray-700 dark:text-gray-400">
    Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>
    of
    <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>
    Entries
  </div>

  <Pagination table large>
    <div slot="prev" class="flex items-center gap-2 text-white bg-gray-800">
      <ArrowLeftOutline class="w-3.5 h-3.5 me-2" />
      Prev
    </div>
    <div slot="next" class="flex items-center gap-2 text-white bg-gray-800">
      Next
      <ArrowRightOutline class="w-6 h-6 me-2" />
    </div>
  </Pagination>
</div>
</div>

<h2>Event example</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center gap-3'>
<Pagination pages={pages4} on:previous={previous} on:next={next} on:click={handleClick} />
</div>
