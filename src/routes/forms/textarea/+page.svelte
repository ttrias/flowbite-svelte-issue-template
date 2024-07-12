<script lang="ts">
  import { Label, Textarea, Toolbar, ToolbarGroup, ToolbarButton, Button } from 'flowbite-svelte';
  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<h1>Textarea</h1>

The textarea component is a multi-line text field input that can be used to receive longer chunks of text from the user in the form of a comment box, description field, and more.



<h2>Textarea example</h2>

Get started with the default example of a textarea component below.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<Label for="textarea-id" class="mb-2">Your message</Label>
<Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />
</div>

<h2>WYSIWYG Editor</h2>

If you want to add other actions as buttons alongside your textarea component, such as with a WYSIWYG editor, then you can use the example below.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6'>
<form>
  <label for="editor" class="sr-only">Publish post</label>
  <Textarea id="editor" rows="8" class="mb-4" placeholder="Write a comment">
    <Toolbar slot="header" embedded>
      <ToolbarGroup>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-6 h-6 rotate-45" /></ToolbarButton>
        <ToolbarButton name="Embed map"><MapPinAltSolid class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-6 h-6" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup>
        <ToolbarButton name="Format code"><CodeOutline class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Add emoji"><FaceGrinOutline class="w-6 h-6" /></ToolbarButton>
      </ToolbarGroup>
      <ToolbarButton name="send" slot="end"><PaperPlaneOutline class="w-6 h-6 rotate-45" /></ToolbarButton>
    </Toolbar>
  </Textarea>
  <Button>Publish post</Button>
</form>
</div>

<h2>Comment box</h2>

Most often the textarea component is used as the main text field input element in comment sections. Use this example to also apply a helper text and buttons below the textarea itself.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<form>
  <Textarea class="mb-4" placeholder="Write a comment">
    <div slot="footer" class="flex items-center justify-between">
      <Button type="submit">Post comment</Button>
      <Toolbar embedded>
        <ToolbarButton name="Attach file"><PaperClipOutline class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Set location"><MapPinAltSolid class="w-6 h-6" /></ToolbarButton>
        <ToolbarButton name="Upload image"><ImageOutline class="w-6 h-6" /></ToolbarButton>
      </Toolbar>
    </div>
  </Textarea>
</form>
<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 dark:text-primary-500 hover:underline"> Community Guidelines </a>
  .
</p>
</div>

<h2>Chatroom input</h2>

If you want to build a chatroom component you will usually want to use a textarea element to allow users to write multi-line chunks of text.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<form>
  <label for="chat" class="sr-only">Your message</label>
  <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <ImageOutline class="w-6 h-6" />
      <span class="sr-only">Upload image</span>
    </ToolbarButton>
    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">
      <FaceGrinOutline class="w-6 h-6" />
      <span class="sr-only">Add emoji</span>
    </ToolbarButton>
    <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows="1" placeholder="Your message..." />
    <ToolbarButton type="submit" color="blue" class="rounded-full text-primary-600 dark:text-primary-500">
      <PaperPlaneOutline class="w-6 h-6 rotate-45" />
      <span class="sr-only">Send message</span>
    </ToolbarButton>
  </div>
</form>
</div>