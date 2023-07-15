'use client'

import { useEffect, useState } from 'react';
import PostCard from '@/component/post';
import { getData, getUsername } from '@/lib/function';
import { PostModel } from "@/lib/model";

export default function Home() {
  const [data, setData] = useState<PostModel[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    let currentData = getData();
    setData(currentData);
    setLoading(false)
    getUsername()
  }, [])

 
  if (isLoading) return <p>Loading...</p>
  if (!data || data.length==0) return (
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p>No data. Please Post</p>
      </div>
  )

  return (
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data&&data.map(p => {
            return (
                <div className="comment">
                    <PostCard data={p}/>
                </div>
            );
        })}
      </div>
  )
}
