import Konva from 'konva';

var width = window.innerWidth;
var height = window.innerHeight;


/*var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});*/

/*// draw elemet
var dragLayer = new Konva.Layer();
oneThousand();
stage.add(dragLayer);

function addRectText(group, i) {
    var rect = new Konva.Rect({
        y: Math.floor(i / 500) * 100,
        width: 300,
        height: 50,
        fillLinearGradientStartPoint: {x: 0, y: 0},
        fillLinearGradientEndPoint: {x: 100, y: 50},
        fillLinearGradientColorStops: [0, 'rgb(59, 92, 248)', 1, 'rgba(59, 92, 248,0.4)'],
    });
    var text = new Konva.Text({
        y: Math.floor(i / 500) * 100,
        text: 'MO-SCW201902140008-SCW-30-30\n2019-02-20 09:00:00-2019-02-20 19:54:32',
        fontSize: 12,
        width: rect.width(),
        height: rect.height(),
        padding: 4,
    });

    group.add(rect)
    group.add(text)
}

function oneThousand() {

    for (var i = 0; i < 1000; i++) {
        var group = new Konva.Group();
        group.on('mouseover', function () {
            stage.attrs.container.style.cursor = 'pointer';
        })

        group.on('mouseout', function () {
            stage.attrs.container.style.cursor = 'default';
        })

        if (i % 500 === 0) {
            if (layer) {
                stage.add(layer);
            }
            var layer = new Konva.Layer();
        }
        addRectText(group, i);
        layer.add(group);
    }
    stage.add(layer);
}

stage.on('mousedown', function (evt) {
    var target = evt.target;
    var nodeType = target.nodeType;
    var beMoveToLayer = dragLayer;
    var reg = /\d{4}.*$/; //时间替换字符串

    if (nodeType === 'Layer' || nodeType === 'Stage') return;
    while (nodeType !== 'Group') {
        target = target.getParent();
        nodeType = target.nodeType;

    }

    var group = target;
    var layer = group.getLayer();
    if (dragLayer.children.length >= 10) {
        beMoveToLayer = detectLayerChildren(this);
    }

    var s = group.children[1].text()
    console.log(s)

    group.moveTo(beMoveToLayer);
    layer.draw();
    group.dragBoundFunc(function (pos) {
        return {
            x: pos.x,
            y: this.getAbsolutePosition().y
        }
    })
    group.startDrag();


    function detectLayerChildren(node) {
        if (node.nodeType === 'Stage') {
            var children = node.children;
            var miniChildrenLayer = children[0];
            var childrenNum = children[0].children.length;
            for (var c = 1, cc = children.length; c < cc; c++) {
                if (children[c].children.length < childrenNum) {
                    childrenNum = children[c].children.length;
                    miniChildrenLayer = children[c];
                }
            }
            return miniChildrenLayer;
        }
    }
});*/

//--------------------------------------

