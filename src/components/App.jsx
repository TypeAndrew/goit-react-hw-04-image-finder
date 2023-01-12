import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery} from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { useState, useEffect, useRef } from 'react';
import { STATUS } from '../constants/status.constants';
import { getImages } from '../services/images.sevice';


export const App = () => {
  //state = {
    const [images,setImages] = useState([]);
    const [status,setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error'
    const [search,setSearch] = useState('');
    const [page,setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const divRef = useRef();
  //};
   

  const fetchData = async ({ page , search  }) => {
    setStatus(STATUS.loading);
    try {
      const data = await getImages({ page, search });
      setImages( prev=>([...prev , ...data.hits]));
      setStatus(STATUS.success ); 
    } catch (error) {
      console.log(error);
      setStatus(STATUS.error );
    }
  };

  useEffect(()=> {
    
    fetchData({ page: 1,  search: '' });
   // scrollToBottom();
  },[])

  useEffect(()=> {
    
      
      fetchData({ page: page , search: search  });
 
   //  scrollToBottom(); 
  },[ search,page])



  const onSearchLoad = (search='') =>{
    
    setPage(1);  
    setSearch(search); 
    setImages([]); 
    //setState({ page: 1,search: search, images: [] });
    
  }

  const onButtonLoad = () => {
     
    setPage(page+1);
    setSearch(search); 
   // setSearch(search); 
  }

  const handleToggle = (evt) => {
    
    setIsModalOpen(prevState => ( !isModalOpen ));
  }

  //const scrollToBottom = () => {
  //  divRef.scrollIntoView({ behavior: 'smooth' });
 // }

    
  //const { images, page, status } = this.state;
  
    return (
    <div className={"App"} >
      
      <Searchbar onSearchLoad={onSearchLoad} />
       {status === STATUS.loading
        ? < Loader />
        :<ImageGallery elements={images} status={status} handleToggle={ handleToggle} />}
      <Button onButtonLoad={onButtonLoad} page={ page } />
      <div ref={divRef} />
      </div>
      
    );
  
};



