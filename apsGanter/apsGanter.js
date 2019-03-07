import Konva from 'konva';
import Moment from 'moment';

var srollbox = document.querySelector('.srollbox');
var d1 = document.querySelector('#d1');
var d3 = document.querySelector('#d3');
var d7 = document.querySelector('#d7');
var d14 = document.querySelector('#d14');
var d30 = document.querySelector('#d30');
var width = srollbox.offsetWidth;
var height = srollbox.offsetHeight;

function f(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        var s = `2019-02-${Math.floor(Math.random() * 10) + 1} 00:00:00`;
        var e = new Date(new Date(s).getTime() + 1000 * 60 * 60 * 24);
        let o = {
            "id": "d924c076f84049bd98b04ce23420d788",
            "name": "MO-测订单完成010012-SCW-30-30",
            "from": s,
            "to": e,
            "color": "-webkit-linear-gradient(left, rgba(59, 92, 248, 1), rgba(59, 92, 248, 0.4))",
            "moStatusColor": "-webkit-linear-gradient(left, rgba(59, 92, 248, 1), rgba(59, 92, 248, 0.4))",
            "moAheadDelayColor": "-webkit-linear-gradient(left, rgba(217, 216, 216, 1), rgba(217, 216, 216, 0.4))",
            "moKitColor": "-webkit-linear-gradient(left, rgba(170, 19, 19, 1), rgba(170, 19, 19, 0.4))",
            "resCode": "PCY1CY0003",
            "progress": {
                "percent": 0,
                "color": "#00CD00"
            },
            "dependencies": [],
            "tempDependencies": [
                {
                    "to": "abddafc6f4304fd7a308759e2ef50156"
                }
            ],
            "priority": 0,
            "movable": true,
            "taskTooltipsContent": {
                "MAKE_ORDER_NUM": "MO-测订单完成010012-SCW-30-30",
                "ITEM_CODE": "12271100002416",
                "DESCRIPTIONS_CN": "侧板 20BMA50007 SPCC T=0.4mm 喷粉 厨具白",
                "DEMAND_DATE": "2019-02-25 19:00:00",
                "MO_QTY": 500,
                "PROJECT_NUMBER": "测订单完成01.1-1",
                "STANDARD_FLAG": "Y"
            },
            "moResCodePriorities": [
                {
                    "Key": "PZZ1KX0001",
                    "Value": (Math.random() * 10)
                },
                {
                    "Key": "PZZ1KX0004",
                    "Value": (Math.random() * 10)
                },
                {
                    "Key": "PZZ1KX0005",
                    "Value": (Math.random() * 10)
                },
            ],
            "visible": true,
        };
        arr.push(o);
    }
    return arr
}

var tasks = f(500);
var ganter = aGanter(Konva);
var stage = ganter.init({
    container: 'container',
    width: width,
    height: height,
    x: .5,
    y: .5
}, '.srollbox', '.outbox', {lazyLoad: true});
ganter.setOption(
    {
        timeRang: '2019/01/21-2019/03/14',
        timeFormat: '14d',
        diagonal: {
            style: {
                rect: {stroke: '#000', strokeWidth: 1},
            }
        },
        xAxis: {
            x: 100,
            cell: {
                height: 50, // 宽根据时间格式自动生成
                rect: {fill: '#c6c6c6', stroke: '#000'},
                text: {align: 'center'},
            },
            height: 50,
            /*  customData: [{
                  name: '工单',
                  width: 100, //表格宽,默认为表格平均
                  style: {
                      rect: {},
                      text: {},
                  },

                  // 自定义xaxisn内容的表格绘画内容
                  /!* formatter:function () {

                   }*!/
              }],*/
            // customData:['工单'],
            // 自定义xaxis的表格绘画内容
            // RECT类 TEXT类 xAxis组 相关信息 xaxis的位置
            /*formatter: function (rect, text, group, dealt, i) {
                console.log(dealt);
            }*/
        },
        yAxis: {
            y: 50,
            cell: {
                width: 100,
                height: 50,
                rect: {
                    fill: '#c6c6c6',
                    stroke: 'black'
                },
                text: {
                    padding: 2,
                    align: 'right',
                },
            },
            /*            customData: [{
                            drawName: true,
                            name: '资源',
                            style: {
                                rect: {
                                    fill: '#ecfdff'
                                },
                                text: {
                                    align: 'center',
                                }
                            },
                            // 自定义yaxis内容的表格绘画内容
                            /!* formatter:function () {

                             }*!/
                        }],*/
            // customData:['资源'],
            data: [
                {
                    drawName: true,
                    name: '总装01-M23',
                    style: { //组名样式可单独定义，组员的样式由cell定义
                        /* rect:{
                          width,
                          height,
                          fill,
                          stroke,
                          strokeWidth,
                         },*/
                        text: {
                            align: 'left',
                        },
                    },
                    children: ['PZZ1KX0001', 'PZZ1KX0002']
                },
                {
                    drawName: true,
                    name: '总装01-M24',
                    style: { //组名样式可单独定义，组员的样式由cell定义
                        /* rect:{
                          width,
                          height,
                          fill,
                          stroke,
                          strokeWidth,
                         },*/
                        text: {
                            align: 'left',
                        },
                    },
                    children: ['PZZ1KX0004', 'PZZ1KX0005', 'PZZ1KX0006']
                },
            ]
            // data:['PZZ1L001', 'PZZ1LX002','PZZ1LX003','PZZ1LX004','PZZ1LX005','PZZ1LX006']//简易模式
        },
        series:
            [
                {
                    belong: '总装01-M23',
                    name: 'PZZ1KX0001',
                    tasks: tasks,
                },
                {
                    belong: '总装01-M23',
                    name: 'PZZ1KX0002',
                    tasks: tasks,
                },
                {
                    belong: '总装01-M24',
                    name: 'PZZ1KX0006',
                    tasks: tasks,
                }
            ],
        onCellDraw(cell, currentTime, offsetTime) {
            let dimension = cell.dimension;
            let originCell = this.series[dimension.od].tasks[dimension.td];
            originCell.from = Moment(currentTime).format('YYYY-MM-DD HH:mm:ss');
            originCell.to = Moment(originCell.to).add(offsetTime, 'ms').format('YYYY-MM-DD HH:mm:ss');
            // originCell.to = new Date(originCell.to.getTime() + offsetTime);
            /*console.log('originCell.from', originCell.from);
            console.log('originCell.to', originCell.to);*/
        }
    }
);
ganter.render();