var ganter = aGanter(Konva);
ganter.init({
    container: 'container',
    width: width,
    height: height,
    x:.5,
    y:.5
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
            /* customData: [{
                 drawName: true,
                 name: '资源',
                 nameStyle: {
                     text: {
                         align: 'center',
                     }
                 }
                 ,
                 // 自定义yaxis内容的表格绘画内容
                 /!* formatter:function () {

                  }*!/
             }],*/
            // ['资源'],
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
                    children: ['PZZ1L001', 'PZZ1LX002']
                },
                {
                    drawName: true,
                    name: '总装01-M23',
                    nameStyle: {
                        text: {
                            align: 'left',
                        },
                    },
                    children: ['PZZ1L001', 'PZZ1LX002', 'PZZ1LX003', 'PZZ1LX004', 'PZZ1LX005', 'PZZ1LX006'],
                }
            ]
            // data:['PZZ1L001', 'PZZ1LX002','PZZ1LX003','PZZ1LX004','PZZ1LX005','PZZ1LX006']//简易模式
        },
        series:
            [
                {
                    belong: '总装01-M23',
                    name: 'PZZ1KX0001',
                    tasks: [{
                        id: '81c55ffb52ea4159adec3efdd50d8bf1',
                        from: '2019-02-22 08:23:16',
                        to: '2019-02-22 09:05:46',
                        name: 'MO-SW133000012',
                        movable: true,
                        flag: 'A B C',
                        visible: true,
                        color: 'rgba(38, 232, 82, 1),rgba(38, 232, 82, 0.4)',
                        AColor: 'black',
                        BColor: 'red',
                        CColor: 'yellow',
                        taskTooltipsContent: {
                            DEMAND_DATE: "2019-03-01 00:00:00",
                            DESCRIPTIONS_CN: "N 批量整机 MO-200523 65M90E0 RBO-AVATA2-70SS AN-RE 马来西亚 220-240V,1Ph 50/60Hz 216",
                            ITEM_CODE: "62711-20052301",
                            MAKE_ORDER_NUM: "MO-SW133000012",
                            MO_QTY: 50,
                            PROJECT_NUMBER: "SW13300.1",
                            STANDARD_FLAG: "Y",
                        }
                    }, {
                        id: '81c55ffb52ea4159adec3efdd50d8bf2',
                        from: '2019-02-28 20:12:03',
                        to: '2019-02-28 20:58:48',
                        name: 'MO-SW133000012',
                        movable: true,
                        flag: 'A C',
                        visible: true,
                        color: 'rgba(38, 232, 82, 1),rgba(38, 232, 82, 0.4)',
                        AColor: 'black',
                        BColor: 'red',
                        CColor: 'yellow',
                        taskTooltipsContent: {
                            DEMAND_DATE: "2019-03-01 00:00:00",
                            DESCRIPTIONS_CN: "N 批量整机3 MO-200523 65M90E0 RBO-AVATA2-70SS AN-RE 马来西亚 220-240V,1Ph 50/60Hz 216",
                            ITEM_CODE: "62711-20052301",
                            MAKE_ORDER_NUM: "MO-SW133000012",
                            MO_QTY: 50,
                            PROJECT_NUMBER: "SW13300.1",
                            STANDARD_FLAG: "Y",
                        }
                    }, {
                        id: '81c55ffb52ea4159adec3efdd50d8bf3',
                        from: '2019-02-28 21:45:33',
                        to: '2019-02-28 22:32:19',
                        name: 'MO-SW133000012',
                        movable: true,
                        flag: 'C',
                        visible: true,
                        color: 'rgba(38, 232, 82, 1),rgba(38, 232, 82, 0.4)',
                        AColor: 'black',
                        BColor: 'red',
                        CColor: 'yellow',
                        taskTooltipsContent: {
                            DEMAND_DATE: "2019-03-01 00:00:00",
                            DESCRIPTIONS_CN: "N 批量整机2 MO-200523 65M90E0 RBO-AVATA2-70SS AN-RE 马来西亚 220-240V,1Ph 50/60Hz 216",
                            ITEM_CODE: "62711-20052301",
                            MAKE_ORDER_NUM: "MO-SW133000012",
                            MO_QTY: 50,
                            PROJECT_NUMBER: "SW13300.1",
                            STANDARD_FLAG: "Y",
                        }
                    }]
                },
                {
                    belong: '总装01-M23',
                    name: 'PZZ1KX0002',
                    tasks: [{
                        id: '81c55ffb52ea4159adec3efdd50d8bf1',
                        from: '2019-02-22 08:23:16',
                        to: '2019-02-22 09:05:46',
                        name: 'MO-SW133000012',
                        movable: true,
                        flag: 'A B C',
                        visible: true,
                        color: 'rgba(38, 232, 82, 1),rgba(38, 232, 82, 0.4)',
                        AColor: 'black',
                        BColor: 'red',
                        CColor: 'yellow',
                        taskTooltipsContent: {
                            DEMAND_DATE: "2019-03-01 00:00:00",
                            DESCRIPTIONS_CN: "N 批量整机 MO-200523 65M90E0 RBO-AVATA2-70SS AN-RE 马来西亚 220-240V,1Ph 50/60Hz 216",
                            ITEM_CODE: "62711-20052301",
                            MAKE_ORDER_NUM: "MO-SW133000012",
                            MO_QTY: 50,
                            PROJECT_NUMBER: "SW13300.1",
                            STANDARD_FLAG: "Y",
                        }
                    }, {
                        id: '81c55ffb52ea4159adec3efdd50d8bf2',
                        from: '2019-02-28 20:12:03',
                        to: '2019-02-28 20:58:48',
                        name: 'MO-SW133000012',
                        movable: true,
                        flag: 'A C',
                        visible: true,
                        color: 'rgba(38, 232, 82, 1),rgba(38, 232, 82, 0.4)',
                        AColor: 'black',
                        BColor: 'red',
                        CColor: 'yellow',
                        taskTooltipsContent: {
                            DEMAND_DATE: "2019-03-01 00:00:00",
                            DESCRIPTIONS_CN: "N 批量整机3 MO-200523 65M90E0 RBO-AVATA2-70SS AN-RE 马来西亚 220-240V,1Ph 50/60Hz 216",
                            ITEM_CODE: "62711-20052301",
                            MAKE_ORDER_NUM: "MO-SW133000012",
                            MO_QTY: 50,
                            PROJECT_NUMBER: "SW13300.1",
                            STANDARD_FLAG: "Y",
                        }
                    }, {
                        id: '81c55ffb52ea4159adec3efdd50d8bf3',
                        from: '2019-02-28 21:45:33',
                        to: '2019-02-28 22:32:19',
                        name: 'MO-SW133000012',
                        movable: true,
                        flag: 'C',
                        visible: true,
                        color: 'rgba(38, 232, 82, 1),rgba(38, 232, 82, 0.4)',
                        AColor: 'black',
                        BColor: 'red',
                        CColor: 'yellow',
                        taskTooltipsContent: {
                            DEMAND_DATE: "2019-03-01 00:00:00",
                            DESCRIPTIONS_CN: "N 批量整机2 MO-200523 65M90E0 RBO-AVATA2-70SS AN-RE 马来西亚 220-240V,1Ph 50/60Hz 216",
                            ITEM_CODE: "62711-20052301",
                            MAKE_ORDER_NUM: "MO-SW133000012",
                            MO_QTY: 50,
                            PROJECT_NUMBER: "SW13300.1",
                            STANDARD_FLAG: "Y",
                        }
                    }]
                },
            ]
    }
)
;
ganter.draw();

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
        }

        draw() {
            let background = this.background;
            let stage = this.stage;
            background.draw();
            stage.add(background.layer)
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
                draggable: true,
                dragBoundFunc(pos) {
                    let backgroundGrid = this.parent.find('#backgroundGrid')[0];
                    if (pos.x >= op.x) {
                        backgroundGrid.x(op.x);
                        return {x: op.x+.5, y: this.getAbsolutePosition().y};
                    }

                    backgroundGrid.x(Math.floor(pos.x));
                    return {
                        x: Math.floor(pos.x)+.5,
                        y: this.getAbsolutePosition().y,
                    }
                }
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
                let xCellWidth = Math.floor(stageWidth / timeNum);

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

            this.group = new Konva.Group({
                id,
                x: op.x,
                y: op.y,
                draggable: true,
                dragBoundFunc(pos) {
                    let backgroundGrid = this.parent.find('#backgroundGrid')[0];
                    if (pos.y >= op.y) {
                        backgroundGrid.y(op.y);
                        return {x: this.getAbsolutePosition().x, y: op.y+.5};
                    }

                    backgroundGrid.y(Math.floor(pos.y));
                    return {
                        x: this.getAbsolutePosition().x,
                        y: Math.floor(pos.y)+.5,
                    }
                }
            })
            store.set('yaxis', {options: op});
        }

        draw() {
            let op = store.get('options').yAxis;
            let data = op.data;
            let nameGroupHeight = 0;
            let totalCells = 0
            if (op.customData) {
                for (let i = 0, ii = op.customData.length; i < ii; i++) {
                    let yCell = new YaxisCell(`ycuscell${i}`, 'yaxis', i, nameGroupHeight, op.customData[i], totalCells);
                    nameGroupHeight = yCell.nameGroupHeight
                    totalCells = yCell.totalCells;
                    this.group.add(yCell.group);
                }
            }

            for (let i = 0, ii = data.length; i < ii; i++) {
                let yCell = new YaxisCell(`ycell${i}`, 'yaxis', i, nameGroupHeight, null, totalCells);
                nameGroupHeight = yCell.nameGroupHeight;
                totalCells = yCell.totalCells;
                this.group.add(yCell.group);
            }
            store.set('yaxis', {dealt: {totalHeight: nameGroupHeight, totalCells: totalCells}});
        }
    }

    // CELL Class
    class Cell {
        constructor(id, name) {
            this.group = new Konva.Group({id, name});
        }

        draw() {
        }
    }

    class AxisCell extends Cell {
        constructor(id, name) {
            super(id, name);
            this.defaultOp = {
                rect: {
                    fill: '#fff',
                    stroke: 'transparent',
                    strokeWidth: 0,
                },
                text: {
                    fill: '#000',
                    align: 'left',
                    verticalAlign: 'middle',
                    fontSize: 14,
                    warp: 'none',
                    lineHeight: 1,
                }
            };
        }
    }

    class XaxisCell extends AxisCell {
        constructor(id, name, w, h, i, cusAllWidth) {
            super(id, name, w, h);
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
                    fontSize: 14,
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
                    fontSize: 14,
                    wrap: 'none',
                });
                group.add(rect);
                group.add(text);
            }

        }
    }

    class YaxisCell extends AxisCell {
        constructor(id, name, i, nameGroupHeight, cd, totalCells) {
            super(id, name);
            this.nameGroupHeight = 0;
            this.draw(i, this.group, nameGroupHeight, cd, totalCells);
            return this.nameGroupHeight;
        }

        draw(i, group, nameGroupHeight, cd, totalCells) {
            let yAxisOp = store.get('yaxis');
            let op = yAxisOp.options;
            let options = util.extend(true, {}, this.defaultOp, op.cell);
            let width = options.width, height = options.height;
            cd = cd || op.data[i];
            // Y轴是否存在分组
            if (util.isObject(cd)) {
                if (cd.drawName) { // 是否需要绘制组名
                    let options = util.extend(true, {}, this.defaultOp, op.cell, cd.nameStyle);
                    let width = options.width, height = options.height;
                    let rect = new Konva.Rect({
                        width,
                        height,
                        ...options.rect,
                        y: nameGroupHeight,
                    });
                    let text = new Konva.Text({
                        width,
                        height,
                        ...options.text,
                        text: cd.name,
                        y: nameGroupHeight,
                    });
                    this.nameGroupHeight = nameGroupHeight + height;
                    group.add(rect);
                    group.add(text);
                    totalCells += 1;
                    this.totalCells = totalCells;
                }
                if (cd.children) {//绘制组员
                    if (this.nameGroupHeight !== 0) {
                        nameGroupHeight = this.nameGroupHeight;
                    }
                    //drawChildren
                    for (let i = 0, ii = cd.children.length; i < ii; i++) {
                        let rect = new Konva.Rect({
                            width,
                            height,
                            ...options.rect,
                            y: nameGroupHeight + i * height,
                        });
                        let text = new Konva.Text({
                            width,
                            height,
                            ...options.text,
                            y: nameGroupHeight + i * height,
                            text: cd.children[i],
                        });
                        group.add(rect);
                        group.add(text);
                        totalCells += 1;
                    }
                    this.nameGroupHeight = nameGroupHeight + cd.children.length * height;
                    this.totalCells = totalCells;
                }
            } else {
                let rect = new Konva.Rect({
                    width,
                    height,
                    ...options.rect,
                    y: i * height,
                });
                let text = new Konva.Text({
                    width,
                    height,
                    ...options.text,
                    y: i * height,
                    text: cd,
                });
                group.add(rect);
                group.add(text);
                totalCells += 1;
                this.nameGroupHeight = nameGroupHeight + height;
                this.totalCells = totalCells;
            }
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

    return new AGanter();
}





