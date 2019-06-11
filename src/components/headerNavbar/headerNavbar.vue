<template>
    <div id="header-navbar">
        <div class="Curtain"></div>
        <div class="navbar  navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target="#myCollapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand navbarBrand" @click="goTo('home')"><span>金数据</span></a>
                </div>
                <div id="myCollapse" class="collapse navbar-collapse" aria-expanded="false">
                    <ul class="nav navbar-nav">
                        <li class="navbarNavList dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownBtn">产品<span class="glyphicon glyphicon-menu-down"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <ul>
                                        <li>
                                            <a href="#">产品的功能
                                                <span>强大的产品功能，帮你提升数据价值</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <a href="#" @click="goTo('nps')">NPS
                                                <span>强大的产品功能，帮你提升数据价值</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="navbarNavList"><a href="#" id="dropdownBtn">企业版</a></li>
                        <li class="navbarNavList dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdownBtn">解决方案<span class="glyphicon glyphicon-menu-down"></span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <span>行业</span>
                                    <ul>
                                        <li>
                                            <a href="#" @click='goTo("education")'>教育培训
                                                <span>轻松搭建信息化教育平台，实现从0到1的突破</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click='goTo("medical")'>医疗健康
                                                <span>赋能医院业务人员，解决医院数据管理难题</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click='goTo("wedding")'>婚纱摄影
                                                <span>专业获客工具，实现在线品牌搭建</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="goTo('system')">灵活自由的搭建业务IT系统
                                                <span>灵活自由的搭建业务系统，快速响应企业需求</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>场景</span>
                                    <ul>
                                        <li>
                                            <a href="#" @click="goTo('activities')">活动报名
                                                <span>营销活动利器，从此告别繁琐的活动策划</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="goTo('examination')">在线考试
                                                <span>在线考试、自动评分，考试场景下领先效率的制胜法宝</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="goTo('research')">问卷调研
                                                <span>用表单快速在公众号、朋友圈发布你的问卷调研</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="goTo('collection')">在线收款
                                                <span>在线收款，安全稳定，急速到账</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="navbarNavList"><a href="#" id="dropdownBtn">模板</a></li>
                        <li class="navbarNavList"><a href="#" id="dropdownBtn">内容中心</a></li>
                        <li class="navbarNavList"><a href="#" id="dropdownBtn">价格</a></li>
                    </ul>
                </div>
                <div class="nav navbar-nav navbarBtnGroup" id="navbarBtnGroup">
                    <a href="#">登录</a>
                    <button type="submit" class="btn btn-default">免费注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './styles/css';
export default {
    data:()=>({
        dropdownSwithch:false
    }),
    methods: {
        goTo(name){
            this.$router.push({name:name});
        }
    },
    mounted(){
        $('#dropdownBtn').css('background-color', 'rgba(0,0,0,0)');
        $('.navbar-header .navbar-toggle').css('background-color', '#fff');
        $('.navbar-header .navbar-toggle').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $('.Curtain').css('display','block');
            $('#myCollapse').addClass('in').attr('aria-expanded', 'true');
        });
        $('#myCollapse').click(function (e) { 
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('in').attr('aria-expanded', 'true');
        });
        $(document).click(function(e){
            e.preventDefault();
            $('#myCollapse').removeClass('in').attr('aria-expanded', 'false');
            $('.Curtain').css('display','none');
        })
        $('#myCollapse>ul>li').click(function(){
            if(this.dropdownSwithch){
                $(this.getElementsByClassName('dropdown-menu')).hide();
                this.dropdownSwithch=false;
            }else{
                $(this.getElementsByClassName('dropdown-menu')).show();
                this.dropdownSwithch=true;
            }
        });
        $(window).scroll(function (e) { 
            if($(this).scrollTop()>0){
                $('#header-navbar .navbar-fixed-top').css({backgroundColor:'#fff',boxShadow:'0 2px 4px 0 rgba(0,0,0,0.1)'});
            }
            else{
                $('#header-navbar .navbar-fixed-top').css({backgroundColor:'rgba(0,0,0,0)',boxShadow:'none'});
            }
        });
    }
}
</script>

<style>

</style>
