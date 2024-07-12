<script lang="ts">
  import { page } from '$app/stores';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider, Button, Input, Skeleton, ImagePlaceholder, TextPlaceholder } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

  $: activeUrl = $page.url.pathname;
  let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
  let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.


<h2>Default navbar</h2>

Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.

By default navbar content width is controled by Tailwind class `container`. If you want your navbar to be full page width set the prop `fluid=true`.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar  >
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>

</div>

<h2>Navbar container</h2>

If you need more control on navbar content use underlying `NavContainer` component and style it with `class` property.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar let:NavContainer color="primary">
  <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </NavContainer>
</Navbar>
</div>

<h2>Active class</h2>

Utilize the `href` prop within the `NavLi` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `NavUl` component:


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>
</div>

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl} {activeClass} {nonActiveClass}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>
</div>

<h2>Navbar with dropdown</h2>

This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Dropdown<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <Dropdown class="w-44 z-20">
      <DropdownItem href="/">Dashboard</DropdownItem>
      <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
      <DropdownItem href="/">Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/">Sign out</DropdownItem>
    </Dropdown>
    <NavLi href="/settings">Setting</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
</div>

<h2>Navbar with search</h2>

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <SearchOutline class="w-5 h-5" />
    </Button>
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
        <SearchOutline class="w-4 h-4" />
      </div>
      <Input id="search-navbar" class="ps-10" placeholder="Search..." />
    </div>
    <NavHamburger />
  </div>
  <NavUl>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
  </NavUl>
</Navbar>
</div>

<h2>Navbar with CTA button</h2>

Use the following navbar element to show a call to action button alongside the logo and page links.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get started</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
</div>

<h2>Sticky navbar</h2>

Use this example to keep the navbar positioned fixed to the top side as you scroll down the document page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-2 sm:p-6 h-96 md:h-80 overflow-hidden'>
<div class="relative px-8">
  <Navbar class="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 start-0 border-b">
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  <div style="height:300px;" class="overflow-scroll pb-16">
    <Skeleton class="mt-16 mb-8" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>
</div>
</div>

<h2>User menu dropdown</h2>

Use this example to create a navigation bar with a user profile or button to toggle a dropdown menu.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
    <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
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
  <NavUl>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
</div>

<h2>Solid background</h2>

Use this example to show a solid background for the navbar component instead of being transparent.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 h-96 md:h-80'>
<Navbar rounded color="form">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
</div>
