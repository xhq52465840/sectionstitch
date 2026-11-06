# SectionStitch 项目说明与待拷打问题（2026-11-06）

## 1. 一句话
免费的浏览器端工具：把 Lovable / v0 / Bolt 等 AI 建站工具生成的 HTML、Tailwind、简单 JSX/TSX 区块，转换成 Shopify Online Store 2.0 原生 section（.liquid + {% schema %}），商家能在 Shopify 主题编辑器里直接改文字、图片、链接、颜色、重复条目。

- 线上：https://xhq52465840.github.io/sectionstitch/
- 代码：https://github.com/xhq52465840/sectionstitch
- 本地工程：/workspace/shopify-section-converter/（site/、research/、drafts/、screenshots/）

## 2. 为什么选它（"抄需求"逻辑）
- 已有付费竞品证明需求：Reliquify（$99/店）、LovableConverter（Lovable→Shopify）。
- Reddit r/lovable 有人问"Lovable 做的站怎么搬到 Shopify"。
- 前一轮 8 个点子压力测试中，只有它活下来（3/5 分），其余 7 个因竞品多/免费替代/难收钱被淘汰。
- 约束：只做网页版、小成本、1-2 周、直接收钱、不做外包。

## 3. 现在已经做了什么
- 工具首页：粘贴代码 → 生成 .liquid → 复制/下载。全在浏览器里跑，不调 AI、不上传代码、零运行成本。
- 支持：文字/图片/链接/颜色变成 settings；简单 array.map 变成可重复 blocks；Tailwind 类编译成作用域 CSS（不依赖 Tailwind CDN）；FAQ 用原生 details/summary。
- 8 篇 SEO 教程，目标关键词：lovable to shopify / convert react component to shopify section / tailwind to liquid / html to shopify section / v0 to shopify / how to add custom section shopify / shopify section schema / shopify FAQ liquid。
- SEO 基础：canonical、sitemap.xml、robots.txt、llms.txt、OG、JSON-LD、内链。
- 测试：6 个样例输出用 Shopify Theme Check 3.31.0 检查 0 问题；线上浏览器实测转换成功、无 JS 报错、手机端无溢出。
- 花费：$0。

## 4. 变现计划
- 工具免费，靠搜索流量。
- 复杂区块人工/半自动代做 $19/个、$39/3 个，一次性付款、不自动续费（入口目前是禁用占位，没有支付、没有联系邮箱）。
- 后续可能：AdSense、或付费"高级转换"（需要接 AI，单次成本估计 < $0.5，未实测）。

## 5. 止损规则
- 上线 14 天：50 个有效访问或 10 个真实样本仍 0 单 → 停。
- 10 个范围内样本少于 8 个能自动通过检查，或每单都要人工修 → 停（不能变外包）。

## 6. 已知问题 / 风险（请重点拷打）
1. 转换是规则驱动，只对简单、静态的区块可靠；动态逻辑、状态、未知组件、第三方库会警告或丢弃。不是"任意 React 自动转换"。
2. 从没导入真实 Shopify 店铺测试过主题编辑器体验；本地预览用 LiquidJS 近似，图片过滤器是模拟的。
3. 重复 blocks 只复用第一项结构；图片需要商家重新上传选择。
4. 竞品已存在（Reliquify、LovableConverter、免费 HTML2Liquid 等），新站在 GitHub Pages 子路径上，SEO 权重为零，不保证有自然流量。
5. 获客渠道受限：r/lovable 禁止招揽服务，r/shopify 禁止推广/验证帖；Shopify Community 仅 Ask and Offer 版可推广且反对 AI 生成帖子。目前只能靠 SEO。
6. 没有自定义域名（建议 sectionstitch.app，首年约 $8.75，未购买）；Cloudflare 部署 token 失效（9109）。
7. 还没提交 Google Search Console（需要用户本人 Google 登录）。
8. $19 代做和"不做外包"有张力：如果需求主要是复杂区块，就会变成手工活。
9. 付费意愿未验证：还没有任何真实用户说愿意付 $19。
10. 目标用户（用 Lovable 建站后想迁 Shopify 的人）规模多大，没有数据。

## 7. 想请你的 AI 回答的问题
- 这个方向值不值得继续？最大的致命伤是哪个？
- 只靠 SEO，一个新站多久可能有流量？关键词选得对吗？
- 收费点应该放在哪：代做、付费 AI 转换、还是整页/整站迁移？定价合理吗？
- 有没有比"免费工具 + 代做"更好的变现结构？
- 还有哪些合规的获客渠道？
