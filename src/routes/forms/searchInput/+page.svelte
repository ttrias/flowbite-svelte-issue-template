<script lang="ts">
  import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownOutline, MicrophoneSolid } from 'flowbite-svelte-icons';
  const items = [
    {
      label: 'All categories'
    },
    {
      label: 'Mockups'
    },
    {
      label: 'Templates'
    },
    {
      label: 'Design'
    },
    {
      label: 'Logos'
    }
  ]

  let selectCategory = 'All categories'
  const countries = [
    {
      label: 'United States',
      labelSelected: 'USA',
      icon: '/images/forms/search-input/usa-flag.svg'
    },
    {
      label: 'Germany',
      labelSelected: 'DE',
      icon: '/images/forms/search-input/de-flag.svg'
    },
    {
      label: 'Italy',
      labelSelected: 'ITA',
      icon: '/images/forms/search-input/it-flag.svg'
    },
    {
      label: 'China',
      labelSelected: 'CH',
      icon: '/images/forms/search-input/ch-flag.svg'
    }
  ]

  let selectCountry = 'USA'

  $: buttonLabel = countries.find(({ labelSelected }) => labelSelected ===  selectCountry)

  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
  let value = '';
  const submitted = () => {
    alert(`You are searching: ${value}`);
  };
</script>

<h1>Search input</h1>

The search input component can be used to let your users search through your website using string queries and it comes in multiple styles, variants, and sizes built with the utility classes from Tailwind CSS.

You will also find more advanced search components on this page including dropdown category selections, search buttons positioned inside the input field, voice search fields and more.

<h2>Search bar example</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<Search>
  <Button>Search</Button>
</Search>
</div>

<h2>Simple search input</h2>

Use the simplest form of a search input component with an icon and a search button next to the text field.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<form class="flex gap-2">
  <Search size="md" />
  <Button class="!p-2.5">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>
</div>

<h2>Search with dropdown</h2>

Use this search component with a dropdown to let your users select a category in which they would like the search query to be targeted in.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4 h-72'>
<form class="flex">
  <div class="relative">
    <Button class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700">
      {selectCategory}
      <ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
    </Button>
    <Dropdown classContainer="w-40">
      {#each items as { label }}
        <DropdownItem
          on:click={() => {
            selectCategory = label;
          }}
          class={selectCategory === label ? 'underline' : ''}
        >
          {label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="!p-2.5 rounded-s-none">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>
</div>

<h2>Location search</h2>

Use this example where you can select a country in which you want to search for an address or city.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4 h-72'>
<form class="flex">
  <div class="relative">
    <Button class="rounded-e-none whitespace-nowrap border border-e-0 border-primary-700">
      <img class="h-3.5 w-3.5 rounded-full me-2" src={buttonLabel?.icon} alt={buttonLabel?.label}>
      {buttonLabel?.labelSelected}
      <ChevronDownOutline class="w-2.5 h-2.5 ms-2.5" />
    </Button>
    <Dropdown classContainer="w-40">
      {#each countries as country}
        <DropdownItem
          on:click={() => {
            selectCountry = country.labelSelected;
          }}
          class="inline-flex items-center {selectCountry === country.labelSelected ? 'underline' : ''}"
        >
          <img class="h-3.5 w-3.5 rounded-full me-2" src={country.icon} alt={country.label}>
          {country.label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="!p-2.5 rounded-s-none">
    <SearchOutline class="w-6 h-6" />
  </Button>
</form>
</div>

<h2>Voice Search</h2>

Get started with this example if you would like to enable voice search for your website and users.

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 flex flex-col gap-4'>
<form class="flex gap-2">
  <Search size="md" class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" on:click={handleVoiceBtn} class="outline-none">
      <MicrophoneSolid class="w-5 h-5 me-2" />
    </button>
  </Search>
  <Button size="sm">
    <SearchOutline class="w-6 h-6 me-2 -ms-1" />
    Search
  </Button>
</form>
</div>

<h2>Example</h2>

<div class='mt-8 border w-full mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 p-6 space-y-4'>
<form id="example-form" on:submit={submitted}>
  <Search bind:value />
  <p>You are searching: {value}</p>
  <Button type="submit">Submit</Button>
</form>
</div>
