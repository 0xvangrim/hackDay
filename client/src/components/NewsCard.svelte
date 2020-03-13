<script>
  export let title;
  export let description;
  export let url;
  export let image;
  export let date;
  export let source;

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .card-container {
    display: flex;
    flex-direction: row;
    width: auto;
    min-height: 156px;
    height: auto;
    background: white;
    border-bottom: black 1px solid;
    margin: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card-img {
    max-width: 300px;
    max-height: 175px;
  }

  .card-date,
  .card-source {
    color: darkgrey;
    font-style: italic;
    font-size: 8px;
  }

  .card-content {
    padding-top: 2%;
  }

  .card-title {
    font-size: 18px;
    line-height: 1.5em;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    max-height: 225px;
  }

  .img-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
  }

  .content-link {
    color:black;
  }

</style>

<div class="card-container">
  <div class="img-container">
    {#if image === null || image ===''}
      <img
        class="card-img"
        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
        alt="" />
    {:else}
      <img class="card-img" src={image} alt="" />
    {/if}
    <p class="card-source">Source: {source}</p>
  </div>
  <div class="text-container">
    <h1 class="card-title">
      <a href={url} target="_blank">{title}</a>
    </h1>
    <p class="card-date">{date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}</p>
    {#if description === null}
      <p>No content available</p>
    {:else}
      <p class="card-content">
        <a class="content-link" href={url}>
          {@html description}
        </a>
      </p>
    {/if}
  </div>
</div>
