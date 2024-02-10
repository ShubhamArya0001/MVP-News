import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  const[articles , setArticles] = useState([]);
  const[loading, setLoading] = useState(true); 
  const[page, setPage] = useState(1); 
  const[totalResults, setTotalResults] = useState(0); 

  const  capital = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
      
    
   const  update = async()=> {
         props.setProgress(0);
        const url =
            `https://newsapi.org/v2/top-headlines?country=${props.countries}&category=${props.category}&apiKey=ea0721ac32444d7aadf6a3f5721c36ab&page=${page - 1}&pageSize=${props.page}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsed = await data.json();
        props.setProgress(50);
        setArticles(parsed.articles);
        setTotalResults(parsed.totalResults);
        setArticles(parsed.articles);
        setLoading(false);
        // setState({
        //     totalResults: parsed.totalResults,
        //     articles: parsed.articles,
        //     loading: false,
        // })
        props.setProgress(100);

    }
    // handleprevClick = async () => {
    //     .setState({ page: .state.page - 1 });
    //     .update();

    // }
    // handlenextClick = async () => {
    //     .setState({ page: .state.page + 1 });
    //     .update();
    // }

    useEffect(() => {
        document.title = `MvpNews - ${capital(props.category)}`;
        update();
        // eslint-disable-next-line
    },[]);
  const  fetchMoreData = async() => {
      const url =
      `https://newsapi.org/v2/top-headlines?country=${props.countries}&category=${props.category}&apiKey=ea0721ac32444d7aadf6a3f5721c36ab&page=${page+1}&pageSize=${props.page}`;
      setPage(page+1);
      let data = await fetch(url);
      let parsed = await data.json();
      setArticles(articles.concat(parsed.articles));
      setTotalResults(parsed.totalResults);
    
};

        return (
            <div className="container my-3">
                <h2 className="text-center" style={{ marginTop :'90px', color: 'red', textShadow: 'yellow 2px 2px', fontSize: 'xx-larger' }} >MVP - Top {capital(props.category)} Headlines</h2>
                {loading && <Loading />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading/>}
                >
                    <div className="container">
                    <div className="row">
                        {/* {loading && map((article) => { */}
                        {articles.map((article) => {
                            return <div className="col-md-4 my-3" key={article.url}>
                                <NewsItem title={article.title} description={article.description}
                                    imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} date={article.publishedAt} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled=state.page <= 1} type='button' onClick={handleprevClick} className="btn btn-dark">&larr; previous</button>
                    <button disabled={(state.page + 1 > Math.ceil(.state.totalResults / props.page))} type='button' onClick={.handlenextClick} className="btn btn-dark">Next &rarr;</button>
                </div> */}
            </div>
        )
        }
    News.defaultProps = {
        countries: 'in',
        page: 6,
        category: 'general',
    }

    News.propTypes = {
        countries: PropTypes.string,
        page: PropTypes.number,
        category: PropTypes.string

    }

export default News;