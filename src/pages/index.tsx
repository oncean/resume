import React from 'react';
import styles from './index.less';
import Panel from './components/Panel';
import Dot from './components/Dot';
import Project from './components/Project';
import Company from './components/Company';
import Tab from './components/Tab';
import TopInfo from './TopInfo';
import { widthPadding, commonPadding } from './Constants';

export default () => {
  return (
    <div
      style={{
        width: 800,
        margin: 'auto',
        color: '#333',
        lineHeight: '25px',
        fontFamily: 'Microsoft YaHei',
      }}
    >
      <div
        style={{
          paddingRight: widthPadding,
          paddingLeft: widthPadding,
          paddingBottom: commonPadding / 2,
        }}
      >
        <div
          className={styles.colorFont}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          PERSONAL RESUME
        </div>
        {/* <div>热爱编程</div> */}
      </div>

      <TopInfo />

      <div
        style={{
          paddingLeft: widthPadding,
          paddingRight: widthPadding,
        }}
      >
        <Panel title="专业技能">
          <Dot>
            5年JAVA开发经验，熟悉前后端多种技术，在工作中能够高效沟通并解决问题。
          </Dot>
          <Dot>
            熟悉SpringBoot、Spring Security、MyBatis，了解docker、Docker-compose等技术。
          </Dot>
          <Dot>
            熟悉SpringCloud，了解nacos、gateway、openFeign、Kafka、Zookeeper等相关组件。
          </Dot>
          <Dot>熟悉java多线程开发，熟悉redis、mysql等数据库，熟练编写sql脚本。</Dot>
          <Dot>
            熟练使用Vue、React、JS、TypeScript等前端开发语言。
          </Dot>
          <Dot>熟练使用Git、熟悉常用的Shell命令。</Dot>
        </Panel>
        <Panel title="工作经验">
          <Company
            time="2019.05-至今"
            job="开发工程师"
            company="亚信科技有限公司"
          />
          <Company
            time="2016.07-2019.05"
            job="开发工程师"
            company="中软国际有限公司"
          />
        </Panel>

        <Panel title="项目经验" top={0}>
          <Project time="2019.05-至今" name="CEM 客户体验管理系统">
            <Tab name="项目描述">
              为了满足 5G
              业务、政企客户满意度、家宽满意度、客服投诉等场景的需要，客户体验管理系统应用
              大数据与人工智能技术，拉通融合 OSS/BSS
              域数据，生成分析后的数据，进行图表绘制和展示。
            </Tab>
            <Tab name="系统框架">
              后端采用SpringCloud相关组件，包括SpringGateway、Nacos、SpringSecurity、openFeign、mysql、kafka等。
              前端采用 vue 框架；
            </Tab>
            <Tab name="个人职责">
              <Dot>
                设计系统权限框架，通过用户-角色-权限的关联方式实现权限动态配置。
              </Dot>
              <Dot>
                负责客户仪表盘业务，展示客户信息、客户满意度仪表盘，搭建redis集群，缓存客户信息，加快下一次用户查询客户信息的响应。
              </Dot>
              <Dot>
                集成SpringSecurity
                OAuth2.0，自定义用户登录验证，实现前后端分离；
                阅读源码接口，解決资源服务器无法获取内置权限的问题。
              </Dot>
              <Dot>
                使用Spring Cloud Stream集成Kafka作为消息中间件，接受IPO团队收集推送的网络数据。
              </Dot>
              <Dot>
                构建前端vuecli开发框架，封装axios网络请求组件，实现网络请求统一拦截管理，对异常场景统一处理，
                设计接口，实现加载可配置。
              </Dot>
              <Dot>
                参与前后台业务开发，编写多个局点业务。
              </Dot>
            </Tab>
          </Project>
          <Project time="2018.04-2019.05" name="华为云风控系统">
            <Tab name="项目描述">
              华为云为客户提供稳定可靠、安全可信、可持续演进的云服务，风控系统主要通过分
              析用户画像，有效阻止黑产用户的非法操作
            </Tab>
            <Tab name="系统框架">
              前台采用 tinyUi 框架，华为对于 angularjs 封装的一套 ui
              框架,使用echatrs作为图表组件；服务部署使用云龙系统，后台使用微服务架构，各个微服务所使用的技术不一致，
              包括 springboot、spring、springjpa、mybatis等；
              使用缓存 redis、消息队列 kafka 等
            </Tab>
            <Tab name="个人职责">
              <Dot>
                搭建打标签基础服务，数据库用到PostgreSql,加入多线程任务调度，批量处理任务，构造用户画像。
              </Dot>
              <Dot>
                集群消费kafka登录消息，将用户登录行为写入数据库，包括ip、手机号，标签等信息。
              </Dot>
              <Dot>
                参与前后台业务开发，包括菜单权限功能的设计开发、现网问题的定位与修改。
              </Dot>
              <Dot>
                负责团队的日常管理工作，包括需求分配、验收、进度管控等。
              </Dot>
            </Tab>
          </Project>
          <Project time="2017.04-2018.04" name="合作伙伴系统">
            <Tab name="项目描述">主要做合作伙伴计划，合作
              合作伙伴系统主要帮助客户设计、架构、搭建、迁移和管理其工作负载和应用程序；
            </Tab>
            <Tab name="系统框架">
              前台采用 tinyUi 框架，后台使用微服务架构，，
              使用华为云龙系统进行服务部署，管理，各个微服务所使用的技术不一致，后端服务包括 springboot、spring、springjpa、mybatis等。
            </Tab>
            <Tab name="个人职责">
              <Dot>
                负责合作伙伴中心服务，包括签约、分发。
              </Dot>
              <Dot>
                负责与客户域进行对账，并对对账单进行处理。
              </Dot>
              <Dot>
                参与前后台业务开发，包括菜单权限功能的设计开发、现网问题的定位与修改。
              </Dot>
            </Tab>
          </Project>
          <Project time="2016.07-2017.04" name="华为 inTouch 系统">
            <Tab name="项目描述">
              本项目主要做华为企业云合作伙伴管理，是华为企业云系统的合作伙伴域，为系统提供合作伙伴信
              息管理，包括合作伙伴注册、登录以及签约管理。
            </Tab>
            <Tab name="系统框架">
              前台采用 angularjs 开发；后台使用SpringMVC；使用缓存
              redis、数据库oracle等
            </Tab>
            <Tab name="个人职责">
              <Dot>负责前后台业务编写。</Dot>
              <Dot>负责现网问题的定位与修改。</Dot>
            </Tab>
          </Project>
        </Panel>

        <Panel title="教育经历" top={0}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bolder',
            }}
          >
            <div>2012.9-2016.7</div>
            <div>沈阳工业大学/一本(统招)</div>
            <div>计算机科学与技术</div>
          </div>
          <div>
            主修课程：JAVA、C语言、C++、数据库、计算机网络、网络安全等。
          </div>
        </Panel>

        <Panel title="自我评价">
          <Dot>工作认真，有良好的团队合作精神，能迅速融入团队。</Dot>
          <Dot>具有较强的责任感，具有一定的管理经验。</Dot>
          <Dot>喜欢钻研新的技术，具有较强的自学能力。</Dot>
          <Dot>熟悉端到端开发，熟悉软件开发流程。</Dot>
        </Panel>
      </div>
    </div>
  );
};
