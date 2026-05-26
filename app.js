const modules = [
  {
    id: "dashboard",
    title: "工作台 Dashboard",
    icon: "DB",
    summary: "核心经营指标、待办、预警和财务审核",
    features: [
      "用户总数",
      "新增用户",
      "KYC 通过率",
      "总充值金额",
      "总提现金额",
      "总消费金额",
      "开卡数量",
      "活跃卡数量",
      "风控预警",
      "待处理工单",
      "财务待审核事项",
    ],
  },
  {
    id: "users",
    title: "用户管理",
    icon: "UM",
    summary: "用户状态、登录设备、标签分层和黑名单",
    features: [
      "用户列表",
      "用户详情",
      "用户状态管理",
      "登录记录",
      "设备管理",
      "账户冻结 / 解冻",
      "用户标签",
      "用户分层",
      "黑名单管理",
      "邀请关系查看",
    ],
  },
  {
    id: "kyc",
    title: "KYC / KYB 管理",
    icon: "KY",
    summary: "个人、企业、证件、人脸和地址证明审核",
    features: [
      "个人认证审核",
      "企业认证审核",
      "身份证件审核",
      "人脸识别结果",
      "地址证明审核",
      "认证等级管理",
      "审核记录",
      "驳回原因配置",
      "高风险用户标记",
    ],
  },
  {
    id: "wallet",
    title: "钱包资产管理",
    icon: "WA",
    summary: "资产查询、流水、人工调整和异常余额处理",
    features: [
      "用户资产查询",
      "币种余额查询",
      "冻结余额查询",
      "资产流水",
      "充值记录",
      "提现记录",
      "内部转账记录",
      "资产调整",
      "人工入账",
      "人工扣款",
      "异常余额处理",
    ],
  },
  {
    id: "deposit",
    title: "充值管理",
    icon: "IN",
    summary: "链上、法币、地址、确认数和异常充值",
    features: [
      "链上充值订单",
      "法币充值订单",
      "充值地址管理",
      "区块确认数配置",
      "未到账处理",
      "异常充值处理",
      "小额充值归集",
      "充值手续费配置",
    ],
  },
  {
    id: "withdraw",
    title: "提现管理",
    icon: "OUT",
    summary: "提现审核、地址白名单、风控拦截和限额",
    features: [
      "链上提现审核",
      "法币提现审核",
      "提现地址审核",
      "大额提现审核",
      "提现白名单",
      "提现风控拦截",
      "提现失败处理",
      "手续费配置",
      "提现限额配置",
    ],
  },
  {
    id: "cards",
    title: "卡管理系统",
    icon: "CA",
    summary: "虚拟卡、实体卡、开卡审核、BIN 和服务商",
    features: [
      "虚拟卡列表",
      "实体卡列表",
      "开卡申请",
      "开卡审核",
      "卡详情",
      "卡状态管理",
      "激活 / 冻结 / 解冻 / 注销",
      "卡余额查询",
      "卡交易流水",
      "卡限额配置",
      "卡 BIN 管理",
      "卡组织管理",
      "卡服务商管理",
    ],
  },
  {
    id: "transactions",
    title: "支付交易管理",
    icon: "TX",
    summary: "消费、授权、清算、退款、拒付和 3DS",
    features: [
      "消费订单",
      "授权交易",
      "清算交易",
      "失败交易",
      "退款订单",
      "撤销订单",
      "拒付订单",
      "3DS 验证记录",
      "商户 MCC 查询",
      "商户国家 / 地区识别",
      "交易状态追踪",
    ],
  },
  {
    id: "risk",
    title: "风控管理",
    icon: "RC",
    summary: "用户、交易、提现、开卡规则与人工风控审核",
    features: [
      "用户风控规则",
      "交易风控规则",
      "提现风控规则",
      "开卡风控规则",
      "国家 / 地区限制",
      "MCC 限制",
      "单笔限额",
      "日限额",
      "月限额",
      "高频交易拦截",
      "异常登录预警",
      "黑名单地址",
      "高风险地址识别",
      "人工风控审核",
    ],
  },
  {
    id: "aml",
    title: "AML / KYT 合规模块",
    icon: "AM",
    summary: "链上风险扫描、制裁名单、可疑交易和报告",
    features: [
      "链上地址风险扫描",
      "制裁名单筛查",
      "可疑交易监控",
      "AML 规则配置",
      "KYT 风险等级",
      "SAR 可疑报告",
      "合规审核记录",
      "高风险用户报告",
      "合规操作日志",
    ],
  },
  {
    id: "fees",
    title: "费率与限额管理",
    icon: "FL",
    summary: "开卡费、手续费、VIP、渠道、国家和用户限额",
    features: [
      "开卡费配置",
      "月费 / 年费配置",
      "消费手续费",
      "FX 汇率费",
      "跨境手续费",
      "充值手续费",
      "提现手续费",
      "VIP 费率",
      "渠道费率",
      "国家费率",
      "用户限额",
      "卡限额",
    ],
  },
  {
    id: "fx",
    title: "汇率与兑换管理",
    icon: "FX",
    summary: "币币、法币、加点、Swap 和汇率异常",
    features: [
      "币币汇率",
      "法币汇率",
      "Crypto ↔ Fiat 汇率",
      "汇率来源配置",
      "汇率加点配置",
      "Swap 订单",
      "兑换失败处理",
      "汇率异常预警",
    ],
  },
  {
    id: "finance",
    title: "财务管理",
    icon: "FI",
    summary: "总账、分户账、收入成本、利润、调账和日终对账",
    features: [
      "平台总账",
      "用户分户账",
      "卡账户账",
      "手续费收入",
      "开卡收入",
      "FX 收入",
      "Interchange 分润",
      "通道成本",
      "服务商成本",
      "平台利润统计",
      "财务调账",
      "日终对账",
    ],
  },
  {
    id: "settlement",
    title: "清结算管理",
    icon: "ST",
    summary: "卡组织清算文件、服务商结算单和对账差异",
    features: [
      "卡交易清算文件",
      "Visa / Mastercard 清算数据",
      "服务商结算单",
      "商户结算单",
      "用户资金结算",
      "T+0 / T+1 结算配置",
      "结算异常处理",
      "对账差异处理",
    ],
  },
  {
    id: "referral",
    title: "邀请返佣管理",
    icon: "RF",
    summary: "邀请关系、返佣规则、审核发放和统计",
    features: [
      "邀请关系",
      "邀请码管理",
      "返佣规则",
      "开卡返佣",
      "消费返佣",
      "代理返佣",
      "返佣审核",
      "返佣发放",
      "返佣统计",
    ],
  },
  {
    id: "vip",
    title: "VIP / 会员管理",
    icon: "VP",
    summary: "等级权益、费率折扣、专属限额和有效期",
    features: [
      "会员等级",
      "等级权益",
      "费率折扣",
      "开卡优惠",
      "提现优惠",
      "专属限额",
      "会员升级规则",
      "会员有效期",
    ],
  },
  {
    id: "marketing",
    title: "优惠券 / 营销管理",
    icon: "MK",
    summary: "优惠券、礼包、活动、Banner、弹窗和消息推送",
    features: [
      "开卡优惠券",
      "手续费减免券",
      "邀请奖励券",
      "新人礼包",
      "活动配置",
      "Banner 管理",
      "弹窗管理",
      "消息推送",
      "活动数据统计",
    ],
  },
  {
    id: "tickets",
    title: "客服工单系统",
    icon: "CS",
    summary: "交易、充值、提现、卡消费、KYC 和风控申诉",
    features: [
      "用户工单",
      "交易问题",
      "充值未到账",
      "提现失败",
      "卡消费失败",
      "KYC 驳回申诉",
      "风控申诉",
      "工单分配",
      "工单状态",
      "客服备注",
      "处理记录",
    ],
  },
  {
    id: "notifications",
    title: "通知管理",
    icon: "NT",
    summary: "Push、邮件、SMS、站内信、公告和模板",
    features: [
      "App Push",
      "邮件通知",
      "SMS 通知",
      "站内信",
      "交易通知",
      "风控通知",
      "系统公告",
      "模板配置",
      "发送记录",
    ],
  },
  {
    id: "enterprise",
    title: "BaaS / 企业客户管理",
    icon: "BA",
    summary: "企业 KYB、卡项目、API Key、费率、结算和白标",
    features: [
      "企业客户列表",
      "企业 KYB",
      "企业账户",
      "企业卡项目",
      "企业 API Key",
      "企业费率",
      "企业限额",
      "企业结算",
      "企业报表",
      "白标配置",
    ],
  },
  {
    id: "api",
    title: "开放平台 / API 管理",
    icon: "API",
    summary: "Key、Secret、IP 白名单、Webhook、日志和沙盒",
    features: [
      "API Key 管理",
      "Secret 管理",
      "IP 白名单",
      "Webhook 配置",
      "API 调用日志",
      "接口权限",
      "回调失败重试",
      "SDK 文档",
      "沙盒环境",
    ],
  },
  {
    id: "settings",
    title: "系统配置",
    icon: "CF",
    summary: "币种、链网络、国家、卡产品、服务商和规则配置",
    features: [
      "币种配置",
      "链网络配置",
      "国家 / 地区配置",
      "卡产品配置",
      "KYC 等级配置",
      "费用配置",
      "限额配置",
      "风控规则配置",
      "服务商配置",
    ],
  },
  {
    id: "permissions",
    title: "权限管理",
    icon: "RB",
    summary: "管理员、角色、菜单、数据、审核和敏感操作",
    features: [
      "管理员账号",
      "角色管理",
      "菜单权限",
      "数据权限",
      "审核权限",
      "操作日志",
      "登录日志",
      "敏感操作二次验证",
    ],
  },
  {
    id: "reports",
    title: "数据报表",
    icon: "RP",
    summary: "增长、充值提现、卡交易、收入、风控和返佣报表",
    features: [
      "用户增长报表",
      "充值提现报表",
      "卡交易报表",
      "开卡报表",
      "消费报表",
      "收入报表",
      "风控报表",
      "KYC 报表",
      "渠道成本报表",
      "代理返佣报表",
    ],
  },
];

