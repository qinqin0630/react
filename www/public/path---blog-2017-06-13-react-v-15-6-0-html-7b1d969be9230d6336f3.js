webpackJsonp([63821414865689],{"./node_modules/json-loader/index.js!./.cache/json/blog-2017-06-13-react-v-15-6-0-html.json":function(e,t){e.exports={data:{markdownRemark:{html:'<p>今天我们发布了 React 15.6.0。由于我们在准备React 16.0，因此我们修复和清理了许多东西。此次发布将继续为后续铺路。</p>\n<h2 id="提升inputs"><a href="#%E6%8F%90%E5%8D%87inputs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>提升Inputs</h2>\n<p>在React 15.6.0，输入框的<code>onChange</code>事件稍微可靠了点并能够处理更多边界条件，涵盖以下：</p>\n<ul>\n<li>当单选按钮被点击但未改变时事件未触发（<a href="https://github.com/facebook/react/issues/1471">issue 1471</a>）</li>\n<li>用方向键（arrow keys）修改<code>范围（range）</code>类型的输入框（<a href="https://github.com/facebook/react/issues/554">issue 554</a>）</li>\n<li>在IE 11复制文本到文本框中（<a href="https://github.com/facebook/react/issues/7211">issue 7211</a>）</li>\n<li>在IE 11自动填充（<a href="https://github.com/facebook/react/issues/6614">issue 6614</a>）</li>\n<li>在IE 11中通过’x’键或右键’删除’清空输入框（<a href="https://github.com/facebook/react/issues/6822">issue 6822</a>）</li>\n<li>在IE 11中渲染输入框中已存在字符时事件未触发（<a href="https://github.com/facebook/react/issues/2185">issue 2185</a>）</li>\n</ul>\n<p>感谢<a href="https://github.com/jquense">Jason Quense</a>以及其他帮助解决上述问题和提出PR的各位。</p>\n<h2 id="更少嘈杂的弃用警告"><a href="#%E6%9B%B4%E5%B0%91%E5%98%88%E6%9D%82%E7%9A%84%E5%BC%83%E7%94%A8%E8%AD%A6%E5%91%8A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更少嘈杂的弃用警告</h2>\n<p>我们还为之后的弃用引入了一系列新的警告。这些并不会影响大多数用户，更多细节可以查看下面的修改日志。</p>\n<p>自上次发布之后，我们从社区得到了一些有价值的反馈，弃用警告会产生噪音并使得测试失败。<strong>在React 15.6，我们采用<code>console.warn</code>而不是<code>console.error</code>来对弃用警告进行降级处理</strong>。我们的其他警告将仍使用<code>console.error</code>因为他们面对的可能是引发异常的棘手问题。不同于我们其他警告，弃用警告可以延期修复并且不会在发布环节对你的引用造成问题。我们认为降低弃用警告的紧急程度将会让你在下个版本的升级中更为容易。感谢参与这一问题讨论的各位。</p>\n<hr>\n<h2 id="安装"><a href="#%E5%AE%89%E8%A3%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装</h2>\n<p>我们推荐使用 <a href="https://yarnpkg.com/">Yarn</a> 或 <a href="https://www.npmjs.com/">npm</a> 来管理前端依赖。若你是初次接触包管理器，<a href="https://yarnpkg.com/en/docs/getting-started">Yarn 文档</a>是一个不错的起点。</p>\n<p>通过 Yarn 安装 React，运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add react@^15.6.0 react-dom@^15.6.0\n</code></pre>\n      </div>\n<p>通过 npm 安装 React，运行：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save react@^15.6.0 react-dom@^15.6.0\n</code></pre>\n      </div>\n<p>我们推荐如 <a href="https://webpack.js.org/">webpack</a> 或 <a href="http://browserify.org/">Browserify</a> 打包器，以让你可以编写模块化代码并将其打包到一起放在一个小的包内以优化加载时间。</p>\n<p>记住默认情况下，React 在开发模式下运行会带有额外检查并提供有用的警告。当部署你的应用时，确保其<a href="/react/docs/installation.html#development-and-production-versions">在生产模式编译</a>。</p>\n<p>万一你未使用打包器，我们也提供了一个预先构建好的包在npm上，你可以在你的页面中<a href="/react/docs/installation.html#using-a-cdn">通过script标签引入</a>：</p>\n<ul>\n<li><strong>React</strong><br/>\n带警告的开发版本: <a href="https://unpkg.com/react@15.6.0/dist/react.js">react/dist/react.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react@15.6.0/dist/react.min.js">react/dist/react.min.js</a><br/></li>\n<li><strong>React with Add-Ons</strong><br/>\n带警告的开发版本: <a href="https://unpkg.com/react@15.6.0/dist/react-with-addons.js">react/dist/react-with-addons.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react@15.5.0/dist/react-with-addons.min.js">react/dist/react-with-addons.min.js</a><br/></li>\n<li><strong>React DOM</strong> (页面中在React DOM之前引入React) <br/>\n带警告的开发版本: <a href="https://unpkg.com/react-dom@15.6.0/dist/react-dom.js">react-dom/dist/react-dom.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react-dom@15.6.0/dist/react-dom.min.js">react-dom/dist/react-dom.min.js</a><br/></li>\n<li><strong>React DOM Server</strong> (页面中在 React DOM Server 之前引入 React)<br/>\n带警告的开发版本: <a href="https://unpkg.com/react-dom@15.6.0/dist/react-dom-server.js">react-dom/dist/react-dom-server.js</a><br/>\n用于生产的压缩版本: <a href="https://unpkg.com/react-dom@15.6.0/dist/react-dom-server.min.js">react-dom/dist/react-dom-server.min.js</a><br/></li>\n</ul>\n<p>我们还在 npm 上发布了 <code>react</code>，<code>react-dom</code> 及附件包的<code>15.6.0</code> 版本以及在bower上的 <code>react</code> 包。</p>\n<hr>\n<h2 id="修改日志"><a href="#%E4%BF%AE%E6%94%B9%E6%97%A5%E5%BF%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>修改日志</h2>\n<h2 id="1560-june-13-2017"><a href="#1560-june-13-2017" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>15.6.0 (June 13, 2017)</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>采用<code>console.warn</code>而不是<code>console.error</code>来降级处理弃用警告。(<a href="https://github.com/flarnie">@flarnie</a> 在 <a href="https://github.com/facebook/react/pull/9753">#9753</a> 的提交)</li>\n<li>为<code>React.createClass</code>增加弃用警告。将用户指向<code>create-react-class</code>。(<a href="https://github.com/flarnie">@flarnie</a> 在 <a href="https://github.com/facebook/react/pull/9771">#9771</a> 的提交)</li>\n<li>增加弃用警告并为<code>React.DOM</code>工厂辅助方法分离为新模块。(<a href="https://github.com/nhunzaker">@nhunzaker</a> 在 <a href="https://github.com/facebook/react/pull/8356">#8356</a> 的提交)</li>\n<li><code>React.createMixin</code>的弃用警告辅助方法将不再使用。(<a href="https://github.com/aweary">@aweary</a> 在 <a href="https://github.com/facebook/react/pull/8853">#8853</a> 的提交)</li>\n</ul>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>在<code>style</code>属性中增加CSS变量支持。 (<a href="https://github.com/aweary">@aweary</a> 在 <a href="https://github.com/facebook/react/pull/9302">#9302</a> 的提交)</li>\n<li>增加CSS网格(Grid)样式属性支持。(<a href="https://github.com/ericsakmar">@ericsakmar</a> 在 <a href="https://github.com/facebook/react/pull/9185">#9185</a> 的提交)</li>\n<li>修复输入框改变可变值类型异常。(<a href="https://github.com/mhunzaker">@nhunzaker</a> 在 <a href="https://github.com/facebook/react/pull/9806">#9806</a> 的提交)</li>\n<li>修复在某些输入场景下<code>onChange</code>未触发的问题。(<a href="https://github.com/jquense">@jquense</a> 在 <a href="https://github.com/facebook/react/pull/8575">#8575</a> 的提交)</li>\n<li>修复控制数字输入框错误允许期间的异常。(<a href="https://github.com/nhunzaker">@nhunzaker</a> 在 <a href="https://github.com/facebook/react/pull/9584">#9584</a> 的提交)</li>\n<li>修复性能记录(performance entry)被清除的bug。(<a href="https://github.com/chrisui">@chrisui</a> 在 <a href="https://github.com/facebook/react/pull/9451">#9451</a> 的提交)</li>\n</ul>',excerpt:"今天我们发布了 React 15.6.0。由于我们在准备React 16.0，因此我们修复和清理了许多东西。此次发布将继续为后续铺路。 提升Inputs 在React 15.6.0，输入框的 事件稍微可靠了点并能够处理更多边界条件，涵盖以下： 当单选按钮被点击但未改变时事件未触发（ issue 1471 ） 用方向键（arrow keys）修改 类型的输入框（ issue 554 ） 在IE 11复制文本到文本框中（ issue 7211 ） 在IE 11自动填充（ issue 6614 ） 在IE 11中通过’x’键或右键’删除’清空输入框（ issue 6822 ） 在IE 11中渲染输入框中已存在字符时事件未触发（ issue 2185 ） 感谢 Jason Quense 以及其他帮助解决上述问题和提出PR的各位。 更少嘈杂的弃用警告 我们还为之后的弃用引入了一系列新的警告。这些并不会影响大多数用户，更多细节可以查看下面的修改日志。 自上次发布之后，我们从社区得到了一些有价值的反馈，弃用警告会产生噪音并使得测试失败。 在React 15.…",frontmatter:{title:"React v15.6.0",next:null,prev:null,author:[{frontmatter:{name:"Flarnie Marchan",url:"https://twitter.com/ProbablyFlarnie"}}]},fields:{date:"June 12, 2017",path:"_posts/2017-06-13-react-v15.6.0.md"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}}});
//# sourceMappingURL=path---blog-2017-06-13-react-v-15-6-0-html-7b1d969be9230d6336f3.js.map