import React, { Component } from 'react'
import DownloadIcon from 'react-icons/lib/md/cloud-download'
import Preview from 'react-icons/lib/fa/eye'

class Project extends Component {
	state = {
		on: false
	}
handleOnOff = () => {
	this.setState({on: false})
}
handleOnOn = () => {
	this.setState({on: true})
}

render() {
	const { name, skills, boxClass, downloadLink, previewLink, pClass, description, image} = this.props
 	let tShadow = this.state.on ? "4px 5px 17px #000000" : null
	let imgWidth = this.state.on ? "80px" : null
	let bColor = this.state.on ? "#000000" : null
	let boxHeight = this.state.on ? "100%" : null
	let textv = this.state.on ? "visible" : null

    return (
			name === "placeHolder" ? <div className= "clearfix visible-sm-block visible-md-block visible-lg-block">
		</div> :

        <article className={boxClass}
								 style={{borderColor:bColor, height:boxHeight}}
								 onMouseEnter={this.handleOnOn}
								 onMouseLeave={this.handleOnOff}>
        <img src={image}
             className="img-thumbnail img-responsive center-block imgwrapper "
             width="100"
             alt="thumbnail"
						 style={{width:imgWidth}} />
						 <div className="container-fluid">
					 <h2 style={{textShadow:tShadow}}>{name}</h2>
           <h3 ><em>{skills}</em></h3>
					 <div className= "row">
          <a className="btn btn-lg" href={previewLink}>
            <Preview size={50} onClick={this.handleOnOff} />
            <h5>PREVIEW</h5></a>
						<a className="btn btn-lg" href={downloadLink}
							 download="LiamKande-Project">
							<DownloadIcon size={50} />
							<h5>DOWNLOAD</h5></a>
					</div>
            <p className={pClass} style={{visibility:textv}} >{description}</p>
						</div>
        </article>
    )
	}
}

export default Project
