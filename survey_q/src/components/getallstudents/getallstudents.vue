<template>
  <div>
    <div class="header">
      <img src="/survey/static/img/logo.jpg" height="43" width="122" alt="林同棪">
      <div class="language-ch">林同棪BIM实施体系成熟度调研表</div>
      <div class="language-en">TYLIN BIM Application System Maturity Survey</div>
    </div>
      <div class="content">
          <el-form ref="form" :model="form" label-width="327px">
            <el-row :gutter="24">
              <el-col :span="10">
                <el-form-item label="C1-1、所属部门" prop="q0"
                  :rules="{required: true, message: '请选择所属部门', trigger: 'blur,change'}">
                  <el-select v-model="form.q0" placeholder="请选择所属部门">
                    <el-option label="不适用" value="0"></el-option>
                    <el-option label="桥梁事业部" value="1"></el-option>
                    <el-option label="城市交通研究院" value="2"></el-option>
                    <el-option label="轨道事业部" value="3"></el-option>
                    <el-option label="山地中心" value="4"></el-option>
                    <el-option label="道路事业部" value="5"></el-option>
                    <el-option label="城市发展部" value="6"></el-option>
                    <el-option label="生态环境部" value="7"></el-option>
                    <el-option label="两江事业部" value="8"></el-option>
                    <el-option label="景观事业部" value="9"></el-option>
                    <el-option label="总承包事业部" value="10"></el-option>
                    <el-option label="公路事业部" value="11"></el-option>
                  </el-select>
                </el-form-item>
                <span class="remind">(中国公司员工请选此项)</span>
              </el-col>
              <el-col :span="10">
                <el-form-item label="C1-2、分公司" prop="q1"
                  :rules="{required: true, message: '请选择分公司', trigger: 'blur,change'}">
                  <el-select v-model="form.q1" placeholder="请选择分公司">
                    <el-option label="不适用" value="0"></el-option>
                    <el-option label="北京公司" value="1"></el-option>
                    <el-option label="四川公司" value="2"></el-option>
                    <el-option label="广西公司" value="3"></el-option>
                    <el-option label="广州公司" value="4"></el-option>
                    <el-option label="福建公司" value="5"></el-option>
                    <el-option label="呼和浩特公司" value="6"></el-option>
                    <el-option label="拉萨公司" value="7"></el-option>
                    <el-option label="南京公司" value="8"></el-option>
                    <el-option label="青岛公司" value="9"></el-option>
                    <el-option label="上海公司" value="10"></el-option>
                    <el-option label="沈阳公司" value="11"></el-option>
                    <el-option label="深圳公司" value="12"></el-option>
                    <el-option label="武汉公司" value="13"></el-option>
                    <el-option label="西安公司" value="14"></el-option>
                    <el-option label="乌鲁木齐公司" value="15"></el-option>
                    <el-option label="昆明公司" value="16"></el-option>
                    <el-option label="达士公司" value="17"></el-option>
                    <el-option label="求精公司" value="18"></el-option>
                  </el-select>
                </el-form-item>
                <span class="remind">(分公司员工请选此项)</span>
              </el-col>
          </el-row>
            <el-form-item label="C2、接触或听说过BIM多长时间"  prop="q2"
              :rules="{required: true, message: '请选择接触或听说过BIM多长时间', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q2">
                <el-radio label="1">没听说过</el-radio>
                <el-radio label="2">听过但是没有接触过</el-radio>
                <el-radio label="3">接触过1-2年</el-radio>
                <el-radio label="4">接触过2-4年</el-radio>
                <el-radio label="5">接触过4年以上</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C3、BIM应用的现状自主评价"  prop="q3"
              :rules="{required: true, message: '请选择BIM应用的现状自主评价', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q3">
                <el-radio label="1">尚未推进计划</el-radio>
                <el-radio label="2">开始概念普及</el-radio>
                <el-radio label="3">进行项目试点</el-radio>
                <el-radio label="4">公司大面积推广</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C4、应用BIM的主要目的"  prop="q4"
              :rules="{required: true, message: '请选择应用BIM的主要目的', trigger: 'blur,change'}">
              <el-checkbox-group v-model="form.q4">
                <el-checkbox name="q4" label="1">投标演示</el-checkbox>
                <el-checkbox name="q4" label="2">树立业务品牌</el-checkbox>
                <el-checkbox name="q4" label="3">看到其它的单位通过BIM受益所以想尝试</el-checkbox>
                <el-checkbox name="q4" label="4">认为BIM可能会带来效益</el-checkbox>
                <el-checkbox name="q4" label="5">其他</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="C5、BIM团队组织形式"  prop="q5"
              :rules="{required: true, message: '请选择BIM团队组织形式', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q5">
                <el-radio label="1">未建立专业的BIM组织团队</el-radio>
                <el-radio label="2">已建立项目级别专业BIM组织团队</el-radio>
                <el-radio label="3">已建立公司层面专业BIM组织团队</el-radio>
                <el-radio label="4">完全外包给BIM咨询单位</el-radio>
                <el-radio label="5">其他</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C6、BIM实施团队人数"  prop="q6"
              :rules="{required: true, message: '请选择BIM实施团队人数', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q6">
                <el-radio label="1">1~5</el-radio>
                <el-radio label="2">6~10</el-radio>
                <el-radio label="3">11~15</el-radio>
                <el-radio label="4">16~20</el-radio>
                <el-radio label="5">其他</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C7、BIM团队人员组成情况"  prop="q7"
              :rules="{required: true, message: '请选择BIM团队人员组成情况', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q7">
                <el-radio label="1">设计、建模人员为主</el-radio>
                <el-radio label="2">BIM模型分析应用类为主</el-radio>
                <el-radio label="3">BIM管理人员为主</el-radio>
                <el-radio label="4">其他</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C8、BIM团队的主管领导"  prop="q8"
              :rules="{required: true, message: '请选择BIM团队的主管领导', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q8">
                <el-radio label="1">总经理</el-radio>
                <el-radio label="2">总工程师</el-radio>
                <el-radio label="3">专业负责人</el-radio>
                <el-radio label="4">其他</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C9、管理层对BIM的认识情况"  prop="q9"
              :rules="{required: true, message: '请选择管理层对BIM的认识情况', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q9">
                <el-radio label="1">没听说过BIM</el-radio>
                <el-radio label="2">听说过BIM</el-radio>
                <el-radio label="3">了解BIM,没推动热情</el-radio>
                <el-radio label="4">了解BIM,有推动热情,但不知如何推动</el-radio>
                <el-radio label="5">对BIM有清晰认识,没推动热情</el-radio>
                <el-radio label="6">对BIM有清晰认识,正在积极推动BIM</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="C10、是否组织过专业的BIM技能培训" prop="q10"
              :rules="{required: true, message: '请选择是否组织过专业的BIM技能培训', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q10">
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
            </el-form-item>
            <el-form-item label="C11、员工是否有BIM技能认证证书" prop="q11"
              :rules="{required: true, message: '请至少选择一项员工BIM技能认证证书', trigger: 'blur,change'}">
              <el-checkbox-group v-model="form.q11">
                <el-checkbox label="1" name="q11">图学会</el-checkbox>
                <el-checkbox label="2" name="q11">工信部</el-checkbox>
                <el-checkbox label="3" name="q11">建设教育协会</el-checkbox>
                <el-checkbox label="4" name="q11">其他</el-checkbox>
                <el-checkbox label="5" name="q11">无</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="C12、具备BIM应用能力的人员占总员工的比例" prop="q12"
              :rules="{required: true, message: '请选择具备BIM应用能力的人员占总员工的比例', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q12">
              <el-radio label="1">小于10%</el-radio>
              <el-radio label="2">10-20%</el-radio>
              <el-radio label="3">20-50%</el-radio>
              <el-radio label="4">大于50%</el-radio>
            </el-radio-group>
            </el-form-item>
             <el-form-item label="C13、是否拥有自主BIM研发人员" prop="q13"
              :rules="{required: true, message: '请选择是否拥有自主BIM研发人员', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q13">
                <el-radio label="1">有专职研发人员</el-radio>
                <el-radio label="2">有兼职的研发人员</el-radio>
                <el-radio label="3">无相应研究人员</el-radio>
              </el-radio-group>
            </el-form-item>
             <el-form-item label="C14、BIM相关政策及标准了解情况" prop="q14"
              :rules="{required: true, message: '请选择BIM相关政策及标准了解情况', trigger: 'blur,change'}">
              <el-radio-group v-model="form.q14">
                <el-radio label="1">很清楚</el-radio>
                <el-radio label="2">大概了解</el-radio>
                <el-radio label="3">从未研究过</el-radio>
              </el-radio-group>
            </el-form-item>
          <el-form-item label="C15、BIM软件应用情况" prop="q15"
            :rules="{required: true, message: '请至少选择一项BIM软件应用情况', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q15">
            <el-checkbox label="1" name="q15">Autodesk系列</el-checkbox>
            <el-checkbox label="2" name="q15">Bently系列</el-checkbox>
            <el-checkbox label="3" name="q15">Catia系列</el-checkbox>
            <el-checkbox label="4" name="q15">Dassault系列</el-checkbox>
            <el-checkbox label="5" name="q15">其他</el-checkbox>
          </el-checkbox-group>
          </el-form-item>
          <el-form-item label="C16、BIM应用软件正版情况" prop="q16"
            :rules="{required: true, message: '请选择BIM应用软件正版情况', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q16">
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="C17、BIM应用硬件情况" prop="q17"
            :rules="{required: true, message: '请至少选择一项BIM应用硬件情况', trigger: 'blur,change'}">
            <el-checkbox-group v-model="form.q17">
              <el-checkbox label="1" name="q17">自主购买服务器（物理或云）部署</el-checkbox>
              <el-checkbox label="2" name="q17">自主购买工作站</el-checkbox>
              <el-checkbox label="3" name="q17">完全依靠现有硬件</el-checkbox>
              <el-checkbox label="4" name="q17">其他</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        <el-form-item label="C18、BIM应用创新点应用情况" prop="q18"
          :rules="{required: true, message: '请至少选择一项BIM应用创新点应用情况', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q18">
            <el-checkbox label="1" name="q18">BIM和GIS的集成使用</el-checkbox>
            <el-checkbox label="2" name="q18">BIM和激光扫描的集成使用</el-checkbox>
            <el-checkbox label="3" name="q18">BIM和3D打印的集成使用</el-checkbox>
            <el-checkbox label="4" name="q18">BIM和航拍的集成使用</el-checkbox>
            <el-checkbox label="5" name="q18">BIM和GPS的集成使用</el-checkbox>
            <el-checkbox label="6" name="q18">BIM和移动通讯的集成使用</el-checkbox>
            <el-checkbox label="7" name="q18">BIM和RFID的集成使用</el-checkbox>
            <el-checkbox label="8" name="q18">BIM和web技术的集成使用</el-checkbox>
            <el-checkbox label="9" name="q18">BIM和管理平台的集成使用</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
          <el-form-item label="C19、是否参与重庆市的BIM科研课题" prop="q19"
            :rules="{required: true, message: '请选择是否参与重庆市的BIM科研课题', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q19">
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="C20、应用BIM技术的项目数量" prop="q20"
            :rules="{required: true, message: '请选择应用BIM技术的项目数量', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q20">
              <el-radio label="1">无</el-radio>
              <el-radio label="2">1-5个</el-radio>
              <el-radio label="3">5-10个</el-radio>
              <el-radio label="4">10-20个</el-radio>
              <el-radio label="5">20个以上</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="C21、近五年在BIM方面的年均投入情况" prop="q21"
            :rules="{required: true, message: '请选择近五年在BIM方面的年均投入情况', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q21">
              <el-radio label="1">50万以下</el-radio>
              <el-radio label="2">50万到100万</el-radio>
              <el-radio label="3">100万到300万</el-radio>
              <el-radio label="4">其他</el-radio>
            </el-radio-group>
          </el-form-item>
        <el-form-item class="long-item" label="C22、是否有专业BIM标准和规范" prop="q22"
          :rules="{required: true, message: '请选择是否有专业BIM标准和规范', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q22">
            <el-row :gutter="20">
              <el-radio label="1">无 BIM 相关标准、规定</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">有 BIM 示范项目、实施建议等，无标准和规范</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">参与编制了行业相关的实行准则，规定了BIM模型信息统一归类格式</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">出台部门专业的BIM标准、规范等（模型数据要求、规定 BIM 数据的交换格式），但无具体细则</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="5">有部门的系统规程（有具体细则），指导方针明确（如 BIM 施工标准、BIM 验收标准等</el-radio>
            </el-row>        
          </el-radio-group>
        </el-form-item>
        <el-form-item class="long-item" label="C23、BIM数据模型精细度描述" prop="q23"
          :rules="{required: true, message: '请选择BIM数据模型精细度描述', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q23">
            <el-row :gutter="20">
              <el-radio label="1">不详细（具备基本形状，粗略的尺寸和形状)</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">较不详细（近似几何尺寸、形状和方向)</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">基本详细（精确几何，包含一些信息，如材质、产品信息等)</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">比较详细（详细的模型实体，能进行构件的加工制造。附加有施工信息，包括生产、运输、安装等方面</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="5">很详细（确定的模型尺寸，包含竣工提交所需信息：工艺设备的技术参数、产品说明书、保养及维修手册等</el-radio>
            </el-row>
          </el-radio-group>
        </el-form-item>
          <el-form-item label="C24、BIM模型协作方式情况" prop="q24"
            :rules="{required: true, message: '请选择BIM模型协作方式情况', trigger: 'blur,change'}">
            <el-radio-group v-model="form.q24">
              <el-radio label="1">单人单机作业</el-radio>
              <el-radio label="2">本地作业,集中存储</el-radio>
              <el-radio label="3">多人局域网内协同</el-radio>
              <el-radio label="4">多人、多单位基于互联网的协同</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="long-item" label="C25、BIM数据交换和信息共享的程度" prop="q25"
            :rules="{required: true, message: '请选择BIM数据交换和信息共享的程度', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q25">
            <el-row :gutter="20">
              <el-radio label="1">没有交换和共享</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">有限信息通过软件产品之间进行转换</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">大部分信息通过软件产品间转换</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">更多信息使用 IFC 格式或者其他类似的信息交换格式进行转换</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="5">全部信息使用 IFC 或者其他类似的信息交换格式进行转换</el-radio>
            </el-row>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="C26、BIM模型构件、族的主要来源" prop="q26"
          :rules="{required: true, message: '请选择BIM模型构件、族的主要来源', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q26">
            <el-checkbox name="q26" label="1">需要时自行建立</el-checkbox>
            <el-checkbox name="q26" label="2">从网上下载</el-checkbox>
            <el-checkbox name="q26" label="3">软件自带</el-checkbox>
            <el-checkbox name="q26" label="4">购买成品构件库</el-checkbox>
            <el-checkbox name="q26" label="5">针对项目建立构件库</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="C27、进行过以下哪些BIM应用" prop="q27"
          :rules="{required: true, message: '请选择进行过以下哪些BIM应用', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q27">
            <el-checkbox name="q27" label="1">基于BIM的设计方案论证</el-checkbox>
            <el-checkbox name="q27" label="2">基于BIM的节能分析</el-checkbox>
            <el-checkbox name="q27" label="3">基于BIM的结构分析</el-checkbox>
            <el-checkbox name="q27" label="4">基于BIM采光分析</el-checkbox>
            <el-checkbox name="q27" label="5">基于BIM的设计出图</el-checkbox>
            <el-checkbox name="q27" label="6">基于BIM的管线综合</el-checkbox>
            <el-checkbox name="q27" label="7">基于BIM的设计协同</el-checkbox>
            <el-checkbox name="q27" label="8">基于BIM的工程量计算</el-checkbox>
            <el-checkbox name="q27" label="9">基于BIM的投标方案模拟</el-checkbox>
            <el-checkbox name="q27" label="10">专项施工方案模拟</el-checkbox>
            <el-checkbox name="q27" label="11">施工工艺模拟</el-checkbox>
            <el-checkbox name="q27" label="12">基于BIM的机电深化设计</el-checkbox>
            <el-checkbox name="q27" label="13">基于BIM的碰撞检查</el-checkbox>
            <el-checkbox name="q27" label="14">基于BIM的钢结构深化设计</el-checkbox>
            <el-checkbox name="q27" label="15">基于BIM的进度控制</el-checkbox>
            <el-checkbox name="q27" label="16">基于BIM的成本控制</el-checkbox>
            <el-checkbox name="q27" label="17">基于BIM的图纸会审及交底</el-checkbox>
            <el-checkbox name="q27" label="18">基于BIM的预制加工</el-checkbox>
            <el-checkbox name="q27" label="19">基于BIM的结算</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="C28、基于BIM功能应用深度情况" prop="q28"
          :rules="{required: true, message: '请选择基于BIM功能应用深度情况', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q28">
            <el-checkbox name="q28" label="1">投标演示</el-checkbox>
            <el-checkbox name="q28" label="2">规划阶段</el-checkbox>
            <el-checkbox name="q28" label="3">设计阶段</el-checkbox>
            <el-checkbox name="q28" label="4">施工阶段</el-checkbox>
            <el-checkbox name="q28" label="5">运营阶段</el-checkbox>
            <el-checkbox name="q28" label="6">全生命周期的运用</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item  class="long-item" label="C29、BIM技术平台的使用及认识情况" prop="q29"
          :rules="{required: true, message: '请选择BIM技术平台的使用及认识情况', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q29">
            <el-row :gutter="20">
              <el-radio label="1">试用过BIM服务平台，并未采购</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">已采购BIM服务平台并正在使用中</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">与第三方单位合作开发自主的BIM平台</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">其他</el-radio>
            </el-row>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="long-item" label="C30、基于BIM的自主研发情况" prop="q30"
          :rules="{required: true, message: '请选择基于BIM的自主研发情况', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q30">
            <el-row :gutter="20" class="item">
              <el-checkbox name="q30" label="1">有族库构件、参数化模块的开自主发</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
              <el-checkbox name="q30" label="2">基于 BIM 软件的二次开发（数据接口（API）开发）</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
              <el-checkbox name="q30" label="3">数据库的开发（用于存储项目资源、任务）</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
              <el-checkbox name="q30" label="4">协同工作平台（模型搭建、数据管理平台）</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
              <el-checkbox name="q30" label="5">自主知识产权的集成软件平台</el-checkbox>
            </el-row>
          </el-checkbox-group>
        </el-form-item>  
        <el-form-item class="long-item" label="C31、项目合同是否有BIM合同内容的描述" prop="q31"
          :rules="{required: true, message: '请选择项目合同是否有BIM合同内容的描述', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q31">
            <el-row :gutter="20">
              <el-radio label="1">BIM工作的基本内容及交付物的要求</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">明确规定 BIM 建模深度，模型应该具备哪些信息，并规定模型数据格式</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">项目组织及管理要求：明确 BIM负责人（即 BIM 项目经理）及其职责。同时，明确 BIM 项目各参与方的工作范围、职责和报酬方式，在工作范围内各参与方有相互配合和支持的义务，并明确BIM 项目执行过程中的各项规范</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">交付物的格式及文件组织要求：主要包括项目成果的交付格式和深度，模型提交成果要求和项目成果按照合同要求按时按量提交</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="5">知识产权的要求：项目完成后，所有 BIM成果的产权归属，包括：BIM竣工模型、BIM过程文件、克服项目难点所产生的专有技术和专利等</el-radio>
            </el-row>
          </el-radio-group>
        </el-form-item> 
        <el-form-item class="long-item" label="C32、项目执行过程中与其他单位的BIM协作情况" prop="q32"
          :rules="{required: true, message: '请选择项目执行过程中与其他单位的BIM协作情况', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q32">
            <el-row :gutter="20">
              <el-radio label="1">没有合作</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">有一定的合作，基于模型和平台进行沟通</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">合作程度较高，BIM模型的延续性较强</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">合作程度很高，完全基于BIM模型进行交付和沟通</el-radio>
            </el-row>
          </el-radio-group>
        </el-form-item> 
        <el-form-item class="long-item" label="C33、基于BIM的工作效率评价" prop="q33"
          :rules="{required: true, message: '请选择基于BIM的工作效率评价', trigger: 'blur,change'}">
          <el-radio-group v-model="form.q33">
            <el-row :gutter="20">
              <el-radio label="1">很低（主要看工期、工作效果和减少的工作错误）</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="2">比较低</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="3">一般</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="4">比较高</el-radio>
            </el-row>
            <el-row :gutter="20">
              <el-radio label="5">很高（明显缩短工期，减少较多错误， 项目完成质量较高)</el-radio>
            </el-row>
          </el-radio-group>
        </el-form-item> 
        <el-form-item label="C34、参加过何种BIM推广活动" prop="q34"
         :rules="{required: true, message: '请至少选择一项参加过何种BIM推广活动', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q34">
            <el-checkbox label="1" name="q34">BIM大赛</el-checkbox>
            <el-checkbox label="2" name="q34">BIM论坛/研讨会/交流会/宣贯会</el-checkbox>
            <el-checkbox label="3" name="q34">BIM相关的专业委员会</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="C35、BIM项目的实施获奖情况" prop="q35"
         :rules="{required: true, message: '请至少选择一项BIM项目的实施获奖情况', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q35">
            <el-checkbox label="1" name="q35">国家级奖项</el-checkbox>
            <el-checkbox label="2" name="q35">省部级奖项</el-checkbox>
            <el-checkbox label="3" name="q35">行业级奖项</el-checkbox>
            <el-checkbox label="4" name="q35">其他</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item class="long-item" label="C36、BIM实施中遇到的困难" prop="q36"
          :rules="{required: true, message: '请至少选择一项BIM实施中遇到的困难', trigger: 'blur,change'}">
          <el-checkbox-group v-model="form.q36">
            <el-row :gutter="20">
               <el-checkbox label="1" name="q36">建设单位BIM认知程度不高</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
               <el-checkbox label="2" name="q36">行业内缺乏统一的BIM标准和规范指导</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
               <el-checkbox label="3" name="q36">公司及相关项目的BIM工程师缺乏专业技术知识</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
               <el-checkbox label="4" name="q36">BIM培训机构课程难以满足BIM应用要求</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
               <el-checkbox label="5" name="q36">缺乏类似项目BIM应用的成功案例借鉴</el-checkbox>
            </el-row>
            <el-row :gutter="20" class="item">
               <el-checkbox label="6" name="q36">企业高层管理人员不重视BIM技术应用能力建设</el-checkbox>
            </el-row>
          </el-checkbox-group>
      </el-form-item>
        <el-form-item class="submit-q">
              <el-button type="primary" @click="onSubmit('form')">提交</el-button>
            </el-form-item>
      </el-form>
    </div>
    <div class="lty-footer">
      林同棪国际工程咨询(中国)有限公司&nbsp;&nbsp;&nbsp;版权所有©2018 
    </div>
  </div>
