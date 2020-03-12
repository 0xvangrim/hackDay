<script>
import NewsCard from './NewsCard.svelte'
export let cards;
</script>

<style>
.card-container {
  display: flex;
  flex-direction: column;
}
</style>

<div class="card-container">
{#each cards as card}
  <NewsCard title={card.title} content={card.content} url={card.url} image={card.urlToImage} date={card.publishedAt}/>
{/each}
</div>


