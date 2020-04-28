<script>
  import NewsBoard from "./NewsBoard.svelte";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  let cards;
  let userInput = "";
  let showEmptyError = false;
  let language = "se";
  let cardsEmpty = false;
  let fromDate;
  let toDate;
  let searchHeadLines = false;
  let searchAll = false;

  const fetchData = async () => {
    if (searchHeadLines) {
      searchHeadLines = false;
      const getData = await fetch(`http://localhost:8080/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: userInput,
          language: language.toString(),
          fromDate: fromDate,
          toDate: toDate
        })
      });
      const result = await getData.json();
      cardExist(result);

    } else {
      const getData = await fetch(`http://localhost:8080/search-all`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: userInput,
          language: language.toString(),
          fromDate: fromDate,
          toDate: toDate
        })
      });
      const result = await getData.json();
      cardExist(result);
    }
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
    margin-left: 10rem;
  }
  .query-field,
  .btn-headline,
  .language-drop,
  .btn-all {
    margin-right: 8px;
    margin-bottom: 30px;
  }

  .query-date-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-right: 8px;
  }

  .query-date-time {
    font-size: 8px;
    height: 2em;
  }

  .empty-search,
  .empty-input {
    text-align: center;
  }
  .btn-headline {
    background: green;
    border-radius: 8px;
  }

  .btn-all {
    background-color: lightgrey;
    border-radius: 8px;
  }
</style>

<div class="search-form">
  <form on:submit={onSubmit} id="query-form" class="query-form">
    <select class="language-drop" id="language" bind:value={language}>
      <option value="se">Swedish</option>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="it">Italian</option>
      <option value="jp">Japanese</option>
    </select>
    <input
      bind:value={userInput}
      type="text"
      placeholder="search here"
      id="title"
      class="query-field" />
    <div class="query-date-container">
      <input class="query-date-time" type="date" bind:value={fromDate} />
      <input class="query-date-time" type="date" bind:value={toDate} />
    </div>
    <input
      type="submit"
      class="btn-headline"
      value="Search Headlines"
      button
      on:click={() => {
        searchHeadLines = true;
      }} />
    <input type="submit" class="btn-all" value="Search all" />

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