const navGroups = [
  {
    id: "overview",
    title: "总览",
    modules: ["dashboard"],
  },
  {
    id: "customer",
    title: "客户与认证",
    modules: ["users", "kyc", "vip"],
  },
  {
    id: "funds",
    title: "资金与兑换",
    modules: ["wallet", "deposit", "withdraw", "fees", "fx"],
  },
  {
    id: "cardPayment",
    title: "卡与支付",
    modules: ["cards", "transactions"],
  },
  {
    id: "riskCompliance",
    title: "风控与合规",
    modules: ["risk", "aml"],
  },
  {
    id: "financeSettlement",
    title: "财务与清结算",
    modules: ["finance", "settlement", "reports"],
  },
  {
    id: "growthService",
    title: "增长与客服",
    modules: ["referral", "marketing", "tickets", "notifications"],
  },
  {
    id: "enterpriseOpen",
    title: "企业与开放平台",
    modules: ["enterprise", "api"],
  },
  {
    id: "system",
    title: "系统管理",
    modules: ["settings", "permissions"],
  },
];

const metrics = [
  ["用户总数", "428,916", "+12.8%", "success"],
  ["新增用户", "3,284", "+8.4%", "success"],
  ["KYC 通过率", "86.7%", "-1.2%", "warn"],
  ["总充值金额", "$92.48M", "+18.6%", "success"],
  ["总提现金额", "$68.15M", "+9.1%", "success"],
  ["总消费金额", "$131.8M", "+21.4%", "success"],
  ["开卡数量", "182,409", "+6.9%", "success"],
  ["活跃卡数量", "116,032", "+4.2%", "success"],
  ["风控预警", "248", "+31", "danger"],
  ["待处理工单", "1,086", "+146", "warn"],
  ["财务待审核事项", "72", "+18", "warn"],
];

const statusPool = [
  ["审核中", "pending"],
  ["已通过", "success"],
  ["已拦截", "failed"],
  ["监控中", "info"],
];

const riskPool = [
  ["低风险", "low"],
  ["中风险", "medium"],
  ["高风险", "high"],
  ["观察名单", "watch"],
];

const entityNames = [
  "Aster Labs",
  "Northstar Digital",
  "Blue Orbit Trading",
  "Atlas Payment",
  "Mira Chen",
  "Ethan Zhou",
  "Nova Retail",
  "LinePay HK",
  "Mercury Studio",
  "Silver Gate Ops",
];

const currencies = ["USDT", "USD", "EUR", "BTC", "HKD", "CNY"];
const channels = ["Visa Issuer", "Mastercard", "TRON", "Ethereum", "SEPA", "SWIFT", "内部账务"];
const regions = ["香港", "新加坡", "美国", "英国", "欧盟", "阿联酋", "日本"];
const entityTypes = ["个人用户", "企业客户", "虚拟卡", "实体卡", "链上地址", "API 应用"];
const owners = ["Ops.Li", "Risk.Wang", "KYC.Zhang", "Finance.Zhao"];

const moduleTabs = {
  users: [
    ["list", "用户列表", ["用户等级", "注册来源", "邀请人"]],
    ["status", "状态与冻结", ["账户状态", "冻结原因", "解冻时间"]],
    ["login", "登录与设备", ["最近 IP", "设备指纹", "登录地点"]],
    ["tags", "标签与分层", ["用户标签", "用户分层", "生命周期"]],
    ["blacklist", "黑名单与邀请", ["黑名单原因", "邀请层级", "关联账户"]],
  ],
  kyc: [
    ["personal", "个人认证审核", ["证件类型", "人脸分数", "认证等级"]],
    ["enterprise", "企业认证审核", ["企业类型", "UBO 状态", "KYB 等级"]],
    ["documents", "证件与地址证明", ["证件国家", "地址证明", "有效期"]],
    ["records", "审核记录", ["审核结论", "驳回原因", "复核次数"]],
    ["risk", "高风险标记", ["命中规则", "风险标签", "处置建议"]],
  ],
  wallet: [
    ["assets", "用户资产", ["可用余额", "冻结余额", "估值 USD"]],
    ["ledger", "资产流水", ["流水方向", "账变类型", "关联订单"]],
    ["adjust", "资产调整", ["调整类型", "调整原因", "复核人"]],
    ["exception", "异常余额", ["异常类型", "差异金额", "处理状态"]],
  ],
  deposit: [
    ["chain", "链上充值", ["链网络", "TxHash", "确认数"]],
    ["fiat", "法币充值", ["支付渠道", "付款账户", "到账批次"]],
    ["address", "地址管理", ["充值地址", "地址状态", "归集策略"]],
    ["exception", "异常处理", ["异常原因", "处理方案", "补单状态"]],
  ],
  withdraw: [
    ["chain", "链上提现审核", ["提现地址", "链网络", "TxHash"]],
    ["fiat", "法币提现审核", ["收款账户", "银行通道", "清算批次"]],
    ["risk", "风控拦截", ["拦截规则", "白名单状态", "复核结论"]],
    ["limits", "限额与手续费", ["单笔限额", "日限额", "手续费规则"]],
  ],
  cards: [
    ["virtual", "虚拟卡列表", ["卡号后四位", "卡产品", "卡余额"]],
    ["physical", "实体卡列表", ["物流状态", "收件地区", "激活状态"]],
    ["applications", "开卡申请", ["申请类型", "开卡费", "审核节点"]],
    ["transactions", "卡交易流水", ["授权码", "MCC", "商户名称"]],
    ["provider", "BIN 与服务商", ["卡 BIN", "卡组织", "服务商"]],
  ],
  transactions: [
    ["orders", "消费订单", ["商户名称", "MCC", "授权码"]],
    ["auth", "授权交易", ["授权状态", "3DS 结果", "预授权金额"]],
    ["settled", "清算交易", ["清算日期", "清算币种", "清算文件"]],
    ["refund", "退款 / 拒付", ["退款原因", "拒付阶段", "证据状态"]],
    ["failed", "失败交易", ["失败原因", "错误码", "重试次数"]],
  ],
  risk: [
    ["user", "用户风控", ["命中规则", "处置动作", "规则版本"]],
    ["transaction", "交易风控", ["交易场景", "拦截原因", "人工结论"]],
    ["withdraw", "提现风控", ["地址风险", "金额阈值", "白名单"]],
    ["rules", "规则配置", ["规则类型", "生效范围", "优先级"]],
  ],
  aml: [
    ["address", "地址风险扫描", ["扫描供应商", "地址风险", "链上标签"]],
    ["sanctions", "制裁名单筛查", ["名单来源", "匹配分数", "命中实体"]],
    ["suspicious", "可疑交易监控", ["可疑模式", "SAR 状态", "调查编号"]],
    ["logs", "合规审核记录", ["审核结论", "合规人员", "操作类型"]],
  ],
  fees: [
    ["card", "卡费用", ["费用类型", "计费周期", "生效产品"]],
    ["transaction", "交易费率", ["费率模型", "加点规则", "适用地区"]],
    ["vip", "VIP / 渠道费率", ["等级 / 渠道", "折扣", "生效时间"]],
    ["limits", "用户与卡限额", ["限额类型", "限额周期", "限额对象"]],
  ],
  fx: [
    ["rates", "实时汇率", ["汇率对", "报价源", "加点"]],
    ["swap", "Swap 订单", ["兑换方向", "执行价", "成交状态"]],
    ["source", "来源配置", ["数据源", "刷新频率", "备用源"]],
    ["alerts", "异常预警", ["偏离比例", "预警阈值", "处理人"]],
  ],
  finance: [
    ["ledger", "平台总账", ["科目", "借贷方向", "凭证号"]],
    ["income", "收入与成本", ["收入类型", "成本通道", "利润率"]],
    ["adjust", "财务调账", ["调账原因", "影响账户", "复核状态"]],
    ["close", "日终对账", ["账期", "差异金额", "对账状态"]],
  ],
  settlement: [
    ["card", "卡交易清算", ["清算文件", "卡组织", "清算金额"]],
    ["provider", "服务商结算", ["服务商", "结算周期", "应付金额"]],
    ["merchant", "商户 / 用户结算", ["结算对象", "结算方式", "T+周期"]],
    ["diff", "差异处理", ["差异类型", "差异金额", "处理进度"]],
  ],
  referral: [
    ["relations", "邀请关系", ["邀请人", "层级", "有效用户数"]],
    ["rules", "返佣规则", ["返佣场景", "计算方式", "规则版本"]],
    ["audit", "返佣审核", ["返佣金额", "审核状态", "发放批次"]],
    ["stats", "返佣统计", ["统计周期", "代理等级", "累计返佣"]],
  ],
  vip: [
    ["levels", "会员等级", ["等级", "成长值", "保级条件"]],
    ["benefits", "等级权益", ["权益类型", "折扣", "专属限额"]],
    ["upgrade", "升级规则", ["升级条件", "有效期", "自动续级"]],
  ],
  marketing: [
    ["coupons", "优惠券", ["券类型", "面额", "使用门槛"]],
    ["campaigns", "活动配置", ["活动类型", "活动周期", "预算"]],
    ["content", "Banner / 弹窗", ["投放位置", "展示人群", "点击率"]],
    ["push", "消息推送", ["推送渠道", "目标人群", "发送状态"]],
  ],
  tickets: [
    ["user", "用户工单", ["工单类型", "优先级", "SLA 剩余"]],
    ["money", "充值提现问题", ["问题类型", "关联订单", "处理进度"]],
    ["card", "卡消费失败", ["失败场景", "服务商反馈", "补偿方案"]],
    ["appeal", "KYC / 风控申诉", ["申诉原因", "材料状态", "复审结论"]],
  ],
  notifications: [
    ["templates", "模板配置", ["模板类型", "语言", "审核状态"]],
    ["send", "发送记录", ["发送渠道", "触达人数", "送达率"]],
    ["announcements", "系统公告", ["公告范围", "发布时间", "阅读率"]],
  ],
  enterprise: [
    ["clients", "企业客户", ["企业等级", "客户经理", "签约状态"]],
    ["kyb", "企业 KYB", ["企业类型", "UBO 状态", "审核等级"]],
    ["projects", "企业卡项目", ["项目类型", "发卡规模", "项目状态"]],
    ["settlement", "企业结算", ["结算币种", "结算周期", "结算账户"]],
    ["whiteLabel", "白标配置", ["品牌状态", "域名", "上线阶段"]],
  ],
  api: [
    ["keys", "API Key", ["Key 状态", "权限范围", "过期时间"]],
    ["webhook", "Webhook", ["回调地址", "失败次数", "重试策略"]],
    ["logs", "调用日志", ["接口路径", "响应码", "耗时"]],
    ["sandbox", "沙盒环境", ["环境状态", "测试商户", "最近调用"]],
  ],
  settings: [
    ["currency", "币种与链网络", ["币种", "链网络", "确认数"]],
    ["country", "国家 / 地区", ["地区代码", "支持状态", "限制规则"]],
    ["cardProduct", "卡产品配置", ["产品类型", "卡组织", "服务商"]],
    ["rules", "费用 / 限额 / 风控", ["配置类型", "生效范围", "版本"]],
  ],
  permissions: [
    ["admins", "管理员账号", ["管理员", "部门", "账号状态"]],
    ["roles", "角色与菜单", ["角色", "菜单范围", "成员数"]],
    ["data", "数据与审核权限", ["数据范围", "审核级别", "授权人"]],
    ["logs", "操作 / 登录日志", ["操作类型", "登录 IP", "二次验证"]],
  ],
  reports: [
    ["users", "用户增长报表", ["统计周期", "新增用户", "转化率"]],
    ["funds", "充值提现报表", ["资金方向", "币种", "净流入"]],
    ["cards", "卡交易报表", ["卡产品", "交易笔数", "成功率"]],
    ["income", "收入与成本报表", ["收入项", "成本项", "毛利率"]],
    ["risk", "风控 / KYC 报表", ["报表类型", "命中数", "通过率"]],
  ],
};

