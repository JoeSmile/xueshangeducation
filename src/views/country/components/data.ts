import { ReasonItemType } from "./Reasons";

export type ReasonsType = Record<string, {
    title: string,
    reasons: ReasonItemType[]
}>;

export const ReasonsData: ReasonsType = {
    'UK': {
        title: '留学英国的优势',
        reasons: [{
            reason: '学风严谨 含金量高',
            description: '英国有26所大学位列世界大学两百强，科研水平非同凡响，学历受全世界认可。选择英国留学可以获得高含金量的文凭',
            btnName: '',
          }, {
          
            reason: '学制短 留学性价比高',
            description: '英国本科学制大多为三年制，仅苏格兰地区为四年制，英国授课型硕士学制1年，博士三至五年',
            btnName: '',
          }, {
          
            reason: '广泛学科 院校丰富',
            description: '英国共有160余所大学，提供超过8万种课程，并且多学科位居世界排名前列，可以满足不同学生的深造需求',
            btnName: '',
          }, {
            reason: '政策好 毕业可申工签',
            description: '毕业可申请毕业生签证，英国拥有众多国际知名企业和机构，可在英国就业市场获得更多的机会和选择，增加未来就业的竞争力',
            btnName: '',
          }]
    },
    'USA':  {
        title: '留学美国的优势',
        reasons: [{
            reason: '名校众多，教育质量全球第一',
            description: '众所周知，在每年的世界大学排名中，美国上榜TOP100的院校占据半壁江山，可以说美国的教育水平受到了世界范围内的认可',
            btnName: '',
          }, {
          
            reason: '奖助学金种类多',
            description: '美国对人才的吸引和投资，近年来也是愈发重视，在整体重视的情况下，美国大学也非常重视对人才的吸引和投资，只要各方面都很优秀，申请减免学费、全额或部分奖学金的机会也非常大',
            btnName: '',
          }, {
          
            reason: '美国教育种类多',
            description: '公立院校、私立院校、学士、硕士、博士、职业教育等几乎是每个国家都存在的教育类别，而美国还有两年制大学、副学士学位，选择区美国留学的学生可以根据自身的情况选择适合自己的学校进修',
            btnName: '',
          }, {
            reason: '灵活有效的学分累计方式',
            description: '美国院校实行学分制，学生只要完成必修课程和规定学分就可以毕业并获得所对应的学位或证书，所以结合自己的实际情况用尽量短的时间完成学业，结束学习阶段，进入下一阶段',
            btnName: '',
          }]
    },
    'HonKong':  {
        title: '申请港澳的优势',
        reasons: [{
            reason: '性价比超高',
            description: '一般来说，澳门留学一年花费在7-13w人民币左右，香港在18-24w左右，相比较于英国美国，留学费用很低',
            btnName: '',
          }, {
          
            reason: '港澳大学质量稳步提升',
            description: '从最近几年的qs排名来看，香港有4所大学进入了全球前50！澳门大学排名也飞快上升',
            btnName: '',
          }, {
          
            reason: '语言门槛相对友好',
            description: '随着内地考研竞争的激烈，港澳留学的政策优势以及丰富的奖学金很是吸引人。对于外语的要求也不是特别硬性，像澳门可以申请中文授课',
            btnName: '',
          }, {
            reason: '入学奖学金多',
            description: '香港澳门的大学为本科研究生博士提供的奖学金还是非常多的，比如入学奖学金，各种机构的奖学金等。入学奖学金，不同学院和专业设置的金额不同，从几千澳币到学费全免都有，一般是按照学生的入学成绩，英语成绩以及个人经历等背景条件来进行评估的',
            btnName: '',
          }]
    },
    'Australia':  {
        title: '留学澳洲的优势',
        reasons: [{
            reason: '院校优势',
            description: '澳大利亚拥有世界级的教育和培训体系，排名仅次于美英，拥有闻名全球的G8院校，其中前7所更是常驻全球大学排行榜TOP100，如墨大、悉大、澳国立、UNSW等全球知名，可比肩我国C9名牌院校',
            btnName: '',
          }, {
          
            reason: '学制优势',
            description: '此外澳洲本科学制3-4年、硕士学制1-2年，相比我国高校都要短，在就业年龄和性价比上占据了一定的优势。学制短不意味着学习压力小，澳洲高校的课程设置十分紧凑，不脚踏实地分分钟被淘汰，因此澳洲高校毕业文凭含金量在全球得到认可',
            btnName: '',
          }, {
          
            reason: '课程优势',
            description: '澳洲高校课堂上充满了师生间、学生间的各种辩论和提问，还要面临各种小组作业、essay、presentation等，上课时间少，课余时间才是真正的学习时间，想取得好成绩，3分靠上课，还有97分靠自学。上课采用纯英文授课，无论是书目阅读任务、小组合作项目、论文撰写等都不容易，课程含金量很高',
            btnName: '',
          },  {
            reason: '移民优势',
            description: '澳大利亚是世界上最大的移民国家之一，留学生完成学业后有着回国和移民的双向选择，澳洲留学生大多适用独立技术移民。移民申请成功后就能获得澳洲的永久居留权，可享有医疗保险、失业救济、生育津贴、养老金等福利',
            btnName: '',
          }]
    },
    'Canada':  {
        title: '留学加拿大的优势',
        reasons: [{
            reason: '一流的教育体系',
            description: '加拿大政府及其重视教育，每年在教育经费方面的支出稳居全球前列',
            btnName: '',
          }, {
          
            reason: '留学费用低廉',
            description: '加拿大大学多为公立学校，每年获得政府支持',
            btnName: '',
          }, {
          
            reason: '安全系数高',
            description: '加拿大社会治安良好，曾多次被评为全球最安全的国家之一',
            btnName: '',
          }, {
            reason: '移民政策好',
            description: '近几年，加拿大的移民政策将不断放宽。国际留学生毕业后全职工作满一年，就可符合条件申请移民',
            btnName: '',
          }]
    },
    'Singapore':  {
        title: '留学新加坡的优势',
        reasons: [{
            reason: '社会安定，环境优越',
            description: '新加坡是全球闻名的“花园城市国家”，其地理位置优越，气候适宜，四季常夏，绿树成荫，宛如一座特大花园',
            btnName: '',
          }, {
          
            reason: '教育水平高，学术氛围浓厚',
            description: '新加坡一贯实行精英教育，因材施教，教育制度关注所有阶段的学生',
            btnName: '',
          }, {
          
            reason: '留学费用合理，性价比高',
            description: '以本科为例，新加坡公立大学本科平均每年费用在2-3万新币左右(约人民币11万左右)，私立大学平均每年费用在2-4万新币左右(约人民币12万左右)',
            btnName: '',
          }, {
            reason: '就业广泛，移民政策宽松',
            description: '新加坡的学校为学生搭建招聘平台，安排带薪的实习课程，大大提升了学生的就业率。在新加坡就读大学，毕业即可就业，就业率达90%以上，工作后可申请绿卡及移民',
            btnName: '',
          }]
    },
    'NewZealand':  {
        title: '留学新西兰的优势',
        reasons: [{
            reason: '排名高且含金量高',
            description: '英语是新西兰的官方和通用语言，课内课外，学生都是在良好的英语环境中学习',
            btnName: '',
          }, {
          
            reason: '留学成本低',
            description: '在新西兰留学的费用相比较其他像英国、美国、加拿大、澳大利亚来说较低，具有极高的留学性价比',
            btnName: '',
          }, {
          
            reason: '世界领先的大学排名',
            description: '在最新的2021QS世界大学排名中，新西兰八所国立大学均排名于世界500强之列',
            btnName: '',
          }, {
            reason: '家属可陪读',
            description: '配偶可到新西兰陪读并获得无限制的工作签证，未成年子女上学享受免费教育',
            btnName: '',
          }]
    },
  }

