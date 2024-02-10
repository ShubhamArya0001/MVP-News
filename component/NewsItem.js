import React from 'react'
     const  NewsItem =(props)=> {
        let { title, description ,imageUrl,newsUrl, author, date} = props;
        return (
        <div className='my-3'>
            <div className="card">
                <img src={imageUrl?imageUrl : "https://th.bing.com/th/id/R.ec650ba850193976f6f1d231cb2de6e3?rik=ozaLmRWhZF3nxw&riu=http%3a%2f%2fwww.mrmediatraining.com%2fwp-content%2fuploads%2f2014%2f11%2fNews1.jpg&ehk=b2UfyzHxxXnX98uVNgtsMqWRm5IgfeRpT8fr0kvX%2bJs%3d&risl=&pid=ImgRaw&r=0"  } className="card-img-top" alt="tourna" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'> <small className='text-muted'>by {!author ? "unknow" :author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} rel ="noopener" className= "btn btn-sm btn-dark">Read Articles.....</a>
                </div>
            </div>
        </div>
    )
    
        }
        export default NewsItem;
