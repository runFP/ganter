import Konva from 'konva';

var width = window.innerWidth;
var height = window.innerHeight;
var srollbox = document.querySelector('.srollbox');

function f(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        var s = `2019-02-${Math.floor(Math.random() * 10) + 1} 14:00:00`;
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
                    "Key": "PPF1PF0001",
                    "Value": "5"
                },
                {
                    "Key": "PCY1CY0003",
                    "Value": "1"
                },
                {
                    "Key": "PCY1CY0001",
                    "Value": "1"
                }
            ],
            "visible": true
        };
        arr.push(o);
    }
    return arr
}

var tasks = f(50);
var ganter = aGanter(Konva);
var stage = ganter.init({
    container: 'container',
    width: width,
    height: height,
    x: .5,
    y: .5
});
ganter.setOption(
    {
        timeRang: '2019/01/21-2019/03/14',
        xAxis: {
            x: 100,
            height: 50,
            /*customXaxis: [{
                text: '工单',
                width: 100, //表格宽,默认为表格平均
                // 自定义xaxisn内容的表格绘画内容
                /!* formatter:function () {

                 }*!/
            }/!*, {
                    text: '工单',
            }*!/]*/
            // 自定义xaxis的表格绘画内容
            // RECT类 TEXT类 xAxis组 相关信息 xaxis的位置
            /*formatter: function (rect, text, group, dealt, i) {
                console.log(dealt);
            }*/
        },
        yAxis: {
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
            customData: [{
                drawName: true,
                name: '资源',
                nameStyle: {
                    rect: {
                        fill: '#ecfdff'
                    },
                    text: {
                        align: 'center',
                    }
                }
                ,
                // 自定义yaxis内容的表格绘画内容
                /* formatter:function () {

                 }*/
            }],
            // customData:['资源'],
            data: [
                {
                    drawName: true,
                    name: '总装01-M23',
                    nameStyle: { //组名样式可单独定义，组员的样式由cell定义
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
                    nameStyle: { //组名样式可单独定义，组员的样式由cell定义
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
                }
            ]
    }
)
;
ganter.draw();

srollbox.addEventListener('scroll', function () {
    var dx = srollbox.scrollLeft;
    var dy = srollbox.scrollTop;
    console.log(dx, dy);
    var xaxis = stage.find('#xaxis');
    xaxis.y(dy);
    var background = stage.find('#background');
    background.draw();
    // xaxis.draw();
    /*stage.container().style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
    stage.x(-dx);
    stage.y(-dy);
    stage.batchDraw();*/
})

function aGanter(Konva) {
    var toString = Object.prototype.toString;
    // 辅助函数:公共方法和方法定义
    var util = {
        //扩展，首参传ture则为深扩展,参数基本与jq.extend一致
        extend: function () {
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
        /**
         * 获取X轴时间
         * @param startDate 开始时间
         * @param length 持续时间(h,w,m, h会将时间转为小时，w,m都是转换为天)
         * @param type 类型 day, hour
         */
        calculateDate: function (startDate, endDate, type, length) {
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
        addEventListener: function (el, event, handler) {
            el.addEventListener(event, handler);
        },
        debounce: function (fn, wait, immediately) {
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
        isArray: function (arr) {
            return toString.call(arr) === '[object Array]';
        },
        isObject: function (obj) {
            return toString.call(obj) === '[object Object]';
        },
        isFunction: function (fn) {
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
                        if (this[name]) {
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
            setStart: function (s) {
                this.start = new Date(s).getTime();
            },
            setbaseXFromMin: function (w) {
                this.baseXFromMin = w / this.dayMin;
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

    var store = util.getStore(); //全局存储，专门存储参数和临时变量

    // AGanter Class
    class AGanter {
        constructor() {
            this.stage = null;
            this.background = null;
        }

        //
        init(params) {
            this.stage = new Konva.Stage(params);
            store.set('stage', this.stage);
            return this.stage;
        }

        setOption(option) {
            // 默认配置
            const defaultOption = {
                xAxis: {
                    x: 0, // 起始位置
                    y: 0, // 起始位置
                },
                yAxis: {
                    x: 0,
                    y: 0,
                }
            };

            let options = util.extend(true, {}, defaultOption, option);
            store.set('options', options);

            this.background = new Background('background');
            this.workorder = new WorkOrder(options.series);
        }

        draw() {
            let background = this.background;
            let workorder = this.workorder;
            let stage = this.stage;
            background.draw();
            workorder.draw();
            stage.add(background.layer);
            stage.add(...workorder.layers);
            //重新设置舞台宽高
            let xaxis = store.get('xaxis');
            let yaxis = store.get('yaxis');
            stage.width(xaxis.dealt.totalWidth + xaxis.options.x + 2);
            stage.height(yaxis.dealt.totalHeight + yaxis.options.y + 2)
        }

    }

    // BACKGROUND Class
    class Background {
        constructor(id) {
            this.layer = new Konva.Layer({id});
            this.xaxis = new Xaxis('xaxis');
            this.yaxis = new Yaxis('yaxis');
            this.backgroundGrid = new BackgroundGrid({id: 'backgroundGrid', x: 100, y: 50});
        }

        draw() {
            this.xaxis.draw();
            this.yaxis.draw();
            this.backgroundGrid.draw();
            this.layer.add(this.backgroundGrid.group);
            this.layer.add(this.xaxis.group);
            this.layer.add(this.yaxis.group);
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
            this.dealt = processOption();
            this.totalCells = 0; // 包含元素总数
            this.group = new Konva.Group({
                id,
                x: op.x,
                y: op.y,
            });
            store.set('xaxis', {options: op, dealt: this.dealt}); //将xaxis配置参数和处理过的参数存起来

            // 处理参数，加成出必要数据
            function processOption() {
                // 拿日期
                let timeRang = store.get('options').timeRang.split('-');
                let startDate = new Date(timeRang[0]);
                let endDate = new Date(timeRang[1]);
                let dates = util.calculateDate(startDate, endDate, 'day');

                // 计算xAxis cellwidth
                let timeFormat = '30d';
                let timeNum = timeFormat.slice(0, -1);
                let timeType = timeFormat.slice(-1);
                let stageWidth = store.get('stage').width();
                let yaxisWidth = store.get('options').yAxis.cell.width;
                let xCellWidth = Math.floor((stageWidth - yaxisWidth) / timeNum);
                // 设置开始时间和基础X/分钟
                util.getX.setStart(startDate);
                util.getX.setbaseXFromMin(xCellWidth);

                return {
                    dates,
                    timeNum,
                    timeType,
                    xCellWidth,
                }
            }
        }

        draw() {
            let dealt = this.dealt;
            let op = store.get('options').xAxis;
            let dates = dealt.dates;
            let date = dates.date;
            let xCellWidth = dealt.xCellWidth;
            let cusAllWidth = 0;


            //先绘制自定义x轴内容
            if (op.customXaxis) {
                let customXaxis = op.customXaxis;
                customXaxis.map((x, i) => {
                    let width = x.width || xCellWidth;
                    cusAllWidth += width;
                    x.x = i === 0 ? op.x : (customXaxis[i - 1].width || xCellWidth);
                    let xCell = new XaxisCusCell(`${x.text}`, 'xaxis', width, op.height, x, i, cusAllWidth);
                    this.group.add(xCell.group);
                });
                this.totalCells += customXaxis.length;
            }

            // 绘制日期
            for (let i = 0, l = date.length; i < l; i++) {
                let xCell = new XaxisCell(`xcell${i}`, 'xaxis', xCellWidth, op.height, i, cusAllWidth);
                this.group.add(xCell.group);
            }
            this.totalCells += date.length;
            store.set('xaxis', {
                dealt: {
                    totalWidth: cusAllWidth + date.length * xCellWidth,
                    totalCells: this.totalCells
                }
            });
        }
    }

    class Yaxis extends Axis {
        constructor(id) {
            super();
            let op = store.get('options').yAxis;
            let xop = store.get('options').xAxis;
            this.totalCells = 0; // 包含元素总数
            //判断x轴和y轴是否重叠，重叠则y轴的y起始位x轴的高度
            let xx = xop.x;
            let yw = op.width;
            if (yw > xx) {
                op.y = xop.height;
            }
            let dealtData;
            this.group = new Konva.Group({
                id,
                x: op.x,
                y: op.y,
            });
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
                            let options = util.extend(true, {}, YaxisCell.defaultOp, cellStyle, ycelldata.nameStyle);
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
        constructor(id, name, w, h, i, cusAllWidth) {
            super(id, name);
            this.draw(w, h, i, this.group, cusAllWidth);
        }

        draw(width, height, i, group, cusAllWidth) {
            let xAxisOp = store.get('xaxis');
            let op = xAxisOp.options;
            let dealt = xAxisOp.dealt;
            let dates = dealt.dates;

            if (util.isFunction(op.formatter)) {
                op.formatter(Konva.Rect, Konva.Text, group, dealt, i, cusAllWidth)
            } else {
                let rect = new Konva.Rect({
                    x: i * width + cusAllWidth,
                    width,
                    height,
                    fill: '#c9c9c9',
                    stroke: '#000',
                    strokeWidth: 1,
                });
                let text = new Konva.Text({
                    width,
                    height,
                    x: i * width + cusAllWidth,
                    text: `${dates.date[i]}\n周${dates.week[i]}`,
                    lineHeight: 1.2,
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: 12,
                    wrap: 'none',
                });
                group.add(rect);
                group.add(text);
            }

        }
    }

    class XaxisCusCell extends AxisCell {
        constructor(id, name, w, h, x, i, cusAllWidth) {
            super(id, name);
            this.width = w;
            this.height = h;
            this.draw(w, h, this.group, x, i, cusAllWidth);
        }

        draw(width, height, group, x, i, cusAllWidth) {
            let xAxisOp = store.get('xaxis');
            let op = xAxisOp.options;
            let dealt = xAxisOp.dealt;


            if (util.isFunction(x.formatter)) {
                x.formatter(Konva.Rect, Konva.Text, group, dealt, x, i, cusAllWidth)
            } else {
                let rect = new Konva.Rect({
                    x: x.x,
                    width,
                    height,
                    fill: 'red',
                    stroke: '#000',
                    strokeWidth: 1,
                });
                let text = new Konva.Text({
                    width,
                    height,
                    x: x.x,
                    text: `${x.text}`,
                    lineHeight: 1.2,
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: 12,
                    wrap: 'none',
                });
                group.add(rect);
                group.add(text);
            }

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

    class WorkCell extends Cell {
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

        constructor(id, name, data) {
            super(id, name);
            this.draw();
        }

        draw() {
        }
    }


    // GRID Class
    class Grid {
        constructor(config) {
            this.group = new Konva.Group(config);
        }

        draw() {
        }

    }

    class BackgroundGrid extends Grid {
        constructor(config) {
            super(config);
        }

        draw() {
            let yaxis = store.get('yaxis');
            let xaxis = store.get('xaxis');
            let xcells = xaxis.dealt.totalCells;
            let ycells = yaxis.dealt.totalCells;
            for (let x = 0; x < xcells; x++) {
                let line = new Konva.Line({
                    points: [(x + 1) * xaxis.dealt.xCellWidth, 0, (x + 1) * xaxis.dealt.xCellWidth, yaxis.dealt.totalHeight],
                    stroke: '#c9c9c9',
                    strokeWidth: 1,
                });
                this.group.add(line);
            }
            for (let y = 0; y < ycells; y++) {
                let line = new Konva.Line({
                    points: [0, yaxis.options.cell.height * (y + 1), xaxis.dealt.totalWidth, yaxis.options.cell.height * (y + 1)],
                    stroke: '#c9c9c9',
                    strokeWidth: 1,
                });
                this.group.add(line);
            }
        }

    }

    // 工单类
    class WorkOrder {
        constructor(data) {
            this.layers = [];
            this.dealtData = this.dealWithData(data);
            console.log(this.dealtData)
        }

        draw() {
            let dealtData = this.dealtData;
            let layer = null;
            let options = store.get('options');
            dealtData.forEach((w, i) => {
                if (i % 500 === 0) {
                    if (layer) {
                        this.layers.push(layer);
                    }
                    layer = new Konva.Layer({
                        name: 'workorder',
                        x: 300,
                        x: options.xAxis.x,
                        y: options.yAxis.y,
                        stroke: 'red',
                    });
                }
                drawWO(w, layer);
            });
            this.layers.push(layer);

            function drawWO(inf, layer) {
                let id = inf.id, name = inf.name, x = +inf.x, y = +inf.y, height = inf.height, width = inf.width;
                let group = new Konva.Group({
                    id,
                    name,
                    x,
                    y,
                    height,
                    width,
                    draggable: true,
                    dragBoundFunc: function (pos) {
                        return {
                            x: pos.x,
                            y: this.getAbsolutePosition().y
                        };
                    }
                });
                let rect = new Konva.Rect({
                    height,
                    width,
                    fillLinearGradientStartPoint: {x: 0, y: 0},
                    fillLinearGradientEndPoint: {x: width, y: 0},
                    fillLinearGradientColorStops: [0, 'rgb(59, 92, 248)', 1, 'rgba(59, 92, 248,0.4)'],
                });
                let text = new Konva.Text({
                    height,
                    width,
                    text: inf.originData.name,

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
            originData.forEach(order => {
                let tasks = order.tasks;
                let y = util.yMap.getY(order.name);
                let belong = order.belong;
                tasks.forEach(task => {
                    let handbill = {
                        id: task.id,
                        name: `${task.flag} ${belong}`,
                        y: y,
                        x: getx.fromTime(task.from),
                        width: getx.getWidth(task.from, task.to),
                        height: yaxis.cell.height,
                        originData: task,
                    };
                    dealtWOData.push(handbill);
                })
            });

            return dealtWOData;
        }


    }

    return new AGanter();
}





