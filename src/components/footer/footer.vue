<template>
    <div id="footer">
        <div class="footer-contant">
            <div class="footer-contant-container">
                <div class="contant-left">
                    <h3>金数据</h3>
                    <p>金数据是人人可用的在线表单工具，帮助用户收集和管理日常工作中的数据，提升工作效率。任何行业和岗位的人员，无需特殊技能，都可以方便的创建出符合业务需求的表单。</p>
                    <span>客服电话: 400-623-1935</span>
                    <span>客户服务: <a href="#">support@jinshuju.net</a></span>
                </div>
                <ul class="contant-list">
                    <li>
                        <dl>
                            <dt>产品</dt>
                            <dd><a href="#">功能介绍</a></dd>
                            <dd><a href="#">最近更新</a></dd>
                            <dd><a href="#">开放平台</a></dd>
                            <dd><a href="#">手机APP</a></dd>
                            <dd><a href="#">小程序</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>资源中心</dt>
                            <dd><a href="#">帮众中心</a></dd>
                            <dd><a href="#">产品博客</a></dd>
                            <dd><a href="#">模板中心</a></dd>
                            <dd><a href="#">使用手册</a></dd>
                            <dd><a href="#">金数据直播间</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>公司</dt>
                            <dd><a href="#">关于我们</a></dd>
                            <dd><a href="#">合作伙伴</a></dd>
                            <dd><a href="#">社会责任</a></dd>
                            <dd><a href="#">使用条款</a></dd>
                            <dd><a href="#">隐私保护</a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>语言</dt>
                            <dd><a href="#" class="on">简体中文</a></dd>
                            <dd><a href="#">繁體中文</a></dd>
                            <dd><a href="#">English</a></dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-bottom-container">
                <p>@金数据 2012~2018 | 京ICP备15055499号-1 | 京公网安备11010802022633号</p>
                <div>
                    <a href="#">关注微博</a>
                    <a href="#" class="wx" data="toogtip">微信公众号
                        <div class="myTooltip">
                            <img src="./images/wechat-qrcode-b99a1ea2cb6c43ac6ab7df6efad047b45b4340276f0c824cf661cb26586714e8.jpg" alt="">
                            <p>关注金数据微信公众账号</p>
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './css/css'
export default {
  mounted() {
    (function(){
        $('.wx').tooltip({
            selector:'.myTooltip',
            delay:{
                hide:1000
            }
        });
    })()
  }
}
</script>

<style>

</style>