const state = {
  activeModule: "dashboard",
  activeFeature: "",
  keyword: "",
  actionLogs: [],
  recordUpdates: {},
  filters: {
    status: "",
    risk: "",
    entityType: "",
    currency: "",
    channel: "",
    region: "",
    owner: "",
  },
  openGroups: new Set(["overview"]),
};

const app = document.querySelector("#app");
const navList = document.querySelector("#navList");
const pageTitle = document.querySelector("#pageTitle");
const drawer = document.querySelector("#detailDrawer");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerBody = document.querySelector("#drawerBody");
const toast = document.querySelector("#toast");

function formatAmount(index, kind) {
  const amount = 1200 + index * 937;
  if (kind === "fees") return `${(0.35 + index * 0.08).toFixed(2)}%`;
  if (kind === "fx") return `${(7.03 + index * 0.012).toFixed(4)}`;
  if (kind === "reports") return `${(amount * 12).toLocaleString()} 行`;
  return `$${amount.toLocaleString()}`;
}

function moduleById(id) {
  return modules.find((item) => item.id === id) || modules[0];
}

function groupByModule(moduleId) {
  return navGroups.find((group) => group.modules.includes(moduleId)) || navGroups[0];
}

function resetListFilters() {
  state.keyword = "";
  state.filters = {
    status: "",
    risk: "",
    entityType: "",
    currency: "",
    channel: "",
    region: "",
    owner: "",
  };
}

function nowText() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
}

function optionList(placeholder, items, selectedValue) {
  return [
    `<option value="">${placeholder}</option>`,
    ...items.map(
      (item) => `<option value="${item}" ${selectedValue === item ? "selected" : ""}>${item}</option>`,
    ),
  ].join("");
}

function filterSummaryItems(recordsCount) {
  const module = moduleById(state.activeModule);
  const tab = activeTabFor(module);
  const labels = [["关键字", state.keyword], ...filtersForModule(module, tab).map((filter) => [filter.label, state.filters[filter.key]])].filter(
    ([, value]) => value,
  );

  if (!labels.length) return [`共 ${recordsCount} 条结果`, "未设置筛选条件"];
  return [`共 ${recordsCount} 条结果`, ...labels.map(([label, value]) => `${label}：${value}`)];
}

function filtersForModule(module, tab) {
  const filterMap = {
    status: { key: "status", label: "状态", placeholder: "全部状态", options: statusPool.map(([label]) => label) },
    risk: { key: "risk", label: "风险", placeholder: "全部风险", options: riskPool.map(([label]) => label) },
    entityType: { key: "entityType", label: "主体类型", placeholder: "全部类型", options: entityTypes },
    currency: { key: "currency", label: "币种", placeholder: "全部币种", options: currencies },
    channel: { key: "channel", label: "通道", placeholder: "全部通道", options: channels },
    region: { key: "region", label: "地区", placeholder: "全部地区", options: regions },
    owner: { key: "owner", label: "负责人", placeholder: "全部负责人", options: owners },
  };
  const byModule = {
    users: ["status", "entityType", "region"],
    kyc: ["status", "risk", "entityType", "region", "owner"],
    wallet: ["currency", "channel"],
    deposit: ["status", "currency", "channel", "region"],
    withdraw: ["status", "risk", "currency", "channel", "owner"],
    cards: ["status", "currency", "channel", "region"],
    transactions: ["status", "risk", "currency", "region"],
    risk: ["risk", "region", "owner"],
    aml: ["status", "risk", "channel", "region", "owner"],
    fees: ["currency", "region", "channel"],
    fx: ["currency", "channel"],
    finance: ["currency", "channel", "owner"],
    settlement: ["currency", "channel", "region", "owner"],
    referral: ["status", "entityType", "owner"],
    vip: ["status", "entityType"],
    marketing: ["status", "region", "channel"],
    tickets: ["status", "owner", "region"],
    notifications: ["status", "channel", "region"],
    enterprise: ["status", "entityType", "region", "owner"],
    api: ["status", "channel"],
    settings: ["status", "region"],
    permissions: ["status", "owner"],
    reports: ["currency", "region", "owner"],
  };
  const keys = byModule[module.id] || ["status"];
  if (/风控|风险|AML|KYT|黑名单/.test(tab.label) && !keys.includes("risk")) keys.push("risk");
  if (/审核|工单|申诉|调账|差异/.test(tab.label) && !keys.includes("owner")) keys.push("owner");
  return keys.map((key) => filterMap[key]);
}

