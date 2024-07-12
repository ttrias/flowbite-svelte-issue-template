<script lang="ts">
  import { Drawer, Button, CloseButton, Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper, Label, Textarea, P, Input, A } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowRightOutline, ChartPieSolid, CartSolid, GridSolid, MailBoxSolid, UsersSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline, UserAddOutline, CalendarEditSolid } from 'flowbite-svelte-icons';
  import { sineIn } from 'svelte/easing';
  let hidden1 = true;
  let hidden2 = true;
  let hidden3 = true;
  let hidden4 = true;
  let hidden5 = true;
  let hidden6 = true;
  let hidden7 = true;
  let hidden8 = true;
  let hidden9 = true;
  let hidden10 = true;
  let hiddenBackdropTrue = true;
  let hiddenBackdropFalse = true;
  let hiddenBackdropFalse2 = true;
  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
  let transitionParamsTop = {
    y: -320,
    duration: 200,
    easing: sineIn
  };
  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn
  };

  let activateClickOutside = false;
  let backdrop = false;
</script>

<h1>Drawer</h1>

Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions.


<h2>Default drawer</h2>

To initiate the drawer component you need to set the `let hidden=true`, `width` props to the drawer component itself.

For accessibility you should also set the `id` prop to the element. This will add the drawer `aria-labelledby=id` and `aria-controls=id` to the drawer component.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden1 = false)}>Show drawer</Button>
</div>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>

<h2>Drawer navigation</h2>

Use this example to show a navigational sidebar inside the drawer component.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden2 = false)}>Show navigation</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id="sidebar2">
  <div class="flex items-center">
    <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <CloseButton on:click={() => (hidden2 = true)} class="mb-4 dark:text-white" />
  </div>
  <Sidebar>
    <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce">
          <svelte:fragment slot="icon">
            <CartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <SidebarDropdownItem label="Products" />
          <SidebarDropdownItem label="Billing" />
          <SidebarDropdownItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" {spanClass}>
          <svelte:fragment slot="icon">
            <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          <svelte:fragment slot="icon">
            <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Users">
          <svelte:fragment slot="icon">
            <UsersSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Products">
          <svelte:fragment slot="icon">
            <ShoppingBagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign In">
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign Up">
          <svelte:fragment slot="icon">
            <EditOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
</div>

<h2>Contact form</h2>

Use this example to show a contact form inside the drawer component.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden3 = false)}>Show contact form</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden3} id="sidebar3">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Contact us
    </h5>
    <CloseButton on:click={() => (hidden3 = true)} class="mb-4 dark:text-white" />
  </div>
  <form action="#" class="mb-6">
    <div class="mb-6">
      <Label for="email" class="block mb-2">Your email</Label>
      <Input id="email" name="email" required placeholder="name@company.com" />
    </div>
    <div class="mb-6">
      <Label for="subject" class="block mb-2">Subject</Label>
      <Input id="subject" name="subject" required placeholder="Let us know how we can help you" />
    </div>
    <div class="mb-6">
      <Label for="message" class="mb-2">Your message</Label>
      <Textarea id="message" placeholder="Your message..." rows="4" name="message" />
    </div>
    <Button type="submit" class="w-full">Send message</Button>
  </form>
  <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">info@company.com</A>
  </P>
  <P class="text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">212-456-7890</A>
  </P>
</Drawer>
</div>

<h2>Form elements</h2>

Use this example if you want to add form elements inside the drawer component including datepickers.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden4 = false)}>Show drawer form</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden4} id="sidebar4">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />New event
    </h5>
    <CloseButton on:click={() => (hidden4 = true)} class="mb-4 dark:text-white" />
  </div>
  <form action="#" class="mb-6">
    <div class="mb-6">
      <Label for="title" class="block mb-2">Title</Label>
      <Input id="title" name="title" required placeholder="Apple Keynote" />
    </div>
    <div class="mb-6">
      <Label for="description" class="mb-2">Description</Label>
      <Textarea id="message" placeholder="Write event description..." rows="4" name="message" />
    </div>
    <div class="mb-6">
      <Input id="date" name="date" required type="date" />
    </div>
    <div class="mb-4">
      <div class="relative">
        <Input noBorder id="search" placeholder="Add guest email" class="p-3" />
        <Button textSize="text-sm" class="absolute inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-primary-700 rounded-lg end-2 bottom-2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">
          <UserAddOutline class="w-3 h-3 me-1.5 text-white" />Add
        </Button>
      </div>
    </div>
    <div class="flex mb-4 -space-x-4 rtl:space-x-reverse">
      <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-1.webp" alt="" />
      <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-2.webp" alt="" />
      <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-3.webp" alt="" />
      <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-4.webp" alt="" />
    </div>
    <Button type="submit" class="w-full">
      <CalendarEditSolid class="w-3.5 h-3.5 me-2.5 text-white" /> Create event
    </Button>
  </form>
