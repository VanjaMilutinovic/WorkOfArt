<template>
  <div class="art-overview-view-container">
    <app-header rootClassName="header-root-class-name2"></app-header>
    <div class="art-overview-view-container1">
      <div class="art-overview-view-container2">
        <select class="art-overview-view-select" name="choice" v-model="choice">
          <option value="0">{{ choices[0][lang] }}</option>
          <option value="1">{{ choices[1][lang] }}</option>
          <option value="2">{{ choices[2][lang] }}</option>
        </select>
        <button type="button" class="art-overview-view-button button" @click="sortBy()">
          {{ sort[lang] }}
        </button>
      </div>
      <div class="art-overview-view-container3">
        <input type="text" placeholder="ex. Van Gogh" class="art-overview-view-textinput input" name="filter"
          v-model="filter" />
        <button type="button" class="art-overview-view-button button" @click="searchBy()">
          {{ search[lang] }}
        </button>
      </div>
    </div>
    <div class="art-overview-view-blog" v-for="art in this.artShowing" :key="art.id">
      <div class="art-overview-view-container4" v-if="art.type == this.type">
        <router-link :to="`/art-concrete-view/${art.id}`" class="art-overview-view-navlink">
          <ArtOverviewCardComponent1 class="art-overview-view-component1" :image_src='art.image_src'
            :author1='art.data[this.lang].author' :title='art.data[this.lang].title'></ArtOverviewCardComponent1>
        </router-link>
      </div>

    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ArtOverviewCardComponent1 from '../components/art-overview-card-component1'
import AppFooter from '../components/footer'
import AllArt from '../data/arts.js'

export default {
  name: 'ArtOverviewView',
  components: {
    AppHeader,
    ArtOverviewCardComponent1,
    AppFooter,
  },
  props: {
    type: {
      type: String,
      default: 0
    },
  },
  data() {
    return {
      artShowing: [],
      allArts: [],
      search: ['Pretrazi', 'Search'],
      sort: ['Sortiraj', 'Sort'],
      lang: 0,
      choice: 0,
      filter: '',
      choices: [['Izaberi', 'Choose'],
      ['Po umetniku', 'By artist'],
      ['Po nazivu', 'By title']]
    }
  },
  created() {
    this.allArts = AllArt
    this.artShowing = this.allArts.filter(art => art.type == this.type)
    this.lang = localStorage.getItem('lang')
  },
  methods: {
    sortBy() {

      if (this.choice == 0) {
        // No sorting, show all arts as is
        this.artShowing = JSON.parse(localStorage.getItem('arts'));
      }
      else if (this.choice == 1) {
        // Sort by author name
        this.artShowing = this.allArts.sort((a, b) => {
          const authorA = a.data[this.lang].author.toLowerCase();
          const authorB = b.data[this.lang].author.toLowerCase();
          return authorA < authorB ? -1 : 1;
        });
      }
      else if (this.choice == 2) {
        // Sort by title
        this.artShowing = this.allArts.sort((a, b) => {
          const titleA = a.data[this.lang].title.toLowerCase();
          const titleB = b.data[this.lang].title.toLowerCase();
          return titleA < titleB ? -1 : 1;
        });
      }



    },
    searchBy() {
      const keyword = this.filter.toLowerCase();

      // Filter arts based on the keyword

      const filteredArts = this.allArts.filter(art => {
        const title = art.data[this.lang].title.toLowerCase();
        const author = art.data[this.lang].author.toLowerCase();
        if (title.includes(keyword) || author.includes(keyword))
          return art;
      });
      // Update the displayed arts
      this.artShowing = filteredArts;
    }

  }
}
</script>

<style scoped>
.art-overview-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.art-overview-view-container1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: space-between;
}

.art-overview-view-container2 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.art-overview-view-select {
  margin: 16px;
  border: 1px solid #303030;
  padding: 6px;
  border-radius: 8px;
}

.art-overview-view-button {
  margin: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: #ffffff;
  width: 80px;
  height: 36px;
  align-self: flex-end;
  font-style: normal;
  font-weight: 600;
  background-color: #303030;
  border-radius: 8px;
}

.art-overview-view-container3 {
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
}

.art-overview-view-textinput {
  margin: 16px;
  border: 1px solid #303030;
  padding: 6px;
  border-radius: 8px;
}

.art-overview-view-blog {
  width: 100%;
  display: flex;
  padding: 48px;
  max-width: 1440px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.art-overview-view-container4 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}

.art-overview-view-navlink {
  display: contents;
}

.art-overview-view-component1 {
  text-decoration: none;
}

.art-overview-view-container5 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  flex-direction: column;
  justify-content: space-between;
}

.art-overview-view-navlink1 {
  display: contents;
}

.art-overview-view-component2 {
  text-decoration: none;
}

@media(max-width: 991px) {
  .art-overview-view-container1 {
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }

  .art-overview-view-container2 {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .art-overview-view-container3 {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
}

@media(max-width: 767px) {
  .art-overview-view-blog {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media(max-width: 479px) {
  .art-overview-view-textinput {
    margin-left: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .art-overview-view-blog {
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 32px;
  }
}
</style>
