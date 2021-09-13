import React from "react";

import utils from "../../lib/util";

import KeywordIcon from "../icons/keywordIcon";

import ContentLoader from "react-content-loader";
import Link from "next/link"
import {observer} from "mobx-react";
import Image from 'next/image'


import Screen from "../utils/Responsive";

import _ from 'lodash';

export const CardPostLoader = (props) => {
  return (
    <div className={`card card-post`}>
      <div className={`card-body content-loader`}>
        <Screen upto="md">
        <ContentLoader
          speed={2}
          // backgroundColor="#F3F4F6"
          // foregroundColor="#ecebeb"
          viewBox="0 0 400 40"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%' }}
          {...props}
        >
          <rect x="0" y="0" rx="4" ry="4" width="40" height="40" />
          <rect x="56" y="6" rx="4" ry="4" width="320" height="6" />
          <rect x="56" y="26" rx="4" ry="4" width="128" height="6" />
        </ContentLoader>
        </Screen>

        <Screen from="lg">
        <ContentLoader
          speed={2}
          // backgroundColor="#F3F4F6"
          // foregroundColor="#ecebeb"
          viewBox="0 0 640 40"
          preserveAspectRatio="xMidYMid meet"
          // style={{ width: '100%' }}
          {...props}
        >
          <rect x="0" y="0" rx="4" ry="4" width="40" height="40" />
          <rect x="56" y="6" rx="4" ry="4" width="528" height="6" />
          <rect x="56" y="26" rx="4" ry="4" width="128" height="6" />
        </ContentLoader>
        </Screen>
      </div>
    </div>
  )}
  
export const CardPost = observer(({title, mediaUri, type, source, commentCount, voteCount,item,detailStore,dataStore,voteStore}) => {
  let isRada = false;
  if (item && item.news !== null && item.news.grabTopic !== null && item.news.grabTopic.url.indexOf("rada") !== -1) {
    isRada = true;
  }
  if (item && item.video !== null && item.video.grabTopic !== null && item.video.grabTopic.url.indexOf("rada") !== -1) {
    isRada = true;
  }
  if (isRada) {
    return (
      <CardPostRada title={title} mediaUri={mediaUri} type={type} source={source} commentCount={commentCount}
      voteCount={voteCount} detailStore={detailStore} dataStore={dataStore} voteStore={voteStore} item={item} />
    )
  }
  return (
    <CardPostNormal title={title} mediaUri={mediaUri} type={type} source={source} commentCount={commentCount}
      voteCount={voteCount} detailStore={detailStore} dataStore={dataStore} voteStore={voteStore} item={item} />
  )
    
})


