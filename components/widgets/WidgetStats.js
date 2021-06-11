import Link from "next/link"

import styles from '../../styles/modules/Widget.module.css'
import stylesStats from '../../styles/modules/Widget.stats.module.css'

import ReactTooltip from 'react-tooltip'

export const WidgetStats = ({title, widgetIcon, widgetIconColor}) => {
  return (

    <div className={`${styles.widget}`}>

      { title &&
      <div className={`${styles.widget_header}`}>
        <div className={`${styles.widget_title}`}>{title}</div>
        <span className={`${styles.widget_icon}`}>
          <i className={`fad fa-${widgetIcon || ''} text-${widgetIconColor || 'gray-400'} ${styles.widget_icon_fa}`}/>
        </span>
      </div> }

      <div className={`${stylesStats.body}`}>

        <div className={`${styles.widget_list_sm}`}>

          <div className={`group ${styles.widget_list_sm__item}`}>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Blocks</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>5,836,414</span>
              </div>
            </div>
          </div>

          <div className={`group ${styles.widget_list_sm__item}`}>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Transactions</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>8,760,241</span>
              </div>
            </div>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="Transactions Amount">Amount</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>10,531,106,458,046</span>
                <span className={`${stylesStats.currency}`}>
                  <svg width="1em" height="1em" viewBox="0 0 37.042 44.185" xmlns="http://www.w3.org/2000/svg" data-svg="ada"><g transform="translate(0 -252.81)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3.9688"><path d="m2.0126 279.93h33.016"></path><path d="m3.1099 294.84 15.411-40.045 15.789 40.191" stroke-linejoin="round"></path><path d="m5.7168 272h25.608"></path></g></svg>
                </span>
              </div>
            </div>
          </div>

          <div className={`group ${styles.widget_list_sm__item}`}>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Staking Pools</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>2,576</span>
              </div>
            </div>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Total Stake</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>23,028,019,601</span>
                <span className={`${stylesStats.currency}`}>
                  <svg width="1em" height="1em" viewBox="0 0 37.042 44.185" xmlns="http://www.w3.org/2000/svg" data-svg="ada"><g transform="translate(0 -252.81)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3.9688"><path d="m2.0126 279.93h33.016"></path><path d="m3.1099 294.84 15.411-40.045 15.789 40.191" stroke-linejoin="round"></path><path d="m5.7168 272h25.608"></path></g></svg>
                </span>
              </div>
            </div>
          </div>

          <div className={`group ${styles.widget_list_sm__item}`}>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Delegators</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>631,472</span>
              </div>
            </div>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Total Rewards</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>839,164,436</span>
                <span className={`${stylesStats.currency}`}>
                  <svg width="1em" height="1em" viewBox="0 0 37.042 44.185" xmlns="http://www.w3.org/2000/svg" data-svg="ada"><g transform="translate(0 -252.81)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3.9688"><path d="m2.0126 279.93h33.016"></path><path d="m3.1099 294.84 15.411-40.045 15.789 40.191" stroke-linejoin="round"></path><path d="m5.7168 272h25.608"></path></g></svg>
                </span>
              </div>
            </div>
          </div>


          <div className={`group ${styles.widget_list_sm__item}`}>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Accounts</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>1,098,824</span>
              </div>
            </div>
          </div>

          <div className={`group ${styles.widget_list_sm__item}`}>
            <div className={`${stylesStats.stat}`}>
              <div className={`${stylesStats.title}`}>
                <span title="">Nondelegated Tokens</span>
              </div>
              <div className={`${stylesStats.value}`}>
                <span>8,771,086,790</span>
                <span className={`${stylesStats.currency}`}>
                  <svg width="1em" height="1em" viewBox="0 0 37.042 44.185" xmlns="http://www.w3.org/2000/svg" data-svg="ada"><g transform="translate(0 -252.81)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3.9688"><path d="m2.0126 279.93h33.016"></path><path d="m3.1099 294.84 15.411-40.045 15.789 40.191" stroke-linejoin="round"></path><path d="m5.7168 272h25.608"></path></g></svg>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className={`${styles.widget_footer}`}>

      </div>

    </div>

  );
};