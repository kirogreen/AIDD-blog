+++
title = "my first post"
+++

### 📄 **Summary of the Paper**

**Title:** *Connecting chemical and protein sequence space to predict biocatalytic reactions*

**Objective:**  
To enable the prediction of compatible enzyme-substrate pairs for biocatalytic reactions, reducing reliance on trial-and-error experimentation.

**Approach:**

1. **Library Construction (akGLib1):**
   - Curated a diverse library of 314 α-KG-dependent NHI enzymes from over 265,000 sequences using bioinformatics tools (e.g., EFI-EST, sequence similarity networks).
   - Ensured high sequence diversity (average identity: 13.7%) and included both characterized and uncharacterized enzymes.

2. **High-Throughput Experimentation:**
   - Screened 111 diverse substrates against the enzyme library in a 96-well plate format.
   - Discovered **215 new biocatalytic reactions**, including hydroxylation, desaturation, and oxidative cleavage.
   - 38% of enzymes and 32% of substrates showed activity, including complex natural products and pharmaceuticals.

3. **Machine Learning Model Development:**
   - Combined new and literature data into **BioCatSet1** (354 reactions).
   - Built two gradient-boosted machine learning models:
     - **Substrate-to-enzyme**: Predicts which enzymes are likely to react with a given substrate.
     - **Enzyme-to-substrate**: Predicts which substrates a given enzyme is likely to transform.
   - Used chemical descriptors (MORFEUS) and sequence similarity (SSN) as inputs.

4. **CATNIP Web Tool:**
   - Developed an open-access web platform ([CATNIP](https://catnip.chem.cmu.edu/)) that allows users to input a substrate or enzyme sequence and receive ranked predictions for compatible partners.
   - Validated predictions experimentally with high success rates (e.g., 7 out of 10 predicted enzymes converted sparteine).

---

### 💡 **Key Innovations**

- **First Large-Scale Mapping** of chemical and protein sequence space for a mechanistically diverse enzyme family.
- **Integration of High-Throughput Experimentation with Machine Learning** to generate a robust, experimentally validated dataset.
- **Dual-Purpose Predictive Models** that work in both directions: from substrate to enzyme and vice versa.
- **CATNIP Platform**: A user-friendly, open-access tool that democratizes biocatalytic reaction prediction.
- **High Success Rate**: Demonstrated predictive power with real-world substrates and enzymes, including previously uncharacterized ones.

---

### 🧪 **Possible Applications**

- **Drug Discovery & Pharmaceutical Synthesis**: Accelerate the development of biocatalytic routes for complex molecules.
- **Green Chemistry**: Enable more sustainable synthesis pathways using enzymes.
- **Enzyme Engineering**: Guide protein engineering by identifying promising starting points.
- **Metabolic Engineering & Natural Product Biosynthesis**: Predict and design pathways for producing valuable compounds.
- **Educational & Industrial Use**: CATNIP can be used in academic and industrial R&D to quickly identify viable biocatalytic steps.

---

### ✅ **Conclusion**

This work represents a major step toward **predictive biocatalysis**, reducing the time, cost, and risk associated with enzyme discovery and application. By bridging chemical and protein sequence space with data-driven models, the authors provide a scalable framework that can be extended to other enzyme families and reaction types, paving the way for broader adoption of biocatalysis in synthetic chemistry.

# AI+生物催化：CATNIP与未来展望

## 一、CATNIP核心研究总结

### 研究背景
- **根本问题**：化学空间（底物）与蛋白质序列空间（酶）之间的已知连接极少（<0.3%）
- **现实困境**：研究人员只能盲目筛选或局部探索，效率低下

### 解决方案：三阶段数据驱动"导航系统"

#### 第一阶段：绘制地图 - 高通量实验
1. **构建酶库 (akGLib1)**
   - 从26万+条序列中精选314条α-KG NHI酶
   - 平均相似度仅13.7%，确保序列多样性
   - 78%的酶成功在大肠杆菌中表达

2. **大规模交叉测试**
   - 314种酶 × 111种结构多样底物
   - 96孔板高通量反应 + LC-MS快速检测

3. **实验成果**
   - 发现**215个**全新"酶-底物"配对
   - 反应类型分布：
     - 羟化：64%
     - 去饱和：18%
     - 其他：18%

#### 第二阶段：构建模型 - 机器学习
1. **数据集构建**
   - BioCatSet1 = 215个新反应 + 139个文献反应

2. **双模型架构**
   - **底物→酶模型**：输入分子，推荐催化酶
   - **酶→底物模型**：输入序列，推荐催化底物

3. **技术亮点**
   - 使用MORFEUS分子描述符量化化学空间
   - 序列相似性矩阵量化蛋白质空间
   - 梯度提升树(GBM) + YetiRank排序算法
   - **预测命中率比随机筛选高4倍以上**

#### 第三阶段：应用落地
- **CATNIP在线平台**：用户友好的网页工具
- **功能**：输入底物结构或酶序列，获得排名候选配对

#### 验证案例
| 底物 | 预测成功率 | 放大反应收率 | 重要发现 |
|------|------------|--------------|----------|
| Spartiene | 7/10 | 35% | - |
| Matridine | 7/10 | 50% | - |
| 类固醇底物 | 7/10 | 12% | **首次发现氧化烯烃断裂** |

### 研究意义
CATNIP建立了首个系统性连接化学空间与蛋白质序列空间的"导航系统"，显著降低了生物催化在有机合成中的应用风险。

---

## 二、领域专家展望总结

### 当前应用与机遇

#### 1. ML作为"导航仪"
- 在"蛋白质适应度景观"中高效定向
- 预测有害突变，加速酶定向进化

#### 2. 数据驱动的发现
- 从复杂数据中直接学习规律
- 应用领域：
  - 生成新型催化剂
  - 预测蛋白质稳定性
  - 蛋白语言模型应用

#### 3. 突破自然极限
- 生成式AI设计**自然界不存在**的全新酶功能
- 超越传统的自然反应优化

### 主要挑战

#### 数据瓶颈
- **问题**：高质量、系统化实验数据不足
- **解决方案**：
  - 推动高通量实验
  - 采用"零样本预测"模型
  - 建立FAIR数据共享标准

#### 跨学科合作
- 计算专家与实验科学家需要深度协作

### 未来展望

#### 技术发展
1. **自动化闭环**
   - ML指导的定向进化(MLDE)普及化
   - 低成本自动化实验平台

2. **大规模数据库**
   - ProteinGym等推动通用模型发展

3. **新技术融合**
   - 蛋白质语言模型
   - 生成式AI（扩散模型）
   - 量子计算

### 最终愿景
**"数据 × 模型 × 自动化实验"** 闭环 + 跨学科合作 + 新一代AI工具 = **创造能催化全新化学反应的人工酶**
