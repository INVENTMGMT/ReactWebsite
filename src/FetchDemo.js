import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FetchDemo = props => {
  const { subreddit } = props;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url='https://www.reddit.com/r/calpoly.json';
    axios.get(url)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <h1>/r/{subreddit}</h1>
      <ul>
        {
          posts.map(post =>
            <li key={post.id}>
              <a href={post.url}>
                {post.title}
              </a>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default FetchDemo 
