import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './../components/home/home';
import Nps from './../components/nps/nps';
import Education from './../components/education/education';
import Medical from './../components/medical/medical';
import Wedding from './../components/wedding/wedding';
import System from './../components/system/system';
import Activities from './../components/activities/activities';
import Examination from './../components/examination/examination';
import Research from './../components/research/research';
import Collection from './../components/collection/collection';
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            name:'home',
            path:'/',
            component:Home
        },
        {
            name:'nps',
            path:'/nps',
            component:Nps
        },
        {
            name:'education',
            path:'/education',
            component:Education
        },
        {
            name:'medical',
            path:'/medical',
            component:Medical
        },
        {
            name:'wedding',
            path:'/wedding',
            component:Wedding
        },
        {
            name:'system',
            path:'/system',
            component:System
        },
        {
            name:'activities',
            path:'/activities',
            component:Activities
        },
        {
            name:'examination',
            path:'/examination',
            component:Examination
        },
        {
            name:'research',
            path:'/research',
            component:Research
        },
        {
            name:'collection',
            path:'/collection',
            component:Collection
        }
        
    ]
});