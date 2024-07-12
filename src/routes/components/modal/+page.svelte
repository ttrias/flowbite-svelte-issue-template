<script lang="ts">
  import { Button, Modal, P, Label, Input, Checkbox } from 'flowbite-svelte';
  import { ExclamationCircleOutline, QuestionCircleOutline } from 'flowbite-svelte-icons';
  import MetaMask from '../../utils/icons/MetaMask.svelte';
  import CoinbaseWallet from '../../utils/icons/CoinbaseWallet.svelte';
  import OperaWallet from '../../utils/icons/OperaWallet.svelte';
  import Fortmatic from '../../utils/icons/Fortmatic.svelte';
  import WalletConnect from '../../utils/icons/WalletConnect.svelte';
  import type { SizeType, ModalPlacementType } from 'flowbite-svelte'
  import { type ComponentProps } from 'svelte';
  
  let defaultModal = false;
  let clickOutsideModal = false;
  let popupModal = false;
  let formModal = false;
  let walletModal = false;
  let openModal = false;
  let size: SizeType;

  let id: string;
  let placement: ModalPlacementType;
  let open = false;

  const setPlacement = (ev: MouseEvent) => {
    placement = ev.target?.textContent; // text in the button
    id = `${placement}-modal`;
    open = !open;
  };
 
  let color: "dark" | "red" | "yellow" | "green" | "purple" | "blue" | "primary" | "light" | "none" | "alternative" | undefined;
  let scrollingModal = false;
  let activeModal = {
    name: 'primaryModal',
    active: false
  }
</script>

<h1>Modal</h1>

The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

Get started with multiple sizes, colors, and styles built with the utility classes from Tailwind CSS and the components from Flowbite.


<h2>Default modal</h2>

Modal visibility (open/close) is controlled by the `open` property. You can bind it to a variable that other element (usually button) will toggle. You can also use the `open=true` attribute to show open the modal by default. Opening and closing the modal will trigger the `show` and `close` events.



An option of automatic closing of the modal can be enabled by setting the `autoclose` property. Any `button` element put in the modal will close it on click.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Button on:click={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
</div>

<h2>Closing by clicking outside</h2>

You can use the `outsideclose` prop to allow the user to close the modal by clicking outside of it.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Button on:click={() => (clickOutsideModal = true)}>Default modal</Button>

<Modal title="Terms of Service" bind:open={clickOutsideModal} autoclose outsideclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
</div>

<h2>Pop-up modal</h2>

You can use this modal example to show a pop-up decision dialog to your users especially when deleting an item and making sure if the user really wants to do that by double confirming.

Notice lack of the `footer` slot.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Button on:click={() => (popupModal = true)}>Pop-up modal</Button>

<Modal bind:open={popupModal} size="xs" autoclose>
  <div class="text-center">
    <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
    <Button color="red" class="me-2">Yes, I'm sure</Button>
    <Button color="alternative">No, cancel</Button>
  </div>
</Modal>
</div>

<h2>Form element</h2>

Use this modal example with form input element to receive information from your users with the advantage of not having to link to another page but keeping the user on the currently active page. A great example would be a login or a register form.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Button on:click={() => (formModal = true)}>Form modal</Button>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
    </div>
    <Button type="submit" class="w-full1">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
    </div>
  </form>
</Modal>
</div>

<h2>Crypto wallet</h2>

Use this web3 modal component to show crypto wallet connection options like MetaMask or WalletConnect when building a website based on NFT authentication and collectibles.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Button on:click={() => (walletModal = true)}>Crypto wallet modal</Button>

<Modal title="Connect wallet" bind:open={walletModal} size="xs" >
  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
  <ul class="my-4 space-y-3">
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <MetaMask />
        <span class="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
        <span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"> Popular </span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <CoinbaseWallet />
        <span class="flex-1 ms-3 whitespace-nowrap">Coinbase Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <OperaWallet />
        <span class="flex-1 ms-3 whitespace-nowrap">Opera Wallet</span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <WalletConnect />
        <span class="flex-1 ms-3 whitespace-nowrap">WalletConnect</span>
      </a>
    </li>
    <li>
      <a href="/" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <Fortmatic />
        <span class="flex-1 ms-3 whitespace-nowrap">Fortmatic</span>
      </a>
    </li>
  </ul>
  <div>
    <a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
      <QuestionCircleOutline class="w-3 h-3 me-2" /> Why do I need to connect with my wallet?
    </a>
  </div>
</Modal>
</div>

<h2>Sizes</h2>

You can use five different modal sizing options starting from extra small to extra large, but keep in mind that the width of these modals will remain the same when browsing on smaller devices.


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
  <Button size="xs" on:click={() => { size = 'xs'; openModal = true; }}>xs</Button>
  <Button size="sm" on:click={() => { size = 'sm'; openModal = true; }}>sm</Button>
  <Button size="md" on:click={() => { size = 'md'; openModal = true; }}>md</Button>
  <Button size="lg" on:click={() => { size = 'lg'; openModal = true; }}>lg</Button>
  <Button size="xl" on:click={() => { size = 'xl'; openModal = true; }}>xl</Button>
</div>

<Modal title="Terms of Service" bind:open={openModal} {size} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot="footer">
    <Button>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
</div>

<h2>Placement</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
  <Button on:click={setPlacement}>top-left</Button>
  <Button on:click={setPlacement}>top-center</Button>
  <Button on:click={setPlacement}>top-right</Button>
  <Button on:click={setPlacement}>center-left</Button>
  <Button on:click={setPlacement}>center</Button>
  <Button on:click={setPlacement}>center-right</Button>
  <Button on:click={setPlacement}>bottom-left</Button>
  <Button on:click={setPlacement}>bottom-center</Button>
  <Button on:click={setPlacement}>bottom-right</Button>
</div>

<Modal {id} title="Terms of Service" bind:open {placement} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot="footer">
    <Button>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
</div>

<h2>Colors</h2>


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
  <div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
    <Button on:click={() => {color = 'primary'; activeModal = {name: 'primaryModal', active: true};  }}>Primary modal</Button>
    <Button color="red" on:click={() => {color = 'red'; activeModal = {name: 'redModal', active: true};  }}>Red modal</Button>
    <Button color="green" on:click={() => {color = 'green'; activeModal = {name: 'greenModal', active: true};  }}>Green modal</Button>
    <Button color="blue" on:click={() => {color = 'blue'; activeModal = {name: 'blueModal', active: true};  }}>Blue modal</Button>
    <Button color="yellow" on:click={() => {color = 'yellow'; activeModal = {name: 'yellowModal', active: true};  }}>Yellow modal</Button>
  </div>

<Modal title="Terms of Service" bind:open={activeModal.active} {color} autoclose>
  <div class="text-base leading-relaxed">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</div>
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')} {color}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
</div>

<h2>Scrolling behaviour</h2>


<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex justify-center'>
<Button on:click={() => (scrollingModal = true)} autoclose>Scrolling modal</Button>

<Modal title="Terms of Service" bind:open={scrollingModal}>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
  <svelte:fragment slot="footer">
    <Button on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>
</div>
