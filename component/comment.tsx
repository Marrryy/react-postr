import { CommentModel } from "@/lib/model";
import { FunctionComponent } from "react";

export default function CommentCard({data}: {data:CommentModel}){
    return (
        <div className="flex items-center">
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{data.username} comments</p>
                <p className="text-gray-600">{data.message}</p>
            </div>
        </div>
    );
}