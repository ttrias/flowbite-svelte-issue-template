<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch, ImagePlaceholder, Modal } from 'flowbite-svelte';
  import { writable } from 'svelte/store';
  import { slide } from 'svelte/transition';

  let searchTerm = '';
  let items = [
    { id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
    { id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
    { id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
    { id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
  ];
  $: filteredItems = items.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  const sortKey = writable('id'); // default sort key
  const sortDirection = writable(1); // default sort direction (ascending)
  const sortItems = writable(items.slice()); // make a copy of the items array

  interface Item {
    id: number;
    maker: string;
    type: string;
    make: number;
  }
  // Define a function to sort the items
  const sortTable = (key: string) => {
    // If the same key is clicked, reverse the sort direction
    if ($sortKey === key) {
      sortDirection.update((val) => -val);
    } else {
      sortKey.set(key);
      sortDirection.set(1);
    }
  };

  $: {
    const key = $sortKey;
    const direction = $sortDirection;
    const sorted = [...$sortItems].sort((a, b) => {
      // const aVal = a[key];
      // const bVal = b[key];
      const aVal = a[key as keyof Item];
      const bVal = b[key as keyof Item];
      if (aVal < bVal) {
        return -direction;
      } else if (aVal > bVal) {
        return direction;
      }
      return 0;
    });
    sortItems.set(sorted);
  }
  interface ItemType {
    name?: string;
    color?: string;
    type?: string;
    price?: string;
  }
  const items2: ItemType[] = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99",
    },
  ];

  let openRow: number | null = null;
  let details: ItemType | null = null;
  let doubleClickModal: boolean = false;

  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i
  }
</script>

<h1>Table</h1>

The table component represents a set of structured elements made up of rows and columns as table cells that can be used to show data sets to your website users.

Get started with multiple variants and styles of these table components.


<h2>Default table</h2>

Use the following example of a responsive table component to show multiple rows and columns of text data.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Striped rows</h2>

Set the `striped` prop to `true` to alternate background colors of every second table row.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table striped={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Google Pixel Phone</TableBodyCell>
      <TableBodyCell>Gray</TableBodyCell>
      <TableBodyCell>Phone</TableBodyCell>
      <TableBodyCell>$799</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple Watch 5</TableBodyCell>
      <TableBodyCell>Red</TableBodyCell>
      <TableBodyCell>Wearables</TableBodyCell>
      <TableBodyCell>$999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Hover state</h2>

Set `hoverable` to `true` to change the background color of a data row when hovering over the element with the cursor.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Checkbox</h2>

Checkboxes can be used inside table data rows to select multiple data sets and apply a bulk action.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table hoverable={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Search input</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Maker</TableHeadCell>
    <TableHeadCell>Type</TableHeadCell>
    <TableHeadCell>Make</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.maker}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
</div>

<h2>Sorting by column</h2>

This example demonstrates how to add sorting functionality to a table by clicking on a column header. It will sort the table based on the values in that column, in either ascending or descending order.

Create a sortTable function that takes a key argument representing the name of the column to sort by and uses the sort method to sort the items array based on the values in the specified column.

To toggle between ascending and descending order, use a sortDirection variable that starts at 1 for ascending order, and toggles to -1 for descending order. Also use a sortKey variable to keep track of the currently active sort key.

Use the on:click event on the column headers to call the sortTable function with the corresponding column name.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table hoverable={true}>
  <TableHead>
    <TableHeadCell on:click={() => sortTable('id')}>ID</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('maker')}>Maker</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('type')}>Type</TableHeadCell>
    <TableHeadCell on:click={() => sortTable('make')}>Make</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each $sortItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.maker}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
</div>

<h2>Table head</h2>

By default, the `TableHead` component will create a single `tr` element without any preset attributes and properties for you, and the slot of this component is implicitly required to be permitted contents of the `tr` element. If you want to get more controllability of the table head rows, e.g., customize the style or use multiple head rows, set the value of `defaultRow` prop to `false`, and the slot of this component is then implicitly required to be zero or more `tr` elements.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table>
  <TableHead defaultRow={false}>
    <tr>
      <TableHeadCell colspan="2">Product</TableHeadCell>
      <TableHeadCell colspan="3">Info</TableHeadCell>
    </tr>
    <tr>
      <TableHeadCell>Brand</TableHeadCell>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </tr>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple</TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft</TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple</TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Table foot</h2>

Use this example where the `tfoot` HTML element can be used in conjunction with the head and caption of the table component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table noborder={true}>
  <TableHead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Qty</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
  <tfoot>
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="py-3 px-6 text-base">Total</th>
      <td class="py-3 px-6">3</td>
      <td class="py-3 px-6">21,000</td>
    </tr>
  </tfoot>
</Table>
</div>

<h2>Table caption</h2>

Improve accessibility by using a caption inside the table as a heading to better describe what the table is about for screen readers.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table>
  <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
    Our products
    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
  </caption>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Without border</h2>

Use this example of a table component without any border between the table cells.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table noborder={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Table with shadow</h2>

Use this example to apply a shadow border to the table component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table shadow>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Overflow scrolling</h2>

Use this example to enable horizontal scrolling if the content inside the table overflows that maximum width.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table>
  <TableHead>
    <TableHeadCell class="!p-4">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>ACCESSORIES</TableHeadCell>
    <TableHeadCell>AVAILABLE</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>WEIGHT</TableHeadCell>
    <TableHeadCell>ACTION</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>3.0 lb.</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">Remove</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>No</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>1.0 lb.</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">Remove</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell class="!p-4">
        <Checkbox />
      </TableBodyCell>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>Yes</TableBodyCell>
      <TableBodyCell>No</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>0.2 lb.</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
        <a href="/tables" class="font-medium text-red-600 hover:underline dark:text-red-500">Remove</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Table colors</h2>

Use one of colors from blue, green, red, yellow, purple for the `color` prop. The default color is gray. You can reset all color by using the `color="custom"`.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table color="blue" hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<TableSearch color="red" placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Maker</TableHeadCell>
    <TableHeadCell>Type</TableHeadCell>
    <TableHeadCell>Make</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.maker}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
</div>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table color="green" hoverable={true}>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Striped rows color</h2>

Use this example to apply a different color to every second row inside the table.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table striped={true} color="purple">
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Sliver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Google Pixel Phone</TableBodyCell>
      <TableBodyCell>Gray</TableBodyCell>
      <TableBodyCell>Phone</TableBodyCell>
      <TableBodyCell>$799</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Apple Watch 5</TableBodyCell>
      <TableBodyCell>Red</TableBodyCell>
      <TableBodyCell>Wearables</TableBodyCell>
      <TableBodyCell>$999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2>Click and double-click on row</h2>

An example to use on:click (main row) and on:dblclick (expanded row)

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    {#each items2 as item, i}
      <TableBodyRow on:click={() => toggleRow(i)}>
        <TableBodyCell>{item.name}</TableBodyCell>
        <TableBodyCell>{item.color}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.price}</TableBodyCell>
      </TableBodyRow>
      {#if openRow === i}
        <TableBodyRow on:dblclick={
        () => {
          doubleClickModal = true;
          details = item;
        }}>
          <TableBodyCell colspan="4" class="p-0">
            <div class="px-2 py-3" transition:slide={{ duration: 300, axis: 'y' }}>
              <ImagePlaceholder />
            </div>
          </TableBodyCell>
        </TableBodyRow>
      {/if}
    {/each}
  </TableBody>
</Table>
<Modal title={details?.name} bind:open={doubleClickModal} autoclose outsideclose>
  <ImagePlaceholder />
</Modal>
</div>
