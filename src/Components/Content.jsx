import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Content = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://contentai-net-text-generation.p.rapidapi.com/v1/text/blog-articles',
        params: {
          category: 'health-and-medicine'
        },
        headers: {
          'X-RapidAPI-Key': '888823ea34mshdace7274160009ep1ca32ejsn6f4edeae7dea',
          'X-RapidAPI-Host': 'contentai-net-text-generation.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const contentData = response.data;
        setContent(contentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div id="content">
      {content || 'Loading content...'}
    </div>
  );
};

export default Content;
