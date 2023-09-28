import React, { Component } from 'react';

class Footer extends Component {
   render() {

      const email = this.props.data?.email
      const networks = this.props.data?.social.map(function (network) {
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })

      return (
         <footer>

            <div className="row">
               <div className="twelve columns">
                  <ul className="social-links">
                     {networks}
                  </ul>

                  <ul className="copyright">
                     <li>&copy; Copyright {(new Date()).getFullYear()} Tobi Oladimeji</li>
                  </ul>

               </div>
               <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
         </footer>
      );
   }
}

export default Footer;
