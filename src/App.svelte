<script>
	import {fade} from 'svelte/transition';
	var tamount, start;
	let end = '';

	function gen(){
		// milliseconds credited
		var valid_jump = (tamount/0.08)*3600000;
		end = new Date(Date.parse(start)+valid_jump);
		return end;
	}

</script>
<main>
	<div class="nav">
		<h3>⚡ TOKEN'D</h3>
	</div>
	<div class="main">
		<label for="t-amount">
			Token Amount:
			<input type="number" placeholder="Amount" bind:value={tamount}>
		</label>
		<label>
			Start Date:
			<input type="date" bind:value={start}>
		</label>

		<button type="submit" id="gen" on:click={gen}>Generate</button>

		<div id="results">
			{#if end}
				 <p in:fade>Ends on: {end}</p>
			{:else}
				 <p out:fade>Just chillin' 🥶</p>
			{/if}
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.nav {
		position: sticky;
		top: 0;
		width: 100%;
		height: 50px;
		background-color: rgb(9, 12, 12);
		color: rgb(255, 81, 0);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 2rem;
		justify-content: center;
		padding: 15px;
		width: clamp(200px, 50%, 650px);
	}
	label {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
	label input {
		backdrop-filter:blur(5px);
		-webkit-backdrop-filter: blur(5px);
		background-color: #00000050;
	}
	#results {
		padding: 10px;
		border-radius: 8px;
		background-color: white;
		background-color: rgba(255, 255, 255, 0.137);
		-webkit-backdrop-filter: blur(10px);
  		backdrop-filter: blur(10px);
		box-shadow: #00000020 5px 5px 10px, #00000020 3px 3px 10px;
	}
</style>