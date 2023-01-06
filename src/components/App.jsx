import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery} from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Component } from 'react';


import { STATUS } from '../constants/status.constants';
import { getImages } from '../services/images.sevice';


export class App extends Component {
  state = {
    images: [],
    status: STATUS.idle, // 'idle', 'loading', 'success', 'error'
    search: '',
    page: 1,
    
    isModalOpen: false
  };
  
   fetchData = async ({ page = 1, search = '' }) => {
    this.setState({ status: STATUS.loading });
    try {
      const data = await getImages({ page, search });
      this.setState({ images: data.hits, status: STATUS.success });
    } catch (error) {
      console.log(error);
      this.setState({ status: STATUS.error });
    }
  };

  componentDidMount() {
    
    this.fetchData({ page: 1,  search: '' });

  }

  componentDidUpdate(_,prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ page: 1 });
      this.fetchData({ page: this.state.page , search: this.state.search  });
     } 
     
  }

  onSearchLoad = (search='') =>{
     
    this.setState({ page: 1,search: search});
    
  }

  onButtonLoad = () => {
    const page = this.state.page + 1;
    const search = this.state.search;
    this.setState({ page: page,  search: search});
    this.fetchData({ page: page,  search: search});
  }

  handleToggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    
  const { images, page, status } = this.state;
  
    return (
    <div className={"App"} >
      
      <Searchbar onSearchLoad={this.onSearchLoad} />
       {status === STATUS.loading
        ? < Loader />
        :<ImageGallery elements={images} status={status} handleToggle={ this.handleToggle} />}
      <Button onButtonLoad={this.onButtonLoad} page={ page } />
      
    </div>
    );
    }
};


