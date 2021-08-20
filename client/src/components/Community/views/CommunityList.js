import React from 'react'
import Banner from './content/List/Banner'
import GNB from './content/List/GNB'

import { CommunityHeader } from '../css/CommunityListCSS'

function CommunityList() {
    return (
        <>
          {/*
          1. 배너
          2. GNB
          3. 카테고리 제목 + Sort
          4. 게시글 목록
          5. Idx
          6. 검색폼
          */}
          <CommunityHeader>
            <Banner/>
            <GNB/>
          </CommunityHeader>
        </>
    )
}

export default CommunityList
