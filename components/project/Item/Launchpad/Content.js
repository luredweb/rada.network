import Link from "next/link";
import { usePageStore } from "@lib/usePageStore"
import { useLaunchpadContract } from "@utils/hooks/useContracts";
import { useState,useEffect } from "react";

export default function LaunchpadContent({ project }) {
    const { dataStore } = usePageStore()
    const [launchpadInfo,setLauchpadInfo] = useState({})
    if (!!project.swap_contract){
        const launchpadContract = useLaunchpadContract(project.swap_contract)
        useEffect(() => {
            //get contract info

        },[launchpadContract])
    }
    else{
        setLauchpadInfo({})
    }
    
    //console.log(launchpadContract)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card card-default project-brief">
                <div className="card-header">
                    <h3>Launchverse Overview</h3>
                </div>
                <div className="card-body flex flex-col">
                    <ul className="mb-0 mt-auto flex-shrink-0 flex-grow">
                        <li className="list-pair mb-2">
                            <span className="list-key">
                                Raise
                            </span>
                            <span className="ml-auto list-value font-semibold">
                                {launchpadInfo?.raise || "n/a"} USDT
                            </span>
                        </li>
                        <li className="list-pair mb-2">
                            <span className="list-key">
                                Participants
                            </span>
                            <span className="ml-auto list-value font-semibold">
                            {launchpadInfo?.participants || "n/a"} 
                            </span>
                        </li>
                        <li className="list-pair mb-2">
                            <span className="list-key">
                                Token Price
                            </span>
                            <span className="ml-auto font-semibold">{launchpadInfo?.tokenPrice || "n/a"} USDT </span>
                        </li>
                        <li className="list-pair mb-2">
                            <span className="list-key">
                                Progress
                            </span>
                            <span className="list-value ml-auto">
                                <span className="font-semibold">{launchpadInfo?.tokensAllocated || "n/a"}</span>
                                <span className="opacity-70">/{launchpadInfo?.tokensForSale || "n/a"}</span> {project?.token.symbol}
                            </span>
                        </li>
                    </ul>
                    <div className="progress-bar mt-3 bg-gray-300 dark:bg-gray-600 w-full h-5 rounded-full">
                        <div className="text-2xs font-semibold  flex px-2 text-white items-center progress-bar--percentage h-5 bg-green-600 rounded-full" style={{ width: `72%` }}>72%</div>
                    </div>
                </div>
            </div>
            {/* end of project-brief */}

            <div className="card card-default project-process">
                <div className="card-header">
                    <h3>{project?.token.name}'s Info</h3>
                </div>
                <div className="card-body">
                    <div className="" dangerouslySetInnerHTML={{ __html: project.content?.description }}></div>
                    <p className="mt-auto pt-4">
                        <Link href={`/${dataStore.lang}/projects/${project.slug}/research`}>
                            <a className="link">Read full research</a>
                        </Link>
                    </p>
                </div>

            </div>

        </div>
    )
}