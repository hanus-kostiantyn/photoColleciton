import { useEffect, useState } from 'react';
import Collection from './Collection';
import './index.scss';


const cats = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
  ];

function App() {

    const [categoryId, setCategoryId] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const category = categoryId ? `category=${categoryId}` : '';

        fetch(`https://66c1b7fdf83fffcb587a04e7.mockapi.io/photoCollection?page=${page}&limit=3&${category}`)
        .then(res => res.json())
        .then(json => setCollection(json))
        .catch(err => {
            console.warn(err);
            alert('Received error during fetching data')
        })
        .finally(() => setIsLoading(false))
    }, [categoryId, page])

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => <li
            onClick={() => setCategoryId(i)} 
            className={categoryId === i ? 'active' : ''}
            key={obj.name}>{obj.name}</li>)}
        </ul>
        <input 
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            className="search-input" 
            placeholder="Поиск по названию"  />
      </div>
      <div className="content">
        {isLoading ? <h2>Loading...</h2> : (
            collection.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map((obj, index) => (
            <Collection
            key={index}
            name={obj.name}
            images={obj.photos}
          />
            ))
        )}
        
      </div>
      <ul className="pagination">
        {
            [...Array(5)].map((_, i) => <li key={i} onClick={() => setPage(i + 1)} className={page === (i +1 ) ? 'active' : ''}>{i + 1}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