export type ApplyForDataItem = {
    phase: string,
    academic: string[],
    language: string[],
    bottomWord: string,
  }

export type ApplyForItem = {
  title: string,
  applyItems: ApplyForDataItem[]
}

export type ApplyForDataType = Record<string, ApplyForItem>

export const ApplyForData: ApplyForDataType ={
  'UK': {
    title: '英国留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '英国低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  }, 
  'USA': {
    title: '美国留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '美国低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  }, 'HonKong': {
    title: '港澳留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '港澳低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  }, 'Australia': {
    title: '澳大利亚留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '澳大利亚低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  }, 'Canada': {
    title: '加拿大留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '加拿大低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  }, 'Singapore': {
    title: '新加坡留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '新加坡低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  }, 'NewZealand': {
    title: '新西兰留学个阶段申请条件',
    applyItems: [{
      phase: '研究生',
      academic: [
        '1、申请时大四在读，到美国入学注册有学士学位；',
        '2、大学平均成绩75-85分；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。部分学校可以提供无语言或低语言双录取；',
        '2、商科及管理类专业需要GMAT成绩，其他专业需要GRE成绩(法律专业除外)',
      ],
      bottomWord: '评估我的录取率',
    }, {
      phase: '本科生',
      academic: [
        '1、高中在读学生或持有高中毕业证书的学生；',
        '2、高中平均成绩达GPA达到3.6；',
      ],
      language: [
        '1、TOEFL托福80或雅思6.5，部分院校要求托福100分或雅思7.0分以上。',
        '2、SAT达到1420以上，院校不同要求不同；',
      ],
      bottomWord: '新西兰低龄申请条件',
    }, {
      phase: '低龄',
      academic: [
        '高中：接受初三到高二学生的申请，年龄在13岁以上，18岁以下；',
        '初中：须是国内初三至高二的学生',
      ],
      language: [
        '高中：托福需要80+，雅思需要6.5+',
        '初中：接受SLEP、TOEFL、IELTS或SSAT成绩',
      ],
      bottomWord: '查看申请院校',
    }]
  },
}

//  process 
export type ProcessItem = {
  title: string,
  description: string[],
  icon?: string
}

export type ProcessItems = Record<string, ProcessItem[]>


export type TimeItem = {
  title: string,
  description: string,
  bottomWord?: string
}

export type TimeLines = Record<string, TimeItem[]>


