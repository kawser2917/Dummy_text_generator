const dummyText=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut accumsan lorem, et mollis quam. Pellentesque et metus vehicula, porttitor est et, laoreet felis. Vivamus euismod metus a gravida tristique. Quisque non neque vehicula, laoreet justo ac, mollis massa. Duis eleifend euismod neque, id commodo massa commodo vitae. Mauris sollicitudin nisi in mattis volutpat. Fusce viverra neque vitae ante congue egestas.",
"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque interdum sodales lectus a pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sit amet interdum orci. Aliquam erat volutpat. Morbi mi orci, fringilla et massa eget, tincidunt varius leo. Curabitur dictum dolor sit amet eros gravida, vitae viverra elit interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed id libero et ex porta cursus. Ut a mollis eros, sed malesuada lacus. Vestibulum dignissim, ante vitae ornare dignissim, purus nisi consectetur nisi, vel iaculis tortor elit in turpis. Aenean rhoncus dolor vel est dapibus accumsan eget at felis. Phasellus ut justo ac mi condimentum laoreet a at leo. Suspendisse elementum augue vel leo hendrerit, ornare ultrices ex convallis. Quisque maximus risus vitae tellus dictum venenatis.",

"Maecenas accumsan lobortis pellentesque. Duis porta mattis mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque hendrerit euismod. Aenean lacinia dolor vel molestie viverra. Quisque ac molestie mauris. Curabitur dui nisi, tincidunt non feugiat eu, dictum quis turpis. Nulla porttitor eu enim at facilisis. Duis consectetur ex nec sem fermentum, et ornare nunc volutpat. Etiam mollis est felis, id viverra dui hendrerit quis. Proin consectetur mollis sapien, et malesuada urna semper at. Nunc mi lacus, tristique eu imperdiet euismod, dapibus eget ex. Vestibulum dignissim lorem dictum ligula commodo, eget vehicula sapien aliquet. Integer ullamcorper porttitor orci sit amet tempor. Donec gravida, diam eu euismod euismod, odio leo laoreet nunc, vel auctor neque diam quis ex.",

"Proin rutrum augue vitae nisi semper, et efficitur neque molestie. Donec varius sapien in purus malesuada porta. Aenean quis lacinia est. Fusce pharetra arcu justo, sed mollis tellus tristique et. Ut aliquam massa urna, nec lobortis lacus ultrices ac. Quisque sit amet aliquam nibh. Morbi id sem magna. Aliquam fringilla sem risus, et vestibulum odio blandit non.",

"Donec cursus sagittis enim, eu auctor sapien. Curabitur rutrum nulla at risus volutpat, ut viverra nisi venenatis. Praesent et dui orci. Praesent lacus nisi, suscipit non justo nec, semper lobortis neque. Aliquam lobortis ultrices blandit. Mauris sodales tincidunt finibus. Vestibulum commodo tortor non justo congue laoreet. Morbi sed felis sed libero placerat ultrices et et nisi. Proin a bibendum leo. Phasellus sit amet massa eget urna scelerisque pharetra. Aenean ullamcorper a mauris ultrices commodo. Suspendisse ac nisl placerat massa pharetra lobortis. Pellentesque volutpat quam in odio posuere fermentum."
]


const btn=document.querySelector("#btn")
const para=document.querySelector("p")

btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const range=parseInt(btn.value) 

   
        if (range==0){
            para.textContent=""
        }
        if(range==1){
            para.textContent=dummyText[0]
        }
        if(range==2){
             
            para.textContent=dummyText[0]

        }
        if(range==3){
            para.textContent=dummyText[2]
        }
        if(range==4){
            para.textContent=dummyText[3]
        }
        if(range==5){
            para.textContent=dummyText[4]
        }
   
})

