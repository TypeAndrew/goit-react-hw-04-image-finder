import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery} from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Component } from 'react';


import { STATUS } from '../constants/status.constants';
import { getImages } from '../services/images.sevice';



//const language = 'en-US';

export class App extends Component {
  state = {
    images: [],
    status: STATUS.idle, // 'idle', 'loading', 'success', 'error'
    search: '',
    page: 1,
    per_page: 15
  };
  
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

  componentDidMount() {
    
    this.fetchData({ per_page: 15,  search: '' });

  }

  componentDidUpdate(_,prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ per_page: 15 });
      this.fetchData({ per_page: this.state.per_page , search: this.state.search  });
     } 
     //this.fetchData({ per_page: this.stete.per_page, search: this.stete.search });
  }

  onSearchLoad = (search='') =>{
     
    this.setState({ per_page: 15,search: search});
    //this.fetchData({ per_page: this.state.per_page , search: search  });
  }

  onButtonLoad = () => {
    const per_page = this.state.per_page + 15;
    const search = this.state.search;
    this.setState({ per_page: per_page,  search: search});
    this.fetchData({ per_page: per_page,  search: search});
  }

  render() {
    const { images,per_page,status  } = this.state;
  return(
    <div  className={"App"} >
      <Searchbar onSearchLoad={this.onSearchLoad } />
      {<ImageGallery elements={images} status={ status} />}
      {status === STATUS.loading && < Loader />}
      <Button onButtonLoad={this.onButtonLoad} per_page={ per_page } />
      <Modal/>
    </div>
    );
    }
};
