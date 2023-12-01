# # 两个构建环境
# # 构建开发环境 -> 开发依赖 -> npm run build
# # 构建生产环境 -> node_modules生产过程中的依赖及.output文件
# # 第一个阶段 - 构建基础镜像

# # Build
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install --force --registry=https://registry.npmmirror.com

COPY . .

RUN npm run build
# 第二阶段
FROM node:18-alpine

WORKDIR /app

ENV PORT 3000

# COPY --from=build /app/.output /app/.output
COPY --chown=node:node --from=build /app/.output /app/.output

# RUN npm install --production --registry=https://registry.npmmirror.com

CMD ["node", ".output/server/index.mjs"]


