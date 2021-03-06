import React, {Component} from 'react'
import {Helmet} from 'react-helmet';

class HelmetComp extends Component{
    render(){
        return(
            <Helmet >
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description}/>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = no"/>
                <meta name="theme-color" content="#0976dc" />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta property="og:url" content={this.props.url} />
                <meta property="og:title" content={this.props.title || ''} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:site-name" content="BASOBAAS" />
                <meta property="og:description" content={this.props.description} />
                <meta name="twitter:title" content={this.props.title || ''} />
                <meta name="twitter:site" content={this.props.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={this.props.image} />
                <meta name="twitter:description" content={this.props.description} />
                <meta property="og:image" content={this.props.image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <link rel="icon" href="/images/favicon.png"/>
                <script src={this.props.chatScriptUrl} async="async"></script>
            </Helmet>
        )
    }
}

export default HelmetComp;