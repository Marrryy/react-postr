'use client'

import { useEffect, useState } from 'react';
import PostCard from '@/component/post';
import { getData } from '@/lib/function';
import { PostModel } from "@/lib/model";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function PageList() {
  const [data, setData] = useState<PostModel[]>([])
  const [isLoading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true)
    
    let currentData = getData();
    setData(currentData);
    setLoading(false)
  }, [])

  const fetchData = async () => {
    // const newPosts = getData();
    // setData((post) => [...post, ...newPosts]);
    setHasMore(false);
  };
  const updateData = (id :string) => {
    const newPosts = getData();
    setData((prevState) => {
      const updatedData = prevState.map((post) => {
        if (post.id === id) {
          return newPosts.find(x=>x.id == id);
        }
        return post;
      });
      return updatedData as PostModel[]; 
    });
  };

  if (isLoading) return <p>Loading...</p>
  if (!data || data.length==0) return (
      <div className="mb-32 grid text-center mb-0 ">
        <p>No data. Please Post</p>
      </div>
  )

  return (
      <div className="mb-32 grid mb-0 text-left">

        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshThreshold={50}
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          // }
        >
        {data&&data.map((p,i) => {
            return (
                <div key={"post-"+i} className="post">
                    <PostCard data={p} updateData={updateData}/>
                </div>
            );
        })}
        </InfiniteScroll>

      </div>
  )
}
