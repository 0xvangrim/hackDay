<script>
export let title;
export let content;
export let url;
export let image;
export let date;
</script>

<style>
* {
  margin:0;
  padding:0;
}
.card-container {
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  background:white;
  border-bottom: black 1px solid;
  margin: 10px;
}

.card-img {
  max-width: 300px;
  max-height: 225px;
}

.card-date {
color: lightgrey;
font-style: italic;
font-size: 8px;
margin: 10px;
}

.card-content {
  align-self: flex-end;
  padding-top: 2%;
}

.card-title {
  font-size: 18px;
  line-height:1.5em;
}

.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  max-height: 225px;
}

.img-container {
  justify-content: left;
}
</style>


<div class="card-container">
<div class="img-container">
<img class="card-img" src={image} alt="" />
  <p class="card-date">{date}</p>
</div>
<div class="text-container">
  <h1 class="card-title"><a  href={url}>{title}</a></h1>
  {#if content === null}
  <p class="card-content">{content}</p>
  {/if}
  </div>
</div>