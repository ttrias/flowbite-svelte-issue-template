<script lang="ts">
  import { DeviceMockup } from 'flowbite-svelte';
</script>

<h1>Device Mockup</h1>

The device mockup component can be used to feature a preview and screenshot of your application as if you would already use it on a mobile phone and it’s a great use case for hero and CTA sections.

This component is built using only the utility classes from Tailwind CSS and has built-in dark mode support so it’s easy to customize, it loads very fast and integrates perfectly with Tailwind CSS and Flowbite.

You can choose from multiple examples of mockups including phone, tablet, laptop, and even desktop devices with iOS or Android support.



<h2>Default mockup</h2>

Use this example to show a standard phone mockup based on Tailwind CSS and add your app screenshot inside of it with dark mode support included.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup>
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="default example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="default example 2" />
</DeviceMockup>
</div>

<h2>iPhone 12 mockup (iOS)</h2>

Use this example to clearly show that the preview of your application is being used on an iPhone with iOS.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup device="ios">
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="ios example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="ios example 2" />
</DeviceMockup>
</div>

<h2>Google Pixel mockup (Android)</h2>

Use this alternative phone mockup example if you want to feature previews for android gadgets.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup device="android">
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="android example 1" />
  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="android example 2" />
</DeviceMockup>
</div>

<h2>Tablet mockup</h2>

This component can be used to show an application preview inside of a responsive tablet mockup.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup device="tablet">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt="tablet example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt="tablet example 2" />
</DeviceMockup>
</div>

<h2>Laptop mockup</h2>

This example can be used to show a screenshot of your application inside a laptop mockup.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup device="laptop">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt="laptop example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="laptop example 2" />
</DeviceMockup>
</div>

<h2>Desktop mockup</h2>

Use this example to show a preview of your applicaiton inside a desktop device such as an iMac.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup device="desktop">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png" class="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png" class="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl" alt="desktop example 2" />
</DeviceMockup>
</div>

<h2>Smartwatch mockup</h2>

This component can be used to showcase applications built for smartwatches.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<DeviceMockup device="smartwatch">
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png" class="dark:hidden h-[193px] w-[188px" alt="smartwatch example 1" />
  <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png" class="hidden dark:block h-[193px] w-[188px]" alt="smartwatch example 2" />
</DeviceMockup>
</div>
