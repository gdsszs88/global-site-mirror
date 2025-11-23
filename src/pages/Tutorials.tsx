import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Server, Cloud, Lock, Upload, Terminal, Network, Globe } from "lucide-react";

const Tutorials = () => {
  const telegramLink = "https://t.me/gaoshengsm";

  const tutorialCategories = [
    {
      title: "阿里云国际版完整教程",
      icon: <Cloud className="h-8 w-8" />,
      tutorials: [
        {
          title: "阿里云国际版注册与账号开通完全指南",
          description: "详细讲解如何注册阿里云国际版账号，包括邮箱注册、手机验证、账号激活等步骤",
          tags: ["新手入门", "账号注册"],
          content: `
# 阿里云国际版注册与账号开通

## 1. 注册前准备
- 准备一个可用的邮箱地址
- 准备海外手机号码用于验证（可使用虚拟号码）
- 了解基本的云服务器知识

## 2. 注册步骤
1. 访问阿里云国际站官网
2. 点击"免费注册"按钮
3. 填写邮箱地址并设置密码
4. 进行邮箱验证
5. 填写基本信息（不需要实名认证）
6. 完成手机号验证

## 3. 账号激活
- 登录邮箱查收激活邮件
- 点击激活链接完成账号激活
- 设置账号安全选项

## 4. 充值说明
- 支持多种支付方式：PayPal、信用卡、支付宝等
- 充值到账时间通常为1-5分钟
- 可通过代理商充值，享受更多优惠

## 5. 注意事项
- 无需实名认证，保护个人隐私
- 建议使用强密码并启用二次验证
- 充值前先了解产品价格和优惠政策
          `
        },
        {
          title: "阿里云ECS云服务器选购指南",
          description: "如何根据业务需求选择合适的ECS实例类型、配置和地域",
          tags: ["选购指南", "ECS"],
          content: `
# 阿里云ECS云服务器选购指南

## 1. 实例类型选择

### 1.1 通用型实例（推荐入门）
- **经济型e实例**：2核2G起，适合轻量级网站
- **突发性能t6**：性能可突增，适合流量波动的应用
- **价格**：$14.48/月起

### 1.2 计算优化型
- 适用于高性能计算、批处理
- CPU性能更强，适合计算密集型应用

### 1.3 内存优化型
- 内存配比1:8，适合数据库、缓存应用
- 价格：$89.97/月起

## 2. 地域选择

### 亚洲地区
- **香港**：延迟低，适合国内用户
- **新加坡**：东南亚中心，网络稳定
- **日本**：游戏、视频加速首选
- **韩国首尔**：电商、游戏推荐

### 欧美地区
- **美国弗吉尼亚**：AWS互通，价格便宜
- **德国法兰克福**：欧洲业务首选
- **英国伦敦**：金融服务推荐

### 其他地区
- 印度、澳大利亚、中东等地也有可用区

## 3. 存储选择
- **ESSD云盘**：高性能，适合数据库
- **SSD云盘**：性价比高，通用场景
- **高效云盘**：成本低，适合归档

## 4. 网络带宽
- 1Mbps：适合小型网站
- 5Mbps：中型网站推荐
- 10Mbps+：高流量应用

## 5. 购买建议
- 新用户优先选择优惠套餐
- 长期使用建议购买包年，享受折扣
- 先小配置测试，后续可升级
          `
        },
        {
          title: "阿里云服务器SSH连接详细教程",
          description: "Windows和Mac系统如何通过SSH连接到阿里云服务器",
          tags: ["SSH连接", "远程登录"],
          content: `
# 阿里云服务器SSH连接教程

## 1. Windows系统连接方法

### 方法一：使用PuTTY
1. 下载并安装PuTTY（官网：www.putty.org）
2. 打开PuTTY
3. 在Host Name填入服务器公网IP
4. Port填写22（默认SSH端口）
5. Connection type选择SSH
6. 点击Open
7. 输入用户名（通常是root）
8. 输入密码（购买时设置的）

### 方法二：使用Windows Terminal
1. 打开Windows Terminal或PowerShell
2. 输入命令：\`ssh root@你的服务器IP\`
3. 首次连接会提示确认指纹，输入yes
4. 输入密码即可登录

## 2. Mac/Linux系统连接

### 使用终端连接
1. 打开Terminal终端
2. 输入命令：\`ssh root@服务器IP地址\`
3. 首次连接确认指纹信息
4. 输入密码登录

### 使用密钥登录（更安全）
1. 生成SSH密钥对：\`ssh-keygen -t rsa\`
2. 将公钥上传到服务器：\`ssh-copy-id root@服务器IP\`
3. 之后可免密登录

## 3. 密钥登录配置

### 生成密钥
\`\`\`bash
ssh-keygen -t rsa -b 4096
\`\`\`

### 上传公钥
\`\`\`bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@服务器IP
\`\`\`

### 禁用密码登录（可选）
编辑 /etc/ssh/sshd_config：
\`\`\`
PasswordAuthentication no
\`\`\`

## 4. 常见问题

### 连接超时
- 检查安全组规则，确保22端口已开放
- 检查服务器是否正常运行
- 确认IP地址正确

### 密码错误
- 在阿里云控制台重置密码
- 等待5分钟后再尝试连接

### 权限被拒绝
- 确认使用正确的用户名（root或其他）
- 检查密钥权限：\`chmod 600 ~/.ssh/id_rsa\`
          `
        },
        {
          title: "阿里云服务器环境配置与网站部署",
          description: "从零开始配置LNMP/LAMP环境，部署网站完整流程",
          tags: ["环境配置", "网站部署"],
          content: `
# 阿里云服务器环境配置与网站部署

## 1. 系统更新
\`\`\`bash
# CentOS/AlmaLinux
yum update -y

# Ubuntu/Debian
apt update && apt upgrade -y
\`\`\`

## 2. 安装LNMP环境（推荐）

### 2.1 安装Nginx
\`\`\`bash
# CentOS
yum install nginx -y
systemctl start nginx
systemctl enable nginx

# Ubuntu
apt install nginx -y
systemctl start nginx
systemctl enable nginx
\`\`\`

### 2.2 安装MySQL/MariaDB
\`\`\`bash
# 安装MariaDB
yum install mariadb-server -y
systemctl start mariadb
systemctl enable mariadb

# 安全配置
mysql_secure_installation
\`\`\`

### 2.3 安装PHP
\`\`\`bash
# CentOS 8
yum install php php-fpm php-mysql php-gd php-xml php-mbstring -y
systemctl start php-fpm
systemctl enable php-fpm

# Ubuntu
apt install php-fpm php-mysql php-gd php-xml php-mbstring -y
\`\`\`

## 3. 配置Nginx虚拟主机

### 创建站点配置
\`\`\`bash
vi /etc/nginx/conf.d/yourdomain.conf
\`\`\`

### 配置内容
\`\`\`nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/html/yourdomain;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
\`\`\`

### 测试并重载配置
\`\`\`bash
nginx -t
systemctl reload nginx
\`\`\`

## 4. 上传网站文件

### 方法一：使用SCP上传
\`\`\`bash
scp -r /本地路径/* root@服务器IP:/var/www/html/yourdomain/
\`\`\`

### 方法二：使用FTP/SFTP
1. 安装FileZilla或WinSCP
2. 使用SFTP协议连接（端口22）
3. 拖拽上传文件

### 方法三：使用Git
\`\`\`bash
cd /var/www/html/
git clone https://github.com/yourname/yourproject.git
\`\`\`

## 5. 设置文件权限
\`\`\`bash
chown -R nginx:nginx /var/www/html/yourdomain
chmod -R 755 /var/www/html/yourdomain
\`\`\`

## 6. 配置SSL证书（HTTPS）

### 使用Let's Encrypt免费证书
\`\`\`bash
# 安装certbot
yum install certbot python3-certbot-nginx -y

# 申请证书
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 自动续期
certbot renew --dry-run
\`\`\`

## 7. 防火墙配置
\`\`\`bash
# 开放HTTP和HTTPS端口
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
\`\`\`

## 8. 性能优化

### Nginx优化
\`\`\`nginx
worker_processes auto;
worker_connections 2048;
gzip on;
gzip_types text/plain text/css application/json application/javascript;
\`\`\`

### PHP优化
编辑 /etc/php-fpm.d/www.conf：
\`\`\`
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35
\`\`\`
          `
        }
      ]
    },
    {
      title: "AWS EC2完整教程",
      icon: <Server className="h-8 w-8" />,
      tutorials: [
        {
          title: "AWS账号注册与EC2实例创建",
          description: "从注册AWS账号到启动第一台EC2实例的完整流程",
          tags: ["AWS入门", "EC2创建"],
          content: `
# AWS账号注册与EC2实例创建

## 1. AWS账号注册

### 1.1 访问AWS官网
- 国际版：https://aws.amazon.com
- 中国区：https://www.amazonaws.cn

### 1.2 注册流程
1. 点击"创建AWS账户"
2. 填写邮箱地址和账户名称
3. 设置账户密码
4. 选择账户类型（个人/企业）
5. 填写联系信息
6. 绑定信用卡（会扣除$1验证，后退回）
7. 完成电话验证
8. 选择支持计划（可选免费基础支持）

### 1.3 新用户福利
- 12个月免费套餐
- EC2 t2.micro或t3.micro实例免费750小时/月
- 30GB EBS存储免费
- 15GB流量免费

## 2. 创建EC2实例

### 2.1 进入EC2控制台
1. 登录AWS控制台
2. 搜索并选择"EC2"
3. 选择服务器所在区域（右上角）

### 2.2 启动实例
1. 点击"启动实例"按钮
2. 命名实例（如：MyWebServer）

### 2.3 选择操作系统镜像（AMI）
**推荐选择：**
- Amazon Linux 2023（推荐新手）
- Ubuntu Server 22.04 LTS
- CentOS Stream 9
- Windows Server 2022（如需Windows）

### 2.4 选择实例类型

#### 免费套餐实例
- **t2.micro**：1vCPU, 1GB内存（老用户）
- **t3.micro**：2vCPU, 1GB内存（新用户推荐）

#### 常用实例类型
- **t3.small**：2vCPU, 2GB内存 - 小型网站
- **t3.medium**：2vCPU, 4GB内存 - 中型应用
- **c5.large**：2vCPU, 4GB内存 - 计算优化

### 2.5 配置密钥对
1. 创建新密钥对或使用现有密钥
2. 选择密钥对类型：RSA（推荐）
3. 选择文件格式：
   - .pem（Mac/Linux）
   - .ppk（Windows PuTTY）
4. 下载密钥文件并妥善保存

### 2.6 网络设置
1. VPC：使用默认VPC
2. 子网：默认即可
3. 自动分配公有IP：启用
4. 安全组配置：
   - SSH (22端口) - 仅我的IP
   - HTTP (80端口) - 所有位置
   - HTTPS (443端口) - 所有位置

### 2.7 配置存储
- 根卷大小：8-30GB（免费套餐30GB内免费）
- 卷类型：gp3（通用型SSD）

### 2.8 高级详细信息（可选）
- 用户数据：可填入自动执行的脚本
- IAM角色：后续可添加

## 3. 启动实例
1. 检查配置摘要
2. 点击"启动实例"
3. 等待实例状态变为"running"

## 4. 连接到EC2实例

### 4.1 获取连接信息
1. 选中实例
2. 点击"连接"按钮
3. 记录公有IP地址

### 4.2 Mac/Linux连接
\`\`\`bash
# 设置密钥权限
chmod 400 你的密钥.pem

# SSH连接
ssh -i "你的密钥.pem" ec2-user@公有IP地址
\`\`\`

### 4.3 Windows连接（使用PuTTY）
1. 使用PuTTYgen转换.pem为.ppk
2. 打开PuTTY
3. Host Name填入：ec2-user@公有IP
4. Connection -> SSH -> Auth -> 浏览选择.ppk文件
5. 点击Open连接

## 5. 实例管理

### 启动/停止实例
- 停止实例不收费（仅收取存储费用）
- 终止实例会删除所有数据

### 创建AMI镜像
1. 选中实例 -> 操作 -> 映像和模板 -> 创建映像
2. 用于快速创建相同配置的新实例

### 修改安全组
1. 实例详情 -> 安全 -> 安全组
2. 点击安全组ID -> 编辑入站规则

## 6. 成本优化建议
- 使用预留实例节省最多75%
- 使用Spot实例节省最多90%
- 不用时停止实例
- 删除未使用的快照和卷
          `
        },
        {
          title: "EC2实例类型选择与性能对比",
          description: "详解AWS EC2各实例类型的特点和适用场景",
          tags: ["实例类型", "性能对比"],
          content: `
# EC2实例类型选择与性能对比

## 1. 通用型实例（General Purpose）

### T系列（突发性能）
**T3/T3a实例**
- **特点**：基准性能+CPU积分机制
- **配置**：2vCPU/1GB起
- **价格**：$0.0104/小时起
- **适用**：开发测试、小型网站、轻量级应用
- **优势**：性价比高，流量低时累积积分

**T4g实例（ARM架构）**
- 基于AWS Graviton2处理器
- 性价比提升40%
- 适合价格敏感型应用

### M系列（平衡配置）
**M6i实例**
- **处理器**：第3代Intel Xeon
- **配置**：2vCPU/8GB起
- **价格**：$0.096/小时起
- **适用**：企业应用、中型数据库、缓存服务

**M6a实例（AMD）**
- 基于AMD EPYC处理器
- 价格比M6i低10%
- 性能相当

## 2. 计算优化型（Compute Optimized）

### C系列
**C6i实例**
- **处理器**：Intel Xeon Platinum 8375C
- **配置**：2vCPU/4GB起
- **价格**：$0.085/小时起
- **适用**：
  - 批处理工作负载
  - 媒体转码
  - 高性能Web服务器
  - 科学建模
  - 游戏服务器

**C6g实例（ARM架构）**
- AWS Graviton2处理器
- 性价比提升40%
- 网络带宽最高25Gbps

**C5n实例（网络增强）**
- 网络带宽最高100Gbps
- 适合网络密集型应用
- HPC高性能计算

## 3. 内存优化型（Memory Optimized）

### R系列
**R6i实例**
- **内存比**：1:8（CPU:内存）
- **配置**：2vCPU/16GB起
- **价格**：$0.252/小时起
- **适用**：
  - 高性能数据库
  - 分布式缓存（Redis/Memcached）
  - 内存数据库（SAP HANA）
  - 大数据分析

**R6g实例（ARM架构）**
- Graviton2处理器
- 性价比提升40%

### X系列（超大内存）
**X2idn/X2iedn实例**
- 内存比最高1:32
- 最大内存4TB
- 适合SAP HANA等大型内存数据库

## 4. 存储优化型（Storage Optimized）

### I系列（NVMe SSD）
**I4i实例**
- **存储**：本地NVMe SSD
- **IOPS**：最高400,000
- **适用**：
  - NoSQL数据库（Cassandra、MongoDB）
  - 关系型数据库
  - 搜索引擎（Elasticsearch）
  - 实时分析

### D系列（HDD）
**D3/D3en实例**
- 大容量HDD存储
- 存储密集型应用
- 数据仓库

## 5. 加速计算型（Accelerated Computing）

### P系列（GPU）
**P4d实例**
- **GPU**：8x NVIDIA A100 Tensor Core
- **适用**：
  - 深度学习训练
  - 机器学习
  - 高性能计算

### G系列（图形处理）
**G5实例**
- NVIDIA A10G Tensor Core GPU
- 适合图形密集型应用
- 视频编码

### Inf系列（推理优化）
**Inf1实例**
- AWS Inferentia芯片
- 机器学习推理
- 成本最多降低70%

## 6. 实例选择决策树

### 网站/博客
→ T3.micro/small（流量小）
→ T3.medium（流量中等）
→ M6i.large（流量大）

### 电商平台
→ M6i.large起步
→ 配合RDS数据库
→ 使用弹性负载均衡

### 大数据分析
→ R6i系列（内存大）
→ 或使用EMR托管服务

### 游戏服务器
→ C6i系列（CPU强）
→ 或C5n（网络好）

### AI/机器学习
→ P4实例（训练）
→ Inf1实例（推理）
→ G5实例（图形）

## 7. 成本优化策略

### 使用Savings Plans
- 1年期节省28%-42%
- 3年期节省40%-66%

### Spot实例
- 节省高达90%
- 适合可中断的工作负载

### 预留实例
- 按需转预留节省75%
- 适合稳定的长期运行

## 8. 区域选择建议

### 亚太区域
- **东京**：日本业务首选
- **首尔**：韩国业务
- **新加坡**：东南亚中心
- **孟买**：印度市场

### 北美区域
- **弗吉尼亚**：价格最低，服务最全
- **俄亥俄**：第二便宜
- **俄勒冈**：西海岸

### 欧洲区域
- **法兰克福**：欧洲中心
- **伦敦**：英国市场
- **巴黎**：法国业务
          `
        },
        {
          title: "AWS EC2安全组与网络配置详解",
          description: "如何正确配置EC2安全组规则和VPC网络",
          tags: ["安全组", "网络配置"],
          content: `
# AWS EC2安全组与网络配置

## 1. 安全组基础概念

### 什么是安全组？
- 虚拟防火墙，控制进出实例的流量
- 默认拒绝所有入站流量
- 默认允许所有出站流量
- 无状态：出站规则不影响入站

### 安全组规则组成
1. **类型**：HTTP、HTTPS、SSH等
2. **协议**：TCP、UDP、ICMP
3. **端口范围**：如80、443、22
4. **源/目标**：IP地址或安全组

## 2. 常用安全组规则配置

### Web服务器（公网访问）
\`\`\`
入站规则：
- HTTP   | TCP | 80   | 0.0.0.0/0
- HTTPS  | TCP | 443  | 0.0.0.0/0
- SSH    | TCP | 22   | 你的IP/32

出站规则：
- 全部流量 | 全部 | 全部 | 0.0.0.0/0
\`\`\`

### 数据库服务器（仅内网）
\`\`\`
入站规则：
- MySQL  | TCP | 3306 | Web服务器安全组ID
- PostgreSQL | TCP | 5432 | Web服务器安全组ID

出站规则：
- 全部流量 | 全部 | 全部 | 0.0.0.0/0
\`\`\`

### 应用服务器
\`\`\`
入站规则：
- 自定义TCP | TCP | 8080 | 负载均衡器安全组
- SSH | TCP | 22 | 堡垒机安全组

出站规则：
- HTTPS | TCP | 443 | 0.0.0.0/0（访问外部API）
- MySQL | TCP | 3306 | 数据库安全组
\`\`\`

## 3. 安全组最佳实践

### 3.1 最小权限原则
- 仅开放必要端口
- 限制来源IP范围
- 使用安全组引用而非CIDR

### 3.2 SSH访问安全
\`\`\`
❌ 错误：SSH | 22 | 0.0.0.0/0
✅ 正确：SSH | 22 | 你的IP/32
✅ 更好：使用Systems Manager Session Manager
\`\`\`

### 3.3 分层安全策略
\`\`\`
Web层 → 应用层 → 数据库层
│         │          │
公网      内网       内网
\`\`\`

### 3.4 使用安全组引用
\`\`\`
# 数据库安全组入站规则
MySQL | 3306 | sg-web (Web安全组ID)
\`\`\`
优势：Web服务器扩展时自动生效

## 4. VPC网络配置

### 4.1 VPC基础架构
\`\`\`
VPC (10.0.0.0/16)
├── 公有子网 (10.0.1.0/24) - 可访问互联网
│   ├── NAT Gateway
│   └── Web服务器
└── 私有子网 (10.0.2.0/24) - 不可访问互联网
    ├── 应用服务器
    └── 数据库服务器
\`\`\`

### 4.2 创建自定义VPC
\`\`\`bash
# 1. 创建VPC
CIDR: 10.0.0.0/16
名称: MyCustomVPC

# 2. 创建子网
公有子网: 10.0.1.0/24 (可用区a)
私有子网: 10.0.2.0/24 (可用区b)

# 3. 创建互联网网关
绑定到VPC

# 4. 配置路由表
公有子网路由表:
0.0.0.0/0 → Internet Gateway

私有子网路由表:
0.0.0.0/0 → NAT Gateway
\`\`\`

### 4.3 NAT Gateway配置
- 放置在公有子网
- 允许私有子网实例访问互联网
- 不允许互联网主动连接私有实例

## 5. 网络ACL（NACL）

### NACL vs 安全组对比
\`\`\`
安全组（推荐）：
- 实例级别
- 有状态（自动处理响应流量）
- 仅支持允许规则

网络ACL：
- 子网级别
- 无状态（需要明确定义入站和出站）
- 支持允许和拒绝规则
\`\`\`

### NACL使用场景
- 黑名单特定IP地址
- 子网级别的额外安全层
- 通常使用默认NACL即可

## 6. 弹性IP（EIP）

### 分配弹性IP
\`\`\`bash
1. VPC → 弹性IP → 分配新地址
2. 将EIP关联到EC2实例
3. 实例停止再启动，IP不会改变
\`\`\`

### EIP最佳实践
- 不使用的EIP会收费
- 使用负载均衡器代替固定IP
- 考虑使用Route 53 DNS

## 7. VPC Peering与Transit Gateway

### VPC Peering
- 连接两个VPC
- 跨区域/跨账户
- 一对一连接

### Transit Gateway（推荐）
- 中心化管理多个VPC
- 简化网络架构
- 支持跨区域

## 8. 负载均衡器配置

### 应用负载均衡器（ALB）
\`\`\`
监听器:
- HTTP  (80)  → HTTPS (443) 重定向
- HTTPS (443) → 目标组

目标组:
- EC2实例（多个可用区）
- 健康检查: /health
\`\`\`

### 网络负载均衡器（NLB）
- TCP/UDP流量
- 超低延迟
- 静态IP支持

## 9. 安全加固检查清单

### 必做项
- [ ] SSH仅限特定IP
- [ ] 定期审查安全组规则
- [ ] 启用VPC Flow Logs
- [ ] 使用IAM角色代替密钥
- [ ] 启用CloudTrail日志
- [ ] 定期更新系统补丁

### 推荐项
- [ ] 使用Systems Manager
- [ ] 启用GuardDuty威胁检测
- [ ] 配置AWS WAF
- [ ] 使用Secrets Manager管理密钥
- [ ] 启用AWS Config合规检查

## 10. 常见错误排查

### 无法连接SSH
1. 检查安全组22端口是否开放
2. 确认网络ACL允许入站
3. 检查实例状态是否running
4. 确认密钥对正确

### 无法访问网站
1. 检查80/443端口安全组
2. 确认Nginx/Apache已启动
3. 检查路由表配置
4. 确认弹性IP已绑定

### 数据库连接失败
1. 安全组是否允许3306端口
2. 数据库是否在私有子网
3. 应用服务器是否在同一VPC
4. 检查连接字符串是否正确
          `
        }
      ]
    },
    {
      title: "腾讯云服务器教程",
      icon: <Globe className="h-8 w-8" />,
      tutorials: [
        {
          title: "腾讯云服务器完整部署流程",
          description: "从购买到部署的腾讯云CVM完整教程",
          tags: ["腾讯云", "CVM"],
          content: `
# 腾讯云服务器完整部署流程

## 1. 腾讯云账号注册

### 1.1 注册流程
1. 访问腾讯云官网：https://cloud.tencent.com
2. 点击"注册"
3. 使用微信/QQ/邮箱注册
4. 完成手机验证
5. 进行实名认证（个人/企业）

### 1.2 实名认证
**个人认证**：
- 身份证正反面照片
- 人脸识别验证

**企业认证**：
- 营业执照
- 法人身份证
- 对公账户验证

### 1.3 新用户福利
- 代金券大礼包
- 云服务器1核2G首年99元
- 对象存储50GB免费

## 2. 购买云服务器CVM

### 2.1 选择计费模式
**按量计费**：
- 按秒计费，按小时结算
- 适合短期使用
- 价格稍高

**包年包月**：
- 长期使用优惠
- 预付费模式
- 性价比高

### 2.2 选择地域和可用区

#### 国内地域
- **广州**：华南地区首选
- **上海**：华东地区
- **北京**：华北地区
- **成都/重庆**：西南地区

#### 海外地域
- **香港**：延迟低，无需备案
- **新加坡**：东南亚业务
- **硅谷/弗吉尼亚**：北美业务
- **法兰克福**：欧洲业务

### 2.3 选择实例配置

#### 标准型实例
- **S5**：通用场景，性价比高
- 1核1G：轻量应用
- 2核4G：小型网站
- 4核8G：中型应用

#### 计算型实例
- **C3**：计算密集型
- 高主频CPU
- 适合批处理、科学计算

#### 内存型实例
- **M5**：内存密集型
- 高内存配比
- 适合数据库、缓存

### 2.4 选择镜像
**公共镜像**：
- CentOS 7.x/8.x
- Ubuntu 20.04/22.04
- Windows Server 2019/2022
- Debian 10/11

**镜像市场**：
- LAMP一键部署
- LNMP环境
- WordPress
- Docker环境

### 2.5 配置系统盘和数据盘
**系统盘**：
- 高性能云硬盘（推荐）
- SSD云硬盘（高性能）
- 容量：50-100GB

**数据盘**：
- 可选，用于存储数据
- 可独立扩容
- 建议单独挂载

### 2.6 网络配置
**带宽计费模式**：
- 按固定带宽
- 按使用流量（推荐，经济）

**带宽选择**：
- 1Mbps：小型网站
- 5Mbps：中型网站
- 10Mbps+：高流量应用

### 2.7 安全组配置
**常用规则**：
\`\`\`
SSH     | TCP | 22   | 你的IP
HTTP    | TCP | 80   | 0.0.0.0/0
HTTPS   | TCP | 443  | 0.0.0.0/0
MySQL   | TCP | 3306 | 内网IP
\`\`\`

### 2.8 设置登录方式
**Linux**：
- 密码登录
- SSH密钥对（推荐）

**Windows**：
- 设置管理员密码

## 3. 连接云服务器

### 3.1 Linux连接方式

#### 控制台VNC登录
1. 登录腾讯云控制台
2. 找到实例 → 点击"登录"
3. 使用VNC方式登录
4. 输入用户名和密码

#### SSH客户端登录
**Windows系统**：
\`\`\`
使用PuTTY或Xshell
主机：实例公网IP
端口：22
用户名：ubuntu/root
\`\`\`

**Mac/Linux系统**：
\`\`\`bash
ssh ubuntu@实例公网IP
# 或使用密钥
ssh -i 密钥文件 ubuntu@实例公网IP
\`\`\`

### 3.2 Windows连接方式
1. 本地打开"远程桌面连接"
2. 输入实例公网IP
3. 用户名：Administrator
4. 输入密码连接

## 4. 环境配置

### 4.1 系统更新
\`\`\`bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RedHat
sudo yum update -y
\`\`\`

### 4.2 安装宝塔面板（推荐新手）
\`\`\`bash
# CentOS
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh

# Ubuntu/Debian
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
\`\`\`

### 4.3 手动配置LNMP

#### 安装Nginx
\`\`\`bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
\`\`\`

#### 安装MySQL
\`\`\`bash
sudo apt install mysql-server -y
sudo mysql_secure_installation
\`\`\`

#### 安装PHP
\`\`\`bash
sudo apt install php-fpm php-mysql php-gd php-xml php-mbstring -y
\`\`\`

## 5. 网站部署

### 5.1 创建网站目录
\`\`\`bash
sudo mkdir -p /var/www/mywebsite
sudo chown -R www-data:www-data /var/www/mywebsite
\`\`\`

### 5.2 配置Nginx虚拟主机
\`\`\`nginx
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/mywebsite;
    index index.php index.html;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
\`\`\`

### 5.3 上传网站文件

#### 使用SCP
\`\`\`bash
scp -r /本地目录/* ubuntu@服务器IP:/var/www/mywebsite/
\`\`\`

#### 使用FTP/SFTP
1. 安装FileZilla
2. 协议选择SFTP
3. 主机填入服务器IP
4. 端口22
5. 上传文件

## 6. 域名解析

### 6.1 在腾讯云添加域名
1. 进入"域名注册"控制台
2. 添加域名或购买新域名
3. 进行域名实名认证

### 6.2 配置DNS解析
\`\`\`
主机记录    记录类型    记录值
@          A         服务器IP
www        A         服务器IP
\`\`\`

## 7. SSL证书配置

### 7.1 申请免费证书
1. 进入"SSL证书"控制台
2. 申请免费DV证书
3. 验证域名所有权
4. 下载证书

### 7.2 配置HTTPS
\`\`\`nginx
server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # 其他配置...
}

# HTTP自动跳转HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}
\`\`\`

## 8. 性能优化

### 8.1 开启GZIP压缩
\`\`\`nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
\`\`\`

### 8.2 配置缓存
\`\`\`nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 30d;
}
\`\`\`

### 8.3 PHP优化
\`\`\`ini
# /etc/php/8.1/fpm/pool.d/www.conf
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35
\`\`\`

## 9. 安全加固

### 9.1 配置防火墙
\`\`\`bash
sudo ufw enable
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
\`\`\`

### 9.2 更改SSH端口
编辑 /etc/ssh/sshd_config：
\`\`\`
Port 2222  # 改为其他端口
PermitRootLogin no
\`\`\`

### 9.3 安装Fail2ban
\`\`\`bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
\`\`\`

## 10. 监控与备份

### 10.1 配置云监控
1. 在控制台启用云监控
2. 设置告警策略
3. 接收告警通知

### 10.2 自动备份
1. 创建快照策略
2. 定期自动快照
3. 保留最近7天快照

### 10.3 数据库备份
\`\`\`bash
# 自动备份脚本
#!/bin/bash
mysqldump -u root -p密码 数据库名 > /backup/db_$(date +%Y%m%d).sql
# 添加到crontab定时任务
0 2 * * * /path/to/backup.sh
\`\`\`
          `
        }
      ]
    },
    {
      title: "云服务器进阶教程",
      icon: <Terminal className="h-8 w-8" />,
      tutorials: [
        {
          title: "Docker容器化部署完整教程",
          description: "在云服务器上使用Docker部署应用的完整流程",
          tags: ["Docker", "容器化"],
          content: `
# Docker容器化部署完整教程

## 1. Docker简介

### 什么是Docker？
- 轻量级容器技术
- 快速部署应用
- 环境一致性
- 易于迁移扩展

### Docker核心概念
- **镜像（Image）**：应用的只读模板
- **容器（Container）**：镜像的运行实例
- **仓库（Repository）**：存储和分发镜像

## 2. 安装Docker

### Ubuntu/Debian系统
\`\`\`bash
# 更新包索引
sudo apt update

# 安装依赖
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# 添加Docker官方GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 添加Docker仓库
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# 安装Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y

# 启动Docker
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装
sudo docker --version
\`\`\`

### CentOS系统
\`\`\`bash
# 安装依赖
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加Docker仓库
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装Docker
sudo yum install docker-ce docker-ce-cli containerd.io -y

# 启动Docker
sudo systemctl start docker
sudo systemctl enable docker
\`\`\`

### 配置用户权限
\`\`\`bash
# 将当前用户添加到docker组
sudo usermod -aG docker $USER

# 重新登录使权限生效
newgrp docker

# 测试
docker run hello-world
\`\`\`

## 3. Docker基础命令

### 镜像管理
\`\`\`bash
# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 列出本地镜像
docker images

# 删除镜像
docker rmi nginx:latest

# 构建镜像
docker build -t myapp:v1 .
\`\`\`

### 容器管理
\`\`\`bash
# 运行容器
docker run -d --name mynginx -p 80:80 nginx

# 列出运行中的容器
docker ps

# 列出所有容器（包括停止的）
docker ps -a

# 停止容器
docker stop mynginx

# 启动容器
docker start mynginx

# 重启容器
docker restart mynginx

# 删除容器
docker rm mynginx

# 查看容器日志
docker logs mynginx

# 进入容器
docker exec -it mynginx /bin/bash
\`\`\`

## 4. 编写Dockerfile

### Node.js应用示例
\`\`\`dockerfile
# Dockerfile
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制package.json
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["node", "server.js"]
\`\`\`

### Python Flask应用
\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
\`\`\`

### PHP应用
\`\`\`dockerfile
FROM php:8.1-fpm

RUN docker-php-ext-install mysqli pdo pdo_mysql

WORKDIR /var/www/html

COPY . .

EXPOSE 9000

CMD ["php-fpm"]
\`\`\`

## 5. Docker Compose多容器编排

### 安装Docker Compose
\`\`\`bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
\`\`\`

### WordPress + MySQL示例
\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  db:
    image: mysql:8.0
    volumes:
      - db_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wpuser
      MYSQL_PASSWORD: wppassword
    restart: always

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "80:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wpuser
      WORDPRESS_DB_PASSWORD: wppassword
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - ./wordpress:/var/www/html
    restart: always

volumes:
  db_data:
\`\`\`

### LNMP环境示例
\`\`\`yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./www:/var/www/html
    depends_on:
      - php
    restart: always

  php:
    image: php:8.1-fpm
    volumes:
      - ./www:/var/www/html
    restart: always

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: myapp
    volumes:
      - mysql_data:/var/lib/mysql
    restart: always

volumes:
  mysql_data:
\`\`\`

### 使用Compose命令
\`\`\`bash
# 启动所有服务
docker-compose up -d

# 停止所有服务
docker-compose down

# 查看日志
docker-compose logs -f

# 重启服务
docker-compose restart

# 查看运行状态
docker-compose ps
\`\`\`

## 6. Docker网络配置

### 网络类型
\`\`\`bash
# bridge：默认网络模式
docker run -d --name web1 nginx

# host：使用主机网络
docker run -d --network host nginx

# none：无网络
docker run -d --network none nginx

# 自定义网络
docker network create mynetwork
docker run -d --network mynetwork --name web nginx
\`\`\`

### 容器互联
\`\`\`bash
# 创建网络
docker network create app-network

# 运行MySQL
docker run -d \
  --name mysql \
  --network app-network \
  -e MYSQL_ROOT_PASSWORD=root \
  mysql:8.0

# 运行应用，连接到MySQL
docker run -d \
  --name webapp \
  --network app-network \
  -p 80:80 \
  myapp:latest
# 应用内可通过mysql:3306连接数据库
\`\`\`

## 7. Docker存储卷

### 卷类型
\`\`\`bash
# 命名卷（推荐）
docker volume create mydata
docker run -d -v mydata:/data nginx

# 绑定挂载
docker run -d -v /host/path:/container/path nginx

# 临时卷
docker run -d --tmpfs /tmp nginx
\`\`\`

### 数据备份与恢复
\`\`\`bash
# 备份卷数据
docker run --rm -v mydata:/data -v $(pwd):/backup ubuntu tar czf /backup/backup.tar.gz /data

# 恢复数据
docker run --rm -v mydata:/data -v $(pwd):/backup ubuntu tar xzf /backup/backup.tar.gz -C /
\`\`\`

## 8. 生产环境最佳实践

### 资源限制
\`\`\`bash
docker run -d \
  --name myapp \
  --memory="512m" \
  --cpus="1.0" \
  --restart=unless-stopped \
  myapp:latest
\`\`\`

### 健康检查
\`\`\`dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
\`\`\`

### 日志管理
\`\`\`bash
docker run -d \
  --log-driver=json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  nginx
\`\`\`

### 安全加固
\`\`\`bash
# 以非root用户运行
USER appuser

# 只读根文件系统
docker run -d --read-only nginx

# 删除不必要的权限
docker run -d --cap-drop=ALL nginx
\`\`\`

## 9. Docker镜像优化

### 多阶段构建
\`\`\`dockerfile
# 构建阶段
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 生产阶段
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

### .dockerignore文件
\`\`\`
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.DS_Store
\`\`\`

## 10. 常见问题排查

### 容器无法启动
\`\`\`bash
# 查看容器日志
docker logs container_name

# 查看最近的日志
docker logs --tail 50 container_name

# 实时查看日志
docker logs -f container_name
\`\`\`

### 端口占用
\`\`\`bash
# 查看端口占用
sudo netstat -tlnp | grep :80

# 更换端口
docker run -d -p 8080:80 nginx
\`\`\`

### 清理Docker
\`\`\`bash
# 清理停止的容器
docker container prune

# 清理未使用的镜像
docker image prune -a

# 清理所有未使用资源
docker system prune -a --volumes
\`\`\`
          `
        },
        {
          title: "云服务器性能优化与监控",
          description: "提升云服务器性能和建立完善监控体系",
          tags: ["性能优化", "监控"],
          content: `
# 云服务器性能优化与监控

## 1. 系统性能分析

### 1.1 CPU性能分析
\`\`\`bash
# 查看CPU使用率
top
htop  # 需要安装

# 查看CPU详细信息
lscpu

# 查看进程CPU占用
ps aux --sort=-%cpu | head

# 查看CPU负载
uptime
\`\`\`

### 1.2 内存分析
\`\`\`bash
# 查看内存使用
free -h

# 详细内存信息
cat /proc/meminfo

# 查看内存占用进程
ps aux --sort=-%mem | head
\`\`\`

### 1.3 磁盘性能
\`\`\`bash
# 查看磁盘使用
df -h

# 查看目录大小
du -sh /*

# 磁盘IO性能测试
dd if=/dev/zero of=testfile bs=1M count=1024
hdparm -Tt /dev/sda

# 实时IO监控
iotop  # 需要安装
\`\`\`

### 1.4 网络性能
\`\`\`bash
# 网络连接状态
netstat -tunlp

# 查看网络流量
iftop  # 需要安装
nethogs  # 查看进程网络使用

# 网络性能测试
iperf3 -s  # 服务端
iperf3 -c <服务器IP>  # 客户端
\`\`\`

## 2. Linux系统优化

### 2.1 内核参数优化
编辑 /etc/sysctl.conf：
\`\`\`bash
# 网络优化
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.tcp_tw_reuse = 1
net.core.somaxconn = 65535
net.core.netdev_max_backlog = 8192

# 文件系统优化
fs.file-max = 2097152
fs.nr_open = 2097152

# 应用参数
sysctl -p
\`\`\`

### 2.2 文件描述符限制
编辑 /etc/security/limits.conf：
\`\`\`
* soft nofile 65535
* hard nofile 65535
* soft nproc 65535
* hard nproc 65535
\`\`\`

### 2.3 关闭不必要服务
\`\`\`bash
# 查看所有服务
systemctl list-units --type=service

# 禁用不需要的服务
systemctl disable bluetooth
systemctl disable cups
\`\`\`

## 3. Web服务器优化

### 3.1 Nginx优化
编辑 /etc/nginx/nginx.conf：
\`\`\`nginx
user www-data;
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 2048;
    use epoll;
    multi_accept on;
}

http {
    # 基础优化
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    
    # 缓冲区优化
    client_body_buffer_size 128k;
    client_max_body_size 20m;
    client_header_buffer_size 2k;
    large_client_header_buffers 4 8k;
    
    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss;
    gzip_disable "MSIE [1-6]\.";
    
    # 缓存配置
    open_file_cache max=200000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;
    
    # 日志格式优化
    access_log /var/log/nginx/access.log combined buffer=32k;
    error_log /var/log/nginx/error.log warn;
}
\`\`\`

### 3.2 Apache优化
编辑 /etc/apache2/apache2.conf：
\`\`\`apache
# 使用MPM Event
<IfModule mpm_event_module>
    StartServers 3
    MinSpareThreads 75
    MaxSpareThreads 250
    ThreadsPerChild 25
    MaxRequestWorkers 400
    MaxConnectionsPerChild 0
</IfModule>

# 开启压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# 开启缓存
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
\`\`\`

## 4. 数据库优化

### 4.1 MySQL优化
编辑 /etc/mysql/my.cnf：
\`\`\`ini
[mysqld]
# 基础配置
max_connections = 500
max_connect_errors = 10000
max_allowed_packet = 64M

# InnoDB优化
innodb_buffer_pool_size = 2G  # 建议为内存的70-80%
innodb_log_file_size = 256M
innodb_log_buffer_size = 16M
innodb_flush_log_at_trx_commit = 2
innodb_file_per_table = 1

# 查询缓存
query_cache_type = 1
query_cache_size = 64M

# 慢查询日志
slow_query_log = 1
slow_query_log_file = /var/log/mysql/slow.log
long_query_time = 2
\`\`\`

### 4.2 MySQL性能分析
\`\`\`bash
# 查看当前连接
SHOW PROCESSLIST;

# 查看慢查询
SELECT * FROM mysql.slow_log;

# 分析查询
EXPLAIN SELECT * FROM users WHERE id = 1;

# 查看索引使用
SHOW INDEX FROM users;
\`\`\`

### 4.3 Redis优化
编辑 /etc/redis/redis.conf：
\`\`\`
# 内存配置
maxmemory 2gb
maxmemory-policy allkeys-lru

# 持久化
save 900 1
save 300 10
save 60 10000

# 网络优化
tcp-backlog 511
timeout 0
tcp-keepalive 300
\`\`\`

## 5. 应用层优化

### 5.1 PHP-FPM优化
编辑 /etc/php/8.1/fpm/pool.d/www.conf：
\`\`\`ini
pm = dynamic
pm.max_children = 50
pm.start_servers = 10
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.max_requests = 500

# 慢日志
request_slowlog_timeout = 5s
slowlog = /var/log/php-fpm/slow.log
\`\`\`

### 5.2 Node.js优化
\`\`\`javascript
// 使用PM2管理
pm2 start app.js -i max  // 集群模式

// 内存限制
pm2 start app.js --max-memory-restart 1G

// 配置文件
module.exports = {
  apps: [{
    name: 'myapp',
    script: './app.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z'
  }]
}
\`\`\`

## 6. CDN与缓存优化

### 6.1 使用CDN
- 阿里云CDN
- 腾讯云CDN
- CloudFlare CDN

### 6.2 浏览器缓存
\`\`\`nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
\`\`\`

### 6.3 Redis缓存
\`\`\`php
// PHP使用Redis缓存
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

// 缓存数据
$key = 'user_' . $userId;
if ($redis->exists($key)) {
    $data = $redis->get($key);
} else {
    $data = $db->query("SELECT * FROM users WHERE id = $userId");
    $redis->setex($key, 3600, $data);
}
\`\`\`

## 7. 监控系统搭建

### 7.1 安装Prometheus
\`\`\`bash
wget https://github.com/prometheus/prometheus/releases/download/v2.40.0/prometheus-2.40.0.linux-amd64.tar.gz
tar xvf prometheus-2.40.0.linux-amd64.tar.gz
cd prometheus-2.40.0.linux-amd64

# 配置文件 prometheus.yml
scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']

# 启动
./prometheus --config.file=prometheus.yml
\`\`\`

### 7.2 安装Node Exporter
\`\`\`bash
wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz
tar xvf node_exporter-1.5.0.linux-amd64.tar.gz
cd node_exporter-1.5.0.linux-amd64
./node_exporter
\`\`\`

### 7.3 安装Grafana
\`\`\`bash
sudo apt-get install -y software-properties-common
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo apt-get update
sudo apt-get install grafana
sudo systemctl start grafana-server
sudo systemctl enable grafana-server

# 访问 http://服务器IP:3000
# 默认用户名密码：admin/admin
\`\`\`

### 7.4 配置告警
Grafana告警配置：
1. 添加通知渠道（邮件、钉钉、微信等）
2. 创建告警规则
3. 设置告警阈值：
   - CPU使用率 > 80%
   - 内存使用率 > 85%
   - 磁盘使用率 > 90%
   - 响应时间 > 2秒

## 8. 日志管理

### 8.1 ELK Stack
\`\`\`bash
# Elasticsearch
docker run -d --name elasticsearch \
  -p 9200:9200 -p 9300:9300 \
  -e "discovery.type=single-node" \
  elasticsearch:8.8.0

# Kibana
docker run -d --name kibana \
  -p 5601:5601 \
  --link elasticsearch:elasticsearch \
  kibana:8.8.0

# Logstash
docker run -d --name logstash \
  -p 5044:5044 \
  -v ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf \
  logstash:8.8.0
\`\`\`

### 8.2 日志切割
\`\`\`bash
# logrotate配置
cat > /etc/logrotate.d/nginx << EOF
/var/log/nginx/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        [ -f /var/run/nginx.pid ] && kill -USR1 \`cat /var/run/nginx.pid\`
    endscript
}
EOF
\`\`\`

## 9. 安全加固

### 9.1 防火墙配置
\`\`\`bash
# UFW
sudo ufw enable
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw deny from 攻击IP

# Firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
\`\`\`

### 9.2 Fail2ban
\`\`\`bash
sudo apt install fail2ban -y
cat > /etc/fail2ban/jail.local << EOF
[sshd]
enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600
EOF
sudo systemctl restart fail2ban
\`\`\`

## 10. 定期维护检查清单

### 每日检查
- [ ] 查看系统负载
- [ ] 检查磁盘空间
- [ ] 查看错误日志
- [ ] 监控备份状态

### 每周检查
- [ ] 更新系统补丁
- [ ] 清理临时文件
- [ ] 检查数据库慢查询
- [ ] 验证备份可用性

### 每月检查
- [ ] 性能测试
- [ ] 安全扫描
- [ ] 容量规划
- [ ] 优化数据库索引
          `
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Book className="h-20 w-20 mx-auto text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              云服务器完整教程大全
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              从零基础到精通，手把手教你玩转各大云服务器平台
            </p>
            <p className="text-lg text-muted-foreground">
              涵盖阿里云、AWS、腾讯云等主流平台的完整部署教程
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
                Telegram咨询
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
                获取技术支持
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Categories */}
      {tutorialCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 px-4 ${catIndex % 2 === 1 ? 'bg-card/50' : ''}`}>
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-primary">{category.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {category.tutorials.map((tutorial, tutIndex) => (
                <Card key={tutIndex} className="overflow-hidden hover:shadow-glow transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{tutorial.title}</h3>
                    <p className="text-muted-foreground mb-6">{tutorial.description}</p>
                    
                    <details className="group">
                      <summary className="cursor-pointer list-none">
                        <Button variant="outline" className="w-full">
                          点击展开完整教程
                        </Button>
                      </summary>
                      <div className="mt-6 prose prose-invert max-w-none">
                        <div className="bg-card/30 p-6 rounded-lg border border-border">
                          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                            {tutorial.content}
                          </pre>
                        </div>
                        <div className="mt-6 flex gap-4">
                          <Button onClick={() => window.open(telegramLink, '_blank')}>
                            需要帮助？联系我们
                          </Button>
                          <Button variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
                            一对一技术指导
                          </Button>
                        </div>
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">需要专业技术支持？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            我们提供一对一技术指导服务，手把手帮您完成云服务器部署
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => window.open(telegramLink, '_blank')}>
              立即咨询
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(telegramLink, '_blank')}>
              了解服务详情
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 云服务器教程大全. All rights reserved.</p>
          <p className="mt-2 text-sm">持续更新中，更多教程敬请期待</p>
        </div>
      </footer>
    </div>
  );
};

export default Tutorials;
