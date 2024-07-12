<script lang="ts">
  import { Tooltip, Button, P } from 'flowbite-svelte';
  let type = 'dark' as "auto" | "dark" | "light" | "custom";

  let placement = 'left' as  "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
  // let placement = '';
</script>

<h1>Tooltip</h1>

Flowbite-Svelte allows you to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

<h2>Default tooltip example</h2>

To get started with using tooltips all you need to do is set `triggeredBy` attribute of the tooltip component to any CSS query targeting trigger element(s). In the following example you can see the tooltip that will be trigger by the `tooltip-default` element to be shown when hovered or focused.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-end h-32'>
<!-- only works if the button and tooltip are adjacent on your page. Like this: -->
<Button>Default tooltip</Button>
<Tooltip>Tooltip content</Tooltip>
</div>

If you have anything else between the button and tooltip, they won't find each other and you will need to specify the link between them by setting the property `triggeredBy` to the CSS query of the element that triggers the tooltip. Most of the time you will want to use the `id` attribute of the element to link them, but you can use any CSS query you want. See the examples further down.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-end h-32 gap-2'>
<Button id="specific-button-anywhere-on-page">Default tooltip</Button>
<P>hi mom</P>
<P>lorem ipsum, content blah blah, other stuff</P>
<Tooltip triggeredBy="#specific-button-anywhere-on-page">Tooltip content</Tooltip>
</div>

<h2>Tooltip types</h2>

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `type=light|dark` data attribute.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-end h-32 gap-2'>
<Button id="type-1" >Light tooltip</Button>
<Tooltip type='light' triggeredBy="#type-1">Tooltip content</Tooltip>
<Button id="type-2" >Default tooltip</Button>
<Tooltip type='auto' triggeredBy="#type-2">Tooltip content</Tooltip>
<Button id="type-3" >Dark tooltip</Button>
<Tooltip type='dark' triggeredBy="#type-3">Tooltip content</Tooltip>
</div>

<h2>Placement</h2>

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement=top|right|bottom|left` attribute.

**Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-center justify-center gap-2 h-36'>
<Button id="placement-1">Tooltip left</Button>
<Tooltip triggeredBy="#placement-1" placement='left'>
  Tooltip content - Left
</Tooltip>
<Button id="placement-2">Tooltip top</Button>
<Tooltip triggeredBy="#placement-2" placement='top'>
  Tooltip content - Top
</Tooltip>
<Button id="placement-3">Tooltip bottom</Button>
<Tooltip triggeredBy="#placement-3" placement='bottom'>
  Tooltip content - Bottom
</Tooltip>
<Button id="placement-4" >Tooltip right</Button>
<Tooltip triggeredBy="#placement-4" placement='right'>
  Tooltip content - Right
</Tooltip>
</div>

<h2>Triggering</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-end gap-2 h-32'>
<Button id="hover">Tooltip hover</Button>
<Button id="click">Tooltip click</Button>
<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
</div>

<h2>Disable arrow</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-end gap-2 h-32'>
<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy="#disable-arrow">Tooltip content</Tooltip>
</div>

<h2>External reference</h2>

If you need the tooltip to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex gap-4 flex-col justify-center items-center h-72'>
<div id="ext-ref" class="p-2 rounded-lg border border-gray-200 dark:border-gray-600">External reference</div>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="ref-left" on:mouseenter={() => (placement = 'left')}>Left</Button>
  <Button id="ref-top" on:mouseenter={() => (placement = 'top')}>Top</Button>
  <Button id="ref-right" on:mouseenter={() => (placement = 'right')}>Right</Button>
</div>
<Tooltip reference="#ext-ref" triggeredBy="[id^='ref-']" {placement} class="w-64 text-sm font-light">And here's some amazing content. It's very engaging. Right?</Tooltip>
</div>

<h2>Custom type</h2>

Various color palettes can be set for a tooltip by using the `color` property from the underlying `Frame` component. (Setting `color` prop sets the `type` to `custom` implicitly.)

When you want to add a fully custom styles, use `type="custom"`, `defaultClass`, and `class` to modify the tooltip styling.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex items-center h-64 gap-2'>
<Button>Red tooltip</Button>
<Tooltip color="red">Tooltip content</Tooltip>

<Button>Yellow tooltip</Button>
<Tooltip color="yellow">Tooltip content</Tooltip>

<Button>Custom type</Button>
<Tooltip placement="right" type="custom" defaultClass="" class="p-4 text-lg font-medium bg-purple-500 text-gray-100" arrow={false}>Tooltip content</Tooltip>
</div>