d14.addEventListener('click', function () {
    ganter.setTimeFormat('14d');
})
d30.addEventListener('click', function () {
    ganter.setTimeFormat('30d');
})
d7.addEventListener('click', function () {
    ganter.setTimeFormat('7d');
})
d3.addEventListener('click', function () {
    ganter.setTimeFormat('3d');
})
d1.addEventListener('click', function () {
    ganter.setTimeFormat('1d');
})


function aGanter(Konva) {
    var toString = Object.prototype.toString;
    // 辅助函数:公共方法和方法定义
    var util = {
        //扩展，首参传ture则为深扩展,参数基本与jq.extend一致
        extend() {
            var args = [].slice.call(arguments);
            if (typeof args[0] === 'boolean' && args[0]) {
                args = args.splice(1);
                var source = args[0];

                for (var i = 1, ii = args.length; i < ii; i++) {
                    recursion(source, args[i]);
                }

                return source;

                function recursion(sr, ex) {
                    var type = undefined;
                    if (ex === undefined) return;
                    if (util.isArray(ex)) {
                        for (var i = 0, ii = ex.length; i < ii; i++) {
                            if (ex.hasOwnProperty(i)) {
                                if (type = isRefType(ex[i])) {
                                    if (sr[i] === undefined) {
                                        if (type === 'object') {
                                            sr[i] = {};
                                        } else {
                                            sr[i] = [];
                                        }
                                    }
                                    recursion(sr[i], ex[i]);
                                } else {
                                    sr[i] = ex[i];
                                }
                            }
                        }
                    } else {
                        for (var key in ex) {
                            if (ex.hasOwnProperty(key)) {
                                if (type = isRefType(ex[key])) {
                                    if (sr[key] === undefined) {
                                        if (type === 'object') {
                                            sr[key] = {};
                                        } else {
                                            sr[key] = [];
                                        }
                                    }
                                    recursion(sr[key], ex[key]);
                                } else {
                                    sr[key] = ex[key];
                                }
                            }
                        }
                    }
                }

                function isRefType(obj) {
                    if (util.isObject(obj)) return 'object';
                    if (util.isArray(obj)) return 'array';
                    return false;
                }

            } else {
                return Object.assign.apply(null, args);
            }
        },
        createDom(params) {
            let dom = document.createElement('div');
            dom.style.cssText = [
                `width:${params.width}px`,
                'height:1px',
                'background-color:transparent',
                'visibility:hidden',
            ].join(';') + ';';
            return dom;
        },
        createLoadDom(params) {
            let dom = document.createElement('div');
            let shadowDom = document.createElement('div');
            let loading = document.createElement('div');
            let text = document.createElement('span');
            dom.style.cssText = [
                `width:${params.width}px`,
                `height:${params.height}px`,
                'text-align:center',
                'position:absolute',
                'top:0',
                'left:0',
                'z-index:9999',
                'display:none',
            ].join(';') + ';';
            shadowDom.style.cssText = [
                'width:100%',
                'height:100%',
                'background-color:rgba(0,0,0,.7)',
            ].join(';') + ';';
            loading.style.cssText = [
                'width:50px',
                'height:50px',
                'background-color:#fff',
                'position:absolute',
                'top:50%',
                'left:50%',
                'border-radius:10px',
                'transform:translateXY(-50%,-50%)',
                'animation: spin 1s linear infinite',
            ].join(';') + ';';
            text.style.cssText = [
                'width:50px',
                'height:50px',
                'text-align:center',
                'color:#000',
                'position:absolute',
                'top:50%',
                'left:50%',
                'font-size:12px',
                'line-height:50px',
                'transform:translateXY(-50%,-50%)',
            ].join(';') + ';';
            text.innerText = 'Loading';
            dom.appendChild(shadowDom);
            dom.appendChild(loading);
            dom.appendChild(text);
            return dom;
        },
        /**
         * 获取X轴时间
         * @param startDate 开始时间
         * @param length 持续时间(h,w,m, h会将时间转为小时，w,m都是转换为天)
         * @param type 类型 day, hour
         */
        calculateDate(startDate, endDate, type, length) {
            var lengthPattern = false;
            if (!endDate) {
                length = length || '2w';
                lengthPattern = true;
                var typeStr = length.slice(-1);
                var len = length.slice(0, -1);
            }
            if (!startDate) {
                console.log('开始日期必传');
            }

            var d, m, y, h, bfDate, bfEDate;
            if (typeStr === 'h') {
                type = 'hour';
            } else {
                type = 'day';
            }
            if (type === 'day') {
                startDate = new Date(startDate);
                bfDate = new Date(startDate);

                d = startDate.getDate();
                m = startDate.getMonth();
                y = startDate.getFullYear();

                if (!lengthPattern) {
                    endDate = new Date(endDate);
                    bfEDate = new Date(endDate)
                    return getDateArr(d, m, y, bfDate, lengthPattern, typeStr, bfEDate);
                }

                return getDateArr(d, m, y, bfDate, len, typeStr);
            } else {

            }

            // 获取天格式
            function getDateArr(d, m, y, bfDate, len, type, bfEDate) {
                var endDay, endDate, dd;
                var str = '-';
                var dateArr = [];
                var weekStr = ['日', '一', '二', '三', '四', '五', '六'];
                var weekStrEn = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
                var dayMs = 24 * 60 * 60 * 1000;
                var weekArr = [];
                var w = bfDate.getDay();

                if (!len) {
                    var i = 0;
                    dd = new Date(startDate);
                    while (dd.getTime() < bfEDate.getTime()) {
                        dd = new Date(startDate.getTime() + dayMs * i);
                        dateArr.push(dd.toLocaleDateString());
                        weekArr.push(weekStr[dd.getDay()]);
                        i++;
                    }
                } else {
                    // 按月获取
                    if (type === 'm') {
                        for (var j = 0; j < len; j++) {
                            if (m > 11) {
                                y += 1;
                                bfDate.setFullYear(y);
                                m = 0;
                                bfDate.setMonth(m);

                            }
                            bfDate.setDate(0);
                            endDay = (new Date(y, m + 1, 0)).getDate();
                            m += 1;
                            for (; d <= endDay; d++, w++) {
                                if (w > 6) w = 0;
                                dd = m + str + (d > 9 ? d : '0' + d);
                                dateArr.push(dd);
                                weekArr.push(weekStr[w]);
                            }
                            if (d >= endDay) {
                                d = 1;
                            }
                        }
                        // 按周获取
                    } else if (type === 'w') {
                        len *= 7;
                        endDay = (new Date(y, m + 1, 0)).getDate();
                        for (var l = 0; l < len; l++, w++, d++) {
                            if (w > 6) w = 0;
                            dd = (m + 1) + str + d;
                            dateArr.push(dd);
                            weekArr.push(weekStr[w]);
                            if (d >= endDay) {
                                m += 1;
                                if (m > 11) m = 0;
                                d = 0;
                                endDay = (new Date(y, m + 1, 0)).getDate();
                            }
                        }
                    } else if (type === 't') {
                        endDate = new Date(y, m + (len - 0), d);
                        endDay = (new Date(y, m + 1, 0)).getDate();
                        len = (endDate.setHours(0, 0, 0, 0) - new Date(bfDate).setHours(0, 0, 0, 0)) / (24 * 60 * 60 * 1000);
                        for (var l = 0; l < len; l++, w++, d++) {
                            if (w > 6) w = 0;
                            dd = (m + 1) + str + d;
                            dateArr.push(dd);
                            weekArr.push(weekStr[w]);
                            if (d >= endDay) {
                                m += 1;
                                if (m > 11) m = 0;
                                d = 0;
                                endDay = (new Date(y, m + 1, 0)).getDate();
                            }
                        }
                    }
                }

                return {
                    date: dateArr,
                    week: weekArr,
                };
            }

            //获取小时格式
            function getHourArr() {

            }

        },
        debounce(fn, wait, immediately) {
            var timeID;
            return function () {
                var me = this;
                var args = [].slice.call(arguments, 0);
                if (immediately) {
                    fn.apply(me, args);
                    return;
                }
                var later = function () {

                    fn.apply(me, args);
                };
                if (typeof wait === 'number') {
                    clearTimeout(timeID);
                    timeID = setTimeout(later, wait);
                } else {
                    cancelAnimationFrame(timeID);
                    timeID = requestAnimationFrame(later);
                }
            };
        },
        isArray(arr) {
            return toString.call(arr) === '[object Array]';
        },
        isObject(obj) {
            return toString.call(obj) === '[object Object]';
        },
        isFunction(fn) {
            return toString.call(fn) === '[object Function]';
        },
        /**
         * 存参数和临时变量
         */
        getStore: (function () {
            var store = null;
            return function () {
                if (store) return store;

                function Store() {

                }

                var storeMethod = {
                    set: function (name, value) {
                        if (this[name] && (util.isArray(value) || util.isObject(value))) {
                            this[name] = util.extend(true, {}, this[name], value);
                        } else {
                            this[name] = value;
                        }
                    },
                    get: function (name) {
                        if (this[name]) return this[name];
                        console.log(`${name} field isn\'t set!`);
                    },
                    clear: function (name) {
                        delete this[name];
                    },
                    clearAll: function () {
                        for (var name in this) {
                            this.clear(name);
                        }
                    },
                    init(name, value) {
                        this.clear(name);
                        this.set(name, value);
                    }
                };

                util.extend(Store.prototype, storeMethod);

                store = new Store();
                return store;
            }

        })(),
        getX: {
            start: 0,
            dayMin: 1440,
            baseXFromMin: 0,
            xaxisX: 0,
            setStart: function (s) {
                this.start = new Date(s).getTime();
            },
            setBaseXFromMin: function (w) {
                this.baseXFromMin = w / this.dayMin;
            },
            transformX2Millisecond: function (x) {
                return x / this.baseXFromMin * 60 * 1000;
            },
            timeFromXaxis: function (x) {
                return (x - this.xaxisX) / this.baseXFromMin * 60 * 1000;
            },
            getNewDate(time) {
                return time + this.start;
            },
            fromTime: function (time) {
                return +this.getWidth(this.start, time);
            },
            getWidth: function (startDate, endData) {
                return +(((new Date(endData).getTime() - new Date(startDate).getTime()) / 60 / 1000) * this.baseXFromMin).toFixed(2);
            }
        },
        //Y轴生产线映射
        yMap: {
            pool: {},
            setPool: function (name, val) {
                this.pool[name] = val;
            },
            getY: function (name) {
                return this.pool[name] || false;
            }
        },
        /**
         * 时间间隔宽度计算
         * @param layerWidth 层级宽
         * @param interval 分割数
         * @returns {{width: number | *, surplus: number|*}}  wdith:间隔宽,surplus:盈余空间
         */
        calculateWidth: function (layerWidth, interval) {
            let width, surplus;

            width = Math.floor(layerWidth / interval);
            surplus = layerWidth - interval * width; //剩余的宽度，因为间隔宽度向下取整，所以计算的总宽度肯定会小于图层宽
            return {
                width,
                surplus,
            };
        },
        /**
         * 继承方法
         * @param parentClass 父类
         * @param [object] childMethods 子类方法,constructor方法可初始化构造函数
         * @returns {childClass}
         */
        fakeExtend: function (parentClass, childMethods) {
            // 继承属性，初始化构造函数
            let childClass = function (...args) {
                parentClass.apply(this, args);
                if (childMethods.constructor) childMethods.constructor.apply(this, args);
            };

            // 继承方法
            let F = function () {
            };
            F.prototype = parentClass.prototype;
            childClass.prototype = new F();
            for (let methodName in childMethods) {
                let method = childMethods[methodName];
                if (childMethods.hasOwnProperty(methodName)) {
                    if (typeof method === 'function') {
                        method.$name = methodName;
                        method.$owner = childClass;
                    }
                    childClass.prototype[methodName] = method;
                }
            }
            childClass.prototype.$super = function (...args) {
                let method = this.$super.caller;
                if (!method.$owner) {
                    method = method.caller;
                }
                let parentClass = method.$owner.$superclass, methodName = method.$name;
                parentClass.prototype[methodName].apply(this, args);
            };
            // 继承链
            childClass.$superclass = parentClass;

            return childClass;
        }
    };

    let store = util.getStore(); //全局存储，专门存储参数和临时变量
    window.store = store;

    // AGanter Class
    class AGanter {
        static defaultOption = {
            xAxis: {
                x: 0, // 起始位置
                y: 0, // 起始位置
            },
            yAxis: {
                x: 0,
                y: 0,
            }
        };

        constructor() {
            this.stage = null;
            this.background = null;
            this.initX = 0;
        }

        //
        init(params, scrollId, outId, options) {
            this.stage = new Konva.Stage(params);
            this.scrollDiv = document.querySelector(scrollId);
            this.outbox = document.querySelector(outId);
            this.initX = params.x;
            this.loadDom = util.createLoadDom({width: params.width, height: params.height});
            this.outbox.appendChild(this.loadDom);
            store.set('wh', {width: params.width, height: params.height});
            store.set('stage', {stage: this.stage, options});
            store.set('scrollDiv', {scrollDiv: this.scrollDiv});
            store.set('timeFormat', {status: false});
            return this.stage;
        }

        setOption(option) {
            // 默认配置
            let options = util.extend(true, {}, AGanter.defaultOption, option);
            util.getX.xaxisX = options.xAxis.x || 0;
            store.set('options', options);
        }

        render() {
            this.draw();
            this.bindEvent();
        }

        draw() {
            store.clear('xaxis');
            store.clear('yaxis');
            let options = store.get('options', options);
            let backgroundGrid = this.backgroundGrid = new BackgroundGrid({
                id: 'backgroundGrid',
                x: options.xAxis.x,
                y: options.yAxis.y
            });
            let background = this.background = new Background('background');
            let workorder = this.workorder = new WorkOrder(options.series);
            let stage = this.stage;

            // 开始绘画
            background.draw();
            backgroundGrid.draw(); // 依赖于x,y轴必须放于之后
            workorder.draw();

            // 添加入舞台
            stage.add(backgroundGrid.layer);
            if (workorder.layers[0] !== null) {
                stage.add(...workorder.layers);
            }
            stage.add(background.layer);
            this.resetStageWH();
        }

        setTimeFormat(timeFormat) {
            this.reset();
            store.set('options', {timeFormat: timeFormat});
            store.set('timeFormat', {status: true});
            this.draw();
        }

        reset() {
            let stage = this.stage;
            let container = stage.container();
            stage.clearCache();
            stage.destroyChildren();
            stage.x(this.initX);
            container.style.transform = 'translateX(0px)';
        }

        bindEvent() {
            let self = this;
            let scrollDiv = this.scrollDiv;
            let screenWidth = store.get('wh').width;
            let fn = function (evt) {
                let dx = this.scrollLeft;
                let dy = this.scrollTop;
                let xaxisDealt = store.get('xaxis').dealt;
                let xaxis = stage.find('#xaxis');
                let yaxis = stage.find('#yaxis');
                let diagonal = stage.find('#diagonal');
                let background = stage.find('#background');
                diagonal.x(dx);
                diagonal.y(dy);
                yaxis.x(dx);
                xaxis.y(dy);
                yaxis.draw();
                diagonal.draw();
                background.draw();

                delayFn(dx, xaxisDealt);
            };
            let delayFn = util.debounce(function (dx, xaxisDealt) {
                if ((dx + screenWidth > xaxisDealt.preLoadRang.endX && xaxisDealt.preLoadRang.endX < xaxisDealt.totalWidth) || (dx < xaxisDealt.preLoadRang.startX && xaxisDealt.preLoadRang.startX !== 0)) {
                    self.loadDom.style.display = 'block';
                    self.scrollDiv.style.overflow = 'hidden';
                    setTimeout(function () {
                        self.reset();
                        self.draw();
                        self.loadDom.style.display = 'none';
                        self.scrollDiv.style.overflow = 'auto';
                    })
                }
            }, 100);
            scrollDiv.addEventListener('scroll', fn);
        }


        //重新设置舞台宽高
        resetStageWH() {
            let scrollDiv = this.scrollDiv;
            let xaxis = store.get('xaxis');
            let totalWidth = xaxis.dealt.totalWidth;
            let xaxisX = xaxis.options.x;
            let fakeDom = this.fakeDom;
            if (!fakeDom) {
                this.fakeDom = fakeDom = util.createDom({width: totalWidth + xaxisX + 2});
                scrollDiv.appendChild(fakeDom);
            } else {
                fakeDom.style.width = `${totalWidth + xaxisX + 2}px`;
            }

            let stage = this.stage;
            let yaxis = store.get('yaxis');
            stage.width(xaxis.dealt.realWidth + xaxis.options.x + 2);
            stage.height(yaxis.dealt.totalHeight + yaxis.options.y + 2);
        }
    }

    // BACKGROUND Class
    class Background {
        constructor(id) {
            this.layer = new Konva.Layer({id});
            this.xaxis = new Xaxis('xaxis');
            this.yaxis = new Yaxis('yaxis');
            this.diagonal = new Diagonal('diagonal');
        }

        draw() {
            this.xaxis.draw();
            this.yaxis.draw();
            this.diagonal.draw();
            this.layer.add(this.xaxis.group);
            this.layer.add(this.yaxis.group);
            this.layer.add(this.diagonal.group);
        }
    }

    //Diagonal
    class Diagonal {
        static defaultOption = {
            rect: {
                fill: '#ecfdff',
                stroke: 'transparent',
            },
            line: {
                stroke: '#000',
                strokeWidth: .5,
            }
        };

        constructor(id) {
            let isLazyLoad = store.get('stage').options.lazyLoad; //判断是否懒加载模式
            this.group = new Konva.Group({id});
            if (isLazyLoad) {
                let scrollDiv = store.get('scrollDiv').scrollDiv;
                let sx = scrollDiv.scrollLeft;
                this.group.x(sx);
            }
        }

        draw() {
            let group = this.group;
            let xaxis = store.get('xaxis');
            let yaxis = store.get('yaxis');
            let diagonal = store.get('options').diagonal;
            let width = xaxis.options.x;
            let height = yaxis.options.y;
            if (!width || !height) return;
            let options = util.extend(true, {}, Diagonal.defaultOption, diagonal.style);
            let rect = new Konva.Rect({
                width,
                height,
                ...options.rect,
            });
            let line = new Konva.Line({
                points: [0, 0, width, height],
                ...options.line,
            });

            group.add(rect);
            group.add(line);
        }
    }

    // AXIS Class
    class Axis {
        constructor() {
        }
    }

    class Xaxis extends Axis {
        constructor(id) {
            super();
            let op = store.get('options').xAxis;
            let dealtData;
            this.group = new Konva.Group({
                id,
                x: op.x,
                y: op.y,
            });
            store.set('xaxis', {options: op});

            this.dealtData = dealtData = this.dealWithData(op);
            store.set('xaxis', {dealt: dealtData});
        }

        draw() {
            let dealtCellData = this.dealtData.dealtCellData;
            dealtCellData.forEach(cellInf => {
                let xcell = new XaxisCell(cellInf);
                this.group.add(xcell.group);
            })
        }

        dealWithData(originData) {
            let dealtCellData = [];
            let cellX = 0;
            let realWidth = 0;
            let cellStyle = originData.cell;
            let dates = this.getDate();
            let timeFormatInf = this.getTimeFormatInf();
            let oldCellWidth = store.get('cellWidth');
            let cellWidth = this.calculateCellWidth(timeFormatInf);
            let timeFormat = store.get('timeFormat').status;
            let totalWidth, customAllWidth;
            let stageOffsetX = 0;
            store.set('cellWidth', cellWidth);

            let options = util.extend(true, {width: cellWidth}, XaxisCell.defaultOp, cellStyle);
            // 懒加载相关
            let isLazyLoad = store.get('stage').options.lazyLoad; //判断是否懒加载模式
            let preLoadRang = 0;
            let widths = this.calculateTotalWidth(originData, cellWidth, cellStyle);
            totalWidth = widths.totalWidth;
            customAllWidth = widths.customAllWidth;

            // 时间格式改变
            if (timeFormat) {
                let ratio = cellWidth / oldCellWidth;
                let scrollDiv = store.get('scrollDiv').scrollDiv;
                let sx = Math.ceil(scrollDiv.scrollLeft * ratio);
                if (scrollDiv.scrollWidth < totalWidth) {
                    scrollDiv.children[1].style.width = totalWidth + originData.x + 2 + 'px';
                }
                scrollDiv.scrollLeft = sx;
                store.set('timeFormat', {status: false});
            }

            // 懒加载处理
            if (isLazyLoad) {
                preLoadRang = this.processLazyLoad(cellWidth, timeFormatInf, totalWidth);
            }

            collectCell();

            // 懒加载处理舞台和网格定位,需等数据处理完
            if (isLazyLoad) {
                let stage = store.get('stage').stage;
                let backgroundGrid = store.get('backgroundGrid').backgroundGrid;
                let firstCell = dealtCellData[0];
                let originX = stage.x();
                let container = stage.container();
                stage.x(originX - firstCell.x);
                stageOffsetX = firstCell.x;
                container.style.transform = `translateX(${stageOffsetX}px)`;
                backgroundGrid.x(firstCell.x + originData.x);
            }

            return {
                dealtCellData,
                cellWidth,
                realWidth,
                totalWidth,
                totalCells: dealtCellData.length,
                customAllWidth,
                timeFormatInf,
                preLoadRang,
                stageOffsetX,
            };

            function collectCell(reset = false) {
                if (reset) {
                    dealtCellData = [];
                }
                if (originData.customData) {
                    warpData(originData.customData, dealtCellData, originData);
                }
                warpData(dates.date, dealtCellData, originData);
            }

            function warpData(data, storeArr, originData) {
                for (let i = 0, ii = data.length; i < ii; i++) {
                    let xcelldata = data[i];

                    if (util.isObject(xcelldata)) {
                        let options = util.extend(true, {width: cellWidth}, XaxisCell.defaultOp, cellStyle, xcelldata.style);
                        warpCell(xcelldata.name, storeArr, options, originData);
                    } else {
                        let name = `${xcelldata}\n(${dates.week[i]})`;
                        warpCell(name, storeArr, options, originData);
                    }
                }

                function warpCell(name, storeArr, options, originData) {
                    let width = options.width, height = options.height, rect = options.rect, text = options.text;
                    // 开启懒加载
                    if (isLazyLoad) {
                        if (cellX < preLoadRang.startX || cellX > preLoadRang.endX) {
                            cellX += width;
                            return
                        }
                    }

                    let d = {
                        id: name,
                        name: 'Xcell',
                        x: cellX,
                        y: originData.y,
                        width,
                        height,
                        text: name,
                        style: {rect, text},
                    };
                    cellX += width;
                    realWidth += width;
                    storeArr.push(d);
                }

            }
        }

        processLazyLoad(cellWidth, timeFormatInf, totalWidth) {
            let scrollDiv = store.get('scrollDiv').scrollDiv;
            let sx = scrollDiv.scrollLeft;
            let preloadEle = 10;
            let perLoadEleWidth = preloadEle * cellWidth;
            let screenEleWidth = timeFormatInf.timeNum * cellWidth;
            let ex = sx + perLoadEleWidth + screenEleWidth;
            let miniPreloadWidth = screenEleWidth + perLoadEleWidth; // 最小加载宽度（结尾只需要预加载前面数量）
            if (sx > 0) {
                sx -= perLoadEleWidth;
                if (sx < 0) {
                    sx = 0;
                } else if (totalWidth - sx < miniPreloadWidth) {
                    sx = totalWidth - miniPreloadWidth;
                }
            }
            if (ex > totalWidth) {
                ex = totalWidth;
            }


            let preLoadRang = {startX: sx, endX: ex, miniPreloadWidth};
            return preLoadRang;
        }

        // 拿日期
        getDate() {
            let timeRang = store.get('options').timeRang.split('-');
            let startDate = new Date(timeRang[0]);
            let endDate = new Date(timeRang[1]);
            let dates = util.calculateDate(startDate, endDate, 'day');
            // 设置开始时间
            util.getX.setStart(startDate);
            return dates;
        }

        //calculate cell width
        calculateCellWidth(timeInf) {
            let stageWidth = store.get('wh').width;
            let yaxisWidth = store.get('options').yAxis.cell.width;
            let xCellWidth = Math.floor((stageWidth - yaxisWidth) / timeInf.timeNum);
            // 设置基础X/分钟
            util.getX.setBaseXFromMin(xCellWidth);
            return +xCellWidth;
        }

        calculateTotalWidth(originData, cellWidth, cellStyle) {
            let totalWidth = 0;
            let customAllWidth = 0;
            let dates = this.getDate();
            let options = util.extend(true, {width: cellWidth}, XaxisCell.defaultOp, cellStyle);
            if (originData.customData) {
                calculateWidth(originData.customData, originData);
                customAllWidth = totalWidth;
            }
            calculateWidth(dates.date);

            return {customAllWidth, totalWidth};

            function calculateWidth(data) {
                for (let i = 0, ii = data.length; i < ii; i++) {
                    let xcelldata = data[i];
                    if (util.isObject(xcelldata)) {
                        options = util.extend(true, {width: cellWidth}, XaxisCell.defaultOp, cellStyle, xcelldata.style);
                    }
                    let width = options.width;
                    totalWidth += width;
                }
            }
        }

        getTimeFormatInf() {
            let timeFormat = store.get('options').timeFormat;
            let timeNum = timeFormat.slice(0, -1);
            let timeType = timeFormat.slice(-1);
            return {timeNum, timeType, timeFormat};
        }
    }

    class Yaxis extends Axis {
        constructor(id) {
            super();
            let op = store.get('options').yAxis;
            let xop = store.get('options').xAxis;
            let xx = xop.x;
            let yw = op.width;
            let isLazyLoad = store.get('stage').options.lazyLoad; //判断是否懒加载模式
            //判断x轴和y轴是否重叠，重叠则y轴的y起始位x轴的高度
            if (yw > xx) {
                op.y = xop.height;
            }
            let dealtData;
            this.group = new Konva.Group({
                id,
                x: op.x,
                y: op.y,
            });

            // 懒加载模式
            if (isLazyLoad) {
                let scrollDiv = store.get('scrollDiv').scrollDiv;
                let sx = scrollDiv.scrollLeft;
                this.group.x(sx);
            }

            store.set('yaxis', {options: op});

            this.dealtData = dealtData = this.dealWithData(op);
            store.set('yaxis', {dealt: dealtData});
        }

        draw() {
            let dealtCellData = this.dealtData.dealtCellData;
            dealtCellData.forEach(cellInf => {
                let ycell = new YaxisCell(cellInf);
                this.group.add(ycell.group);
            })
        }

        dealWithData(originData) {
            let dealtCellData = [];
            let totalHeight = 0;
            let cellStyle = originData.cell;
            let options = util.extend(true, {}, YaxisCell.defaultOp, cellStyle);

            if (originData.customData) {
                warpData(originData.customData, dealtCellData, originData);
            }
            warpData(originData.data, dealtCellData, originData);

            function warpData(data, storeArr, originData) {
                data.forEach(ycelldata => {
                    if (util.isObject(ycelldata)) {
                        if (ycelldata.drawName) {
                            let options = util.extend(true, {}, YaxisCell.defaultOp, cellStyle, ycelldata.style);
                            totalHeight = warpCell(ycelldata.name, storeArr, totalHeight, options, originData);
                        }
                        if (ycelldata.children) {
                            ycelldata.children.forEach(cd => {
                                totalHeight = warpCell(cd, storeArr, totalHeight, options, originData);
                            })
                        }
                    } else {
                        totalHeight = warpCell(ycelldata, storeArr, totalHeight, options, originData);
                    }
                });

                function warpCell(name, storeArr, totalHeight, options, originData) {
                    let width = options.width, height = options.height, rect = options.rect, text = options.text;
                    let d = {
                        id: name,
                        name: 'Ycell',
                        x: originData.x,
                        y: totalHeight,
                        width,
                        height,
                        text: name,
                        style: {rect, text},
                    };
                    util.yMap.setPool(name, totalHeight); //ymap映射
                    totalHeight += height;
                    storeArr.push(d);

                    return totalHeight;
                }
            }

            return {dealtCellData, totalHeight, totalCells: dealtCellData.length};
        }
    }

    // CELL Class
    class Cell {
        constructor(id, name, x, y) {
            this.group = new Konva.Group({id, name, x, y});
        }

        draw() {
        }
    }

    class AxisCell extends Cell {
        static defaultOp = {
            rect: {
                fill: '#fff',
                stroke: 'transparent',
                strokeWidth: 0,
            },
            text: {
                fill: '#000',
                align: 'left',
                verticalAlign: 'middle',
                fontSize: 12,
                warp: 'none',
                lineHeight: 1,
            }
        };

        constructor(id, name, x, y) {
            super(id, name, x, y);
        }
    }

    class XaxisCell extends AxisCell {
        constructor(inf) {
            super(inf.id, inf.name, inf.x, inf.y);
            this.draw(inf);
        }

        draw(inf) {
            let group = this.group;
            let rect = new Konva.Rect({
                width: inf.width,
                height: inf.height,
                ...inf.style.rect,
            });
            let text = new Konva.Text({
                width: inf.width,
                height: inf.height,
                text: inf.text,
                ...inf.style.text,
            });
            group.add(rect);
            group.add(text);
        }

    }

    class YaxisCell extends AxisCell {
        constructor(inf) {
            super(inf.id, inf.name, inf.x, inf.y);
            this.draw(inf);
        }

        draw(inf) {
            let group = this.group;
            let rect = new Konva.Rect({
                width: inf.width,
                height: inf.height,
                ...inf.style.rect,
            });
            let text = new Konva.Text({
                width: inf.width,
                height: inf.height,
                text: inf.text,
                ...inf.style.text,
            });
            group.add(rect);
            group.add(text);
        }
    }

    // GRID Class
    class Grid {
        constructor(config) {
            this.layer = new Konva.Layer(config);
        }

        draw() {
        }

    }

    class BackgroundGrid extends Grid {
        constructor(config) {
            super(config);
            store.init('backgroundGrid', {backgroundGrid: this.layer})
        }

        draw() {
            let xaxis = store.get('xaxis');
            let yaxis = store.get('yaxis');
            let isLazyLoad = store.get('stage').options.lazyLoad;
            let xcells = isLazyLoad ? xaxis.dealt.dealtCellData.length : xaxis.dealt.totalCells;
            let ycells = yaxis.dealt.totalCells;
            let layer = this.layer;
            for (let x = 0; x < xcells; x++) {
                let line = new Konva.Line({
                    points: [(x + 1) * xaxis.dealt.cellWidth, 0, (x + 1) * xaxis.dealt.cellWidth, yaxis.dealt.totalHeight],
                    stroke: '#c9c9c9',
                    strokeWidth: 1,
                });
                layer.add(line);
            }
            for (let y = 0; y < ycells; y++) {
                let line = new Konva.Line({
                    points: [0, yaxis.options.cell.height * (y + 1), xaxis.dealt.totalWidth, yaxis.options.cell.height * (y + 1)],
                    stroke: '#c9c9c9',
                    strokeWidth: 1,
                });
                layer.add(line);
            }
        }
    }

    // 工单类
    class WorkOrder {
        static defaultOption = {
            style: {
                rect: {
                    fillLinearGradientColorStops: [0, 'rgb(59, 92, 248)', 1, 'rgba(59, 92, 248,0.4)'],
                },
                text: {
                    wrap: 'none',
                    padding: 5,
                    lineHeight: 1.2,
                    verticalAlign: 'center',
                },
            }
        };

        constructor(data) {
            this.layers = [];
            this.dealtData = this.dealWithData(data);
        }

        draw() {
            let dealtData = this.dealtData;
            let layer = null;
            let options = store.get('options');
            let stageOffsetX = store.get('xaxis').dealt.stageOffsetX;
            dealtData.forEach((w, i) => {
                if (i % 500 === 0) {
                    if (layer) {
                        this.layers.push(layer);
                    }
                    layer = new Konva.Layer({
                        name: 'workorder',
                        x: options.xAxis.x,
                        y: options.yAxis.y,
                        stroke: 'red',
                    });
                }
                drawWO(w, layer, options);
            });
            this.layers.push(layer);

            function drawWO(inf, layer, originOptions) {
                let options = util.extend(true, {}, WorkOrder.defaultOption.style);
                let id = inf.id, name = inf.name, x = +inf.x, y = +inf.y, height = inf.height, width = inf.width,
                    originData = inf.originData;
                let group = new Konva.Group({
                    id,
                    name,
                    x,
                    y,
                    height,
                    width,
                    draggable: true,
                    dragBoundFunc: function (pos) {
                        let adjustPosX = pos.x + stageOffsetX;
                        let currentTime = util.getX.getNewDate(util.getX.timeFromXaxis(adjustPosX));
                        let offsetTime = util.getX.transformX2Millisecond(pos.x - this.getAbsolutePosition().x);
                        let posy = this.getAbsolutePosition().y;
                        let Ydirection = pos.y > this.getAbsolutePosition().y ? 'down' : 'up';
                        inf.x = pos.x;

                        // Text文本变更
                        this.find('Text')[0].text(`${inf.originData.name}\n${Moment(currentTime).format('YYYY-MM-DD HH:mm:ss')} - ${Moment(inf.originData.to).add(offsetTime, 'ms').format('YYYY-MM-DD HH:mm:ss')}`);
                        // Y轴拖动
                        if (originData.moResCodePriorities) {
                            let mm = originData.moResCodePriorities;
                            for (let m = 0, ml = mm.length; m < ml; m++) {
                                let keyHeight = util.yMap.getY(mm[m].Key);
                                if (Ydirection === 'up') {
                                    if (pos.y > keyHeight && pos.y < keyHeight + height) {
                                        posy = keyHeight + height;
                                        inf.y = keyHeight;
                                        break;
                                    }
                                } else if (Ydirection === 'down') {
                                    if (pos.y > keyHeight + height && pos.y < keyHeight + height * 2) {
                                        posy = keyHeight + height;
                                        inf.y = keyHeight;
                                        break;
                                    }
                                }

                            }
                        }

                        // 表格元素拖动回调
                        if (originOptions.onCellDraw) {
                            originOptions.onCellDraw(inf, currentTime, offsetTime);
                        }

                        return {
                            x: pos.x,
                            y: posy,
                        };
                    }
                });
                let rect = new Konva.Rect({
                    height,
                    width,
                    fillLinearGradientStartPoint: {x: 0, y: 0},
                    fillLinearGradientEndPoint: {x: width, y: 0},
                    ...options.rect,
                });
                let text = new Konva.Text({
                    height,
                    width,
                    text: `${inf.originData.name}\n${inf.originData.from} - ${inf.originData.to}`,
                    ...options.text,
                });
                group.add(rect);
                group.add(text);
                layer.add(group);
            }
        }

        dealWithData(originData) {
            let getx = util.getX;
            let yaxis = store.get('yaxis').options;
            let dealtWOData = [];
            let preLoadRang = store.get('xaxis').dealt.preLoadRang;
            let startX = preLoadRang.startX;
            let endX = preLoadRang.endX;
            let isLazyLoad = store.get('stage').options.lazyLoad; //判断是否懒加载模式
            originData.forEach((order, od) => {
                let tasks = order.tasks;
                let y = util.yMap.getY(order.name);
                let belong = order.belong;
                tasks.forEach((task, td) => {
                    let from = getx.fromTime(task.from);
                    let width = getx.getWidth(task.from, task.to);
                    let to = from + width;
                    if (isLazyLoad) {
                        if (to < startX || from > endX) return;
                    }
                    let handbill = {
                        id: task.id,
                        name: `${task.flag} ${belong}`,
                        y: y,
                        x: from,
                        width,
                        height: yaxis.cell.height,
                        originData: task,
                        dimension: {od, td}
                    };
                    dealtWOData.push(handbill);
                })
            });

            return dealtWOData;
        }
    }

    return new AGanter();
}





