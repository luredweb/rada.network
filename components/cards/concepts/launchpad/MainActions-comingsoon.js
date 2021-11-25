import ProjectTimeline from "../../../concepts/steps/projectTimeline";
import CountDownLg from "../../../concepts/timers/countdownLg-whitelist";

const MainActions = ({}) => {
  return (
    <>
      <div className="card-default project-main-actions no-padding overflow-hidden">

        <div className="card-header text-center sr-only">
          <h3>Public Sale</h3>
        </div>

        <div className="card-body no-padding">

          <div className="flex flex-col">

            <div className="">
              <ProjectTimeline step="1" />
            </div>

            <div className="global-padding-lg min-h-full bg-white dark:bg-gray-800 relative z-10">
              <div className="">
                <h3 class="text-4xl text-center mt-4 mb-4 font-normal">
                  <span className="text-gray-700 dark:text-white font-semibold">Coming Soon</span>
                </h3>
                <div className="max-w-md mx-auto">
                  <p class="text-sm text-center mt-4 leading-7">
                    Follow @rada_network, subscribe to our official <a className="link" target="_blank" rel="nofollow" href="https://t.me/radanetwork">Telegram channel</a> and <a className="link" target="_blank" rel="nofollow" href="t.me/radadao">Rada Community</a> to be notified.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-8 max-w-xl justify-evenly mx-auto">
                <div className="w-full md:w-1/2 p-4 my-2 md:m-2 bg-primary-700 dark:bg-primary-700 text-white rounded-lg flex items-center cursor-pointer">
                  <span className="icon text-xl opacity-70 w-10 h-10 !flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-full flex-shrink-0 mr-4 shadow">
                    <i class="fa-duotone fa-hand-holding-heart"></i>
                  </span>
                  <div>
                    <p className="mb-1 opacity-80">Get more RIR with Share2Earn</p>
                    <a href="/launchverse/parallel/share2earn" class="group text-white">
                      <span class="text-sm">Joint now</span>
                      <span class="icon text-xs relative left-1 group-hover:left-2 transition-all"><i class="fas fa-angle-right"></i></span>
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-1/2 p-4 my-2 md:m-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex cursor-pointer">
                  <span className="icon text-xl opacity-70 w-10 h-10 !flex items-center justify-center bg-white dark:bg-gray-900 rounded-full flex-shrink-0 mr-4 shadow">
                    <i class="fad fa-info"></i>
                  </span>
                  <div>
                    <p className="mb-1 opacity-80">Joint the launchverse is really simple</p>
                    <a href="/launchverse/parallel/share2earn" class="group">
                      <span class="text-sm">Learn more</span>
                      <span class="icon text-xs relative left-1 group-hover:left-2 transition-all"><i class="fas fa-angle-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
            
        </div>

      </div>
    </>
  );
}

export default MainActions