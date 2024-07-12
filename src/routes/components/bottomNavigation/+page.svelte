<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Tooltip, BottomNavHeaderItem, BottomNavHeader, Card, Listgroup, Avatar } from 'flowbite-svelte';
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusOutline, BookmarkSolid, AngleRightOutline, AngleLeftOutline, FileCirclePlusOutline, SearchOutline, UsersGroupOutline, ClockSolid, StarSolid } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  $: activeUrl = $page.url.pathname;
  let svgClass = 'mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500';
  let svgActiveClass = 'mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700';
  let list = [
    {
      img: { src: '/images/profile-picture-1.webp', alt: 'Neil Sims' },
      comment: 'New message from <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what\'s up? All set for the presentation?"',
      message: 'a few moments ago'
    },
    {
      img: { src: '/images/profile-picture-2.webp', alt: 'Bonnie Green' },
      comment: 'Joseph McFall and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.',
      message: '10 minutes ago'
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'Leslie Livingston' },
      comment: 'Bonnie Green and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.',
      message: '23 minutes ago'
    },
    {
      img: { src: '/images/profile-picture-4.webp', alt: 'Robert Brown' },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-primary-600 dark:text-primary-500 hover:underline">@bonnie.green</span> what do you say?',
      message: '23 minutes ago'
    },
    {
      img: { src: '/images/profile-picture-5.webp', alt: 'Michael Gough' },
      comment: 'Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.',
      message: '23 minutes ago'
    }
  ];
</script>

<h1>Bottom navigation</h1>
<h2>Default bottom navigation</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 relative'>
<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" classInner="grid-cols-4">
<BottomNavItem btnName="Home">
  <HomeSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
</BottomNavItem>
<BottomNavItem btnName="Wallet">
  <WalletSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
</BottomNavItem>
<BottomNavItem btnName="Settings">
  <AdjustmentsVerticalOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
</BottomNavItem>
<BottomNavItem btnName="Profile">
  <UserCircleSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
</BottomNavItem>
</BottomNav>
</div>

<h2>Adding links and active class</h2>
<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 relative'>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classInner="grid-cols-4">
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart" exact={false}>
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>
</div>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 relative t-16'>
  <Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classInner="grid-cols-4" classActive="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>
</div>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 relative t-16'>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classInner="grid-cols-4">
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid class={activeUrl === '/' ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletSolid class={activeUrl === '/docs/pages/quickstart' ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/bottom-navigation">
    <AdjustmentsVerticalOutline class={activeUrl === '/bottom-navigation' ? svgActiveClass : svgClass} />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid class={activeUrl === '/docs/components/accordion' ? svgActiveClass : svgClass} />
  </BottomNavItem>
</BottomNav>
</div>

<h2>Menu items with border</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col relative">
  <Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="border" classInner="grid-cols-4">
  <BottomNavItem btnName="Home">
    <HomeSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
</BottomNav>
</div>

<h2>Application bar example</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col relative">

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="application" classInner="grid-cols-5">
  <BottomNavItem btnName="Home" appBtnPosition="left">
    <HomeSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Home</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Wallet" appBtnPosition="middle">
    <WalletSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Wallet</Tooltip>
  </BottomNavItem>
  <div class="flex items-center justify-center">
    <BottomNavItem btnName="Create new item" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800">
      <PlusOutline class="text-white" />
      <Tooltip arrow={false}>Create new item</Tooltip>
    </BottomNavItem>
  </div>
  <BottomNavItem btnName="Settings" appBtnPosition="middle">
    <AdjustmentsVerticalOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Settings</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Profile" appBtnPosition="right">
    <UserCircleSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Profile</Tooltip>
  </BottomNavItem>
</BottomNav>
</div>

<h2>Example with pagination</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col relative">

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="pagination" classInner="grid-cols-6">
  <BottomNavItem btnName="New document">
    <FileCirclePlusOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>New document</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Bookmark">
    <BookmarkSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Bookmark</Tooltip>
  </BottomNavItem>
  <div class="flex items-center justify-center col-span-2">
    <div class="flex items-center justify-between w-full text-gray-600 dark:text-gray-400 bg-gray-100 rounded-lg dark:bg-gray-600 max-w-[128px] mx-2">
      <button type="button" class="inline-flex items-center justify-center h-8 px-1 bg-gray-100 rounded-s-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
        <AngleLeftOutline class="w-2 h-2 ms-1" />
        <span class="sr-only">Previous page</span>
      </button>
      <span class="flex-shrink-0 mx-1 text-sm font-medium">1 of 345</span>
      <button type="button" class="inline-flex items-center justify-center h-8 px-1 bg-gray-100 rounded-e-lg dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800">
        <AngleRightOutline class="w-2 h-2 me-1" />
        <span class="sr-only">Next page</span>
      </button>
    </div>
  </div>
  <BottomNavItem btnName="Settings">
    <AdjustmentsVerticalOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Settings</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Profile</Tooltip>
  </BottomNavItem>
</BottomNav>
</div>

<h2>Button group bottom bar</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col relative">

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav position="absolute" navType="group" classInner="grid-cols-5">
  <BottomNavHeader slot="header">
    <BottomNavHeaderItem itemName="New" />
    <BottomNavHeaderItem itemName="Popular" active={true} />
    <BottomNavHeaderItem itemName="Following" />
  </BottomNavHeader>
  <BottomNavItem btnName="Home" id="group-home">
    <HomeSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Home</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Bookmark" id="group-bookmark">
    <BookmarkSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Bookmark</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="New post" id="group-new">
    <PlusOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>New Post</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Search" id="group-search">
    <SearchOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Search</Tooltip>
  </BottomNavItem>
  <BottomNavItem btnName="Settings" id="group-settings">
    <AdjustmentsVerticalOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    <Tooltip arrow={false}>Settings</Tooltip>
  </BottomNavItem>
</BottomNav>
</div>

<h2>Card with bottom bar</h2>
<div class="mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center">

<Card padding="none" class="relative overflow-y-scroll bg-white border border-gray-100 rounded-lg dark:bg-gray-700 dark:border-gray-600 h-96">
  <Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
    <a href="/" class="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
      <Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0 me-3" />
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">{@html item.comment}</p>
        <span class="text-xs text-primary-600 dark:text-primary-500">{@html item.message}</span>
      </div>
    </a>
  </Listgroup>
  <BottomNav position="sticky" navType="card" classInner="grid-cols-3 pt-2 pb-4">
    <BottomNavItem btnName="Latest" id="card-latest">
      <ClockSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Following" id="card-following">
      <UsersGroupOutline class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Favorites" id="card-favorites">
      <StarSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
    </BottomNavItem>
  </BottomNav>
</Card>
</div>