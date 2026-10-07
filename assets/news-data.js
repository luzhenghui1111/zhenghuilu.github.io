window.NEWS_DATA = [
  {
    id: "note-buaa-pressure-insole",
    date: "2026.10.07",
    categoryEn: "Paper sharing · Flexible sensors",
    categoryZh: "论文分享 · 柔性传感",
    titleEn: "Beihang University School of Materials Science and Engineering: A biomechanics-guided flexible pressure insole for high-fidelity spatiotemporal gait tracking and proactive fall prediction",
    titleZh: "北航材料科学与工程学院：A biomechanics-guided flexible pressure insole for high-fidelity spatiotemporal gait tracking and proactive fall prediction",
    summaryEn: "A paper-sharing note on a 105-sensor flexible pressure insole that uses biomechanics-guided sensor placement for gait tracking and fall-direction prediction, with some thoughts on how a small change in design logic can create a new research angle.",
    summaryZh: "分享一篇今年发表在 Chemical Engineering Journal 的柔性压力鞋垫研究。文章通过生物力学引导的传感器布局，实现步态监测和跌倒方向预测，也让我想到很多时候只需要简单转变一个思路，就可能出现新的研究点。",
    featured: true,
    sourceUrl: "https://www.sciencedirect.com/science/article/pii/S1385894726079374?via%3Dihub",
    sourceLabelEn: "Read the original paper →",
    sourceLabelZh: "阅读原文 →",
    footerEn: "Paper sharing · plantar pressure · gait · fall prediction",
    footerZh: "论文分享 · 足底压力 · 步态 · 跌倒预测",
    body: [
      {
        en: "This is a paper published this year in <em>Chemical Engineering Journal</em>, titled:",
        zh: "这是今年刚发表在 <em>Chemical Engineering Journal</em> 的文章，标题："
      },
      {
        en: "<strong>A biomechanics-guided flexible pressure insole for high-fidelity spatiotemporal gait tracking and proactive fall prediction</strong>",
        zh: "<strong>A biomechanics-guided flexible pressure insole for high-fidelity spatiotemporal gait tracking and proactive fall prediction</strong>"
      },
      {
        en: "The paper is essentially about developing a high-density flexible pressure insole for gait monitoring and fall-direction prediction. The whole insole contains 105 pressure-sensing units, allowing continuous recording of how plantar pressure changes over time across different regions of the foot.",
        zh: "这篇文章大概是说做了一双高密度柔性压力鞋垫，用于步态监测和跌倒方向预测。整个鞋垫有 105 个压力感知单元，可以连续记录足底压力在不同区域随时间的变化。"
      },
      {
        en: "High-density plantar-pressure measurement itself is not a new concept. There are already many pressure insoles and plantar-pressure platforms on the market that can provide high spatial resolution. Most people working in biomechanics have probably used these systems or are at least familiar with them.",
        zh: "高密度足底压力测量早就不是一个新的概念，市面上已经有很多压力鞋垫和足底压力板，早就可以提供很高的空间分辨率。大家平时应该接触或者至少对这方面有些了解。"
      },
      {
        en: "But during everyday movements such as walking, running, or jumping, plantar pressure is not distributed uniformly. The heel is important during landing, while the forefoot becomes important during push-off. Many pressure-insoles, however, still distribute sensors more or less uniformly. The main idea in this paper is to first consider which plantar regions actually carry the major loads during daily activities and which regions are more informative for gait recognition, and then arrange the sensors according to those biomechanical characteristics.",
        zh: "但我们知道，进行走路、跑步或者跳跃这些日常动作的时候，足底压力主要分布在足跟（落地）、前掌（蹬离）。但大多数压力鞋垫的传感器都是均匀分布，这篇文章的创新主要是<strong>先考虑日常活动中哪些区域主要承担负荷，哪些区域对步态识别来说更加重要，然后根据这些特点和区域去安排传感器</strong>。"
      },
      {
        en: "Although this paper is relatively engineering-oriented, I think it offers a useful reminder. At first glance, flexible plantar-pressure insoles seem like an area where a huge amount of engineering design work has already been published, and it may feel difficult to find something new. But sometimes a relatively simple shift in design logic is enough to create an idea that feels fresh.",
        zh: "这篇文章虽然偏工程，但能给我们一些启发。乍一看类似足底压力鞋垫工程设计这类文章，已经发表太多，似乎很难找到新的点子，但很多时候往往只需要<strong>简单转变一个新思路</strong>，就能有让人眼前一亮的想法。"
      },
      {
        en: "That said, if the goal is to publish a strong Q1 paper, simply designing a device and validating it is still far from enough. The amount of engineering work and the depth of the application also matter. This paper therefore extends the insole beyond basic sensing and explores additional applications related to abnormal-gait prediction, including fall-related scenarios and joint-loading-related tasks. That is another part of the work that I think is worth learning from.",
        zh: "但想发表一篇一区的文章，如果只是停留在设计和验证上，还远远不够，<strong>工程量也是很重要的一点</strong>。这篇文章还进行了一定的拓展应用，尝试了一些异常步态预测，比如跌倒、手上、关节负荷之类的。这点也可以给我们一定的启发。"
      },
      {
        en: "In our own research, it may also be worth asking whether an existing idea, dataset, or experimental setup can be pushed one step further to solve a more complete problem rather than stopping at a single technical component.",
        zh: "在我们自己的研究中，也可以思考，能不能根据我们现有的思路或实验数据，进一步尝试去解决一个完整的问题。"
      },
      {
        en: "My paper-sharing posts will probably continue in this style: a mixture of the paper itself and quite a lot of my own subjective thoughts, basically following whatever comes to mind while reading. If you are interested, you can always go back to the original paper for the full details.",
        zh: "文章分享主要会以这种形式进行，结合大量我的主观想法，属于是想到哪说到哪。如果有兴趣大家可以自己阅读原文。"
      }
    ]
  },
  {
    id: "note-open-datasets",
    date: "2026.10.06",
    categoryEn: "Open data · Papers",
    categoryZh: "开源数据 · 论文",
    titleEn: "Open Datasets and Papers",
    titleZh: "开源数据集和论文",
    summaryEn: "A note on openly available biomechanics datasets, including multimodal gait data, wearable motion capture, and a population-scale knee modeling study combining automated segmentation, finite element simulation, and machine learning.",
    summaryZh: "分享几个可以用于测试和研究的开放生物力学数据集，以及一篇结合自动分割、有限元和机器学习的人群尺度膝关节建模研究。",
    featured: true,
    sourceUrl: "https://mp.weixin.qq.com/s/J3EVO5sBz65nALd9LvF8Lw",
    sourceLabelEn: "Read the original WeChat article →",
    sourceLabelZh: "阅读微信公众号原文 →",
    footerEn: "Open data · biomechanics · machine learning",
    footerZh: "开源数据 · 生物力学 · 机器学习",
    body: [
      {
        en: "When I previously shared OpenSim and FEA videos on Bilibili, some people asked whether I could share data for testing or research. My usual answer is that many studies now make their datasets openly available. In many cases, you only need to cite the source or meet certain conditions specified by the original authors, which makes them very convenient to use. One example is this dataset published in <em>Scientific Data</em>:",
        zh: "之前在 B 站分享 OpenSim 和 FEA 视频的时候，有人问是否可以分享一些数据用于测试或者研究。我总是回答说目前很多研究都会开源自己的数据，如果想用只需要引用一下或者满足原作者的一些条件，非常方便，比如这份发表在 <em>Scientific Data</em> 上的数据："
      },
      {
        en: "<strong>A multimodal gait dataset with ultrasound, EMG, and motion capture from young adults at various walking speeds</strong>",
        zh: "<strong>A multimodal gait dataset with ultrasound, EMG, and motion capture from young adults at various walking speeds</strong>"
      },
      {
        en: "According to the authors, the dataset includes gait data from 26 healthy adults, with 13 men and 13 women, collected under multiple conditions. These included three self-selected speeds (self-selected fast, self-selected slow, and self-selected slow) and eight auditory-cued cadences ranging from 60 to 130 steps per minute in increments of 10. The dataset contains three-dimensional motion-capture data, meaning the spatial positions of markers, along with force-plate data, EMG, and ultrasound. You can download it and explore the details yourself; I am only using it here as an example.",
        zh: "据作者描述，他们采集了 26 名健康成年人（13 名男性，13 名女性）在多种条件下的步态数据，三个自选速度：（自选快、自选慢、自选慢）和八种听觉提示的步速（60–130 次/分钟，以 10 次/分钟为增量）。数据包括三维运动捕捉（也就是 markers 的空间位置数据）、力台数据、肌电数据以及超声。具体可以自己下载看一下，我只是举个例子。"
      },
      {
        link: "https://www.nature.com/articles/s41597-026-08156-5",
        linkEn: "Open the dataset paper →",
        linkZh: "查看数据集论文 →"
      },
      {
        en: "Another example, also published in <em>Scientific Data</em>, is:",
        zh: "比如这一篇，也是发表在 <em>Scientific Data</em> 上的数据集："
      },
      {
        en: "<strong>A Wearable Motion Capture Dataset for Gait Analysis Using IMUs and Shank-Mounted Egocentric Cameras</strong>",
        zh: "<strong>A Wearable Motion Capture Dataset for Gait Analysis Using IMUs and Shank-Mounted Egocentric Cameras</strong>"
      },
      {
        en: "This dataset mainly focuses on IMU-related measurements, so I will not go into the details here.",
        zh: "该数据集主要是 IMU 相关的，具体就不说了。"
      },
      {
        en: "The main paper I wanted to share today, however, is this article published in <em>Computer Methods in Biomechanics and Biomedical Engineering</em>:",
        zh: "另外，今天主要是想分享一下这篇发表在 <em>Computer Methods in Biomechanics and Biomedical Engineering</em> 的文章："
      },
      {
        en: "<strong>Population-scale modeling of the natural knee: automated segmentation, finite element simulation, and machine learning prediction of time-series joint mechanics</strong>",
        zh: "<strong>Population-scale modeling of the natural knee: automated segmentation, finite element simulation, and machine learning prediction of time-series joint mechanics</strong>"
      },
      {
        en: "<strong>Summary:</strong> This study combined automated medical-image segmentation, hexahedral meshing, dynamic finite element simulation of the stance phase of gait, statistical shape modeling, and supervised learning to analyze 483 natural knees from the Osteoarthritis Initiative (OAI). The researchers trained ridge-regression and recurrent neural-network models to predict 38 time-series outputs related to kinematics, loading, contact, and soft-tissue mechanics from anatomical features. The best-performing model was a bidirectional long short-term memory network (LSTM), with a mean 1σ-normalized root mean square error (RMSE) of 0.45 and inference requiring only a few seconds. This population-scale framework enables rapid and individualized estimation of knee-joint mechanics using imaging data alone and provides support for future clinical translation.",
        zh: "<strong>摘要：</strong>本研究结合了自动医学图像分割、六面体网格划分和动态有限元站立相步态模拟，以及统计形状建模和监督学习，对来自骨关节炎倡议（OAI）的 483 个自然膝关节进行了分析。研究人员训练了岭回归和循环神经网络，以根据解剖特征预测 38 个时间序列的运动学、负荷、接触和软组织输出。最佳模型为双向长短期记忆网络（LSTM），其平均 1σ 归一化均方根误差（RMSE）为 0.45，推理时间仅需几秒。这种基于人群规模的框架能够仅通过影像数据快速、个体化地估计膝关节力学参数，为未来的临床转化提供了支持。"
      },
      {
        en: "This study is also an example of how openly available datasets can be used in research, although some datasets still require an application before access is granted. That is something worth exploring on your own. With the rapid development of AI in recent years, machine learning has become accessible to almost everyone. For researchers like us who are not trained primarily in computer science, it is still important to think about how to turn this broader trend into an advantage within our own research fields.",
        zh: "这项研究中，他们就用到了所谓的开源数据集，当然有些数据集使用是需要申请的，这个可以自己摸索。在最近几年 AI 发展这么迅猛的情况下，人人都有做机器学习的能力，像我们作为非计算机专业的科研相关人员，还是需要尝试把这种潮流转换为自己的优势。"
      }
    ]
  },
  {
    id: "note-website",
    date: "2026.10.04",
    categoryEn: "Website",
    categoryZh: "网站",
    titleEn: "Building a personal academic website",
    titleZh: "折腾个人学术主页的一点记录",
    summaryEn: "A small note on turning a conventional academic profile into a more personal space for research, learning and everyday ideas.",
    summaryZh: "把传统学术主页慢慢改成更像自己的空间，既放科研，也记录学习和一些日常想法。",
    footerEn: "Test entry · to be replaced later",
    footerZh: "测试内容 · 后续可替换",
    body: [
      {
        en: "I wanted the website to feel less like a static CV and more like a personal research space. The current version combines publications and projects with visual experiments, research notes, and small pieces of everyday life.",
        zh: "我希望这个主页不只是一个静态 CV，而更像一个属于自己的科研空间。现在的版本把论文、项目和一些视觉尝试、科研随手记以及日常内容放在了一起。"
      }
    ]
  },
  {
    id: "note-biomechanics",
    date: "2026.10.03",
    categoryEn: "Research note",
    categoryZh: "科研随记",
    titleEn: "From models to personalized biomechanics",
    titleZh: "从模型到个体化生物力学",
    summaryEn: "Some thoughts on connecting experiments, OpenSim, finite element analysis and machine learning in one research workflow.",
    summaryZh: "随手整理实验、OpenSim、有限元和机器学习怎样串成一条完整的研究路线。",
    footerEn: "Test entry · research",
    footerZh: "测试内容 · 科研",
    body: [
      {
        en: "A recurring question in my work is how experiments, musculoskeletal models, finite element analysis, and machine learning can be connected rather than used as isolated tools. I am gradually organizing these pieces into a more coherent workflow.",
        zh: "我最近经常在想，实验、肌肉骨骼模型、有限元和机器学习怎样才能真正串起来，而不是作为彼此独立的工具使用。我也在逐渐把这些方法整理成一套更完整的研究流程。"
      }
    ]
  },
  {
    id: "note-vancouver",
    date: "2026.10.02",
    categoryEn: "Life update",
    categoryZh: "近况",
    titleEn: "A new research chapter in Vancouver",
    titleZh: "在温哥华开始新的科研阶段",
    summaryEn: "A short personal update on starting postdoctoral research at UBC and adapting to a new research environment.",
    summaryZh: "记录在 UBC 开始博士后研究，以及适应新环境、新课题和新节奏的一些感受。",
    footerEn: "Test entry · life",
    footerZh: "测试内容 · 日常",
    body: [
      {
        en: "Starting postdoctoral research at UBC has meant adapting to a new city, a new lab, and a new set of research questions. It is also a useful chance to rethink where I want my work on digital biomechanics to go next.",
        zh: "在 UBC 开始博士后意味着适应新的城市、新的实验室和新的研究问题，也给了我一个机会重新思考数字生物力学这条研究路线下一步应该往哪里走。"
      }
    ]
  },
  {
    id: "note-useful-model",
    date: "2026.09.29",
    categoryEn: "Reading",
    categoryZh: "阅读",
    titleEn: "What makes a useful biomechanical model?",
    titleZh: "什么样的生物力学模型才算“有用”？",
    summaryEn: "Accuracy is important, but a useful model also needs a clear purpose, interpretable outputs, reasonable data requirements, and a validation strategy that matches the question being asked.",
    summaryZh: "准确性当然重要，但一个真正有用的模型还需要明确的目的、可解释的输出、合理的数据需求，以及与研究问题匹配的验证方式。",
    footerEn: "Placeholder note",
    footerZh: "占位内容",
    body: [
      {
        en: "Accuracy is important, but a useful model also needs a clear purpose, interpretable outputs, reasonable data requirements, and a validation strategy that matches the question being asked.",
        zh: "准确性当然重要，但一个真正有用的模型还需要明确的目的、可解释的输出、合理的数据需求，以及与研究问题匹配的验证方式。"
      }
    ]
  },
  {
    id: "note-automation",
    date: "2026.09.20",
    categoryEn: "Tools",
    categoryZh: "工具",
    titleEn: "Making OpenSim and FEA workflows less repetitive",
    titleZh: "让 OpenSim 和 FEA 流程少一点重复劳动",
    summaryEn: "Much of computational biomechanics is repetitive file handling, checking, and preprocessing. Small automation tools can make the workflow more reproducible while leaving more time for the actual scientific questions.",
    summaryZh: "计算生物力学里有很多重复的文件处理、检查和预处理工作。把这些步骤适当自动化，可以提高可重复性，也能把更多时间留给真正的科研问题。",
    footerEn: "Placeholder note",
    footerZh: "占位内容",
    body: [
      {
        en: "Much of computational biomechanics is repetitive file handling, checking, and preprocessing. Small automation tools can make the workflow more reproducible while leaving more time for the actual scientific questions.",
        zh: "计算生物力学里有很多重复的文件处理、检查和预处理工作。把这些步骤适当自动化，可以提高可重复性，也能把更多时间留给真正的科研问题。"
      }
    ]
  },
  {
    id: "note-small-things",
    date: "2026.09.10",
    categoryEn: "Everyday",
    categoryZh: "日常",
    titleEn: "Small things worth documenting",
    titleZh: "一些值得顺手记录的小事",
    summaryEn: "Not every update needs to become a paper or a formal project. This section is also for useful links, visual ideas, conference photos, software notes, and small discoveries that may be worth revisiting later.",
    summaryZh: "不是所有内容都需要变成论文或正式项目。这里也可以放有用的链接、视觉灵感、会议照片、软件记录，以及以后可能还会翻出来看的小发现。",
    footerEn: "Placeholder note",
    footerZh: "占位内容",
    body: [
      {
        en: "Not every update needs to become a paper or a formal project. This section is also for useful links, visual ideas, conference photos, software notes, and small discoveries that may be worth revisiting later.",
        zh: "不是所有内容都需要变成论文或正式项目。这里也可以放有用的链接、视觉灵感、会议照片、软件记录，以及以后可能还会翻出来看的小发现。"
      }
    ]
  }
].sort((a,b) => b.date.localeCompare(a.date));