const CardPostNormal = observer(({title, mediaUri, type, source, commentCount, voteCount,item,detailStore,dataStore,voteStore}) => {
  const date = utils.timeDifference(new Date(), new Date(item.createdAt))
  const dateTitle = utils.titleTime(item.createdAt)
  let state = ""
  if (!_.isEmpty(detailStore.data)){
    state = detailStore.data.item.id === item.id ? "active" : ""
  }
  let vote = voteStore.votes.filter(el =>{
    return el.id === item.id
  })
  let isVote
  if (vote.length > 0){
    voteCount = vote[0].totalVote
    isVote = vote[0].isVoted
  }
  dataStore.tweets.forEach((el) =>{
    if (el.id === item.id){
      commentCount = el.totalComment
    }
  })
  if (commentCount > 0){
    state += " hasComment"
  }
  if (isVote > 0 || voteCount > 0){
    state += " hasVote"
  }
  return (
    <div className={`card card-post ${state}`}>

      {mediaUri !== null ?
        <div className={`card-media`}>
          <div className={`card-media-img`}>
            <img layout='fill' className={`card-img`} src={mediaUri} alt={title}/>
          </div>
        </div>
        :
        <div className="card-media-blank">
          <img layout='fill' className="logo--img" src="/images/rada.svg" alt="no image" />
        </div>
      }

      <div className={`card-body`}>
        <div className={`card-body-header`}>
          <div className={`card-title`}>
            <span className="card-link">
              <span className="text-color-title" dangerouslySetInnerHTML={{__html: title}}></span>
            </span>
          </div>

          {/* Tạm ẩn Badges vì chưa có Data */}
          {/* <div className={`card-badges`}>
            <Link href="/">
              <span className="badge badge-btc">BTC</span>
            </Link>
            <Link href="/">
              <span className="badge badge-cardano">ADA</span>
            </Link>
            <Link href="/">
              <span className="badge badge-ethereum">ETH</span>
            </Link>
          </div> */}

        </div>

        <div className="metadata-wrapper justify-between">
          <div className="flex flex-shrink-0">
            <div className="metadata metadata-source">
              <span className="icon mr-1">
                <i className={`${type}`} />
              </span>
              <span className="metadata-value" title={source}>{source}</span>
            </div>
            <div className="metadata metadata-date">
              <span className="metadata-value" title={dateTitle}>{date}</span>
            </div>
          </div>
          <div className="flex flex-shrink-0 metadata-wrapper_nodivide">
            <div className="metadata metadata-commentcount">
              <span className="icon mr-1">
                <i className="fa fa-comment" />
              </span>
              <span className="">{commentCount}</span>
            </div>
            <div className="metadata metadata-votecount">
              <span className="icon mr-1">
                <i className="fa fa-arrow-up" />
              </span>
              <span>{voteCount}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
})

const CardPostRada = observer(({title, mediaUri, type, source, commentCount, voteCount,item,detailStore,dataStore,voteStore}) => {
  const date = utils.timeDifference(new Date(), new Date(item.createdAt))
  const dateTitle = utils.titleTime(item.createdAt)
  let state = ""
  if (!_.isEmpty(detailStore.data)){
    state = detailStore.data.item.id === item.id ? "active" : ""
  }
  let vote = voteStore.votes.filter(el =>{
    return el.id === item.id
  })
  let isVote
  if (vote.length > 0){
    voteCount = vote[0].totalVote
    isVote = vote[0].isVoted
  }
  dataStore.tweets.forEach((el) =>{
    if (el.id === item.id){
      commentCount = el.totalComment
    }
  })
  if (commentCount > 0){
    state += " hasComment"
  }
  if (isVote > 0 || voteCount > 0){
    state += " hasVote"
  }
  if (item.news !== null){
    if (item.news.lang === "all"){
      if (dataStore.lang === "en"){
        title = item.news.title_en
      }
    }
  }
  return (
    <div className={`card card-post ${state}`}>

      {mediaUri !== null ?
        <div className={`card-media`}>
          <div className={`card-media-img`}>
            <img layout='fill' className={`card-img`} src={mediaUri} alt={title}/>
          </div>
        </div>
        :
        <div className="card-media-blank">
          <img layout='fill' className="logo--img" src="/images/rada.svg" alt="no image" />
        </div>
      }

      <div className={`card-body`}>

        <div className={`card-title`}>
          <div className="card-link group" href={"/"}>
            {dataStore.type !== "rada" ? 
            <span className="badge badge-rada">RADA</span> 
            : ""}
            <span className="text-color-title mr-2">{title}</span>
          </div>
        </div>

        <div className="metadata-wrapper justify-between mt-1">

          <div className="flex flex-shrink-0">
            <div className="metadata metadata-source">
              <span className="icon icon-rada w-3.5 mr-1">
                <img layout='fill' src="/images/rada-mono.svg" alt="RADA NETWORK" />
              </span>
              <span className="metadata-value" title={source}>{source}</span>
            </div>
            <div className="metadata metadata-date">
              <span className="metadata-value" title={dateTitle}>{date}</span>
            </div>
          </div>

          <div className="flex flex-shrink-0 metadata-wrapper_nodivide">
            <div className="metadata metadata-commentcount">
              <span className="icon mr-1">
                <i className="fa fa-comment" />
              </span>
              <span className="">{commentCount}</span>
            </div>
            <div className="metadata metadata-votecount">
              <span className="icon mr-1">
                <i className="fa fa-arrow-up" />
              </span>
              <span>{voteCount}</span>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
})