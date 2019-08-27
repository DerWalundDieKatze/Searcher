$(function(){
    console.log($('#new-row').append(item))
})

function webs(result){
    //回调函数名称(indexDemo)，需要与 src 中一致，而且要与文件地址中名一致。jsonp格式 名称({})
    //不然无法获取到对应的文件
        console.log(result)     //打印 indexDemo.json 中的数据
        var name = result.new[0].name
        var url = result.new[0].url
        var doc = result.new[0].doc
        var img = result.new[0].img
        console.log(result.new[0].name)
        console.log(result.new[0].url)
        console.log(result.new[0].doc)
        console.log(result.new[0].img)
        item = `
        <div class="col-sm-3">
        <div class="xe-widget xe-conversations box2 label-info" onclick="window.open(${url}, '_blank')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="${url}">
                    <div class="xe-comment-entry">
                        <a class="xe-user-img">
                            <img src=${img} class="img-circle" width="40">
                        </a>
                        <div class="xe-comment">
                            <a href="#" class="xe-user-name overflowClip_1">
                                <strong>${name}</strong>
                            </a>
                            <p class="overflowClip_2">${doc}</p>
                        </div>
                    </div>
                </div>
            </div>
        `

    
}