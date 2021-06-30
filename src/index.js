import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import Faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App =()=>{
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetails 
                author="Rupali" 
                timeAgo="Today at 10:00 AM" 
                content="Nice blog post!"
                avatar={Faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetails 
                author="Parag" 
                timeAgo="Today at 11:00 AM" 
                content="Nice post!"
                avatar={Faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetails 
                author="Ravi" 
                timeAgo="Today at 2:00 PM" 
                content="Nice blog!"
                avatar={Faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetails 
            author="Deepti" 
            timeAgo="Today at 6:00 PM" 
            content="Like post!"
            avatar={Faker.image.avatar()}
        />
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App></App>,document.querySelector('#root'));