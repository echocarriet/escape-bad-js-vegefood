// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';
const table = document.querySelector('.table-content');
const filter = document.querySelector('.filter');
let data;
let showData = [];
let content;
let category = '';

function renderData(infoData) {
  // TODO: 之後拆成 renderData 函式
  let str = '';
  infoData.forEach((b) => {
    // TODO: 改成 ES6 的 Template Literals (字面字串符)
    content = `
    <tr><td>${b.作物名稱} 
    </td><td>${b.市場名稱}
    </td><td>${b.上價}
    </td><td>${b.中價}
    </td><td>${b.下價}
    </td><td>${b.平均價}
    </td><td>${b.交易量}
    </td><td>`;
    str += content;
  });
  table.innerHTML = str;
}

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
  } else {
    return;
  }
  renderData(showData);
}

this.axios.get(url).then((res) => {
  data = res.data.filter((a) => a.作物名稱);
  renderData(data);
});

filter.addEventListener('click', filterCategory);
