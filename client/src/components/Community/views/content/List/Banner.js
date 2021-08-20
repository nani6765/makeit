import React from 'react'
import { BannerImg } from '../../../css/CommunityListCSS';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function Banner() {
    return (
        <>
        <img css={BannerImg} src="/img/CommunityBanner.png" alt="CommunityBanner" />            
        </>
    )
}

export default Banner
