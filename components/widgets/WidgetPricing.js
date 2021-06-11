import styles from '../../styles/modules/Widget.module.css'
import stylesPricing from '../../styles/modules/Widget.pricing.module.css'

export const WidgetPricing = ({title, text, footer, projectPlatformShort}) => {
  return (

    <div className={`group ${styles.widget}`}>
      { title &&
      <div className={`${styles.widget_header}`}>
        <div className={`${styles.widget_title}`}>{title}</div>
        <span className={`${styles.widget_icon}`}>
          <i className={`cf cf-${projectPlatformShort || 'btc'} ${styles.widget_icon_cf}`}/>
        </span>
      </div> }
      { text &&
      <div className={`${styles.widget_body}`}>

        <div className={`${stylesPricing.title}`}>Cardano Price (ADA)</div>

        <div className={`${stylesPricing.pricing}`}>
          <div className={`${stylesPricing.value}`}>$1.58</div>
          <div className={`${stylesPricing.indicator}`} type="price-up">
            <span className={`${stylesPricing.sb__up}`}>+</span>0.45%
          </div>
          {/* <div className={`${stylesPricing.indicator}`} type="price-down">
            <span className={`${stylesPricing.sb__down}`}>-</span>0.45%
          </div> */}
        </div>

        {/* Pricing Chart */}
        <div className={`${stylesPricing.chart}`}>
          
        </div>


      </div> }
      { footer &&
      <div className={`${styles.widget_footer}`}>
        <div className={`${styles.widget_text}`}>{footer}</div>
      </div> }
    </div>

  );
};