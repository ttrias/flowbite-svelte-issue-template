<script lang="ts">
  import { Timeline, TimelineItem, Activity, ActivityItem, Group, GroupItem, Button, Badge } from 'flowbite-svelte';
  import { ArrowRightOutline, CalendarWeekSolid } from 'flowbite-svelte-icons';
  let activities = [
    {
      title: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: 'just now',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp'
    },
    {
      title: 'We don’t serve their kind here! What? Your droids. ',
      date: '2 hours ago',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp',
      text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
    },
    {
      title: 'They’ll have to wait outside. We don’t want them here. ',
      date: '1 day ago',
      alt: 'image alt here',
      src: '/images/profile-picture-3.webp'
    }
  ];

  let groupTimelines = [
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: '/images/profile-picture-1.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
      src: '/images/profile-picture-2.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
</script>

<h1>Timeline</h1>

The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.


<h2>Default timeline</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Timeline>
  <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
    <Button color="alternative">Learn more<ArrowRightOutline class="ms-2 w-5 h-5" /></Button>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
  </TimelineItem>
  <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
</div>

<h2>Vertical Timeline</h2>

Use this vertical timeline component with icons and badges to show a more advanced set of data.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Timeline order="vertical">
  <TimelineItem title="Flowbite Application UI v2.0.0" date="Released on January 13th, 2022">
    <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
    </svelte:fragment>
    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Figma v1.3.0" date="Released on December 7th, 2021">
    <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.2" date="Released on December 2nd, 2021">
    <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
      </span>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
  </TimelineItem>
</Timeline>
</div>

<h2>Horizontal Timeline</h2>

Use this horizontally aligned timeline component to show a series of data in a chronological order.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Timeline order="horizontal">
  <TimelineItem title="Flowbite Library v1.0.0" date="Released on December 2nd, 2021">
    <svelte:fragment slot="icon">
      <div class="flex items-center">
        <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.2.0" date="Released on December 23th, 2021">
    <svelte:fragment slot="icon">
      <div class="flex items-center">
        <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
  <TimelineItem title="Flowbite Library v1.3.0" date="Released on January 5th, 2021">
    <svelte:fragment slot="icon">
      <div class="flex items-center">
        <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-white dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
          <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </svelte:fragment>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
  </TimelineItem>
</Timeline>
</div>

<h2>Activity Log</h2>

This component can be used to show the timline of a user’s activity history inside your application by using an avatar, datetime, description, and links to specific pages.

<Badge large>Warning: the ActivityItem title and text are using @html.</Badge>


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Activity>
  <ActivityItem {activities} />
</Activity>
</div>

<h2>Grouped timeline</h2>

Use this component to group multiple data entries inside a single date and show elements like the avatar, title, description, tag and link to a relevant page.

<Badge large>Warning: the GroupItem title is using @html.</Badge>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Group date="January 13th, 2022">
  <GroupItem timelines={groupTimelines} />
</Group>
</div>
