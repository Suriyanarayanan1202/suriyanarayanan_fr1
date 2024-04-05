import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid  " style={{height:"300px",backgroundColor:"lightpink"}}>
        <div className="row">
            <div className="col"><img style={{height:"200px",width:"300px",borderRadius:"30px",marginTop:"50px"}} src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710374400&semt=ais" alt="" /></div>
            <div className="col" style={{marginLeft:"30px",color:"white"}}>
                <div className="row ">COMPANY</div>
            </div>
            <div className="col">
                <div className="row">TERMS & CONDITION</div>
            </div>
            <div className="col">
                <div className="row">ABOUT SHOP</div>
            </div>
            <div className="col">
                <div className="row">CONTACT INFO</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
