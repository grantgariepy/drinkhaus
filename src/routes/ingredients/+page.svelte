<script lang="ts">
	import { writable, derived } from 'svelte/store';
	export let data: any;

	const array = data.drinks;
	const drinkArray: any = [];
	array.forEach((element: any) => {
		drinkArray.push(element.strIngredient1.toLowerCase());
	});
	console.log(drinkArray);
	const term = writable('');
	const items = writable(drinkArray);
	const filtered = derived([term, items], ([$term, items]) =>
		$items.filter((x: any) => x.includes($term))
	);
	let val = '';
	$: term.set(val);
</script>

<div>
	<div class="bg-white py-6 sm:py-8 lg:py-12">
		<div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
			<div class="flex justify-between items-end gap-4 mb-6">
				<h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
					Ingredients
				</h2>
			</div>
			<label for="searchInput">Search</label>
			<input
				type="text"
				bind:value={val}
				id="searchInput"
				class="w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-orange-300 rounded outline-none transition duration-100 px-3 py-2"
			/>
			<div class="grid gap-x-4 md:gap-x-6 gap-y-8">
				<ul>
					{#each $filtered as item}
						<li>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
