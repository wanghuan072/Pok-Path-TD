# 解决 Vercel 上 ERR_TOO_MANY_REDIRECTS 白屏

**当前方案**：已改为 **Hash 路由**（`createWebHashHistory`），并**移除了 vercel.json 的 rewrite**。  
这样所有请求都是访问根路径 `/`，由前端根据 `#/xxx` 渲染页面，不再依赖服务端回退，也不会触发重定向。  
地址会变成 `https://pokepathgame.org/#/map-router` 这种形式；若之后修好域名/rewrite，可再改回 History 模式。

---

按下面步骤**用 .vercel.app 地址测试**，可以确定是「自定义域名」还是「构建」的问题。

## 第一步：用默认域名测试

1. 部署完成后，在 Vercel 控制台打开 **Deployments**，点进最新一次部署。
2. 在 **Domains** 里找到并打开 **默认地址**（形如 `xxx.vercel.app`），不要用 `pokepathgame.org`。
3. 看是否还会出现 `ERR_TOO_MANY_REDIRECTS` 或白屏。

## 第二步：根据结果处理

### 情况 A：用 .vercel.app 访问也重定向/白屏

说明问题在**构建或输出目录**，而不是自定义域名。

- 打开 Vercel 项目 → **Settings** → **General**。
- 若仓库根目录**不是** `PokePathTD`（例如根目录是 `Pok-Path-TD`），在 **Root Directory** 里填：**PokePathTD**，保存。
- 再 **Redeploy** 一次，重新用 .vercel.app 打开测试。

### 情况 B：用 .vercel.app 访问正常，用 pokepathgame.org 才重定向/白屏

说明是**自定义域名**导致的重定向循环（常见是 www 和非 www 互相跳）。

- 打开 Vercel 项目 → **Settings** → **Domains**。
- 只保留**一个**主域名，例如：**pokepathgame.org**（不要 www）。
- 若同时绑了 **www.pokepathgame.org**：
  - 要么删掉 www，只留 `pokepathgame.org`；
  - 要么只做**单向**重定向：例如把 `www.pokepathgame.org` 重定向到 `https://pokepathgame.org`，**不要**再把 `pokepathgame.org` 重定向到 www。
- 若域名在 **Cloudflare** 等做了重定向，也只保留一条（例如只做 www → 非 www），不要和 Vercel 里的设置冲突。
- 改完后等 1～2 分钟再访问 `https://pokepathgame.org` 测试。

## 第三步：确认项目配置

- **Root Directory**：若前端在子目录，填该子目录（如 `PokePathTD`）。
- **Build Command**：`npm run build`（已在 vercel.json 里）。
- **Output Directory**：`dist`（已在 vercel.json 里）。

完成以上后，先看 .vercel.app 是否正常，再根据情况 A 或 B 处理。
