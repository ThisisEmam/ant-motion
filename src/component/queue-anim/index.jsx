import React from 'react';
import Highlight from '../Highlight';
import DemoLayout, { Item } from '../DemoLayout';

import Basic from './demo/basic';
import Enter from './demo/enter-leave';

class QueueAnimDemo extends React.Component {
  getStyle() {
    return `<style>
.code-box-demo .demo-header {
  width: 100%;
  background: #ebedee;
  height: 30px;
}
.code-box-demo .demo-header ul {
  float: right;
  margin-right: 5px;
}
.code-box-demo .demo-header ul li {
  width: 50px;
  height: 30px;
  float: left;
  background: #e4e4e4;
  margin-left: 5px;
}
.code-box-demo .demo-header ul li:before {
  margin: 10px auto;
  width: 20px;
  height: 10px;
  background: #ebeded;
}
.code-box-demo .demo-header .logo {
  float: left;
  margin: 0px auto 0 10px;
  line-height: 32px;
}
.code-box-demo .demo-header .logo img{
  margin:auto
}
.code-box-demo .demo-header .logo span {
  display: block;
  float: right;
}
.code-box-demo .demo-content {
  width: 100%;
  margin: 10px auto;
}
.code-box-demo .demo-content .demo-title {
  text-align:left;
  background: #a4a4a4;
  width: 40%;
  height: 20px;
  line-height: 20px;
  color: #ebeded;
  text-indent:10px
}
.code-box-demo .demo-content .demo-listBox {
  margin-top: 10px;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title {
  height: 30px;
  background: #cacaca;
  overflow: hidden;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title:before,
.code-box-demo .demo-content .demo-listBox .demo-list .title:after{
  width: 30%;
  height: 5px;
  background: #ebeded;
  float:left;
  margin:12px 35px 0;
}
.code-box-demo .demo-content .demo-listBox .demo-list .title:after{
  width:15%;
  float:right;
  margin:12px 10px 0;

}
.code-box-demo .demo-content .demo-listBox .demo-list ul li {
  height: 25px;
  background: #ebeded;
  border-bottom: 1px solid #cacaca;
  overflow: hidden;
  padding: 5px 15px;
}
.code-box-demo .demo-content .demo-listBox .demo-list ul li:before {
  width: 10px;
  height: 5px;
  background: #cacaca;
  float: left;
  margin-top:4px
}
.code-box-demo .demo-content .demo-listBox .demo-list ul li:after {
  width: 50%;
  height: 5px;
  background: #cacaca;
  float: left;
  margin-left: 10px;
  margin-top: 4px;
}
.code-box-demo .demo-content .demo-kp {
  margin: 10px auto;
}
.code-box-demo .demo-content .demo-kp ul li {
  display: inline-block;
  width: 32%;
  height: 40px;
  background: #cacaca;
  color: #ebeded;
  text-align: left;
  padding: 10px;
  margin-right: calc(2%);
}
.code-box-demo .demo-content .demo-kp ul li:last-child {
  margin-right: 0%;
}
.code-box-demo .demo-content .demo-kp ul li:after {
  width: 60%;
  height: 5px;
  background: #ebeded;
  float: left;
  margin-top: 7px;
}
.code-box-demo .demo-content .demo-kp ul li:before {
  background: #ebeded;
  float: left;
  width: 15px;
  height: 15px;
  margin:2px 10% 0 0;

}
.code-box-demo .demo-footer {
  margin-top: 10px;
  background: #cacaca;
  height: 40px;
  float: left;
  width: 100%;
  display: table;
}
.code-box-demo .demo-footer:before {
  width: 60%;
  height: 5px;
  background: #ededed;
  margin: 10px auto 0;
}
.code-box-demo .demo-footer:after {
  width: 30%;
  height: 5px;
  background: #ededed;
  margin: 5px auto;
}
.code-box-demo .demo-header ul li:before,
.code-box-demo .demo-content .demo-kp ul li:before,
.code-box-demo .demo-content .demo-kp ul li:after,
.code-box-demo .demo-content .demo-listBox .demo-list .title:before,
.code-box-demo .demo-content .demo-listBox .demo-list .title:after,
.code-box-demo .demo-content .demo-listBox .demo-list ul li:before,
.code-box-demo .demo-content .demo-listBox .demo-list ul li:after,
.code-box-demo .demo-footer:before,
.code-box-demo .demo-footer:after {
  display: block;
  content: "";
}
</style>`;
  }

  render() {
    return (<div>
      <style dangerouslySetInnerHTML={{ __html: this.getStyle() }}></style>
      <h1>QueueAnim 进出场动画</h1>
      <iframe key="github-btn"
        src="https://ghbtns.com/github-btn.html?user=react-component&repo=queue-anim&type=star&count=true"
        frameBorder="0" scrolling="0" width="98px" height="20px"
      />
      <p>通过简单的配置对一组元素添加串行的进场动画效果。</p>
      <h2>何时使用</h2>
      <ul className="list">
        <li>从内容A到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。</li>
        <li>小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来凸显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感。</li>
        <li>特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。</li>
      </ul>
      <h2>怎么使用</h2>
      <h3>安装</h3>
      <div>
        <Highlight className="bash">
          {"$ npm install rc-queue-anim --save"}
        </Highlight>
      </div>
      <h3>使用</h3>
      <div>
        <Highlight>
          {`import QueueAnim from 'rc-queue-anim';
ReactDOM.render(<QueueAnim>
  <div key="demo1">依次进场</div>
  <div key="demo2">依次进场</div>
  <div key="demo3">依次进场</div>
  <div key="demo4">依次进场</div>
</QueueAnim>, mountNode);`}
        </Highlight>
      </div>
      <blockquote>
        <p>每个子标签必须带 key，如果未设置 key 将不执行动画。</p>
      </blockquote>
      <h2>示例</h2>
      <DemoLayout col="12">
        <Item title={Basic.title} content={Basic.content} code={Basic.mdString}>
          <Basic.Comp />
        </Item>
        <Item title={Enter.title} content={Enter.content} code={Enter.mdString}>
          <Enter.Comp />
        </Item>
      </DemoLayout>
    </div>);
  }
}

export default QueueAnimDemo;
