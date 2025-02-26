import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  

  
 


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحظه ایی تتر(دلار)" } style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        <div style={{width:"100%" , height:50 ,backgroundColor:"#B3CCB1",borderRadius:10,textAlign:"center"}}>

          <br-x/>
          <br-xx/>
          <br-xxx/>
          قیمت : {(props.p.price as number).toLocaleString("fa-IR")}

        </div>
        <br-x/>

                 

        <div style={{width:"100%" , height:50 ,backgroundColor:"#B3CCB1",borderRadius:10,textAlign:"center"}}>

          <br-x/>
          <br-xx/>
          <br-xxx/>
          تغییرات ۲۴ ساعت گذشته : {
        "٪" + (Number(props.p.diff24d) as number).toLocaleString("fa-IR")
        }
        </div>
        <br-x/>


         <div style={{width:"100%" , height:50 ,backgroundColor:"#B3CCB1",borderRadius:10,textAlign:"center"}}>

          <br-x/>
          <br-xx/>
          <br-xxx/>
        تغییرات هفتگی : {
        "٪" + (Number(props.p.diff7d) as number).toLocaleString("fa-IR")
        }
        </div>
        <br-x/>

         <br-x/>


         <div style={{width:"100%" , height:50 ,backgroundColor:"#B3CCB1",borderRadius:10,textAlign:"center"}}>

          <br-x/>
          <br-xx/>
          <br-xxx/>
        تغییرات ماهانه : {
        "٪" + (Number(props.p.diff30d) as number).toLocaleString("fa-IR")
        }
        </div>
        <br-x/>

        <center style={{fontSize:10}}>
          تیم تورینگ
        </center>
        
       
      </Window>
    </div>

    
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p = data.data.currencies.USDT

    console.log("prrrrrrrrriiiiceeee:",p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}