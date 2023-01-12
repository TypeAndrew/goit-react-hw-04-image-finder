import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery} from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { useState, useEffect, useRef } from 'react';
import { STATUS } from '../constants/status.constants';
import { getImages } from '../services/images.sevice';


export const App = () => {

    const [images,setImages] = useState([]);
    const [status,setStatus] = useState(STATUS.idle); // 'idle', 'loading', 'success', 'error'
    const [search,setSearch] = useState('');
    const [page,setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
   

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
    
      
      fetchData({ page: page , search: search  });
 
     
  },[ search,page])



  const onSearchLoad = (search='') =>{
    
    setPage(1);  
    setSearch(search); 
    setImages([]); 
      
  }

  const onButtonLoad = () => {
     
    setPage(page+1);
    setSearch(search); 
   
  }

  const handleToggle = (evt) => {
    
    setIsModalOpen(prevState => ( !isModalOpen ));
  }

  
    return (
    <div className={"App"} >
      
      <Searchbar onSearchLoad={onSearchLoad} />
       {status === STATUS.loading
        ? < Loader />
        :<ImageGallery elements={images} status={status} handleToggle={ handleToggle} />}
      <Button onButtonLoad={onButtonLoad} page={ page } />
      <ScrollDown />
      </div>
      
    );
  
};

const ScrollDown = () => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return <div ref={divRef} />;
}