function searchPlaceholderFor(module, tab) {
  const placeholders = {
    users: "用户 UID / 手机 / 邮箱 / 标签",
    kyc: "认证申请号 / 用户 / 企业 / 证件号",
    wallet: "账户 ID / 用户 / 币种 / 流水号",
    deposit: "充值订单号 / TxHash / 地址 / 用户",
    withdraw: "提现订单号 / 地址 / 用户 / 银行账户",
    cards: "卡 ID / 后四位 / 持卡人 / BIN",
    transactions: "交易单号 / 商户 / MCC / 授权码",
    risk: "风控事件 ID / 规则 / 用户 / 地址",
    aml: "合规案件 ID / 地址 / 名单 / 用户",
    fees: "费率配置 ID / 费率名称 / 国家",
    fx: "汇率记录 ID / 汇率对 / 来源",
    finance: "凭证号 / 账务对象 / 科目",
    settlement: "结算单号 / 服务商 / 商户",
    referral: "返佣单号 / 代理 / 邀请码",
    vip: "会员记录 ID / 用户 / 等级",
    marketing: "活动 ID / 活动名称 / 券码",
    tickets: "工单号 / 用户 / 订单号",
    notifications: "通知 ID / 模板 / 公告标题",
    enterprise: "企业 ID / 企业名称 / API Key",
    api: "应用 ID / Key / Webhook / 接口路径",
    settings: "配置 ID / 配置对象 / 版本",
    permissions: "权限记录 ID / 管理员 / 角色",
    reports: "报表 ID / 报表名称 / 周期",
  };
  return placeholders[module.id] || `${tab.label} / ID / 名称`;
}

function tabsForModule(module) {
  const configured = moduleTabs[module.id];
  if (configured) {
    return configured.map(([id, label, detailLabels]) => ({ id, label, detailLabels }));
  }

  return module.features.slice(0, 4).map((feature, index) => ({
    id: `tab-${index}`,
    label: feature,
    detailLabels: ["业务类型", "配置项", "处理节点"],
  }));
}

function activeTabFor(module) {
  const tabs = tabsForModule(module);
  return tabs.find((tab) => tab.id === state.activeFeature) || tabs[0];
}

function valueForDetail(label, index, module, tab) {
  const values = {
    用户等级: ["VIP 0", "VIP 1", "VIP 2", "VIP 3"],
    注册来源: ["App", "API", "代理邀请", "自然注册"],
    邀请人: ["AG-1024", "AG-2048", "无", "BD-301"],
    账户状态: ["正常", "冻结中", "限制提现", "待解冻"],
    冻结原因: ["无", "风控复核", "合规命中", "用户申诉"],
    解冻时间: ["-", "2026-05-28", "待复核", "2026-06-02"],
    "最近 IP": ["103.18.22.9", "47.242.18.6", "8.210.44.2", "18.167.9.4"],
    设备指纹: ["iOS-A93F", "WEB-77B1", "AND-C204", "API-KEY"],
    登录地点: ["香港", "新加坡", "洛杉矶", "伦敦"],
    用户标签: ["高价值", "新用户", "企业员工", "高频交易"],
    用户分层: ["核心用户", "成长用户", "沉默用户", "代理用户"],
    生命周期: ["激活", "留存", "召回", "流失预警"],
    证件类型: ["身份证", "护照", "驾照", "营业执照"],
    人脸分数: ["96.8", "91.2", "待补采", "88.6"],
    认证等级: ["KYC L1", "KYC L2", "KYB L1", "KYB L2"],
    企业类型: ["贸易公司", "SaaS 平台", "代理商", "电商"],
    "UBO 状态": ["已提交", "待补充", "已通过", "需复核"],
    "KYB 等级": ["KYB Basic", "KYB Plus", "KYB Pro", "待定级"],
    证件国家: ["CN", "HK", "SG", "US"],
    地址证明: ["银行账单", "水电账单", "租赁合同", "待上传"],
    有效期: ["2028-05-01", "2027-11-18", "长期", "即将过期"],
    审核结论: ["通过", "驳回", "转人工", "补充材料"],
    驳回原因: ["影像模糊", "地址不匹配", "资料过期", "无"],
    复核次数: ["0", "1", "2", "3"],
    命中规则: ["国家限制", "高频交易", "地址风险", "设备异常"],
    风险标签: ["低", "中", "高", "观察"],
    处置建议: ["放行", "补充材料", "人工复核", "冻结"],
    链网络: ["TRON", "Ethereum", "BSC", "Polygon"],
    TxHash: [`0x${String(918273 + index * 13)}`, `0x${String(827364 + index * 17)}`, "-", `0x${String(736455 + index * 19)}`],
    确认数: ["12/12", "24/24", "3/12", "待广播"],
    提现地址: ["TQ9...8x2", "0xa3...91f", "bc1...7kp", "白名单地址"],
    支付渠道: ["银行卡", "FPS", "SEPA", "Wire"],
    付款账户: ["尾号 2018", "尾号 7782", "企业账户", "虚拟账户"],
    到账批次: ["BATCH-0526", "BATCH-0525", "待归集", "手工入账"],
    卡号后四位: ["8432", "1098", "6671", "3055"],
    卡产品: ["虚拟 Visa", "实体 Mastercard", "企业卡", "员工卡"],
    卡余额: ["$420.18", "$1,208.40", "$84.00", "$9,102.66"],
    物流状态: ["待制卡", "已发货", "运输中", "已签收"],
    收件地区: ["香港", "新加坡", "美国", "英国"],
    激活状态: ["未激活", "已激活", "冻结", "注销中"],
    申请类型: ["个人开卡", "企业批量", "补卡", "升级卡"],
    开卡费: ["$2.00", "$5.00", "$0.00", "$12.00"],
    审核节点: ["KYC", "风控", "财务", "服务商"],
    授权码: ["A10291", "B88210", "C77128", "D90334"],
    MCC: ["5812", "5732", "5999", "4121"],
    商户名称: ["Apple", "Amazon", "Grab", "Stripe"],
    卡组织: ["Visa", "Mastercard", "UnionPay", "Amex"],
    服务商: ["Issuer A", "Processor B", "Bank C", "Gateway D"],
    "卡 BIN": ["476512", "522981", "428812", "539901"],
    "3DS 结果": ["通过", "失败", "未触发", "挑战中"],
    响应码: ["200", "401", "429", "500"],
    接口路径: ["/v1/cards", "/v1/kyc", "/v1/webhooks", "/v1/payouts"],
  };
  const fallback = [
    module.features[(index + tab.id.length) % module.features.length],
    `${tab.label}-${String(index + 1).padStart(2, "0")}`,
    ["待处理", "处理中", "已完成", "需复核"][index % 4],
  ];
  const pool = values[label] || fallback;
  return pool[index % pool.length];
}

