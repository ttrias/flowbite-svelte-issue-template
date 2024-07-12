<script lang="ts">
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem, SidebarCta, SidebarBrand, A } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';

  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline, CartSolid, ChevronDoubleUpOutline, ChevronDoubleDownOutline, ShoppingBagSolid, FireSolid, BookSolid, RestoreWindowOutline, LifeSaverSolid, CloseOutline } from 'flowbite-svelte-icons';

  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname;
  let activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  let nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-icon-logo.svg'
  };

  $: containPath = () => {
    // add your logic here
    true;
  };
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<h1>Sidebar</h1>

The sidebar component can be used as a complementary element relative to the navbar shown on either the left or right side of the page used for the navigation on your web application, including menu items, multi-level dropdown items, call to actions elements, and more.

Disclaimer: this sidebar component is based on this <A class="text-primary-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank" rel="noreferrer">sidebar menu</A> plugin.



<h2>Default sidebar</h2>

Use this example to show a responsive list of menu items inside the sidebar with icons and labels.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar {activeUrl}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar" active={activeUrl === '/components/sidebar'}>
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

<h2>Adding links and active class</h2>

Utilize the `href` prop within the `SidebarItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `Sidebar` component:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar {activeUrl}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Accordion" href="/docs/components/accordion">
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Alert" href="/docs/components/alert">
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Badge" href="/docs/components/badge">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar {activeUrl} {activeClass} {nonActiveClass}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Accordion" href="/docs/components/accordion">
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Alert" href="/docs/components/alert">
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Badge" href="/docs/components/badge">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

You can control icon class by changing the `class` prop in the `Icon` component.

<h2>Multi-level dropdown</h2>

Use this sidebar example to create multi-level menu items by using the SidebarDropdownWrapper and SidebarDropdownItem components.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        <svelte:fragment slot="icon">
          <CartSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

You can change the icons using `arrowup` and `arrowdown` slots.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        <svelte:fragment slot="icon">
          <CartSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="arrowup">
          <ChevronDoubleUpOutline class="w-6 h-6" />
        </svelte:fragment>
        <svelte:fragment slot="arrowdown">
          <ChevronDoubleDownOutline class="w-6 h-6" />
        </svelte:fragment>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

<h2>Content separator</h2>

Separate the content inside the sidebar component by applying a border separator to the SidebarGroup component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Products">
        <svelte:fragment slot="icon">
          <ShoppingBagSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup border>
      <SidebarItem label="Upgrade to Pro">
        <svelte:fragment slot="icon">
          <FireSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Documentation">
        <svelte:fragment slot="icon">
          <BookSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Components">
        <svelte:fragment slot="icon">
          <RestoreWindowOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Help">
        <svelte:fragment slot="icon">
          <LifeSaverSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

<h2>CTA button</h2>

Use this example to add a CTA button inside the sidebar component and encourage your users to visit the dedicated page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarCta label="Beta">
        <svelte:fragment slot="icon">
          <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-primary-50 text-primary-900 rounded-lg focus:ring-2 focus:ring-primary-400 p-1 hover:bg-primary-200 inline-flex h-6 w-6 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <CloseOutline class="w-4 h-4" />
          </button>
        </svelte:fragment>
        <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>
        <a class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" href="/"> Turn new navigation off </a>
      </SidebarCta>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

<h2>Logo branding</h2>

Show the logo of your brand and link back to the homepage from the top part of the sidebar.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarBrand {site} />
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>

<h2>Transition</h2>

You can add own transition by setting `transitionType` and `transitionParams`.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" />
      <SidebarDropdownWrapper label="E-commerce" isOpen={containPath} transitionType="fly" {transitionParams}>
        <SidebarDropdownItem label="Products" href="/products" />
        <SidebarDropdownItem label="Cart" href="/cart" />
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Items" transitionType="fly" {transitionParams}>
        <SidebarDropdownItem label="Item 1" href="/components/item1" />
        <SidebarDropdownItem label="Item 2" href="/components/item2" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
</div>