export const TimeLines: TimeLines = {
  'UK':[{
    title: '5—7月',
    description: '学习上努力考好成绩  同时了解英国大学的基本情况、专业开设情况等等，都需要一定时间做调研，越早开始准备越能让申请更有把握。尽早确定申请的院校和专业',
  }, {
    title: '7—9月',
    description: '大家要利用有效时间，尽可能提高自己的申请竞争力。参加实习/科研丰富背景经历, 艺术类专业提前准备作品集',
  }, {
    title: '9—10月',
    description: '英国大学的申请材料一般包括成绩单、推荐信、个人陈述（PS）、简历和语言成绩',
  }, {
    title: '10—12月',
    description: '集齐所有申请材料后，同学们就可以开始网申递交申请',
  }, {
    title: '次年1-3月',
    description: '这个阶段，同学们需要及时关注大学邮件信息。 如有面试邀请，及时做好面试准备',
  }, {
    title: '次年4-6月',
    description: '收到offer后，大家需要及时查看好接受offer的Deadline、押金要求等等。还有需要着手的事情包括申请奖学金和预定宿舍',
  }, {
    title: '次年7-9月',
    description: '拿到毕业证和最终成绩、满足con的条件，就能拿到大学的unconditional offer了，进而大家可以向学校换取CAS（录取确认函）、办理签证',
  }], 'USA':[{
    title: '1-5月',
    description: '了解自身的专业,对博士申请专业产生一个明确的定位，立下一个有望于实现的心仪目标',
  }, {
    title: '6-8月',
    description: '多多了解未来的专业和院校信息，结合申请博士的时间规划确定你即将要报考的院校',
  }, {
    title: '10月前',
    description: '不同的院校会设定不同门类的标化考试，务必要提前去院校官网了解相关的考试事宜。',
  }, {
    title: '9-11月',
    description: '美国博士申请需要准备本科和研究生期间的成绩单，各类文书材料，套磁和语言成绩证明',
  }, {
    title: '次年1-3月',
    description: '前期准备工作完成后，需要安排好时间与申请院校联系，准备面试，后期的套磁等一系列事宜。',
  }, {
    title: '次年4-7月',
    description: '顺利拿到Offer，着手准备签证和各项入学事宜。',
  }], 'HonKong':[{
    title: '1~2月',
    description: '确定申请方向',
  }, {
    title: '2~3月',
    description: '首先是时间规划，明确各个时间节点做什么事情。其次是寻找留学中介或者机构',
  }, {
    title: '2~6月',
    description: '决定你录取成功与否的因素，基本上是几项硬条件:本科学校排名、个人成绩、英语语言成绩。对于大多数同学来说，能够提升的主要就两点:个人成绩和语言成绩',
  }, {
    title: '6~8月',
    description: '材料一般在网申前一两个月准备。各个学校的要求不太一样，需要根据学校官网里所列名的',
  }, {
    title: '9~12月',
    description: '硕士的网申直接在学校官网的招生系统申请即可。首先需要用自己的邮箱注册账号，然后填写申请信息和上传相关材料。填写完毕后，最后需缴纳一定的申请费用即可申请完成。申请费一般在几百港币，具体费用各个学校有区别',
  }, {
    title: '次年 1~3月',
    description: '不同院校的面试要求是不一样的。有的专业没有面试，直接根据网申材料录取，而有的专业是要面试后再确定 offer人选的',
  }, {
    title: '次年 3~4月',
    description: '次年的 3~4月录取结果陆陆续续出来了。选择和确定 offer后，就可以准备纸质文件寄送。至学校，缴纳留位费了',
  }, {
    title: '次年5~8月',
    description: '办理签证，准备行李，提前租房(港校硕士一般是需要自行在校外租房的)， 在开学时间前去学校报道',
  }], 'Australia':[{
    title: '6月-9月',
    description: '开始准备申请材料，部分大学及专业要求提供个人陈述、简历等',
  }, {
    title: '9月-11月',
    description: '递交网申，完善申请材料，开成绩单及在读证明，雅思最好也在这个时间点完成',
  }, {
    title: '12月-1月',
    description: '学校一般会在4-12周出结果，没有毕业的同学或者雅思还没有考到直录的同学发的都是有条件录取，所以同学们要看清楚学校发无条件录取offer的要求，在截止时间内提交',
  }, {
    title: '第二年2月-第二年3月',
    description: '这个时间基本上大学陆陆续续都发了申请想要去的学校，同时如果雅思没有达到要求，可以继续考',
  }, {
    title: '第二年3月-第二年4月',
    description: '如果同学们还没有达到雅思直录要求，可以考虑申请语言班',
  }, {
    title: '第二年5月-第二年6月',
    description: '申请签证',
  }, {
    title: '第二年6月-第二年7月',
    description: '补充毕业文件、学位证、毕业证、完整成绩单',
  }, {
    title: '第二年7月',
    description: '准备出发去澳洲，开始留学之旅',
  }], 'Canada':[{
    title: '1-5月',
    description: '了解自身的专业,对博士申请专业产生一个明确的定位，立下一个有望于实现的心仪目标',
  }, {
    title: '6-8月',
    description: '多多了解未来的专业和院校信息，结合申请博士的时间规划确定你即将要报考的院校',
  }, {
    title: '10月前',
    description: '不同的院校会设定不同门类的标化考试，务必要提前去院校官网了解相关的考试事宜。',
  }, {
    title: '9-11月',
    description: '美国博士申请需要准备本科和研究生期间的成绩单，各类文书材料，套磁和语言成绩证明',
  }, {
    title: '次年1-3月',
    description: '前期准备工作完成后，需要安排好时间与申请院校联系，准备面试，后期的套磁等一系列事宜。',
  }, {
    title: '次年4-7月',
    description: '顺利拿到Offer，着手准备签证和各项入学事宜。',
  }], 'Singapore':[{
    title: '3月-6月',
    description: '规划选校、提升背景、考出标化考试成绩，最大程度提升自己的竞争力',
  }, {
    title: '6-8月',
    description: '撰写文书、完善申请材料、查缺补漏，注意相应申请开放时间',
  }, {
    title: '8月-次年1月',
    description: '提交申请、跟进申请进度，准备相应笔试、面试',
  }, {
    title: '次年2月-次年4月',
    description: '申请陆续出结果，拿到录取',
  }, {
    title: '次年4月-次年6月',
    description: '选择 offer、交押金、办理签证',
  }, {
    title: '次年7月-次年8月',
    description: '体检、注册、入学，准备出发去新加坡，开始新加坡留学之旅',
  }], 'NewZealand':[{
    title: '8-10月',
    description: '备齐申请材料，递交大学申请，并报名语言考试',
  }, {
    title: '10月-12月',
    description: '专心备考语言考试，并获得大学的有条件录取',
  }, {
    title: '次年1月-3月',
    description: '准备签证材料，如果这次雅思没过，再考第二次',
  }, {
    title: '次年4月',
    description: '获得夫学无条件录取，并交学费获得coe，递交签证',
  }, {
    title: '次年5月-6月',
    description: '等待新西兰留学签证，并做好留学新西兰的全方位准备',
  }, {
    title: '次年7月',
    description: '获得签证，赴美丽的新西兰',
  }]
}


// school list

export type School = {
  logoUrl: string,
  name: string,
  englishName: string,
  location: string,
  basicInfo: string
}

export type SchoolsType = Record<string, School[]>;