function renderNav() {
  const query = document.querySelector("#navSearch").value.trim().toLowerCase();
  const activeGroup = groupByModule(state.activeModule);
  state.openGroups.add(activeGroup.id);

  navList.innerHTML = navGroups
    .map((group) => {
      const groupModules = group.modules
        .map(moduleById)
        .filter((item) => {
          const text = `${item.title} ${item.summary} ${item.features.join(" ")}`.toLowerCase();
          return !query || text.includes(query) || group.title.toLowerCase().includes(query);
        });

      if (!groupModules.length) return "";

      const isOpen = query || state.openGroups.has(group.id);
      return `
        <section class="nav-group ${isOpen ? "open" : ""}">
          <button class="nav-group-toggle" type="button" data-group="${group.id}" aria-expanded="${isOpen}">
            <span>${group.title}</span>
            <strong>${groupModules.length}</strong>
          </button>
          <div class="nav-group-items">
            ${groupModules
              .map(
                (item) => `
                <button class="nav-item ${state.activeModule === item.id ? "active" : ""}" type="button" data-module="${item.id}">
                  <span class="nav-icon">${item.icon}</span>
                  <span class="nav-copy">
                    <strong>${item.title}</strong>
                  </span>
                  <span class="nav-count">${item.features.length}</span>
                </button>
              `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function drillAttrs(target) {
  const attrs = [`data-drill-module="${target.module}"`];
  if (target.tab) attrs.push(`data-drill-tab="${target.tab}"`);
  if (target.keyword) attrs.push(`data-drill-keyword="${target.keyword}"`);
  return attrs.join(" ");
}

function drillTargetFor(label) {
  const map = {
    用户总数: { module: "users", tab: "list" },
    新增用户: { module: "users", tab: "list", keyword: "App" },
    "KYC 通过率": { module: "kyc", tab: "personal" },
    总充值金额: { module: "deposit", tab: "chain" },
    总提现金额: { module: "withdraw", tab: "chain" },
    总消费金额: { module: "transactions", tab: "orders" },
    开卡数量: { module: "cards", tab: "applications" },
    活跃卡数量: { module: "cards", tab: "virtual" },
    风控预警: { module: "risk", tab: "user" },
    待处理工单: { module: "tickets", tab: "user" },
    财务待审核事项: { module: "finance", tab: "close" },
    充值金额: { module: "deposit", tab: "chain" },
    提现金额: { module: "withdraw", tab: "chain" },
    消费金额: { module: "transactions", tab: "orders" },
    手续费收入: { module: "finance", tab: "income" },
    大额提现审核: { module: "withdraw", tab: "chain" },
    "企业 KYB 复核": { module: "kyc", tab: "enterprise" },
    "AML 命中处理": { module: "aml", tab: "sanctions" },
    卡消费失败工单: { module: "tickets", tab: "card" },
    财务日终差异: { module: "finance", tab: "close" },
    "KYT 高风险地址": { module: "aml", tab: "address" },
    异常登录预警: { module: "risk", tab: "user" },
    高频交易拦截: { module: "risk", tab: "transaction" },
  };
  return map[label] || { module: "reports", tab: "users" };
}

function goToDrill(target) {
  const module = moduleById(target.module);
  const tabs = tabsForModule(module);
  const nextTab = tabs.some((tab) => tab.id === target.tab) ? target.tab : tabs[0].id;
  state.activeModule = module.id;
  state.activeFeature = nextTab;
  resetListFilters();
  state.keyword = target.keyword || "";
  state.openGroups.add(groupByModule(module.id).id);
  render();
  app.focus();
  showToast(`已下钻到 ${module.title} / ${activeTabFor(module).label}`);
}

function renderDashboard() {
  pageTitle.textContent = "工作台 Dashboard";
  app.innerHTML = `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>实时经营概览</h2>
          <p>覆盖用户、KYC、充值提现、卡交易、风控、财务和客服待办。</p>
        </div>
        <button class="ghost-button" type="button" data-toast="已刷新 Dashboard 数据">刷新数据</button>
      </div>
      <div class="metrics-grid">
        ${metrics
          .map(
            ([label, value, change, tone]) => `
            <article class="metric-card drillable" ${drillAttrs(drillTargetFor(label))} tabindex="0" role="button" aria-label="下钻到${label}">
              <div class="metric-label"><span>${label}</span><span>今日</span></div>
              <div class="metric-value">${value}</div>
              <span class="metric-change ${tone}">${change}</span>
            </article>
          `,
          )
          .join("")}
      </div>
    </section>

    <section class="dashboard-grid section">
      <article class="panel">
        <div class="section-head">
          <div>
            <h2>资金与卡业务趋势</h2>
            <p>近 7 日充值、提现、消费、开卡和活跃卡综合趋势。</p>
          </div>
          <button class="table-action" type="button" data-toast="已进入报表明细">明细</button>
        </div>
        <div class="chart">
          ${[
            ["充值金额", 88, "$13.2M"],
            ["提现金额", 61, "$8.9M"],
            ["消费金额", 96, "$18.7M"],
            ["开卡数量", 72, "21,406"],
            ["活跃卡数量", 67, "14,932"],
            ["手续费收入", 44, "$426K"],
          ]
            .map(
              ([label, width, value]) => `
              <div class="chart-row drillable" ${drillAttrs(drillTargetFor(label))} tabindex="0" role="button" aria-label="下钻到${label}">
                <span>${label}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
                <strong>${value}</strong>
              </div>
            `,
            )
            .join("")}
        </div>
      </article>

      <article class="panel">
        <div class="section-head">
          <div>
            <h2>待办队列</h2>
            <p>按 SLA 和风险优先级排序。</p>
          </div>
        </div>
        <ul class="queue-list">
          ${[
            ["大额提现审核", "12 笔超过 $50,000，需双人复核", "高"],
            ["企业 KYB 复核", "7 家企业缺少受益人证明", "中"],
            ["AML 命中处理", "4 条制裁名单近似匹配", "高"],
            ["卡消费失败工单", "36 单需联系服务商确认", "中"],
            ["财务日终差异", "2 个通道存在对账差额", "高"],
          ]
            .map(
              ([title, desc, level]) => `
              <li class="queue-item drillable" ${drillAttrs(drillTargetFor(title))} tabindex="0" role="button" aria-label="下钻到${title}">
                <div><strong>${title}</strong><span>${desc}</span></div>
                <span class="risk ${level === "高" ? "high" : "medium"}">${level}优先级</span>
              </li>
            `,
            )
            .join("")}
        </ul>
      </article>
    </section>

    <section class="dashboard-grid section">
      <article class="panel">
        <h2>合规与风控监控</h2>
        <div class="stat-strip">
          <div class="drillable" ${drillAttrs(drillTargetFor("KYT 高风险地址"))} tabindex="0" role="button"><span>KYT 高风险地址</span><strong>39</strong></div>
          <div class="drillable" ${drillAttrs(drillTargetFor("异常登录预警"))} tabindex="0" role="button"><span>异常登录预警</span><strong>184</strong></div>
          <div class="drillable" ${drillAttrs(drillTargetFor("高频交易拦截"))} tabindex="0" role="button"><span>高频交易拦截</span><strong>76</strong></div>
        </div>
      </article>
      <article class="panel">
        <h2>最近操作日志</h2>
        <ul class="timeline">
          ${(state.actionLogs.length
            ? state.actionLogs.slice(0, 5).map((log) => [
                `当前管理员 ${log.action}`,
                `${log.module} / ${log.tab} / ${log.id}`,
                log.time,
              ])
            : [
                ["Ops.Li 通过企业 KYB", "Aster Labs, KYB-L2", "刚刚"],
                ["Risk.Wang 冻结提现地址", "TRON 高风险标签命中", "刚刚"],
                ["Finance.Zhao 完成日终对账", "Visa 通道差异已清零", "刚刚"],
              ]
          )
            .map(
              ([title, desc, time]) => `
              <li class="timeline-item">
                <div><strong>${title}</strong><span>${desc}</span></div>
                <span>${time}</span>
              </li>
            `,
            )
            .join("")}
        </ul>
      </article>
    </section>
  `;
}

function recordsFor(module) {
  const activeTab = activeTabFor(module);
  return Array.from({ length: 12 }, (_, index) => {
    const status = statusPool[(index + module.id.length) % statusPool.length];
    const risk = riskPool[(index + module.features.length) % riskPool.length];
    const idPrefix = module.icon.replace(/[^A-Z]/g, "") || "PK";
    const createdDay = 20 - (index % 7);
    const record = {
      id: `${idPrefix}-${String(260840 + index * 17).padStart(6, "0")}`,
      uid: `UID-${String(880120 + index * 31).padStart(6, "0")}`,
      subject: entityNames[index % entityNames.length],
      entityType: entityTypes[(index + module.id.length) % entityTypes.length],
      feature: module.features[(index + activeTab.id.length + module.id.length) % module.features.length],
      activeFeature: activeTab.label,
      detail1: valueForDetail(activeTab.detailLabels[0], index, module, activeTab),
      detail2: valueForDetail(activeTab.detailLabels[1], index, module, activeTab),
      detail3: valueForDetail(activeTab.detailLabels[2], index, module, activeTab),
      detailLabel1: activeTab.detailLabels[0],
      detailLabel2: activeTab.detailLabels[1],
      detailLabel3: activeTab.detailLabels[2],
      currency: currencies[(index + module.features.length) % currencies.length],
      amount: formatAmount(index + module.features.length, module.id),
      fee: `$${(2.4 + index * 1.85).toFixed(2)}`,
      channel: channels[(index + module.id.length) % channels.length],
      region: regions[(index + module.features.length) % regions.length],
      status,
      risk,
      owner: owners[index % owners.length],
      created: `2026-05-${String(createdDay).padStart(2, "0")} ${String(9 + (index % 8)).padStart(2, "0")}:15`,
      updated: `2026-05-${String(26 - (index % 9)).padStart(2, "0")} ${String(18 - (index % 7)).padStart(2, "0")}:30`,
      sla: `${2 + (index % 6)}h`,
    };
    return {
      ...record,
      ...state.recordUpdates[record.id],
    };
  }).filter((record) => {
    const keyword = state.keyword.trim().toLowerCase();
    const matchesKeyword = !keyword || Object.values(record).flat().join(" ").toLowerCase().includes(keyword);
    const matchesStatus = !state.filters.status || record.status[0] === state.filters.status;
    const matchesRisk = !state.filters.risk || record.risk[0] === state.filters.risk;
    const matchesEntityType = !state.filters.entityType || record.entityType === state.filters.entityType;
    const matchesCurrency = !state.filters.currency || record.currency === state.filters.currency;
    const matchesChannel = !state.filters.channel || record.channel === state.filters.channel;
    const matchesRegion = !state.filters.region || record.region === state.filters.region;
    const matchesOwner = !state.filters.owner || record.owner === state.filters.owner;

    return (
      matchesKeyword &&
      matchesStatus &&
      matchesRisk &&
      matchesEntityType &&
      matchesCurrency &&
      matchesChannel &&
      matchesRegion &&
      matchesOwner
    );
  });
}

function identityColumnsFor(module, tab) {
  const identities = {
    users: ["用户 UID", "用户"],
    kyc: ["认证申请号", tab.id === "enterprise" ? "企业名称" : "用户"],
    wallet: ["账户 ID", "用户"],
    deposit: ["充值订单号", "用户 / 企业"],
    withdraw: ["提现订单号", "用户 / 企业"],
    cards: tab.id === "provider" ? ["配置 ID", "BIN / 服务商"] : ["卡 ID", "持卡人"],
    transactions: ["交易单号", "商户"],
    risk: ["风控事件 ID", "风险对象"],
    aml: ["合规案件 ID", "命中对象"],
    fees: ["费率配置 ID", "费率名称"],
    fx: ["汇率记录 ID", "汇率对"],
    finance: ["凭证号", "账务对象"],
    settlement: ["结算单号", "结算对象"],
    referral: ["返佣单号", "代理 / 用户"],
    vip: ["会员记录 ID", "会员"],
    marketing: ["活动 ID", "活动名称"],
    tickets: ["工单号", "用户 / 问题"],
    notifications: ["通知 ID", "模板 / 公告"],
    enterprise: ["企业 ID", "企业名称"],
    api: ["应用 ID", "API 应用"],
    settings: ["配置 ID", "配置对象"],
    permissions: ["权限记录 ID", "管理员 / 角色"],
    reports: ["报表 ID", "报表名称"],
  };
  const [idLabel, subjectLabel] = identities[module.id] || ["记录 ID", "对象"];
  return [
    ["id", idLabel],
    ["subject", subjectLabel],
  ];
}

function columnsForTab(module, tab) {
  const columns = [
    ...identityColumnsFor(module, tab),
    ["detail1", tab.detailLabels[0]],
    ["detail2", tab.detailLabels[1]],
    ["detail3", tab.detailLabels[2]],
  ];

  const amountModules = new Set([
    "wallet",
    "deposit",
    "withdraw",
    "cards",
    "transactions",
    "fees",
    "fx",
    "finance",
    "settlement",
    "referral",
    "reports",
  ]);
  const statusModules = new Set([
    "users",
    "kyc",
    "deposit",
    "withdraw",
    "cards",
    "transactions",
    "aml",
    "marketing",
    "tickets",
    "notifications",
    "enterprise",
    "api",
    "settings",
    "permissions",
  ]);
  const riskModules = new Set(["kyc", "withdraw", "transactions", "risk", "aml"]);
  const ownerModules = new Set(["kyc", "withdraw", "risk", "aml", "finance", "settlement", "tickets", "enterprise"]);

  if (amountModules.has(module.id)) columns.push(["amount", "金额 / 参数"]);
  if (statusModules.has(module.id) || /状态|审核|处理|失败|异常|申诉/.test(tab.label)) {
    columns.push(["status", "状态"]);
  }
  if (riskModules.has(module.id) || /风控|风险|AML|KYT|黑名单/.test(tab.label)) {
    columns.push(["risk", "风险"]);
  }
  if (ownerModules.has(module.id) || /工单|审核|申诉|调账|差异/.test(tab.label)) {
    columns.push(["owner", "负责人"]);
  }
  columns.push(["updated", "更新时间"]);

  return columns;
}

function renderCell(record, key) {
  if (key === "id") return `<span class="id-copy">${record.id}</span>`;
  if (key === "status") return `<span class="status ${record.status[1]}">${record.status[0]}</span>`;
  if (key === "risk") return `<span class="risk ${record.risk[1]}">${record.risk[0]}</span>`;
  return record[key] || "-";
}

function effectForAction(label) {
  if (/通过|放行|标记到账|确认|启用|激活|生效|发布|完成|发放|生成|重试|刷新|匹配入账/.test(label)) {
    return { status: ["已通过", "success"], risk: ["低风险", "low"] };
  }
  if (/驳回|拒绝|关闭|停用|禁用|冻结|拉黑|拦截|下线|撤销|退回/.test(label)) {
    return { status: ["已拦截", "failed"], risk: ["高风险", "high"] };
  }
  if (/编辑|配置|调额|分配|回复|调查|追踪|处理|对账|补单|补充|上传|授权|标记|调整|归集/.test(label)) {
    return { status: ["监控中", "info"], risk: ["观察名单", "watch"] };
  }
  return { status: ["审核中", "pending"] };
}

function action(label, message, detail = false) {
  return { label, message, detail, effect: effectForAction(label) };
}

function actionsFor(module, tab, record) {
  const id = record.id;
  const map = {
    users: {
      list: [action("详情", "", true), action("登录记录", `${id} 登录记录已打开`), action("冻结", `${id} 已进入冻结配置`)],
      status: [action("详情", "", true), action("冻结/解冻", `${id} 状态变更已记录`), action("状态记录", `${id} 状态记录已打开`)],
      login: [action("详情", "", true), action("设备管理", `${id} 设备管理已打开`), action("拉黑设备", `${id} 设备已加入观察名单`)],
      tags: [action("详情", "", true), action("打标签", `${id} 标签已更新`), action("分层", `${id} 用户分层已调整`)],
      blacklist: [action("详情", "", true), action("移出黑名单", `${id} 已移出黑名单`), action("邀请链路", `${id} 邀请关系已打开`)],
    },
    kyc: {
      personal: [action("详情", "", true), action("通过", `${id} 认证已通过`), action("驳回", `${id} 已驳回并记录原因`)],
      enterprise: [action("详情", "", true), action("通过", `${id} KYB 已通过`), action("驳回", `${id} KYB 已驳回`)],
      documents: [action("详情", "", true), action("补充材料", `${id} 已发送补充材料通知`), action("驳回", `${id} 证件资料已驳回`)],
      records: [action("详情", "", true), action("复查记录", `${id} 复查记录已打开`), action("导出", `${id} 审核记录已导出`)],
      risk: [action("详情", "", true), action("标记风险", `${id} 已标记高风险`), action("解除标记", `${id} 风险标记已解除`)],
    },
    wallet: {
      assets: [action("详情", "", true), action("资产流水", `${id} 资产流水已打开`), action("冻结余额", `${id} 冻结余额配置已打开`)],
      ledger: [action("详情", "", true), action("关联订单", `${id} 关联订单已打开`), action("导出", `${id} 流水已导出`)],
      adjust: [action("详情", "", true), action("调账", `${id} 调账单已创建`), action("撤销", `${id} 调整撤销流程已打开`)],
      exception: [action("详情", "", true), action("处理异常", `${id} 异常处理已打开`), action("标记完成", `${id} 已标记处理完成`)],
    },
    deposit: {
      chain: [action("详情", "", true), action("补单", `${id} 补单流程已打开`), action("标记到账", `${id} 已标记到账`)],
      fiat: [action("详情", "", true), action("匹配入账", `${id} 入账匹配已打开`), action("退回", `${id} 退回流程已打开`)],
      address: [action("详情", "", true), action("停用地址", `${id} 地址已停用`), action("归集", `${id} 已加入归集队列`)],
      exception: [action("详情", "", true), action("补单", `${id} 异常补单已打开`), action("关闭异常", `${id} 异常已关闭`)],
    },
    withdraw: {
      chain: [action("详情", "", true), action("通过", `${id} 提现已通过`), action("驳回", `${id} 提现已驳回`)],
      fiat: [action("详情", "", true), action("通过", `${id} 法币提现已通过`), action("驳回", `${id} 法币提现已驳回`)],
      risk: [action("详情", "", true), action("放行", `${id} 风控拦截已放行`), action("拒绝", `${id} 风控拦截已拒绝`)],
      limits: [action("详情", "", true), action("调整限额", `${id} 限额配置已打开`), action("费用配置", `${id} 手续费配置已打开`)],
    },
    cards: {
      virtual: [action("详情", "", true), action("冻结", `${id} 卡片冻结流程已打开`), action("调额", `${id} 卡限额配置已打开`)],
      physical: [action("详情", "", true), action("物流", `${id} 物流信息已打开`), action("激活", `${id} 激活流程已打开`)],
      applications: [action("详情", "", true), action("开卡通过", `${id} 开卡申请已通过`), action("驳回", `${id} 开卡申请已驳回`)],
      transactions: [action("详情", "", true), action("交易追踪", `${id} 交易状态追踪已打开`), action("退款", `${id} 退款流程已打开`)],
      provider: [action("详情", "", true), action("编辑", `${id} 服务商配置已打开`), action("停用", `${id} 配置停用流程已打开`)],
    },
    transactions: {
      orders: [action("详情", "", true), action("追踪", `${id} 交易追踪已打开`), action("退款", `${id} 退款流程已打开`)],
      auth: [action("详情", "", true), action("释放授权", `${id} 授权释放已提交`), action("3DS 记录", `${id} 3DS 记录已打开`)],
      settled: [action("详情", "", true), action("清算文件", `${id} 清算文件已打开`), action("对账", `${id} 对账明细已打开`)],
      refund: [action("详情", "", true), action("处理拒付", `${id} 拒付处理已打开`), action("上传证据", `${id} 证据上传入口已打开`)],
      failed: [action("详情", "", true), action("重试", `${id} 重试任务已创建`), action("关闭", `${id} 失败交易已关闭`)],
    },
    risk: {
      rules: [action("详情", "", true), action("编辑规则", `${id} 风控规则已打开`), action("停用", `${id} 规则停用流程已打开`)],
      default: [action("详情", "", true), action("拦截", `${id} 已执行拦截`), action("放行", `${id} 已人工放行`)],
    },
    aml: {
      address: [action("详情", "", true), action("重新扫描", `${id} 已重新发起扫描`), action("标记风险", `${id} 地址已标记风险`)],
      sanctions: [action("详情", "", true), action("生成 SAR", `${id} SAR 草稿已生成`), action("关闭命中", `${id} 命中已关闭`)],
      suspicious: [action("详情", "", true), action("调查", `${id} 调查任务已打开`), action("生成 SAR", `${id} SAR 草稿已生成`)],
      logs: [action("详情", "", true), action("导出", `${id} 合规日志已导出`), action("追溯", `${id} 操作链路已打开`)],
    },
    fees: {
      default: [action("详情", "", true), action("编辑", `${id} 费率配置已打开`), action("生效", `${id} 已提交生效`)],
    },
    fx: {
      rates: [action("详情", "", true), action("刷新报价", `${id} 报价已刷新`), action("加点配置", `${id} 加点配置已打开`)],
      swap: [action("详情", "", true), action("重试兑换", `${id} 兑换重试已提交`), action("关闭", `${id} Swap 订单已关闭`)],
      default: [action("详情", "", true), action("编辑", `${id} 配置已打开`), action("启用", `${id} 已启用`)],
    },
    finance: {
      adjust: [action("详情", "", true), action("提交复核", `${id} 调账已提交复核`), action("撤销", `${id} 调账已撤销`)],
      close: [action("详情", "", true), action("对账", `${id} 对账明细已打开`), action("确认差异", `${id} 差异确认已记录`)],
      default: [action("详情", "", true), action("凭证", `${id} 凭证已打开`), action("导出", `${id} 财务数据已导出`)],
    },
    settlement: {
      default: [action("详情", "", true), action("对账", `${id} 对账入口已打开`), action("导出", `${id} 结算数据已导出`)],
    },
    referral: {
      audit: [action("详情", "", true), action("确认发放", `${id} 返佣发放已确认`), action("驳回", `${id} 返佣已驳回`)],
      default: [action("详情", "", true), action("规则配置", `${id} 规则配置已打开`), action("统计", `${id} 统计明细已打开`)],
    },
    vip: {
      default: [action("详情", "", true), action("编辑权益", `${id} 权益配置已打开`), action("调整等级", `${id} 等级调整已打开`)],
    },
    marketing: {
      content: [action("详情", "", true), action("编辑", `${id} 内容编辑已打开`), action("下线", `${id} 已下线`)],
      push: [action("详情", "", true), action("重发", `${id} 推送重发已提交`), action("发送记录", `${id} 发送记录已打开`)],
      default: [action("详情", "", true), action("编辑", `${id} 活动配置已打开`), action("停用", `${id} 活动已停用`)],
    },
    tickets: {
      default: [action("详情", "", true), action("分配", `${id} 工单已分配`), action("回复", `${id} 回复窗口已打开`)],
    },
    notifications: {
      default: [action("详情", "", true), action("编辑模板", `${id} 模板已打开`), action("发送记录", `${id} 发送记录已打开`)],
    },
    enterprise: {
      kyb: [action("详情", "", true), action("KYB 通过", `${id} 企业 KYB 已通过`), action("补充材料", `${id} 已要求补充材料`)],
      default: [action("详情", "", true), action("配置", `${id} 企业配置已打开`), action("报表", `${id} 企业报表已打开`)],
    },
    api: {
      keys: [action("详情", "", true), action("禁用 Key", `${id} API Key 已禁用`), action("权限", `${id} 权限配置已打开`)],
      webhook: [action("详情", "", true), action("重试回调", `${id} 回调重试已提交`), action("编辑", `${id} Webhook 配置已打开`)],
      logs: [action("详情", "", true), action("查看请求", `${id} 请求详情已打开`), action("导出", `${id} 调用日志已导出`)],
      sandbox: [action("详情", "", true), action("重置沙盒", `${id} 沙盒数据已重置`), action("文档", `${id} SDK 文档已打开`)],
    },
    settings: {
      default: [action("详情", "", true), action("编辑", `${id} 配置已打开`), action("发布", `${id} 配置已发布`)],
    },
    permissions: {
      logs: [action("详情", "", true), action("追溯", `${id} 操作链路已打开`), action("导出", `${id} 日志已导出`)],
      default: [action("详情", "", true), action("授权", `${id} 授权配置已打开`), action("停用", `${id} 权限已停用`)],
    },
    reports: {
      default: [action("详情", "", true), action("生成报表", `${id} 报表生成任务已创建`), action("导出", `${id} 报表已导出`)],
    },
  };

  const moduleActions = map[module.id];
  return moduleActions?.[tab.id] || moduleActions?.default || [
    action("详情", "", true),
    action("编辑", `${id} 编辑入口已打开`),
    action("记录", `${id} 操作记录已打开`),
  ];
}

function renderActions(module, tab, record) {
  return actionsFor(module, tab, record)
    .map((item) => {
      if (item.detail) {
        return `<button class="table-action" type="button" data-detail="${record.id}">${item.label}</button>`;
      }
      return `
        <button
          class="table-action"
          type="button"
          data-action-id="${record.id}"
          data-action-label="${item.label}"
          data-action-message="${item.message}"
        >
          ${item.label}
        </button>
      `;
    })
    .join("");
}

function renderModule(id) {
  const module = moduleById(id);
  pageTitle.textContent = module.title;
  const tabs = tabsForModule(module);
  if (!state.activeFeature || !tabs.some((tab) => tab.id === state.activeFeature)) {
    state.activeFeature = tabs[0].id;
  }
  const activeTab = activeTabFor(module);
  const columns = columnsForTab(module, activeTab);
  const filters = filtersForModule(module, activeTab);
  const records = recordsFor(module);

  app.innerHTML = `
    <section class="section">
      <div class="section-head">
        <div>
          <h2>${module.title}</h2>
          <p>${module.summary}。当前为「${activeTab.label}」视图，列表字段会随业务场景切换。</p>
        </div>
      </div>

      <div class="tabs">
        ${tabs
          .map(
            (tab) => `
            <button class="tab-button ${state.activeFeature === tab.id ? "active" : ""}" type="button" data-feature="${tab.id}">
              ${tab.label}
            </button>
          `,
          )
          .join("")}
      </div>
    </section>

    <section class="module-layout section">
      <article class="panel">
        <div class="toolbar">
          <label class="field">
            <span>关键字</span>
            <input id="tableSearch" type="search" value="${state.keyword}" placeholder="${searchPlaceholderFor(module, activeTab)}" />
          </label>
          ${filters
            .map(
              (filter) => `
              <label class="field">
                <span>${filter.label}</span>
                <select id="${filter.key}Filter" data-filter="${filter.key}">
                  ${optionList(filter.placeholder, filter.options, state.filters[filter.key])}
                </select>
              </label>
            `,
            )
            .join("")}
          <button class="ghost-button" type="button" data-filter-apply>筛选</button>
          <button class="ghost-button" type="button" data-filter-reset>重置</button>
        </div>
        <div class="filter-summary">
          ${filterSummaryItems(records.length).map((item) => `<span>${item}</span>`).join("")}
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${columns.map(([, label]) => `<th>${label}</th>`).join("")}
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${
                records.length
                  ? records
                      .map(
                        (record) => `
                        <tr>
                          ${columns.map(([key]) => `<td>${renderCell(record, key)}</td>`).join("")}
                          <td>
                            <div class="table-actions">
                              ${renderActions(module, activeTab, record)}
                            </div>
                          </td>
                        </tr>
                      `,
                      )
                      .join("")
                  : `<tr><td colspan="${columns.length + 1}"><div class="empty-state">没有匹配记录</div></td></tr>`
              }
            </tbody>
          </table>
        </div>
      </article>
    </section>
  `;
}

function openDetail(recordId) {
  const module = moduleById(state.activeModule);
  const activeTab = activeTabFor(module);
  const record = recordsFor(module).find((item) => item.id === recordId);
  if (!record) return;

  drawerTitle.textContent = record.id;
  drawerBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail-cell"><span>主体</span><strong>${record.subject}</strong></div>
      <div class="detail-cell"><span>UID / 账户</span><strong>${record.uid}</strong></div>
      <div class="detail-cell"><span>模块</span><strong>${module.title}</strong></div>
      <div class="detail-cell"><span>主体类型</span><strong>${record.entityType}</strong></div>
      <div class="detail-cell"><span>当前标签</span><strong>${record.activeFeature}</strong></div>
      <div class="detail-cell"><span>功能项</span><strong>${record.feature}</strong></div>
      <div class="detail-cell"><span>${record.detailLabel1}</span><strong>${record.detail1}</strong></div>
      <div class="detail-cell"><span>${record.detailLabel2}</span><strong>${record.detail2}</strong></div>
      <div class="detail-cell"><span>${record.detailLabel3}</span><strong>${record.detail3}</strong></div>
      <div class="detail-cell"><span>币种</span><strong>${record.currency}</strong></div>
      <div class="detail-cell"><span>金额 / 参数</span><strong>${record.amount}</strong></div>
      <div class="detail-cell"><span>费用</span><strong>${record.fee}</strong></div>
      <div class="detail-cell"><span>通道 / 服务商</span><strong>${record.channel}</strong></div>
      <div class="detail-cell"><span>国家 / 地区</span><strong>${record.region}</strong></div>
      <div class="detail-cell"><span>状态</span><strong>${record.status[0]}</strong></div>
      <div class="detail-cell"><span>风险等级</span><strong>${record.risk[0]}</strong></div>
      <div class="detail-cell"><span>负责人</span><strong>${record.owner}</strong></div>
      <div class="detail-cell"><span>创建时间</span><strong>${record.created}</strong></div>
      <div class="detail-cell"><span>更新时间</span><strong>${record.updated}</strong></div>
      <div class="detail-cell"><span>SLA</span><strong>${record.sla}</strong></div>
    </div>
    <article class="panel">
      <h3>处理建议</h3>
      <ul class="feature-list">
        <li><strong>风控检查</strong><span>校验用户、设备、地址和交易路径</span></li>
        <li><strong>合规审核</strong><span>命中 AML/KYT 时进入合规复核</span></li>
        <li><strong>资金操作</strong><span>人工入账、扣款、解冻均需双人确认</span></li>
      </ul>
    </article>
    ${actionsFor(module, activeTab, record)
      .filter((item) => !item.detail)
      .map(
        (item, index) => `
        <button
          class="${index === 0 ? "primary-button" : "ghost-button"}"
          type="button"
          data-action-id="${record.id}"
          data-action-label="${item.label}"
          data-action-message="${item.message}"
        >
          ${item.label}
        </button>
      `,
      )
      .join("")}
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function actionByLabel(module, tab, record, label) {
  return actionsFor(module, tab, record).find((item) => item.label === label) || action(label, `${record.id} 操作已完成`);
}

function openActionPanel(recordId, label, message) {
  const module = moduleById(state.activeModule);
  const activeTab = activeTabFor(module);
  const record = recordsFor(module).find((item) => item.id === recordId);
  if (!record) return;

  const currentAction = actionByLabel(module, activeTab, record, label);
  drawerTitle.textContent = `${label} · ${record.id}`;
  drawerBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail-cell"><span>模块</span><strong>${module.title}</strong></div>
      <div class="detail-cell"><span>当前视图</span><strong>${activeTab.label}</strong></div>
      <div class="detail-cell"><span>主体</span><strong>${record.subject}</strong></div>
      <div class="detail-cell"><span>当前状态</span><strong>${record.status[0]}</strong></div>
      <div class="detail-cell"><span>当前风险</span><strong>${record.risk[0]}</strong></div>
      <div class="detail-cell"><span>负责人</span><strong>${record.owner}</strong></div>
    </div>
    <article class="panel">
      <h3>操作确认</h3>
      <label class="field">
        <span>处理结果</span>
        <select id="actionResult">
          <option>${currentAction.effect.status?.[0] || "已处理"}</option>
          <option>监控中</option>
          <option>已通过</option>
          <option>已拦截</option>
        </select>
      </label>
      <label class="field">
        <span>操作备注</span>
        <textarea id="actionNote" rows="4" placeholder="填写处理说明，便于操作日志追溯">${message}</textarea>
      </label>
    </article>
    <button
      class="primary-button"
      type="button"
      data-confirm-action
      data-action-id="${record.id}"
      data-action-label="${label}"
    >
      确认${label}
    </button>
    <button class="ghost-button" type="button" data-close-action>取消</button>
  `;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function applyAction(recordId, label) {
  const module = moduleById(state.activeModule);
  const activeTab = activeTabFor(module);
  const record = recordsFor(module).find((item) => item.id === recordId);
  if (!record) return;

  const currentAction = actionByLabel(module, activeTab, record, label);
  const result = document.querySelector("#actionResult")?.value || currentAction.effect.status?.[0] || "已处理";
  const note = document.querySelector("#actionNote")?.value.trim() || currentAction.message;
  const statusTone = statusPool.find(([status]) => status === result)?.[1] || currentAction.effect.status?.[1] || "info";

  state.recordUpdates[recordId] = {
    ...(state.recordUpdates[recordId] || {}),
    status: [result, statusTone],
    risk: currentAction.effect.risk || record.risk,
    owner: "当前管理员",
    updated: nowText(),
  };
  state.actionLogs.unshift({
    id: recordId,
    action: label,
    module: module.title,
    tab: activeTab.label,
    note,
    time: nowText(),
  });

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  renderModule(state.activeModule);
  showToast(`${recordId} ${label}已完成`);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function render() {
  renderNav();
  if (state.activeModule === "dashboard") {
    state.activeFeature = "";
    renderDashboard();
  } else {
    renderModule(state.activeModule);
  }
  document.body.classList.remove("nav-open");
}

document.querySelector("#navSearch").addEventListener("input", renderNav);

navList.addEventListener("click", (event) => {
  const groupButton = event.target.closest("[data-group]");
  if (groupButton) {
    const groupId = groupButton.dataset.group;
    if (state.openGroups.has(groupId)) {
      state.openGroups.delete(groupId);
    } else {
      state.openGroups.add(groupId);
    }
    renderNav();
    return;
  }

  const button = event.target.closest("[data-module]");
  if (!button) return;
  state.activeModule = button.dataset.module;
  state.openGroups.add(groupByModule(state.activeModule).id);
  state.activeFeature = "";
  resetListFilters();
  render();
  app.focus();
});

app.addEventListener("click", (event) => {
  const drillTarget = event.target.closest("[data-drill-module]");
  const featureButton = event.target.closest("[data-feature]");
  const applyButton = event.target.closest("[data-filter-apply]");
  const resetButton = event.target.closest("[data-filter-reset]");
  const actionButton = event.target.closest("[data-action-id]");
  const toastButton = event.target.closest("[data-toast]");
  const detailButton = event.target.closest("[data-detail]");

  if (drillTarget) {
    goToDrill({
      module: drillTarget.dataset.drillModule,
      tab: drillTarget.dataset.drillTab,
      keyword: drillTarget.dataset.drillKeyword,
    });
    return;
  }

  if (featureButton) {
    state.activeFeature = featureButton.dataset.feature;
    renderModule(state.activeModule);
    return;
  }

  if (applyButton) {
    const count = recordsFor(moduleById(state.activeModule)).length;
    showToast(`筛选完成，共 ${count} 条结果`);
    return;
  }

  if (resetButton) {
    resetListFilters();
    renderModule(state.activeModule);
    showToast("已重置全部查询和筛选条件");
    return;
  }

  if (actionButton) {
    openActionPanel(
      actionButton.dataset.actionId,
      actionButton.dataset.actionLabel,
      actionButton.dataset.actionMessage,
    );
    return;
  }

  if (detailButton) {
    openDetail(detailButton.dataset.detail);
    return;
  }

  if (toastButton) {
    showToast(toastButton.dataset.toast);
  }
});

app.addEventListener("keydown", (event) => {
  const drillTarget = event.target.closest("[data-drill-module]");
  if (!drillTarget || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  goToDrill({
    module: drillTarget.dataset.drillModule,
    tab: drillTarget.dataset.drillTab,
    keyword: drillTarget.dataset.drillKeyword,
  });
});

app.addEventListener("input", (event) => {
  if (event.target.id === "tableSearch") {
    state.keyword = event.target.value;
    renderModule(state.activeModule);
    const input = document.querySelector("#tableSearch");
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }
});

app.addEventListener("change", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (!filter) return;
  state.filters[filter.dataset.filter] = filter.value;
  renderModule(state.activeModule);
});

document.querySelector("#globalSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (state.activeModule !== "dashboard") {
      state.keyword = event.target.value.trim();
      renderModule(state.activeModule);
    }
    showToast(`已搜索：${event.target.value || "全部业务"}`);
  }
});

document.querySelector("#menuToggle").addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

document.querySelector("#closeDrawer").addEventListener("click", () => {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
});

drawer.addEventListener("click", (event) => {
  if (event.target === drawer) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }

  const confirmButton = event.target.closest("[data-confirm-action]");
  if (confirmButton) {
    applyAction(confirmButton.dataset.actionId, confirmButton.dataset.actionLabel);
    return;
  }

  const closeActionButton = event.target.closest("[data-close-action]");
  if (closeActionButton) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    return;
  }

  const actionButton = event.target.closest("[data-action-id]");
  if (actionButton) {
    openActionPanel(
      actionButton.dataset.actionId,
      actionButton.dataset.actionLabel,
      actionButton.dataset.actionMessage,
    );
    return;
  }

  const toastButton = event.target.closest("[data-toast]");
  if (toastButton) showToast(toastButton.dataset.toast);
});

render();
