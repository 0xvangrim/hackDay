<script>
import NewsCard from './components/NewsCard.svelte'
import NewsBoard from './components/NewsBoard.svelte'
import QueryCard from './components/QueryCard.svelte'
</script>

<style>
@font-face {
  font-family: 'Cloister Black';
  src: local('Cloisterblack')
}
.headline {
  font-family: 'Cloister Black';
  text-align: center;
}
</style>

<main>
<h1 class="headline">Latest News App</h1>
<QueryCard />
</main>

