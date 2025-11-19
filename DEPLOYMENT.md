# 🚀 Antigravity AI - 部署指南

## 部署到 Vercel

本网站已完全配置好，可以直接部署到 Vercel，并使用您的域名 `antigravityai.online`。

### 方法一：使用 Vercel CLI（推荐）

1. **安装 Vercel CLI**（如果还没安装）：
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**：
   ```bash
   vercel login
   ```

3. **进入项目目录并部署**：
   ```bash
   cd /Users/ryan/Documents/MyCode/antigravity
   vercel
   ```
   
   首次部署时，Vercel 会询问一些问题：
   - Set up and deploy? → **Y**
   - Which scope? → 选择您的账户
   - Link to existing project? → **N**
   - What's your project's name? → **antigravity-ai**
   - In which directory is your code located? → **.**
   - Want to override the settings? → **N**

4. **部署到生产环境**：
   ```bash
   vercel --prod
   ```

### 方法二：通过 GitHub 部署

1. **创建 GitHub 仓库**并推送代码：
   ```bash
   cd /Users/ryan/Documents/MyCode/antigravity
   git init
   git add .
   git commit -m "Initial commit: Antigravity AI landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **连接到 Vercel**：
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 导入您的 GitHub 仓库
   - Vercel 会自动检测配置并部署

3. **自动部署**：
   - 每次推送到 main 分支都会自动触发部署

### 配置自定义域名 antigravityai.online

1. **在 Vercel Dashboard 中**：
   - 选择您的项目
   - 进入 "Settings" → "Domains"
   - 输入 `antigravityai.online`
   - 点击 "Add"

2. **配置 DNS 记录**：
   
   在您的域名提供商（购买 antigravityai.online 的地方）添加以下 DNS 记录：

   **选项 A - 使用 A 记录**：
   ```
   类型: A
   名称: @
   值: 76.76.21.21
   TTL: 3600
   ```
   ```
   类型: A
   名称: www
   值: 76.76.21.21
   TTL: 3600
   ```

   **选项 B - 使用 CNAME 记录**（推荐）：
   ```
   类型: CNAME
   名称: www
   值: cname.vercel-dns.com
   TTL: 3600
   ```
   ```
   类型: CNAME
   名称: @
   值: cname.vercel-dns.com
   TTL: 3600
   ```

3. **等待 DNS 传播**：
   - DNS 更改可能需要 24-48 小时生效
   - 但通常在几分钟内就能生效

4. **验证域名**：
   - Vercel 会自动验证域名
   - 成功后会自动配置 HTTPS 证书

## ✅ 部署检查清单

部署完成后，请检查以下内容：

- [ ] 网站可以通过 https://antigravityai.online 访问
- [ ] 所有 "Get Started" 按钮跳转到 https://www.genstory.app
- [ ] 链接包含 `rel="dofollow"` 属性
- [ ] 移动端显示正常
- [ ] SEO meta 标签正确显示
- [ ] Sitemap 可访问：https://antigravityai.online/sitemap.xml
- [ ] Robots.txt 可访问：https://antigravityai.online/robots.txt
- [ ] Privacy 页面正常：https://antigravityai.online/privacy.html
- [ ] Terms 页面正常：https://antigravityai.online/terms.html
- [ ] Favicon 正确显示

## 🔍 SEO 验证

部署后，建议在以下平台验证您的网站：

1. **Google Search Console**:
   - 添加您的网站
   - 提交 sitemap: https://antigravityai.online/sitemap.xml

2. **Google Analytics**（可选）:
   - 在 `index.html` 的 `<head>` 中添加跟踪代码

3. **测试工具**:
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - [Schema Markup Validator](https://validator.schema.org/)

## 🔧 环境变量（如需要）

目前网站是纯静态的，不需要环境变量。如果将来需要添加：

1. 在 Vercel Dashboard 中：
   - 进入 "Settings" → "Environment Variables"
   - 添加需要的变量

## 📊 监控和分析

Vercel 提供内置的分析功能：
- 访问量统计
- 性能监控
- 错误追踪

在项目的 "Analytics" 标签中查看。

## 🆘 故障排除

### 问题：域名无法访问
- 检查 DNS 设置是否正确
- 等待 DNS 传播（最多 48 小时）
- 在 Vercel 中确认域名状态

### 问题：CSS/JS 文件 404
- 检查文件路径是否正确
- 确认 `vercel.json` 配置正确
- 重新部署：`vercel --prod --force`

### 问题：链接不是 dofollow
- 检查 HTML 中的 `rel="dofollow"` 属性
- 确认没有 `rel="nofollow"`

## 📞 支持

如有问题，请访问：
- [Vercel 文档](https://vercel.com/docs)
- [Vercel 社区](https://github.com/vercel/vercel/discussions)

---

**准备好了就开始部署吧！🎉**

只需运行：
```bash
cd /Users/ryan/Documents/MyCode/antigravity
vercel --prod
```

