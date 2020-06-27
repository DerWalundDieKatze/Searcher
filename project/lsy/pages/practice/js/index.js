var _jm = null;
function load_jsmind(){
    var mind = {
        meta:{
            name:'daturxemo',
            author:'pywizard6261@gmail.com',
            version:'0.1'
        },
        format:'node_array',
        data:[
            {"id":"root", "isroot":true, "topic":"刻意练习"},

            {"id":"sub1", "parentid":"root", "topic":"有目的的练习"},
            {"id":"sub11", "parentid":"sub1", "topic":"明确定义的特定目标"},
            {"id":"sub12", "parentid":"sub1", "topic":"分解目标成具体计划"},
            {"id":"sub13", "parentid":"sub1", "topic":"练习必须包含反馈"},
            {"id":"sub14", "parentid":"sub1", "topic":"保持动力"},

            {"id":"sub2", "parentid":"root", "topic":"构建心理表征"},
            {"id":"sub21", "parentid":"sub2", "topic":"为概念创建表征：了解、感受、接触"},
            {"id":"sub22", "parentid":"sub2", "topic":"寻找行业黄金标准"},

            {"id":"sub3", "parentid":"root", "topic":"训练技能"},
            {"id":"sub31", "parentid":"sub3", "topic":"能做什么，不只是知道什么"},
            {"id":"sub32", "parentid":"sub3", "topic":"大量训练，找到正确的方法"},
            {"id":"sub33", "parentid":"sub3", "topic":"单独研究高水平者采用的方式"},


            {"id":"sub4", "parentid":"root", "topic":"自己设计练习方法"},
            {"id":"sub41", "parentid":"sub4", "topic":"专注"},
            {"id":"sub42", "parentid":"sub4", "topic":"反馈"},
            {"id":"sub43", "parentid":"sub4", "topic":"纠正"},

            {"id":"sub5", "parentid":"root", "topic":"保持动机"},
            {"id":"sub51", "parentid":"sub5", "topic":"弱化停下脚步的理由：预留时间"},
            {"id":"sub52", "parentid":"sub5", "topic":"强化前行的动机：外在因素的反馈"},
        ]
    };
    var options = {
        container:'jsmind_container',
        editable:true,
        theme:'primary',
        shortcut:{
            handles:{
                test:function(j,e){
                    console.log(j);
                }
            },
            mapping:{
                test:89
            }
        }
    }
    _jm = jsMind.show(options,mind);
    // jm.set_readonly(true);
    // var mind_data = jm.get_data();
    // alert(mind_data);
}
  
function replay(){
    var shell = _jm.shell;
    if(!!shell){
        shell.replay();
    }
}

load_jsmind();

 

function save_nodetree(){
    //获取弹窗得div
    var modal = document.getElementById('myModal');
  
    
    let shareContent = document.getElementById('pic_all_content'); //需要截图的包裹的（原生的）DOM 对象
    console.log(shareContent)
    width = shareContent.clientWidth,//shareContent.offsetWidth; //获取dom 宽度
    height = shareContent.clientHeight,//shareContent.offsetHeight; //获取dom 高度
    canvas = document.createElement("canvas"), //创建一个canvas节点
    console.log(canvas)
    scale = 1; //定义任意放大倍数 支持小数
    canvas.width = width * scale; //定义canvas 宽度 * 缩放
    canvas.height = height * scale; //定义canvas高度 *缩放
    canvas.style.width = shareContent.clientWidth * scale + "px";
    canvas.style.height = shareContent.clientHeight * scale + "px";
    canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
    let opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        logging: false, //日志开关，便于查看html2canvas的内部执行流程
        width: width, //dom 原始宽度
        height: height,
        useCORS: true // 【重要】开启跨域配置
    };
    // alert("截图后右击鼠标保存图片")

    html2canvas(shareContent,opts).then()
    //窗体弹出
    var box = document.getElementById('pic-box');
    while(box.firstChild){
        box.removeChild(box.firstChild);
    }

    box.appendChild(canvas);
    modal.style.display = "block";
    console.log(box, 222);
   
 
    // 在用户点击其他地方时，关闭弹窗
    window.onclick = function(event) {
        //点击窗口外内容，关闭窗口
        if (event.target == modal) modal.style.display = "none";
    }
}