export const Schools:SchoolsType = {
'UK': [{
  logoUrl: '/contry_school/UK/1.png',
  name: '剑桥大学',
  englishName: 'University of Cambridge',
  location: '英格兰剑桥郡剑桥市',
  basicInfo: '世界大学排名 排名：3',
}, {
  logoUrl: '/contry_school/UK/2.png',
  name: '牛津大学',
  englishName: 'University of Oxford',
  location: '英格兰牛津郡牛津市',
  basicInfo: '世界大学排名 排名：1',
}, {
  logoUrl: '/contry_school/UK/3.png',
  name: '帝国理工学院',
  englishName: 'Imperial College London',
  location: '英格兰伦敦',
  basicInfo: '世界大学排名 排名：10',
}, {
  logoUrl: '/contry_school/UK/4.png',
  name: '伦敦大学学院',
  englishName: 'University College London',
  location: '英格兰伦敦',
  basicInfo: '世界大学排名 排名：22',
}, {
  logoUrl: '/contry_school/UK/5.png',
  name: '爱丁堡大学',
  englishName: 'The University of Edinburgh',
  location: '苏格兰爱丁堡',
  basicInfo: '世界大学排名 排名：29',
}, {
  logoUrl: '/contry_school/UK/6.png',
  name: '伦敦国王学院',
  englishName: `King's College London`,
  location: '英格兰伦敦西敏市',
  basicInfo: '世界大学排名 排名：35',
}, {
  logoUrl: '/contry_school/UK/7.png',
  name: '伦敦政治经济学院',
  englishName: 'LSE',
  location: '英格兰伦敦',
  basicInfo: '世界大学排名 排名：37',
}, {
  logoUrl: '/contry_school/UK/8.png',
  name: '曼彻斯特大学',
  englishName: 'University of Manchester',
  location: '英格兰曼彻斯特',
  basicInfo: '世界大学排名 排名：54',
}, {
  logoUrl: '/contry_school/UK/9.png',
  name: '布里斯托大学',
  englishName: 'University of Bristol',
  location: '英格兰布里斯托',
  basicInfo: '世界大学排名 排名：76',
}],

'USA': [{
  logoUrl: '/contry_school/USA/1.png',
  name: '普林斯顿大学',
  englishName: 'Princeton University',
  location: '新泽西州',
  basicInfo: '2022 U.S.News 排名：1',
}, {
  logoUrl: '/contry_school/USA/2.png',
  name: '哥伦比亚大学',
  englishName: 'Columbia University in the City of New York',
  location: '纽约州',
  basicInfo: '2022 U.S.News 排名：2',
}, {
  logoUrl: '/contry_school/USA/3.png',
  name: ' 哈佛大学',
  englishName: 'Harvard University',
  location: '马萨诸塞州',
  basicInfo: '2022 U.S.News 排名：2',
}, {
  logoUrl: '/contry_school/USA/4.png',
  name: '麻省理工学院',
  englishName: 'Massachusetts Institute of Technology',
  location: '马萨诸塞州',
  basicInfo: '2022 U.S.News 排名：2',
}, {
  logoUrl: '/contry_school/USA/5.png',
  name: '耶鲁大学',
  englishName: 'Yale University',
  location: '康涅狄格州',
  basicInfo: '2022 U.S.News 排名：5',
}, {
  logoUrl: '/contry_school/USA/6.png',
  name: '斯坦福大学',
  englishName: `Stanford University`,
  location: '加利福尼亚州',
  basicInfo: '2022 U.S.News 排名：6',
}, {
  logoUrl: '/contry_school/USA/7.png',
  name: '宾夕法尼亚大学',
  englishName: 'University of Pennsylvania',
  location: '宾夕法尼亚州',
  basicInfo: '2022 U.S.News 排名：8', 
}, {
  logoUrl: '/contry_school/USA/8.png',
  name: '杜克大学',
  englishName: 'Duke University',
  location: '北卡罗莱纳州',
  basicInfo: '2022 U.S.News 排名：9',
}, {
  logoUrl: '/contry_school/USA/9.png',
  name: '加州理工学院',
  englishName: 'California Institute of Technology',
  location: '加利福尼亚州',
  basicInfo: '2022 U.S.News 排名：9',
}],

'Canada': [{
  logoUrl: '/contry_school/canada/1.png',
  name: '麦吉尔大学',
  englishName: 'McGill University',
  location: 'Montréal QC',
  basicInfo: '2022麦考林排名:医博类-1',
}, {
  logoUrl: '/contry_school/canada/2.png',
  name: '多伦多大学',
  englishName: 'University of Toronto',
  location: 'Toronto ON',
  basicInfo: '2022麦考林排名:商科-2',
}, {
  logoUrl: '/contry_school/canada/3.png',
  name: '英属哥伦比亚大学',
  englishName: 'The University of British Columbia',
  location: 'Vancouver BC',
  basicInfo: '2022麦考林排名:商科-1',
}, {
  logoUrl: '/contry_school/canada/4.png',
  name: '麦克马斯特大学',
  englishName: 'Hamilton ON',
  location: '马萨诸塞州',
  basicInfo: '2022麦考林排名:工程-6',
}, {
  logoUrl: '/contry_school/canada/5.png',
  name: '女王大学',
  englishName: `Queen's University`,
  location: 'Kingston ON',
  basicInfo: '2022麦考林排名:商科-4',
}, {
  logoUrl: '/contry_school/canada/6.png',
  name: '阿尔伯塔大学',
  englishName: `University of Alberta`,
  location: 'Edmonton AB',
  basicInfo: '2022麦考林排名:计算机-5',
}, {
  logoUrl: '/contry_school/canada/7.png',
  name: '渥太华大学',
  englishName: 'University of Ottawa',
  location: 'Ottawa ON',
  basicInfo: '2022麦考林排名:计算机-8', 
}, {
  logoUrl: '/contry_school/canada/8.png',
  name: '戴尔豪斯大学',
  englishName: 'Dalhousie University',
  location: 'Halifax NS',
  basicInfo: '2022麦考林排名:医博类-8',
}],

'Australia': [{
  logoUrl: '/contry_school/Australia/1.png',
  name: '澳大利亚国立大学',
  englishName: 'The Australian National University',
  location: 'Canberra',
  basicInfo: '由澳大利亚政府创建，是当时澳大利亚唯一一所专门从事研究的大学。澳大利亚国立大学对于教育深入研究保证学生的教学质量，教学不仅限于课堂学习还提供研究和实习等机会帮助学生获得社会经验。澳洲国立大学拥有世界一流的设施，包括澳大利亚最 先进的计算机、现代化的实验室和演讲礼堂，拥有两百多万册藏书的图书馆。澳洲国立大学与政府、商业组织和研究机构都建立了密切联系这也为今后毕业生实习及就业有很好地帮助',
}, {
  logoUrl: '/contry_school/Australia/2.png',
  name: '墨尔本大学',
  englishName: 'The University of Melbourn',
  location: 'Melbourne',
  basicInfo: '历史悠久有着150多年的教学经验，突出专业有: 建筑、文学、商学、教育、工程、土地和食品资源、法律、医学、音乐、科学和兽医，都在国际上有着很高的声誉。图书馆是澳洲最古老和最大的图书馆之一，拥有藏书超过300万册',
}, {
  logoUrl: '/contry_school/Australia/3.png',
  name: '悉尼大学',
  englishName: 'The University of Sydney',
  location: 'Sydney',
  basicInfo: '广泛的机会:悉尼大学提供广泛的个人发展的机会，广泛的学科，和跨学科的研究，独特的见解和突破也是悉尼大学极力提倡的。教师及研究:悉尼大学的研究人员追求尖端的突破，打破学科间的障碍来找出改善人类生活的方法。师资 雄厚，科研卓越，学生也表现出色',
}, {
  logoUrl: '/contry_school/Australia/4.png',
  name: '新南威尔士大学',
  englishName: 'The University of New South Wales',
  location: 'Sydney',
  basicInfo: '新南威尔士大学设有广泛的本科和研究生课程以及研究项目。新南威尔士大学已经成为一所重要的高等学府，凭借其丰富的教学经验在大学中具有权 威性。新南威尔士大学为其优秀的教学而自豪，在澳大利亚经常被评为顶级的大学。新南威尔士大学与商业，工业，政府和社会都有紧密的联系',
}, {
  logoUrl: '/contry_school/Australia/5.png',
  name: '昆士兰大学',
  englishName: `The University of Queensland`,
  location: 'Queensland',
  basicInfo: '昆士兰大学是澳大利亚首屈一指的高等学府和科研机构，是昆士兰最古老的大学。昆士兰大学拥有昆士兰州最大的图书馆，内有200万册藏书和丰富的多媒体信息资源。昆士兰大学的学生都可以免费使用互联网。昆士兰大学的工作人员和学生来自134多个国家，是一个多元文化的大学',
}, {
  logoUrl: '/contry_school/Australia/6.png',
  name: '蒙纳士大学',
  englishName: `Monash University`,
  location: 'Melbourne',
  basicInfo: '是澳大利亚的一所大型公立综合性大学，成立于1958年，位于维多利亚洲首府墨尔本市，属澳洲八大名校之一，五星级大学。就业率为77.7%，毕业率为79.6%，师生比例为1:18',
}, {
  logoUrl: '/contry_school/Australia/7.png',
  name: '西澳大学',
  englishName: 'University of Western Australia',
  location: 'Perth',
  basicInfo: '西澳大学拥有来自80多个国家的师生，他们有着不同的背景文化，更加丰富了大学的环境。西澳大学在研究上的强大基础和就学创新给学生提供了一个良好的学术环境。除了定期提供一些信息外(如讲座，辅导，指导研究，实地考察和学生实习等信息)，西澳大学还为学生提供实习的机会，帮助学生积累工作经验', 
}, {
  logoUrl: '/contry_school/Australia/8.png',
  name: '阿德莱德大学',
  englishName: 'The University of Adelaide',
  location: 'Adelaide',
  basicInfo: '阿德雷德大学是澳大利亚最好的大学之一，并且在世界大学中一直名列前茅。阿德雷德大学拥有国际公认的优质教学，并目学生毕业后也会有不错的职业生涯。阿德雷德大学是澳大利亚第三所最古老的大学，并且是一个有潜力的，外向型的学校',
}, {
  logoUrl: '/contry_school/Australia/8.png',
  name: '悉尼科技大学',
  englishName: 'University of Technology Sydney',
  location: 'Sydney',
  basicInfo: '在校学生人数超过32000名，其中海外留学生8000多名分别来自不同的国家。学校一直以其在理工科及管理方面的优秀表现而闻名，该校与当地工商界、政府部门及社团合作良好，毕业生就业率居澳洲各大学之首。其中以机械工程、计算机.管理、护理等课程最为突出',
}],

'HonKong': [{
  logoUrl: '/contry_school/HonKong/1.png',
  name: '香港大学',
  englishName: 'The University of Hong Kong',
  location: '香港中西区',
  basicInfo: '香港大学是中国香港的一所综合性国际化公立研究型大学，有亚洲“常春藤”之称。香港大学奠基于1910年3月16日，次年3月30日正式注册成立，其前身为香港西医书院，是香港历史最悠久的高等教育',
}, {
  logoUrl: '/contry_school/HonKong/2.png',
  name: '香港中文大学',
  englishName: '香港中文大学 The Chinese University of Hong Kong',
  location: '香港新界沙田',
  basicInfo: '香港中文大学历史始于1963年，是一所国际化公立研究型综合大学，在人文学科、数学、计算机科学、经济与金融、医学、法律、传媒、地理等领域堪称学术重镇，也是香港唯一有诺贝尔奖、菲尔兹奖、图灵奖及香农奖得主任教的大学。 该校以“结合传统与现代，融会中国与西方”为使命，以灵活学分制、书院制、中英兼重和多元文化为特色，是环太平洋大学联盟、世界大学联盟、松联盟、中国大学校长联谊会成员，亚洲首家AACSB认证成员，香港互联网交换中心所在地。 根据国际学术网站Research公布的2022年大学及科学家排名，香港中文大学心理学学科位列中国第1位，计算机科学、医学、经济及金融、生物学及生物化学4个学科位列中国第2位，微生物学学科位列中国第3位。此外，计算机科学、经济及金融、心理学、植物科学及农艺学、生物学及生物化学、基因及分子生物学6个学科排名靠前',
}, {
  logoUrl: '/contry_school/HonKong/3.png',
  name: '香港科技大学',
  englishName: 'The Hong Kong University of Science and Technology',
  location: '香港新界西贡区',
  basicInfo: '香港科技大学是香港政府为配合1980年代经济结构转型需要而创办的香港第三所大学，是香港第一所研究型大学。香港科技大学为环太平洋大学联盟、全球大学校长论坛、东亚研究型大学协会、亚洲大学联盟、中国大学校长联谊会重要成员，并获AACSB和EQUIS双重认证，是一所世界知名研究型大学。 该校以科技和商业管理为主、人文及社会科学并重，尤以商科和工科见长，在物理、工程、工商管理、生物科学及生物技术、环境及可持续发展等领域均取得显著成就。 2022年4月，QS世界大学学科排名发布，香港科技大学有14个科目进入全球50强，并入选亚洲十佳大学',
}, {
  logoUrl: '/contry_school/HonKong/4.png',
  name: '香港城市大学',
  englishName: 'City University of Hong Kong',
  location: '香港九龙塘',
  basicInfo: '香港城市大学成立于1994年，是一所充满朝气的大学，其地理位置独特，位于香港这个东西方汇集的亚洲国际都会中心。以创新精神专注于研究及专业教育两大领域，致力为全球议题寻找解决方案，并推动有益社会的转变，追求卓越、促进创新、培育创意，造福社会和服务全球。 城大是一所现代化国际大学，注重多元化、跨文化学习与全球视野。城大拥有优良的师资，与国际学术界建立了密切广泛的合作网络。城大的毕业生成长为杰出专业人士，具备广纳新知、灵活应变、细心思虑、乐于回馈社会的特质。 城大在国际大学排名榜上表现出色，位居全球第54位；而根据史丹福大学最新公布的排名指标，逾140位论文被高度引用的城大教研人员，获列入全球排名前2%科学家，反映大学极高的学术水平及卓越研究成就。在商科、理工科、社科、文科领域都有优势专业',
}, {
  logoUrl: '/contry_school/HonKong/5.png',
  name: '香港理工大学',
  englishName: `The Hong Kong Polytechnic University`,
  location: '香港九龙红磡',
  basicInfo: '香港理工大学是一所位于中国香港的公立综合性研究型大学。致力培育慎思明辨、勇于探索求知、富于创见和能言善道的学生，让他们为世界带来正面影响。理大专注于跨学科研究，研发具长远影响力且能应对现实生活问题的创新科技。透过启发创新意念、促进可持续发展、提高经济成果，以及优化社区生活，以造福香港、国家以至全世界。 在最新发布的 QS 2022年度世界大学学科排名，理大有六个学科及一个学术范畴跻身全球首50位之内。这排名结果印证了理大在多个学科范畴领先全球。理大将继往开来，在教育、科研和创新各方面力臻完美，为社会的福祉作出更大的贡献。理大优势学科包括酒店及康乐管理，建筑，土木工程，艺术设计，环境科学，商业管理及社会学、语言学学科。理大工商管理学院是同时具有AACSB、EQUIS双重认证的商学院',
}, {
  logoUrl: '/contry_school/HonKong/6.png',
  name: '香港浸会大学',
  englishName: `Hong Kong Baptist University`,
  location: '香港九龙塘和观塘',
  basicInfo: '香港浸会大学是一所国际化研究型博雅大学，其前身为1956年创办的香港浸会书院，以传媒、文、理、商管、现代中医药研发著名。浸大在艺术及人文领域坚实的基础上，提供适切的教学及研究环境，推动以人为本的科技发展，同时利用科技不断开拓人类在艺术和文化的想像空间，并在科学及中医领域上不断带来突破，锐意建立一个更美好的世界及仁爱的社会。浸大传理学院于2011年荣膺“全球十大新闻学院”，截至2021年，浸大在数据库领域位列世界第11位，在人工智能领域排名靠前，世界第37位。计算机科学领域研究成果排名靠前。浸大工商管理学院从2010年获得AACSB、EQUIS和AMBA认证，成为香港首家获得三重国际顶级认证的商学院，并于2018年入选“亚洲25所顶尖商学院”',
}, {
  logoUrl: '/contry_school/HonKong/7.png',
  name: '澳门大学',
  englishName: 'niversidade de Macau ',
  location: '澳门特别行政区凼仔大学大马路',
  basicInfo: '澳门大学是一所位于中国澳门的公立国际化综合性研究型大学，为中欧商校联盟、“一带一路”国际科学组织联盟、粤港澳高校联盟、粤港澳大湾区西岸科技创新和人才培养合作联盟创始成员和亚太高校书院联盟成员，澳门大学工商管理学院获AACSB、AMBA和EQUIS认证。澳门大学位列2022泰晤士高等教育世界大学排名201-250区间，亚洲大学排名第33位   ，全球年轻大学排名第26位；工程学、化学、计算机科学、药理学与毒理学、材料科学、生物学与生物化学、临床医学、精神病学／心理学、社会科学总论、农业科学10个学科进入ESI前1%' 
}, {
  logoUrl: '/contry_school/HonKong/8.png',
  name: '澳门科技大学',
  englishName: 'Macau University of Science and Technology',
  location: '澳门特别行政区氹仔岛伟龙马路',
  basicInfo: '澳门科技大学，是一所位于中国澳门的私立国际化综合性研究型大学，为国际大学协会、亚太大学联合会 、粤港澳高校联盟 、中国高校行星科学联盟 、一流大学建设系列研讨会成员澳门科技大学位列2023泰晤士高等教育世界大学排名世界第201-250区间 ，2023QS世界大学排名世界第581-590区间  ，2022U.S. News世界大学排名世界第1002位   ，2022泰晤士高等教育亚洲大学排名第36位  、世界年轻大学排名第39位；生物学与生物化学、工程学、分子生物学与遗传学、药理毒理学、计算机科学、临床医学、社会科学（综合）共7个学科位列ESI全球前1%',
}],

'Singapore': [{
  logoUrl: '/contry_school/Singapore/1.png',
  name: '新加坡国立大学',
  englishName: 'National University of Singapore',
  location: '新加坡肯特岗、武吉知马和欧南3大校区',
  basicInfo: '新加坡国立大学，是一所位于新加坡的公立研究型大学，在国际框架下，展开高深优质的教育与科研之际，突出展现亚洲视角和优势。学校在工程、生命科学及生物医学、社会科学及自然科学等领域，研究实力备受公认。国大立志成为一个集学者、研究员、教职员、学生和校友的活跃社群，以创新与企业精神为信念，共同打造一个更美好的世界。国大共有17所学院，提供跨学科跨院系的广泛课程，在全球超过15个城市设有海外学院和交换生计划，国大海外学院所提供的企业实习项目，与世界部分知名大学联办的联合学位及双学位计划等，为学生提供机会与挑战，发掘自我潜能。国大在科研方面也采取跨领域整合式方针，与业界、政府和学界均建立伙伴关系，研究探讨与亚洲乃至世界相关的重大且复杂的课题。国大研究工作最新焦点是，如何善用数据科学、运筹学及网络安全，为国家实现智慧国愿景提供支援。',
}, {
  logoUrl: '/contry_school/Singapore/2.png',
  name: '南洋理工大学 ',
  englishName: 'Nanyang Technological University',
  location: '新加坡西南部',
  basicInfo: '新加坡南洋理工大学于1991年1月正式成立，起初是一所教学型的高等学府，现已发展为一所世界型的科研密集型大学。大学拥有多个世界知名的自治学院，其中包括国立教育学院，拉惹勒南国际研究院，新加坡地球观测与研究所和新加坡环境生物工程中心，以及其他研究中心，如南洋环境与水源研究院、南洋理工大学能源研究所等。南大被“QS世界大学排名”评为世界知名大学之一，并多年蝉联全球年轻大学榜首，为工科和商科并重的综合性大学。此外生物医学、环境与水务技术、互动与数码媒体科学等都是该校的优势学科领域。南大主校区也常被列为全球美丽的校园之一',
}, {
  logoUrl: '/contry_school/Singapore/3.png',
  name: '新加坡PSB学院',
  englishName: 'PSB Academy',
  location: '新加坡',
  basicInfo: '新加坡PSB学院(PSB Academy)是一所历史悠久的高等院校。它是经新加坡教育部批准、受到中国驻新加坡大使馆认证的一所多功能、多学科的学院。在提供教育与企业咨询服务方面拥有超过四十年的丰富经验。前身为始建于1964年的新加坡政府贸工部属下的生产力与标准局 (Singapore Productivity and Standards Board)，这个生产力高等教育学院的成立是为了带动新加坡的人力教育工作，以及满足工商业发展对人力的需要。至今PSB学院培育的学员已超过50多万人次，每8个新加坡人中就有1个接受过PSB学院的教育和在职培训；至今培养出了众多政界要员、专业人才及企业精英，可谓桃李满天下。学院的基础大专文凭受到英国剑桥大学考试委员会的认证，可直接申请英联邦国家和美国等国著名大学本科课程。PSB学院与世界高等学府学术合作，包括澳大利亚的纽卡斯尔大学及卧龙岗大学等世界知名学府在PSB校园内开设直属分校。学生可以在新加坡PSB学院(校区)就读这些大学课程，获得等同于本校相同的大学学士以上的学位',
}, {
  logoUrl: '/contry_school/Singapore/4.png',
  name: '科廷大学新加坡校区',
  englishName: 'James Cook University Singapore Campus',
  location: '新加坡',
  basicInfo: '科廷大学（Curtin University）始于1900年的珀斯技术学院，距今已有一百多年的历史。它是澳大利亚西海岸规模较大的综合性大学，同时被澳大利亚高等教育质量认证委员会评为全国优质大学。科廷大学是澳大利亚较早的一所为海外特别是东南亚地区的学生提供国际性教育的大学。科廷大学现有超过40000 名在校生，来自本国及海外共105个国家，并以其充满生机与活力的学习环境而享誉全球。科廷大学是全澳具多元文化的大学之一，25% 的在校生是来自海外的国际学生',
}, {
  logoUrl: '/contry_school/Singapore/5.png',
  name: '詹姆斯库克大学',
  englishName: 'James Cook University Singapore Campus',
  location: '新加坡',
  basicInfo: '詹姆斯·库克大学(James Cook University，简称JCU) 原属昆士兰大学，1970年正式成立詹姆斯·库克大学。学校以18世纪英国著名的航海家和探险家詹姆斯·库克船长的名字命名。詹姆斯·库克大学是澳大利亚知名的国立研究型大学之一，是昆士兰第二古老的大学，也是英联邦高校协会(Association of Commonwealth Universities) 的会员。詹姆斯·库克大学最近在学生教育质量方面被评为5星级学校，JCU 是一家在科学研究领域享有卓著声誉的大学，2003年，詹姆斯·库克大学在新加坡建立了首个海外校区，由此成立了詹姆斯·库克大学新加坡国际校区。新加坡国际校区开设的课程与詹姆斯·库克大学主校区完全相同，在新加坡国际校区学习的学生们可以获得同样优质的教育和丰富的大学生活',
}, {
  logoUrl: '/contry_school/Singapore/6.png',
  name: '新加坡管理大学 ',
  englishName: `Singapore Management University`,
  location: '新加坡市中心',
  basicInfo: '新加坡管理大学，是新加坡政府于2000年设立的第三所研究密集型公立大学。是新加坡政府立足于二十一世纪的人才需求、精心打造的国际优质商科、计算机信息技术和社会科学类高等学府。其目标是开展具有主导性的学术研究并培养具备全面才能、创意和商业头脑的领导者， 藉此履行其为知识型经济创造并传播知识的使命。以开拓严谨、高成果的跨学科研究为重点的新大，通过其强大学术研究团队与国外的杰出研究工作者、以及商业和公共部门伙伴的合作，对多项能产生全球影响的亚洲课题进行深入的分析探讨',
}],

'NewZealand': [{
  logoUrl: '/contry_school/NewZealand/1.png',
  name: '奥克兰大学',
  englishName: 'The University of Aukland',
  location: '奥克兰市',
  basicInfo: '奥克兰大学是新西兰最大的从事教学研究且拥有最多专业的综合性大学，被誉为新西兰的“国宝级”大学，享有极高的国际声誉。奥克兰大学在七个校区开设八个学术学院，开设超过160个学位和证书课程，众多专业名列OS学科专业排名前50(地理学、药剂学、运动相关学科、英语与语言文学、考古学、教育学、土木与建筑工程、心理学、护理学、建筑学、会计与金融)',
}, {
  logoUrl: '/contry_school/NewZealand/2.png',
  name: '塔哥大学',
  englishName: 'university of otago',
  location: '奥塔哥省首府达尼丁市',
  basicInfo: '作为新西兰历史上第一所高等学府，成立于1869年的奥塔哥大学因其研究和教学质量上的卓越国际声誉。奥塔哥大学拥有新西兰大学中唯一的牙医学院，唯一的地质测量学，以及唯一的独立植物学项目，以及拥有世界上最大的科学传播项目和大洋洲地区最成功的遗传学项目。大学的商学院在最近的国家科研成果及经费评级中获得新西兰第一。同时，奥塔哥大学的教职人员还多次获得全国性教学奖项，并目在数量上位居新西兰大学榜首',
}, {
  logoUrl: '/contry_school/NewZealand/3.png',
  name: '坎特伯雷大学',
  englishName: '',
  location: '',
  basicInfo: '坎特伯雷大学是新西兰八所公立大学之一，1873年由牛津大学和剑桥大学的学者建立，是新西兰历史第二悠久的大学，坎特伯重大学是一所综合排名位居全球前1%的顶 尖大学，以其享誉全球的教学和研究实力成为新西兰第一所获得QS五星认证的大学。其主校区坐落于新西兰南岛最大的城市基督城伊拉姆区，风景优美，设施一流。坎特伯重大学拥有7大学院，提供超过150门学科和120多个课程。坎特伯雷大学最近还实现了今年全球第-个可持续发展目标(SDG) 12-...负责人的消费和生产，并在《泰唔士报》高等教育全球大学影响力排名中名列第50位。',
}, {
  logoUrl: '/contry_school/NewZealand/4.png',
  name: '梅西大学',
  englishName: '',
  location: '',
  basicInfo: '梅西大学成立于1927年，是新西兰最大的一所教育和研究学府，也是新西兰唯一-所真正的全国性大学。主校区位于有“风车之城”美誉的北帕默斯顿，直辖真灵顿和奥克兰两大分校区，每年有超过35,000名学生就读。 同时，梅西大学飞行学院也是新西兰国内唯一提供飞行专业，争端仲裁和兽医学的大学院校。其兽医科学学士学位被美国兽医协会所承认，因此梅西大学的兽医学位不仅在新西兰国内被认可，同时也在美国，澳洲，加拿大和英国以及全世界绝大多数国家所认可及承认。这项荣誉在新西兰国内也是唯一的。',
}, {
  logoUrl: '/contry_school/NewZealand/5.png',
  name: '怀卡托大学',
  englishName: '',
  location: '',
  basicInfo: '怀卡托大学成立于1964年，是一所获得全球认可的高等学府，致力于为学生提供高质量的教学，培养毕业生掌握不断发展的全球就业市场所需的相应技能。主校区位于新西兰北岛城市汉密尔顿市，在陶朗市开设有分校区，每年有来自85个国家超过2.500名国际学生选择在怀卡托大学就读',
}, {
  logoUrl: '/contry_school/NewZealand/6.png',
  name: '林肯大学',
  englishName: ``,
  location: '',
  basicInfo: '林肯大学成立于1878年，位于新西兰南岛的中心- 基督城的郊外，拥有着58公项的绿色和宜人的公园式的校园。是南半球最早专业从事农业教学和研究的高等教育机构，是世界上最有待色的小规模大学之一，也大洋洲地区唯一提供最完整的受世界景观设计师协会认证的学历课程的高校。得益于林肯大学最优师生比例，大学极其注重培养学生实际产业知识与技能、基本的研究和数理统计能力和前暗的视野，毕业生就业率位列新西兰高校第一',
}, {
  logoUrl: '/contry_school/NewZealand/7.png',
  name: '奥克兰理工大学',
  englishName: '',
  location: '',
  basicInfo: '奥克兰理工大学是新西兰第二大学，也是新西兰研究生增长最 快的大学。目前，奥克兰理了大学提供超过250个专业课程，主要学科门类有:建筑学、艺术与设计、商学、法学、理学、传媒学、教育学、工程学、创意技术、健康科学、旅游和酒店管理、语言和社会科学、计算机与数理学、体育和休闲运动学等',
}],


}

