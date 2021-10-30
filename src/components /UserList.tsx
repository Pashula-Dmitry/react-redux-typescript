import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector((state) => state.user);
  const {fetchUsers} = useActions();


    useEffect(()=> {
        fetchUsers();
    }, [])

    if(loading) {
        return <div> Идёт загрузка, подождите</div>
    }
    if(error) {
        return <div>{error}</div>
    }
    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UserList;
