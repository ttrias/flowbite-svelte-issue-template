<script lang="ts">
  import { P, Span } from 'flowbite-svelte';
</script>

Get started with a collection of text customization examples to learn how to update the size, font weight, style, decoration and spacing of inline text elements.

<h2>Font size</h2>

Use this example to set the font size of inline text elements using the `size` prop.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap items-center space-x-4 rtl:space-x-reverse'>
<P size="xs">Aa</P>
<P size="sm">Aa</P>
<P size="base">Aa</P>
<P size="lg">Aa</P>
<P size="xl">Aa</P>
<P size="2xl">Aa</P>
<P size="3xl">Aa</P>
<P size="4xl">Aa</P>
<P size="5xl">Aa</P>
<P size="6xl">Aa</P>
<P size="7xl">Aa</P>
<P size="8xl">Aa</P>
<P size="9xl">Aa</P>
</div>

<h2>Font weight</h2>

This example can be used to the font weight of an inline text element using the `weight` prop.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap items-center space-x-4 rtl:space-x-reverse'>
<P size="4xl" weight="thin">Aa</P>
<P size="4xl" weight="extralight">Aa</P>
<P size="4xl" weight="light">Aa</P>
<P size="4xl" weight="normal">Aa</P>
<P size="4xl" weight="medium">Aa</P>
<P size="4xl" weight="semibold">Aa</P>
<P size="4xl" weight="bold">Aa</P>
<P size="4xl" weight="extrabold">Aa</P>
<P size="4xl" weight="black">Aa</P>
</div>

<h2>Text color</h2>

Use the `color` prop to set the color of the inline text.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap items-center space-x-4 rtl:space-x-reverse'>
<P color="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
<P color="text-green-700 dark:text-green-500">This text is in the green color.</P>
<P color="text-red-700 dark:text-red-500">This text is in the red color.</P>
<P color="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
<P color="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
</div>

<h2>Letter spacing</h2>

Increase or decrease the spacing between letters using the `space` prop.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-wrap items-center space-x-4 rtl:space-x-reverse'>
<P space="tighter">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</div>

<h2>Text decoration</h2>

<h3>Underline</h3>

Update the text decoration style using the `underline` and `decorationClass` props.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>
  Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.
</P>
</div>

<h3>Line through</h3>

Set a strikethrough line on a text element using the `line-through` class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Span class="line-through">$109</Span><Span class="ms-3">$79</Span>
</div>

<h3>Uppercase</h3>

Force uppercase characters for a given portion of text using the uppercase class.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>The crypto <Span class="uppercase">identity</Span> primitive.</P>
</div>

<h2>Font style</h2>

Set italic or non italic styles with the props.

<h3>Italic</h3>

Use the `italic` prop to set italic font style to a text element.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P italic>The crypto identity primitive.</P>
</div>

<h3>Normal</h3>

Text elements by default are non-italic.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>The crypto identity primitive.</P>
</div>

<h2>Line Height</h2>

Set the height between lines using the `height` prop.

<h3>Leading normal</h3>

Use the `height="normal"` (default) prop to set default line height.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P size="3xl" height="normal" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</div>

<h3>Leading relaxed</h3>

Use the `height="relaxed"` prop to increase the space between lines.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P size="3xl" height="relaxed" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</div>

<h3>Leading loose</h3>

Use the `height="loose"` prop to set a large amount of space between text lines.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P size="3xl" height="loose" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</div>

<h2>Text Align</h2>

<h3>Left</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P align="left">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h3>Center</h3>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P align="center">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h3>Right</h3>

Use the `align="right"` prop to align the text element to the right side of the page.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P align="right">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h3>Text justify</h3>

Use the `justify` prop to justify the text content.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P justify>Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h2>Whitespace</h2>

Configure the whitespace behaviour of inline text elements using the `whitespace` prop.

<h3>Normal</h3>

Use the `whitespace="normal"` prop to set the default whitespace behaviour.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P whitespace="normal">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</div>

<h3>Nowrap</h3>

Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 overflow-y-scroll'>
<P whitespace="nowrap">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</div>

<h3>Pre line</h3>

Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P whitespace="preline">
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text. 
  This is some text. This is some text. This is some text.
</P>
</div>

<h2>Text Decoration Style</h2>

Update the text decoration style using the `underline` and `decorationClass` props.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P>
  Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline decorationClass="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline decorationClass="decoration-green-500 decoration-dotted">requests</Span>, <Span underline decorationClass="decoration-4 decoration-red-500 decoration-dashed">incidents</Span>, and <Span underline decorationClass="decoration-sky-500 decoration-wavy">changes</Span>.
</P>
</div>

<h2>Opacity</h2>

Use the `opacity` and `color` prop to set the opacity of inline text elements.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<P size="xl" opacity={100} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size="xl" opacity={75} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size="xl" opacity={50} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
<P size="xl" opacity={25} color="text-blue-600 dark:text-blue-500">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</div>