</template>

<script>
  export default {
        data() {
      return {
        form: {
          q0: '0',
          q1: '0',
          q2: '',
          q3: '',
          q4: [],
          q5: '',
          q6: '',
          q7: '',
          q8: '',
          q9: '',
          q10: '',
          q11: [],
          q12: '',
          q13: '',
          q14: '',
          q15: [],
          q16: '',
          q17: [],
          q18: [],
          q19: '',
          q20: '',
          q21: '',
          q22: '',
          q23: '',
          q24: '',
          q25: '',
          q26: [],
          q27: [],
          q28: [],
          q29: '',
          q30: [],
          q31: '',
          q32: '',
          q33: '',
          q34: [],
          q35: [],
          q36: []
        }
      }
    },
    created(){

    },
    methods:{
      onSubmit(form) {
        var _this = this;
        this.$refs[form].validate((valid) => {
          if (valid) {
            if(this.form.q0 == '0' && this.form.q1 == '0'){
              this.$message.error('所属部门和分公司必须选择一项！！');
              return false;
            } else if (this.form.q0 != '0' && this.form.q1 != '0'){
              this.$message.error('所属部门和分公司只能选择一项！！');
              return false;
            }else {
              this.$http.post("/survey",this.form).then(function(res){
              var msg = res.body
              if(msg.success){
                  sessionStorage.setItem('user',form)
                   _this.$message({
                    message: '提交成功！',
                    type: 'success',
                    duration:2000
                    });
              }else{
                _this.$message({
                  message: msg.message,
                  type: 'error',
                  duration:2000
                });
              }
            }); 
            }

          } else {
            this.$message.error('请检查是否所有都已填写完毕！！');
            return false;
          }
        });
      },

    },
    components:{

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 95%;
  background-color: #f2f6fc;
  margin: 0 auto;
  padding: 2px 0;
  border-radius: 10px;
}
.header {
  display: inline-block;
  width: 100%;
  height: 100px;
  font-size: 18px;
}
.header img {
  position: absolute;
  margin-left: 45px;
  margin-top: 27px;
}
.header div {
  text-align: center;
}
.header .language-en {
  margin-bottom: 10px;
  font-size: 14px;
  margin-top: 5px;
}
.header .language-ch {
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
}
.el-form-item {
    margin-bottom: 9px;
}
.el-form {
  margin-top: 30px;
}
.input-year .el-input {
  width: 293px;
}
.el-select {
  width: 293px;
}
.long-item .el-radio-group {
  margin-left: 10px;
}
.long-item .el-row {
  margin-bottom: 5px;
}
.el-form-item__label {
  font-weight: bold;
}
.lty-footer{
  color: #666;
  font-size: 14px;
  text-align: center;
  padding: 40px 0;
}
.submit-q {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.submit-q .el-button {
  padding: 12px 28px;
  margin-right: 307px;
}
.el-form-item:nth-child(2n){
  background: #b9e8f3;
}
.el-form-item:last-child {
  background: #f2f6fc;
}
.item {
  margin-left: 0 !important;
}
.remind {
  margin-left: 326px;
  color: #fd0505;
}
</style>