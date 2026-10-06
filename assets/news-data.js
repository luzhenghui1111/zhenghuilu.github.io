window.NEWS_DATA = [
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
