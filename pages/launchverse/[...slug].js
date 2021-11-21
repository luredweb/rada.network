import { Layout } from "@components/page-layouts/Global";
import { observer } from "mobx-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {utils} from "ethers"

import { getProject } from "@data/query/projects"
import { usePageStore } from "@lib/usePageStore"
import ProjectItem from "@components/project/Item/Index";
import { WalletProfile } from "../../components/Wallet";
import useActiveWeb3React from "../../utils/hooks/useActiveWeb3React";
import useStore from "@lib/useStore"
import { useLaunchpadContract } from "../../utils/hooks/useContracts";
import myUtils from "@lib/util";
import { useRouter } from "next/router";

export default function ProjectPage({ slug, project, locale }) {
  const { dataStore } = usePageStore()
  const { locales, asPath } = useRouter();

  dataStore.page = "launchverse"
  dataStore.lang = locale
  const page = slug.length > 1 ? slug[1] : 'index'
  
  const meta = myUtils.createSiteMetadata(
    {
      page: "ProjectDetail",
      subPage : page,
      dataStore: dataStore,
      data: project,
    },
    locales,
    asPath
  );
  
  /* Dragger to resize main col */  
  const containerRef = useRef()
  return (
    <Layout extraClass="glassmorphism" meta={meta}>

      <div className={`pane-content`} ref={containerRef} >
        <ProjectItem project={project} slug={slug} page={page} />
      </div>
    </Layout>
  )
}


export async function getStaticPaths() {
  return {
    paths: [
    ],
    fallback: 'blocking',
  }
}


export async function getStaticProps(context) {
  let project = await getProject({ slug: context.params.slug[0], lang: context.locale })
  if (Object.keys(project).length === 0) {
    return {
      notFound: true
    }
  }
  let props = {
    locale: context.locale,
    slug: context.params.slug,
    project: await getProject({ slug: context.params.slug[0], lang: context.locale })
  }
  props = Object.assign(props, {
    ...await serverSideTranslations(context.locale, ['common', 'navbar', 'invest','launchpad','share2earn']),
  })
  return {
    props,
    revalidate: 60
  }
}