</Drawer>
</div>

<h2>Placement</h2>

Use the placement prop to position the drawer component either on the top, right, bottom, or left side of the document page. This can be done using the `placement='left|right|top|bottom'` where the default value is “left”.

<h3>Left drawer</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden5 = false)}>Show drawer</Button>
</div>

<Drawer placement="left" transitionType="fly" {transitionParams} bind:hidden={hidden5} id="sidebar5">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hidden5 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>

<h3>Right drawer</h3>

Use this example to show the drawer component on the right side of the page.

Set the `transitionParams` variable to new variables.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden6 = false)}>Show drawer</Button>
</div>

<Drawer placement="right" transitionType="fly" transitionParams={transitionParamsRight} bind:hidden={hidden6} id="sidebar6">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hidden6 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>

<h3>Top drawer</h3>

Use this example to show the drawer on the top side of the page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden7 = false)}>Show drawer</Button>
</div>

<Drawer placement="top" width="w-full" transitionType="fly" transitionParams={transitionParamsTop} bind:hidden={hidden7} id="sidebar7">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Top drawer
    </h5>
    <CloseButton on:click={() => (hidden7 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <A href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline">limited-time sale</A> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <Button color="light" href="/">Learn more</Button>
  <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
</Drawer>
</div>

<h3>Bottom drawer</h3>

Use this example to show the drawer on the bottom side of the page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden8 = false)}>Show drawer</Button>
</div>

<Drawer placement="bottom" width="w-full" transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hidden8} id="sidebar8">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hidden8 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <Button color="light" href="/">Learn more</Button>
  <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
</Drawer>
</div>

<h2>Backdrop</h2>

The backdrop element can be used to dim out the background elements when the drawer is visible and also automatically hide the component when clicking outside of it.

Use the `backdrop="false|true"` prop where you can disable or enable the backdrop element.

<h3>Enabled (default)</h3>

Use this example to enable the backdrop element by default.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hiddenBackdropTrue = false)}>Show drawer</Button>
</div>

<Drawer backdrop={true} transitionType="fly" {transitionParams} bind:hidden={hiddenBackdropTrue} id="sidebar1">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hiddenBackdropTrue = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>

<h3>Disabled</h3>

Use the `backdrop={false}` prop to disable the backdrop element when the drawer is shown.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hiddenBackdropFalse = false)}>Show drawer</Button>
</div>

<Drawer backdrop={false} transitionType="fly" {transitionParams} bind:hidden={hiddenBackdropFalse} id="sidebar1">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hiddenBackdropFalse = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>

<h2>Position</h2>

Use `leftOffset|rightOffset|topOffset|bottomOffset` prop to change the position of the drawer.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden9 = false)}>Show drawer</Button>
</div>

<Drawer leftOffset="top-16 h-screen start-0" transitionType="fly" {transitionParams} bind:hidden={hidden9} id="sidebar9">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hidden9 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>

<h2>Disabling outside click and backdrop</h2>

As the default, the drawer closes when you click the outside of the drawer. However sometimes you don't want that. Set `activateClickOutside` to false to disable it.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hidden10 = false)}>Show drawer</Button>
</div>

<Drawer {activateClickOutside} {backdrop} transitionType="fly" {transitionParams} bind:hidden={hidden10} id="sidebar10">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hidden10 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
</Drawer>
</div>

<h2>Disabling only outside click</h2>


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="text-center">
  <Button on:click={() => (hiddenBackdropFalse2 = false)}>Show drawer</Button>
</div>

<Drawer activateClickOutside={false} transitionType="fly" {transitionParams} bind:hidden={hiddenBackdropFalse2} id="sidebar1">
  <div class="flex items-center">
    <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Info
    </h5>
    <CloseButton on:click={() => (hiddenBackdropFalse2 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-5 h-5 ms-2" /></Button>
  </div>
</Drawer>
</div>
