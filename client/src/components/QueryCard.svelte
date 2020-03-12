<script>
  import NewsBoard from "./NewsBoard.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let cards;
  let userInput ='';

  const fetchData = async () => {
    const getData = await fetch(`http://localhost:8080/${userInput}`);
    const result = await getData.json();
    cards = result.articles;
    console.log(userInput)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch('query', fetchData())
  };
</script>

<style>
  .query-form {
    display: flex;
    justify-content: center;
  }
  .query-field {
    margin-right: 10px;
  }
</style>

<form method="POST" name="query" on:submit={onSubmit} id="query-form" class="query-form" >
  <input
    bind:value={userInput}
    type="text"
    placeholder="search here"
    id="title"
    class="query-field" />
  <input type="submit" class="btn-search" value="Search News" />
</form>
{#if cards}
<NewsBoard {cards} />
{/if}
