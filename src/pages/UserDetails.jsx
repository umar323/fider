import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { FaUsers, FaUserFriends, FaBriefcase } from "react-icons/fa";
import { Context } from '../context/context';
import Loading from '../components/Loading';


function UserDetails() {
    const params = useParams()
    const { user, dataUser } = useContext(Context)

    useEffect(() => {
        dataUser(params.login)
    }, [params.login])
    console.log(user);
    if (!user) {
        return <Loading />
    }
    return (
        <div className="details container">
            <div className="details__right">
                <div className="details__avatar">
                    <img src={user.avatar_url} alt="avatar" className="details__image" />
                </div>
                <h2 className="details__login">{user.login}</h2>
                <p className="details__location"><ImLocation />{user.location}</p>
                <div className="details__button">
                    <button className="details__github"><a href={user.html_url}>Github</a></button>
                    <button className="details__proweb"><a href="https://proweb.uz/">Proweb</a></button>
                </div>
                <p className="details__bio">{user.bio}</p>
            </div>
            <div className="details__left">
                <h1 className="details__name">{user.name}</h1>
                <div className="details__info">
                    <p className="details__create"><span>Created date: </span> {user.created_at}</p>
                    <p className="details__update"><span>Update date: </span> {user.updated_at}</p>
                    {user.company && (
                        <p className="details__status"><span>Company: </span> {user.company}</p>
                    )}
                    {user.blog && (
                        <p className="details__status"><span>Website: </span> <a href={user.blog}>{user.blog}</a></p>
                    )}
                    {user.email && (
                        <p className="details__status"><span>Email: </span> <a href={`mailto:${user.email}`}>{user.email}</a></p>
                    )}
                    {user.twitter_username && (
                        <p className="details__status"><span>Twitter: </span>
                        <a href={`https://twitter.com/?lang=ru ${user.twitter_username}`}>{user.twitter_username}</a> </p>
                    )}
                    {user.type && (
                        <p className="details__status"><span>Status: </span> {user.type}</p>
                    )}
                </div>
            </div>
            <div className="details__bottom">
                <div className="details__box">
                    <FaUsers />
                    <div>
                        <p className="details__num">{user.followers}</p>
                        <p className="details__text">User's followers</p>
                    </div>
                </div>
                <div className="details__box">
                    <FaUserFriends />
                    <div>
                        <p className="details__num">{user.following}</p>
                        <p className="details__text">User's following</p>
                    </div>
                </div>
                <div className="details__box">
                    <FaBriefcase/>
                    <div>
                        <p className="details__num">{user.public_repos}</p>
                        <p className="details__text">User's repos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails