<script lang="ts" generics="T">
    import {MultiSelect, type SelectOptionType} from "flowbite-svelte";

    export let selectedItems: T[] = []
    export let keySelector = (item: T) : any => (item as any).value
    export let nameSelector = (item: T) : string|number => (item as any).name

    function transform(item: T): SelectOptionType<T> {
        return {
            name: nameSelector(item),
            value: item
        }
    }

    let searchItems: SelectOptionType<T>[] = []

    export function setNewSearchItems(newItems: T[]) {
        const oldKeys = selectedItems.reduce((previousValue: any, currentValue) => {
            previousValue[keySelector(currentValue)] = true
            return previousValue
        }, {})
        const newKeys = newItems.reduce((previousValue : any, currentValue) => {
            previousValue[keySelector(currentValue)] = true
            return previousValue
        }, {})
        const keep = selectedItems.filter(value => oldKeys[keySelector(value)] !== undefined && newKeys[keySelector(value)] === undefined)
        searchItems = keep.concat(newItems).map(transform)
    }
</script>

<MultiSelect id="selectElement" items={searchItems} bind:value={selectedItems} on:change={() => alert(JSON.stringify(selectedItems))} />
