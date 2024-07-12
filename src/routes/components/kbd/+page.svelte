<script lang="ts">
  import { Kbd, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, ArrowKeyUp, ArrowKeyDown, ArrowKeyRight, ArrowKeyLeft } from 'flowbite-svelte';
</script>

<h1>KBD</h1>

The KBD (Keyboard) component can be used to indicate a textual user input from the keyboard inside other elements such as in text, tables, cards, and more.


<h2> Default KBD</h2>

Here’s a list of KBD components that you can use inside any other element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Kbd class="px-2 py-1.5">Shift</Kbd>
<Kbd class="px-2 py-1.5">Ctrl</Kbd>
<Kbd class="px-2 py-1.5">Tab</Kbd>
<Kbd class="px-2 py-1.5">Caps Lock</Kbd>
<Kbd class="px-2 py-1.5">Esc</Kbd>
<Kbd class="px-4 py-1.5">Spacebar</Kbd>
<Kbd class="px-2 py-1.5">Enter</Kbd>
</div>

<h2> KBD inside text</h2>

Use this example by nesting an inline KBD component inside a paragraph.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<p class="text-gray-500 dark:text-gray-400">
  Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.
</p>
</div>

<h2> KBD inside table</h2>

The KBD component can also be used inside table components to denote what type of key can be pressed for certain descriptions.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Table>
  <TableHead>
    <TableHeadCell>Key</TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="px-2 py-1.5">Shift</Kbd> or <Kbd class="px-2 py-1.5">Tab</Kbd>
      </TableBodyCell>
      <TableBodyCell>Navigate to interactive elements</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="px-2 py-1.5">Enter</Kbd> or <Kbd class="px-4 py-1.5">Space bar</Kbd>
      </TableBodyCell>
      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <ArrowKeyUp />
          <span class="sr-only">Arrow key up</span>
        </Kbd>
        <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <ArrowKeyDown />
          <span class="sr-only">Arrow key down</span>
        </Kbd> or
        <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <ArrowKeyLeft />
          <span class="sr-only">Arrow key left</span>
        </Kbd>
        <Kbd class="inline-flex items-center me-1 px-2 py-1.5">
          <ArrowKeyRight />
          <span class="sr-only">Arrow key right</span>
        </Kbd>
      </TableBodyCell>
      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
</div>

<h2> Arrow keys</h2>

Use this example to show arrow keys inside the KBD styled element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Kbd class="inline-flex items-center me-1 px-2 py-1.5">
  <ArrowKeyUp />
  <span class="sr-only">Arrow key up</span>
</Kbd>
<Kbd class="inline-flex items-center me-1 px-2 py-1.5">
  <ArrowKeyDown />
  <span class="sr-only">Arrow key down</span>
</Kbd>
<Kbd class="inline-flex items-center me-1 px-2 py-1.5">
  <ArrowKeyLeft />
  <span class="sr-only">Arrow key left</span>
</Kbd>
<Kbd class="inline-flex items-center me-1 px-2 py-1.5">
  <ArrowKeyRight />
  <span class="sr-only">Arrow key right</span>
</Kbd>
</div>

<h2> Letter keys</h2>

Use this example if you need to show a key from the latin alphabet


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Kbd class="px-2 py-1.5">Q</Kbd>
<Kbd class="px-2 py-1.5">W</Kbd>
<Kbd class="px-2 py-1.5">E</Kbd>
<Kbd class="px-2 py-1.5">R</Kbd>
<Kbd class="px-2 py-1.5">T</Kbd>
<Kbd class="px-2 py-1.5">Y</Kbd>
<Kbd class="px-2 py-1.5">U</Kbd>
<Kbd class="px-2 py-1.5">I</Kbd>
<Kbd class="px-2 py-1.5">O</Kbd>
<Kbd class="px-2 py-1.5">P</Kbd>
<Kbd class="px-2 py-1.5">A</Kbd>
<Kbd class="px-2 py-1.5">S</Kbd>
<Kbd class="px-2 py-1.5">D</Kbd>
<Kbd class="px-2 py-1.5">F</Kbd>
<Kbd class="px-2 py-1.5">G</Kbd>
<Kbd class="px-2 py-1.5">H</Kbd>
<Kbd class="px-2 py-1.5">J</Kbd>
<Kbd class="px-2 py-1.5">K</Kbd>
<Kbd class="px-2 py-1.5">L</Kbd>
<Kbd class="px-2 py-1.5">Z</Kbd>
<Kbd class="px-2 py-1.5">X</Kbd>
<Kbd class="px-2 py-1.5">C</Kbd>
<Kbd class="px-2 py-1.5">V</Kbd>
<Kbd class="px-2 py-1.5">B</Kbd>
<Kbd class="px-2 py-1.5">N</Kbd>
<Kbd class="px-2 py-1.5">M</Kbd>
</div>

<h2> Number keys</h2>

Use this example to show a key inside a KBD component from the english numeral system.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Kbd class="px-2 py-1.5">1</Kbd>
<Kbd class="px-2 py-1.5">2</Kbd>
<Kbd class="px-2 py-1.5">3</Kbd>
<Kbd class="px-2 py-1.5">4</Kbd>
<Kbd class="px-2 py-1.5">5</Kbd>
<Kbd class="px-2 py-1.5">6</Kbd>
<Kbd class="px-2 py-1.5">7</Kbd>
<Kbd class="px-2 py-1.5">8</Kbd>
<Kbd class="px-2 py-1.5">9</Kbd>
<Kbd class="px-2 py-1.5">0</Kbd>
</div>

<h2> Function keys</h2>

This example can be used to denote function keys inside the KBD component.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Kbd class="px-2 py-1.5">F1</Kbd>
<Kbd class="px-2 py-1.5">F2</Kbd>
<Kbd class="px-2 py-1.5">F3</Kbd>
<Kbd class="px-2 py-1.5">F4</Kbd>
<Kbd class="px-2 py-1.5">F5</Kbd>
<Kbd class="px-2 py-1.5">F6</Kbd>
<Kbd class="px-2 py-1.5">F7</Kbd>
<Kbd class="px-2 py-1.5">F8</Kbd>
<Kbd class="px-2 py-1.5">F9</Kbd>
<Kbd class="px-2 py-1.5">F10</Kbd>
<Kbd class="px-2 py-1.5">F11</Kbd>
<Kbd class="px-2 py-1.5">F12</Kbd>
</div>
