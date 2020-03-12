<script>
  import NewsBoard from "./NewsBoard.svelte";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let cards;
  let userInput = "";
  let showEmptyError = false;
  let language = "";
  let cardsEmpty = false;

  const fetchData = async () => {
    const getData = await fetch(`http://localhost:8080/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: userInput,
        language: language.toString()
      })
    });
    const result = await getData.json();
    cardExist(result);
  };

  const cardExist = result => {
    if (result.articles.length === 0) {
      cardsEmpty = true;
    } else {
      cardsEmpty = false;
        cards = result.articles;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (userInput === "") {
      showEmptyError = true;
    } else {
      showEmptyError = false;
      dispatch("query", fetchData());
      userInput = "";
    }
  };
</script>

<style>
  .search-form {
    display: flex;
    justify-content: center;
    border-bottom: lightgrey 1px solid;
  }
  .query-form {
    display: flex;
    justify-content: center;
  }
  .query-field,
  .btn-search,
  .language-drop {
    margin-right: 10px;
    margin-bottom: 30px;
  }
  .query-field {
    align-self: center;
  }

  .empty-search,
  .empty-input {
    text-align: center;
  }
</style>

<div class="search-form">
  <form on:submit={onSubmit} id="query-form" class="query-form">
    <input
      bind:value={userInput}
      type="text"
      placeholder="search here"
      id="title"
      class="query-field" />
    <select class="language-drop" id="language" bind:value={language}>
      <option value="se">Swedish</option>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="jp">Japanese</option>
    </select>
    <input type="submit" class="btn-search" value="Search News" />
  </form>
</div>
{#if showEmptyError}
  <h1 class="empty-input">Please type in a search term</h1>
{:else if cardsEmpty}
  <h1 class="empty-search">No search results found</h1>
{:else if cards}
  <div in:fly={{ y: 200, duration: 600 }}>
    <NewsBoard {cards} />
  </div>
{/if}
