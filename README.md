# PokePay Admin Backend Prototype

这是一个无外部依赖的 PokePay 后台管理系统静态原型，覆盖 Dashboard、用户、KYC/KYB、钱包资产、充值、提现、卡管理、交易、风控、AML/KYT、财务、清结算、BaaS、API、权限和报表等模块。

## 运行

```bash
python3 -m http.server 4173
```

然后访问：

```text
http://localhost:4173
```

## 文件

- `index.html`: 页面结构和应用容器
- `styles.css`: 后台管理系统布局、响应式样式和视觉规范
- `app.js`: 模块配置、模拟数据、导航、表格、详情抽屉和交互逻辑
