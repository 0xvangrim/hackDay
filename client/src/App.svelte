<script>
import NewsCard from './components/NewsCard.svelte'
import NewsBoard from './components/NewsBoard.svelte'
import QueryCard from './components/QueryCard.svelte'
</script>

<style>
@font-face {
  font-family: 'Cloister Black';
  src: url("//db.onlinewebfonts.com/t/3415446527a8aa3e49199af301e31a99.ttf") format('truetype');
}
.headline {
  font-family: 'Cloister Black';
  text-align: center;
  font-size: 60px;
}
</style>

<main>
<h1 class="headline"> News App</h1>
<QueryCard />
</main>

