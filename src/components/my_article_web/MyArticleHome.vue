<template>
  <div id="MyArticleHome">
    <ul class="forList">
      <li class="uiLi" v-for="articleData in articleDataList" :key="articleData.id">
        <div class="card">
          <h3 class="card__title">{{ articleData.title }}
          </h3>
          <p class="card__content">{{ articleData.category }}</p>
          <div class="card__date">
            {{ articleData.publishTime }}
          </div>
          <div class="card__arrow">
            <svg fill="none" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                fill="#fff"></path>
            </svg>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination
      class="block"
      :hide-on-single-page="true"
      :page-size='pageSet.pageSize'
      :pager-count="7"
      layout="prev, pager, next"
      @current-change="pageSetNum"
      :total='pageSet.total'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "MyArticleHome",
  data() {
    return {
      pageSet: {
        pageSize: 5,
        pageNum: 1,
        total: 0
      },
      articleDataList: [{
        id: 1,
        title: "Qanxun_iot项目",
        category: "SpringBoot, MybatisPlus, MySQL, Redis",
        publishTime: "十二月 26, 2022",
      },
        {
          id: 2,
          title: "Qanxun_UI项目",
          category: "Vue, HTML, CSS, JS",
          publishTime: "一月 1, 2023",
        }
      ],
    }
  },
  methods: {
    pageSetNum(data) {
      this.pullArticlePage(this.pageSet.pageSize,data);
    },
    pullArticlePage(pageSize, pageNum) {
      this.$axios.get("/article/read/page/" + pageSize + "/" + pageNum).then(value => {
        let dataList = value.data.data.records;
        for (let data of dataList) {
          let timeStr = data.publishTime;
          let date = new Date(timeStr);
          let month = date.getMonth() + 1; //月
          let day = date.getDate(); //日
          let year = date.getFullYear(); //年
          let hour = date.getHours(); //时
          let minutes = date.getMinutes(); //分
          timeStr = year + " " + month + "-" + day + " " + hour + ":" + minutes;
          let read = data.viewCount;
          let link = data.likeCount;
          let collect = data.collectCount;
          timeStr = timeStr + " | " + "浏览量:" + read + " 喜欢数:" + link + " 收藏数:" + collect;
          data.publishTime = timeStr;
        }
        this.pageSet.total = value.data.data.total;
        this.articleDataList = value.data.data.records;
      });
    },
  },
  mounted() {
    this.pullArticlePage(5, 1);
    document.title = "MyArticleHome"
  }
}
</script>

<style lang="less" scoped>
#MyArticleHome {
  background-color: #212121;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family:"ailimama",serif;

  .block {
    //margin-top: 3vh; // 添加margin属性
    margin: 3vh 0 0 10vw;
  }

  .parent {
    display: flex;
  }

  /* this card is inspired form this - https://georgefrancis.dev/ */

  .forList {

    padding: 0;
    list-style: none;
    margin: 0 0 0 10vw;

  }

  .uiLi {
    margin-top: 3vh; // 添加margin属性
  }

  .card {
    --border-radius: 0.75rem;
    --primary-color: #7257fa;
    --secondary-color: #3c3852;
    width: 50vw;
    height: 11vh;
    font-family: "ailimama","Arial", serif;
    padding: 1rem;
    cursor: pointer;
    border-radius: var(--border-radius);
    background: #f1f1f3;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
    position: relative;
  }

  .card > * + * {
    margin-top: 1.1em;
  }

  .card .card__content {
    color: var(--secondary-color);
    font-size: 0.86rem;
  }

  .card .card__title {
    padding: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .card .card__date {
    color: #6e6b80;
    font-size: 0.8rem;
  }

  .card .card__arrow {
    position: absolute;
    background: var(--primary-color);
    padding: 0.4rem;
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    bottom: 0;
    right: 0;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card svg {
    transition: 0.2s;
  }

  /* hover */

  .card:hover .card__title {
    color: var(--primary-color);
    text-decoration: underline;
  }

  .card:hover .card__arrow {
    background: #111;
  }

  .card:hover .card__arrow svg {
    transform: translateX(3px);
  }
}
</style>
