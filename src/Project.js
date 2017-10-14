import React, { Component } from 'react'
import DownloadIcon from 'react-icons/lib/md/cloud-download'

class Project extends Component {
	constructor(){
	    	super();
	      this.state = {
	      	text_Shadow: true,
					img_Width:false,
					border_Color:false,
					box_Height: true
	      }
	    }

			handleChange(){
		     		this.setState({text_Shadow: !this.state.text_Shadow})
						this.setState({img_Width: !this.state.img_Width})
						this.setState({border_Color: !this.state.border_Color})
						this.setState({box_Height: !this.state.box_Height})
					}

render() {
	const { name, skills, boxClass, downloadLink, pClass, description, image} = this.props
 	let tShadow = this.state.text_Shadow ? "none" : "4px 5px 17px #000000"
	let imgWidth = this.state.img_Width ? "80px" : null
	let bColor = this.state.border_Color ? "#000000" : null
	let boxHeight = this.state.box_Height ? null : "100%"

    return (
			name === "placeHolder" ? <div className= "clearfix visible-sm-block visible-md-block visible-lg-block">
		</div> :

        <article className={boxClass}
								 style={{borderColor:bColor, height:boxHeight}}
								 onMouseEnter={this.handleChange.bind(this)}
								 onMouseLeave={this.handleChange.bind(this)}>
        <img src={image}
             className="img-thumbnail img-responsive center-block imgwrapper "
             width="100"
             alt="thumbnail"
						 style={{width:imgWidth}} />
						 <div className="container-fluid">
					 <h2 style={{textShadow:tShadow}}>{name}</h2>
           <h3 ><em>{skills}</em></h3>
          <a className="btn btn-lg" href={downloadLink}
             download="LiamKande-Project">
            <DownloadIcon size={50} />
            <h5>DOWNLOAD</h5></a>
            <p className={pClass}  >{description}</p>
						</div>
        </article>
    )
	}
}

export default Project
