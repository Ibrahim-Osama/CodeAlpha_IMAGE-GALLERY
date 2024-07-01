let imglist = Array.from( document.querySelectorAll('.item img'))

let layerout = document.getElementById('contian')

imglist.forEach((item)=>
{

    item.addEventListener('click',(e)=>
    {
        let closebtn = document.getElementById('close')
        let rightbtn = document.getElementById('right')
        let leftbtn = document.getElementById('left')
        let pressimg = 0
        layerout.style.display = 'flex';
        let imgsrc = (e.target.getAttribute('src'));
        layerout.firstElementChild.style.backgroundImage =`url(${imgsrc}) `
        
        pressimg = imglist.indexOf(e.target)

        let nextimg = ()=>
        {
        pressimg++
        if(pressimg == imglist.length)
        {
            pressimg =0
        }
          let imgsrc =  imglist[pressimg].getAttribute('src') 
          layerout.firstElementChild.style.backgroundImage =`url(${imgsrc}) `

        console.log(pressimg);
        }
        let previmg = ()=>
        {
            pressimg--
            if(pressimg < 0)
            {
                pressimg =imglist.length -1
            }
            let imgsrc =  imglist[pressimg].getAttribute('src') 
            layerout.firstElementChild.style.backgroundImage =`url(${imgsrc}) `
        }

        let closeimg = ()=>
        {
            layerout.style.display = 'none';
        }
        rightbtn.addEventListener('click',nextimg)
        leftbtn.addEventListener('click',previmg)
        closebtn.addEventListener('click',closeimg)

        })
        })


