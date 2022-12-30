

import { Component } from 'react';
import { STATUS } from '../../constants/status.constants';
import { getImages } from '../../services/images.sevice';
export class Button extends Component { 
    
    state = {}
    //const { onButtonLoad } = props; 
    fetchData = async ({ per_page = 1, search = '' }) => {
    this.setState({ status: STATUS.loading });
    try {
      const data = await getImages({ per_page, search });
      this.setState({ images: data.hits, status: STATUS.success });
    } catch (error) {
      console.log(error);
      this.setState({ status: STATUS.error });
    }
};
  
    render(){
        return (<button className="Button" onClick={this.props.onButtonLoad}>Button</button>)
     }
}