<template>
  <div class="art-overview-view-container">
    <app-header rootClassName="header-root-class-name2"></app-header>
    <div class="art-overview-view-container1">
      <div class="art-overview-view-container2">
        <select class="art-overview-view-select">
          <option value="Izaberi">Izaberi</option>
          <option value="Po umetniku">Po umetniku</option>
          <option value="Po nazivu">Po nazivu</option>
        </select>
        <button type="button" class="art-overview-view-button button">
          Sortiraj
        </button>
      </div>
      <div class="art-overview-view-container3">
        <input
          type="text"
          placeholder="ex. Van Gogh"
          class="art-overview-view-textinput input"
        />
        <button type="button" class="art-overview-view-button button">
          Pretrazi
        </button>
      </div>
    </div>
    <div class="art-overview-view-blog">
      <div class="art-overview-view-container4">
        <router-link to="/art-concrete-view" class="art-overview-view-navlink">
          <art-overview-card-component1
            rootClassName="rootClassName1"
            class="art-overview-view-component1"
          ></art-overview-card-component1>
        </router-link>
      </div>
      <div class="art-overview-view-container5">
        <router-link to="/art-concrete-view" class="art-overview-view-navlink1">
          <art-overview-card-component1
            image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName2"
            class="art-overview-view-component2"
          ></art-overview-card-component1>
        </router-link>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name2"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ArtOverviewCardComponent1 from '../components/art-overview-card-component1'
import AppFooter from '../components/footer'

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
  metaInfo: {
    title: 'ArtOverviewView - Work Of Art',
    meta: [
      {
        property: 'og:title',
        content: 'ArtOverviewView - Work Of Art',
      },
    ],
  },
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
