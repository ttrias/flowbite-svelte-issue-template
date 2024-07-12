<script lang="ts">
  import { Toast, Avatar, Button, A } from 'flowbite-svelte';
  import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid, PaperPlaneOutline, ImageOutline, BellOutline, DownloadOutline, CameraPhotoOutline } from 'flowbite-svelte-icons';
  import { slide, blur, fly } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';

  let open = true;
  let counter = 6;

  function trigger() {
    open = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    open = false;
  }
</script>

<h1>Toast</h1>

The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

<h2>Default toast</h2>

Use this simple toast component with an icon, message, and dismissable close button to show alert messages to your website visitors.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Toast>
  <FireOutline slot="icon" class="w-6 h-6 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200" />
  Set yourself free.
</Toast>
</div>

<h2>Colors</h2>

Use the `color` prop to easily change the colors of the icons. Set the `color` prop to `none` and use the `extraIconClass` prop to customize your desired icon styles.

Usually, green, red, and orange are used to show success, danger, or warning alert messages to your users. See the first three examples below.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col items-center gap-4'>
<Toast color="green">
  <svelte:fragment slot="icon">
    <CheckCircleSolid class="w-5 h-5" />
    <span class="sr-only">Check icon</span>
  </svelte:fragment>
  Item moved successfully.
</Toast>

<Toast color="red">
  <svelte:fragment slot="icon">
    <CloseCircleSolid class="w-5 h-5" />
    <span class="sr-only">Error icon</span>
  </svelte:fragment>
  Item has been deleted.
</Toast>

<Toast color="primary">
  <svelte:fragment slot="icon">
    <ExclamationCircleSolid class="w-5 h-5" />
    <span class="sr-only">Warning icon</span>
  </svelte:fragment>
  Improve password difficulty.
</Toast>

<Toast color="dark">
  <FireOutline slot="icon" class="w-6 h-6" />
  Gray
</Toast>

<Toast color="yellow">
  <FireOutline slot="icon" class="w-6 h-6" />
  Yellow
</Toast>

<Toast color="blue">
  <FireOutline slot="icon" class="w-6 h-6" />
  Blue
</Toast>

<Toast color="indigo">
  <FireOutline slot="icon" class="w-6 h-6" />
  Indigo
</Toast>

<Toast color="purple">
  <FireOutline slot="icon" class="w-6 h-6" />
  Purple
</Toast>

<Toast color="none" defaultIconClass="w-8 h-8 text-pink-500 bg-pink-100 dark:bg-pink-800 dark:text-pink-200">
  <FireOutline slot="icon" class="w-6 h-6" />
  Customize your colors.
</Toast>
</div>

<h2>Simple toast</h2>

This component can be used to show simple messages and notifications without the use of a close button.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Toast dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
  <PaperPlaneOutline class="w-5 h-5 text-primary-600 dark:text-primary-500 rotate-45" />
  <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
</Toast>
</div>

<h2>Icons</h2>

For the right positioning of the icon use: `slot="icon"`.

You can use any [icon components](/icons).

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col items-center gap-4'>
<Toast>
  <ImageOutline slot="icon" class="w-6 h-6" />
  There is a box icon.
</Toast>

<Toast>No icon at all.</Toast>
</div>

<h2>Autohide example</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<div class="flex gap-10">
  <Button on:click={trigger} class="my-3">Restart</Button>
  <Toast dismissable={false} transition={slide} bind:open>
    <CheckCircleSolid slot="icon" class="w-5 h-5" />
    Autohide in {counter}s.
  </Toast>
</div>
</div>

<h2>Transitions</h2>

You can use one of <A href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" rel="noreferrer" >Svelte/easing</A>.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col items-center'>
<Toast transition={slide} class="mb-4">
  <CheckCircleSolid slot="icon" class="w-6 h-6" />
  Transition type: slide
</Toast>

<Toast transition={slide} params={{ delay: 250, duration: 300, easing: quintOut }} class="mb-4">
  <CheckCircleSolid slot="icon" class="w-6 h-6" />
  Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast transition={slide} params={{ delay: 250, duration: 2000, easing: elasticOut }}>
  <CheckCircleSolid slot="icon" class="w-6 h-6" />
  Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>
</div>

<h3>Blur examples</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col items-center'>
<Toast transition={blur} color="purple" params={{ amount: 10 }} class="mb-4">
  <BellOutline slot="icon" class="w-6 h-6" />
  Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
  <BellOutline slot="icon" class="w-6 h-6" />
  Transition type: blur, amount: 50, delay 1000
</Toast>
</div>

<h3>Fly examples</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col items-center'>
<Toast transition={fly} params={{ x: 200 }} color="green" class="mb-4">
  <DownloadOutline slot="icon" class="w-6 h-6" />
  Transition type: fly right
</Toast>

<Toast transition={fly} params={{ y: 200 }} color="green">
  <DownloadOutline slot="icon" class="w-6 h-6" />
  Transition type: fly down
</Toast>
</div>

<h2>Undo button</h2>

Use this toast component to also show an “undo” button to reverse the action of the user.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Toast contentClass="w-full text-sm font-normal flex items-center justify-between">
  Conversation archived.
  <a class="ms-auto font-medium text-primary-600 p-1.5 hover:bg-primary-100 rounded-lg dark:text-primary-500 dark:hover:bg-gray-700" href="/"> Undo </a>
</Toast>
</div>

<h2>Advanced examples</h2>

If the toast content grows to multiple lines we need to switch off the `items-center` alignment. Notice how the examples below achieve that by setting `align=flase` property.

<h3>Toast message</h3>

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Toast align={false} color="none" defaultIconClass="">
  <Avatar slot="icon" src="/images/profile-picture-1.webp" />
  <div class="ms-3 text-sm font-normal">
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
    <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
    <Button size="xs">Reply</Button>
  </div>
</Toast>
</div>

<h3>Push notification</h3>

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Toast align={false}>
  <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
  <div class="flex items-center mt-3">
    <Avatar src="/images/profile-picture-3.webp" />
    <div class="ms-3">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
      <div class="text-sm font-normal">commented on your photo</div>
      <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span>
    </div>
  </div>
</Toast>
</div>

<h3>Interactive toast</h3>

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Toast align={false}>
  <CameraPhotoOutline slot="icon" class="w-6 h-6" />

  <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
  <div class="mt-3">
    <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
    <div class="grid grid-cols-2 gap-2">
      <Button size="xs" class="w-full">Update</Button>
      <Button size="xs" class="w-full" color="dark">Not now</Button>
    </div>
  </div>
</Toast>
</div>

<h2>Positioning</h2>

Use the position property to position these toast components relative to the main content wrapper element from your document.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<div class="relative h-56">
  <Toast dismissable={false} position="top-left">Top left positioning.</Toast>
  <Toast dismissable={false} position="top-right">Top right positioning.</Toast>
  <Toast dismissable={false} position="bottom-left">Bottom left positioning.</Toast>
  <Toast dismissable={false} position="bottom-right">Bottom right positioning.</Toast>
</div>
</div>
